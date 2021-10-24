import React from "react";

export default function SearchBar({handleSubmit}){

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Search' ></input>
            <button type='submit'>Search</button> {/* button */}
            </form>
        </div>
    )
}