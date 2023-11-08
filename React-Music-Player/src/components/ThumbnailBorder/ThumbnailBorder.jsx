import './ThumbnailBorder.css';

const ThumbnailBorder = ({ imageSrc, altText }) => {
    return (
      <div className="thumbnail-border">
        <img src={imageSrc} alt={altText} className="song-thumbnail" />
      </div>
    );
};

export default ThumbnailBorder;
