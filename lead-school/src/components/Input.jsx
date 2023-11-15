import React, { useState } from 'react';
import { Output } from './Output';
import axios from "axios";

const Input = () => {
  const [pin, setPin] = useState('');
  const [data, setData] = useState({});

  const submitPin = () => {
    try {
      axios.get(`https://api.zippopotam.us/in/${pin}`)
        .then((res) => {
          setData(res.data.places[0]);
          setPin("");
        })
        .catch((error) => {
          if (error.response && error.response.status === 404) {
            alert("Invalid Pin, Please enter a valid pin")
          } else {
            console.error(error);
          }
        });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div style={{marginTop:"50px"}}>
      <h1 className="text-center">Find your location</h1>
      <input style={{ padding: "10px 50px", borderRadius: "15px" }} type="number" placeholder="Pincode" onChange={(e) => setPin(e.target.value)} />
      <button style={{ padding: "10px", borderRadius: "15px", marginLeft: "10px" }} onClick={submitPin}>Submit</button>
      <Output data={data} />
    </div>
  );
};

export { Input };
