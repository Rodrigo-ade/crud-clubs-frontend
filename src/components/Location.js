import React from "react";

function Location(props) {
  return (
    <div className="location">
      <iframe className="map" title="Emirates%20Stadium" src={`http://maps.google.com/maps?q=${props.venue}%20${props.address}&z=15&output=embed`} width="90%" height="350" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
    </div>
  );
}

export default Location;
