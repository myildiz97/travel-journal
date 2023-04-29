export default function Section(props) {
  return (
    <section className="main-section">
      <div className="section">
        <img src={props.imageUrl} alt={`${props.title}--img`} />
        <div className="info">
          <div className="map">
            <img src="https://i.hizliresim.com/2hep1z2.png" alt="loc-img" />
            <span>{props.location}</span>
            <span>
              <a href={props.googleMapsUrl} rel="noreferrer">
                View on Google Maps
              </a>
            </span>
          </div>
          <div className="journal-info">
            <h1>{props.title}</h1>
            <h3>{`${props.startDate} - ${props.endDate}`}</h3>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
