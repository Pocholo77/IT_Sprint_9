import "./App.css";
import React, { useEffect, useState } from "react";
import Youtube from "./api/Youtube";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
 
import Header from "./components/Header/Header";
import Search from "./pages/Search/Search";
import Home from "./pages/Home/Home";
import Main from "./components/Main/Main";
import VideoDetail from "./components/VideoDetail/VideoDetail";
// channelId: UCS5QCj182uoBgpVLDckbL3g

export default function App() {
   
  const [state, setState] = useState({
    videos: [],
    selectedVideo: null,
    favourites: JSON.parse(localStorage.getItem("favouritesVids")) || [],
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

  //«handleSubmit» i «handleVideoSelect»:
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

    /* history.push("/detail") */
    //console.log(state.videos)
    /*  console.log(history); */
  }

  function handleFavourite(id) {
    /* console.log(id) */
    setState((prev) => {
      if (prev.favourites.find((vid) => vid === id)) {
        const restFavourites = prev.favourites.filter((vid) => vid !== id);
        localStorage.setItem("favouriteVids", JSON.stringify(restFavourites));
        return {
          ...prev,
          favourites: restFavourites,
        };
      } else {
        const favVideo = [...prev.favourites, id];
        localStorage.setItem("favouriteVids", JSON.stringify(favVideo));
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
            path="/detail"
            render={(props) => {
              return (
/*                 <VideoDetail
                item={state.selectedVideo}
                handleFavourite={handleFavourite}
                favourites={state.favourites}
              /> */
                <Main
                  selectedVideo={state.selectedVideo}
                  handleFavourite={handleFavourite}
                  favourites={state.favourites}
                />
              );
            }}
          ></Route>
          <Route path="/search">
            <Search
              videos={state.videos}
              handleVideoSelect={handleVideoSelect}
              favourites={state.favourites}
              handleFavourite={handleFavourite}
            />
          </Route>
          <Route exact path="/">
            {/* render(()=>{}) */}
            <Home
              videos={state.videos  }
              handleVideoSelect={handleVideoSelect}
              favourites={state.favourites}
              handleFavourite={handleFavourite}
            />
          </Route>
        </Switch>
      </Router>
      {/*       
      <div className="app__body">

        <Aside
          videos={state.videos}
          handleVideoSelect={handleVideoSelect}
          favourites={state.favourites}
          handleFavourite={handleFavourite}
        />
      </div> */}
    </div>
  );
}
