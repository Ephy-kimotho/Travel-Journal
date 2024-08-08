/* eslint-disable react/prop-types */
import GoogleMapIcon from "../assets/Logos/GoogleMapLogo.png";

function Place({
  title,
  location,
  googleMapsUrl,
  startDate,
  endDate,
  description,
  imageURL,
}) {
  return (
    <section className="place">
      <a href={googleMapsUrl} target="_blank">
        <img src={imageURL} alt={title} className="place--image" />
      </a>

      <div className="place--info">
        <div className="location-info-container">
          <img
            src={GoogleMapIcon}
            alt="Google maps Icon"
            className="google-map-icon"
          />
          <span className="place--location dark-blue">{location}</span>
          <a className="google-map-url" href={googleMapsUrl} target="_blank">
            View on Google Maps
          </a>
        </div>

        <h1 className="place--title dark-blue">{title}</h1>
        <h2 className="visiting--dates dark-blue">
          {startDate} - {endDate}
        </h2>
        <p className="place--description dark-blue">{description}</p>
      </div>
    </section>
  );
}

export default Place;
