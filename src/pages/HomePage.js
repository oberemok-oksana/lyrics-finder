import { useQuery } from "@tanstack/react-query";
import { useHistory } from "react-router-dom";
import { getTopTracks } from "../api";
import Card from "../components/Card";

const HomePage = () => {
  const { data: topTracks, isLoading } = useQuery(["topTracks"], getTopTracks);
  const history = useHistory();

  // const showLyrics = (id) => {
  //   history.push(`/lyrics/${id}`);
  // };

  return (
    <div className="container">
      <header className="header">
        <div className="main-title">
          <img src="/images/notes.png" alt="musical notes" />
          <h1>Search For A Song</h1>
        </div>
        <h3>Get the lyrics for any track</h3>
        <form action="#" className="header-form">
          <input
            type="text"
            placeholder="Song title..."
            name="song-title"
            className="header-form__input"
          />
          <button className="header-form__btn">Get Track Lyrics</button>
        </form>
      </header>
      <main className="main">
        <h3> Top 10 Tracks</h3>
        <ul className="cards">
          {isLoading && <p>Loading...</p>}
          {!isLoading &&
            topTracks.map((item) => {
              return (
                <Card
                  artist={item.track.artist_name}
                  key={item.track.track_id}
                  track={item.track.track_name}
                  album={item.track.album_name}
                  id={item.track.commontrack_id}
                />
              );
            })}
        </ul>
      </main>
    </div>
  );
};

export default HomePage;
