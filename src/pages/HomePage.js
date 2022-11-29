import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { findTrack, getTopTracks } from "../api";
import Card from "../components/Card";

const HomePage = () => {
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");
  const { data: topTracks, isLoading } = useQuery(["topTracks"], getTopTracks);
  const { data: searchTracks, isInitialLoading: searchTrackIsLoading } =
    useQuery(["searchTrack", search], () => findTrack(search), {
      select: (data) => {
        return data.slice(0, 9);
      },
      enabled: !!search,
    });

  const changeSearchText = (e) => {
    setSearchText(e.target.value);
  };

  if (isLoading || searchTrackIsLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <header className="header">
        <div className="main-title">
          <img src="/images/notes.png" alt="musical notes" />
          <h1>Search For A Song</h1>
        </div>
        <h3>Get the lyrics for any track</h3>
        <form
          action="#"
          className="header-form"
          onSubmit={(e) => {
            e.preventDefault();
            setSearch(searchText);
          }}
        >
          <input
            type="text"
            placeholder="Song title..."
            name="song-title"
            className="header-form__input"
            value={searchText}
            onChange={changeSearchText}
          />
          <button className="header-form__btn">Get Track Lyrics</button>
        </form>
      </header>
      <main className="main">
        <h3> Top 10 Tracks</h3>
        <ul className="cards">
          {!search
            ? topTracks.map((item) => {
                return (
                  <Card
                    artist={item.track.artist_name}
                    key={item.track.track_id}
                    track={item.track.track_name}
                    album={item.track.album_name}
                    id={item.track.commontrack_id}
                  />
                );
              })
            : searchTracks.map((item) => (
                <Card
                  artist={item.track.artist_name}
                  key={item.track.track_id}
                  track={item.track.track_name}
                  album={item.track.album_name}
                  id={item.track.commontrack_id}
                />
              ))}
        </ul>
      </main>
    </div>
  );
};

export default HomePage;
