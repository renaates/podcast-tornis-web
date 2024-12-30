import "./Episode.css";

export const Episode = ({ image, number, title, description, spotify, youtube }) => {
  return (
    <div className="episode-item">
      <div className="wrapper">
        <div>
          <img className="rubric-image rubric-image-animation" src={image} />
          <p className="number">{number}</p>
        </div>
        <div className="title-container">
          <h3 className="title">{title}</h3>
        </div>
        <div className="episode-description">{description}</div>
      </div>

      <div className="social-media-container">
      {spotify && (
          <a href={spotify} target="_blank" rel="noopener noreferrer">
            <img src="../images/social-media/spotify-ep.svg" className="social-media spotify" />
          </a>
        )}
        {youtube && (
          <a href={youtube} target="_blank" rel="noopener noreferrer">
            <img src="../images/social-media/youtube-ep.svg" className="social-media youtube" />
          </a>
        )}
      </div>
    </div>
  );
};
