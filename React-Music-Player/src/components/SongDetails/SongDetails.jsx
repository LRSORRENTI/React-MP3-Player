const SongDetails = ({ title, artist }) => {
    return (
      <div id="song-details">
        <h1 className="song-title">{title}</h1>
        <span className="artist">{artist}</span>
      </div>
    );
  };
  
  export default SongDetails;