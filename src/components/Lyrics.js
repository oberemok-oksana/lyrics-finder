import { useQuery } from "@tanstack/react-query";
import { useHistory, useParams } from "react-router-dom";
import { getTrackInfo, getTrackLyrics } from "../api";

const Lyrics = (props) => {
  const history = useHistory();
  const params = useParams();
  console.log(params.trackId);

  const { data, isLoading } = useQuery(["track"], () =>
    getTrackInfo(params.trackId)
  );
  const { data: lyrics, isLoading: lyricsIsLoading } = useQuery(
    ["trackLyrics"],
    () => getTrackLyrics(params.trackId)
  );

  if (isLoading || lyricsIsLoading) {
    return <p>Loading...</p>;
  }

  const genre =
    data.primary_genres.music_genre_list[0].music_genre.music_genre_name || "";
  console.log(lyrics);

  return (
    <div className="container">
      <div className="lyrics-card">
        <button
          className="lyrics-card__btn card__btn"
          onClick={() => history.push("/")}
        >
          Go back
        </button>
        <div className="lyrics__text">
          <div className="name-wrapper">
            <span className="bold-text">{data.track_name} By </span>
            <span className="lyrics-artist">{data.artist_name}</span>
          </div>
          <p>{lyrics.lyrics_body}</p>
        </div>
        <div className="lyrics-description">
          <div className="track-description">
            <span className="bold-text">Song Genre:</span> {genre}
          </div>
          <div className="track-description">
            <span className="bold-text">Explicit Words: </span>{" "}
            {lyrics.explicit}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lyrics;
