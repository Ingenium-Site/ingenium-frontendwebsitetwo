import React from "react";

const MapsSection = () => {
  return (
    <div className="section pt-0">
        <div className="hero-container">
            <iframe
            loading="lazy"
            className="maps overflow-hidden"
            src="https://www.google.com/maps?ll=5.612832,-0.203421&z=15&t=m&hl=en-US&gl=US&mapclient=embed&cid=15581004579820986434"
            title="INGENIUM Office Location"
            aria-label="INGENIUM Office Location" 
            ></iframe>
        </div>
    </div>
  );
};

export default MapsSection;
