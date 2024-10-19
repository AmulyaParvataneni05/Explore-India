import "./Hover.css";


function Hover1({ imageSrc, title, location}) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={imageSrc} alt={title} style={{ width: '300px', height: '300px' }} />
        </div>
        <div className="flip-card-back">
          <h1 className="title text-decoration-underline">{title}</h1>
          <h2 className="location">{location}</h2>
        </div>
      </div>
    </div>
  );
}


export default Hover1;