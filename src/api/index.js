//http://api.musixmatch.com/ws/1.1/chart.tracks.get?hot&page=1&page_size=10&country=it&f_has_lyrics=1

export const getTopTracks = () => {
  return fetch(
    "http://api.musixmatch.com/ws/1.1/chart.tracks.get?apikey=a378662ebca7fe6e2eeec433bf0f805b&hot&page=1&page_size=10&country=us&f_has_lyrics=1"
  )
    .then((response) => response.json())
    .then((data) => data.message.body.track_list);
};

export const getTrackInfo = (id) => {
  return fetch(
    `http://api.musixmatch.com/ws/1.1/track.get?apikey=a378662ebca7fe6e2eeec433bf0f805b&commontrack_id=${id}`
  )
    .then((response) => response.json())
    .then((data) => data.message.body.track);
};

// track.lyrics.get?track_id=15953433
export const getTrackLyrics = (id) => {
  return fetch(
    `http://api.musixmatch.com/ws/1.1/track.lyrics.get?apikey=a378662ebca7fe6e2eeec433bf0f805b&commontrack_id=${id}`
  )
    .then((response) => response.json())
    .then((data) => {
      return data.message.body.lyrics;
    });
};
