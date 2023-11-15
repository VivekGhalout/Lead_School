import React, { useEffect } from 'react';

const Output = ({data}) => {
  return (
    <div style={{boxShadow:"0 0 10px black",padding:"100px 10px",marginTop:"50px", backgroundImage:"linear-gradient(to right, red , yellow)"}}>
      {data && (
        <div>
          <h3>Place Name: {data["place name"]}</h3>
          <h3 style={{padding:"20px 0px"}}>State: {data.state}</h3>
          <h3>Longitude: {data.longitude}</h3>
          <h3 style={{padding:"20px 0px"}}>Latitude: {data.latitude}</h3> 
        </div>
      )}
    </div>
  );
};

export { Output };
