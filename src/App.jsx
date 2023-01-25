import axios from "axios";
import React, { useEffect, useState } from "react";

import Cinema from "./components/Cinema";
import Popular from "./components/Popular";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const API_IMG = "https://image.tmdb.org/t/p/w500/";
const API_URL_POPULAR =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=796c4de4e6f6a1acdada4f13bf87bef9&language=tr-tur&page=2";
  
const API_URL_CINEMA =
  "https://api.themoviedb.org/3/movie/popular?api_key=796c4de4e6f6a1acdada4f13bf87bef9&language=tr-tur&page=5";



function App() {
  const [data, setData] = useState([]);
  const [popular, setPopular] = useState([]);
  const [cinema, setCinema] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState([]);

  useEffect(() => {
    (async () => {
      if (search === "") {
        const res = await axios.get(
          "https://api.themoviedb.org/3/movie/top_rated?api_key=796c4de4e6f6a1acdada4f13bf87bef9&language=tr-tur&page=4"
        );
        setData(res.data.results);
      } else {
        const res = await axios.get(
          `
         https://api.themoviedb.org/3/search/movie?api_key=796c4de4e6f6a1acdada4f13bf87bef9&language=tr-tur&query=${search}}&page=1&include_adult=false
         `
        );
        setData(res.data.results);
      }
    })();
  }, [search]);

  useEffect(() => {
    (async () => {
      const res = await axios.get(API_URL_POPULAR);
      setPopular(res.data.results);
      console.log(popular);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const res = await axios.get(API_URL_CINEMA);
      setCinema(res.data.results);
      console.log(cinema);
    })();
  }, []);



  return (
    <>
      <Navbar />

      <div className="wra text-center py-6">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
          className="text-black h-11 rounded-2xl w-64 pl-6"
        />
      </div>

      <Search data={data} API_IMG={API_IMG} />

      <Popular popular={popular} API_IMG={API_IMG} />

      <Cinema cinema={cinema} API_IMG={API_IMG} />

      <Footer />
    </>
  );
}

export default App;
