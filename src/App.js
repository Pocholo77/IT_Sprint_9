import "./App.css";
import React, { useEffect, useState } from "react";
import Youtube from "./api/Youtube";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DetailPage from "./pages/DetailPage/DetailPage";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import { FavouritesPage } from "./pages/FavouritesPage/FavouritesPage";
import SearchPage from "./pages/SearchPage/SearchPage";
 

export default function App() {
  const [state, setState] = useState({
    videos: [],
    selectedVideo: null,
    favourites: JSON.parse(localStorage.getItem("favourites")) || [],
    history: JSON.parse(localStorage.getItem("history")) || [],
  });

  useEffect(() => {
    (async () => {
      const responseDefault = await Youtube.get("/search", {
        params: {
          channelId: "UCS5QCj182uoBgpVLDckbL3g",
        },
      });
      setState((prev) => {
        return {
          ...prev,
          videos: responseDefault.data?.items,
        };
      });
    })();
  }, []);

 
  async function handleSubmit(e) {
    e.preventDefault();
    const value = e.target.elements[0].value;
    //console.log(e.target.elements[0].value);

    const response = await Youtube.get("/search", {
      params: {
        q: value,
      },
    });

    setState((prev) => {
      const hist = [...prev.history, value];
      localStorage.setItem("history", JSON.stringify(hist));
      return {
        ...prev,
        videos: response.data?.items,
        history: hist,
      };
    });

    //console.log(state.videos)
  }

  function handleFavourite(id) {
    /* console.log(id) */
    setState((prev) => {
      if (prev.favourites.find((vid) => vid === id)) {
        const restFavourites = prev.favourites.filter((vid) => vid !== id);
        localStorage.setItem("favourites", JSON.stringify(restFavourites));
        return {
          ...prev,
          favourites: restFavourites,
        };
      } else {
        const favVideo = [...prev.favourites, id];
        localStorage.setItem("favourites", JSON.stringify(favVideo));
        return {
          ...prev,
          favourites: favVideo,
        };
      }
    });
  }

  function handleVideoSelect(item) {
    setState((prev) => {
      return {
        ...prev,
        selectedVideo: item,
      };
    });
    /* console.log('handelVideoSelect') */
  }

  function clearHistory() {
    setState((prev) => {
      localStorage.removeItem("history");
      return {
        ...prev,
        history: [],
      };
    });
  }

  return (
    <div className="App">
      <Router>
        <Header
          handleSubmit={handleSubmit}
          history={state.history}
          clearHistory={clearHistory}
        />
        <Switch>
          <Route
            path="/detail">
                <DetailPage
                  videos={state.videos} 
                  item={state.selectedVideo}
                  handleFavourite={handleFavourite}
                  favourites={state.favourites}
                  handleVideoSelect={handleVideoSelect}
                />
              );
         </Route>
          <Route path="/favourites">
            <FavouritesPage
              /* videos={state.videos}     no hace falta*/
              handleVideoSelect={handleVideoSelect}
              favourites={state.favourites}
              handleFavourite={handleFavourite}
            />
          </Route>
          <Route path="/search">
            <SearchPage
              videos={state.videos}
              handleVideoSelect={handleVideoSelect}
              favourites={state.favourites}
              handleFavourite={handleFavourite}
            />
          </Route>
          <Route exact path="/">
            {/* render(()=>{}) */}
            <HomePage
              videos={state.videos}
              handleVideoSelect={handleVideoSelect}
              favourites={state.favourites}
              handleFavourite={handleFavourite}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
