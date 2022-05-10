import { Button, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
import "./Search.css";
import SingleCard from "./SingleCard";

function Search() {
  const [searchText, setSearchText] = useState([]);
  const [content, setContent] = useState([]);

  const fetchVideos = async () => {
    const { data } = await axios.get(
      `https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=${searchText}&numResults=40`
    );
    console.log(data);

    setContent(data.results);
  };

  useEffect(() => {
    fetchVideos();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="searchBar">
        <TextField
          className="searchBox"
          type="text"
          style={{ flex: 1 }}
          label="Search here..."
          variant="filled"
          onChange={(e) => setSearchText(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              fetchVideos();
            }
          }}
        />
        <Button
          variant="contained"
          style={{ marginLeft: 10 }}
          onClick={fetchVideos}
        >
          <SearchIcon fontSize="large" />
        </Button>
      </div>
     
      {/* <div className="videoData">
        {content &&
          content.map((c) => (
            <SingleCard
              key={c.heading}
              heading={c.heading}
              tags={c.tags}
              video={c.video}
            />
          ))}
      </div> */}
    </>
  );
}

export default Search;
