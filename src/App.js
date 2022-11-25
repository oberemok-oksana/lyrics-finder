import "./App.css";

function App() {
  return (
    <div className="App">
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
      </div>
    </div>
  );
}

export default App;
