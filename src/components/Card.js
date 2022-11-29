import { useHistory, useParams } from "react-router-dom";

const Card = (props) => {
  const history = useHistory();
  const params = useParams();

  const showLyrics = () => {
    history.push(`/lyrics/${props.id}`);
  };
  const cutedTrackName = props.track.slice(0, 40);
  const cutedAlbumName = props.album.slice(0, 40);

  console.log(params.trackId);

  return (
    <li className="card">
      <h3 className="card__title">{props.artist}</h3>
      <div className="card__description">
        <img src="/images/play.png" alt="play" />
        <span className="bold-text">Track: </span>
        <span> {cutedTrackName}</span>
      </div>
      <div className="card__description">
        <img src="/images/record.png" alt="record" />
        <span className="bold-text">Album: </span>

        <span> {cutedAlbumName}</span>
      </div>
      <button className="card__btn" onClick={showLyrics}>
        View Lyrics
      </button>
    </li>
  );
};

export default Card;
