import "leaflet/dist/leaflet.css";
import React, { useEffect, useState } from 'react';

import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
import { IoCopy } from "react-icons/io5";

const Map = () => {

  const [la,setLat]=useState(45);
  const [lon,setLon]=useState(97);
  const [add,setAdd]=useState("");



  const handleMapClick = (e) => {
    const { lat, lng } = e.latlng;
    setLat(lat);
    setLon(lng);
    console.log(la);
    console.log(lon);
    alert(`Clicked at: ${lat}, ${lng}`);
  };

  function changeHandlerLat(event){
    setLat(event.target.value);
  }

  function changeHandlerLon(event){
    setLon(event.target.value);
  }

  async function fetchLocation(){
    try{
      const response=await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${la}&longitude=${lon}&localityLanguage=en`)
      const data=await response.json();
      const address=data.locality + "," + data.city + "," + data.countryName + "," + data.continent + ` PostCode:${data.postcode}`;
      setAdd(address);
    }
    catch(err){
      setAdd(null);
      console.log("Error while fetching address or wrong lat and lon");
      alert("Some error while fetching address,try changing lat and long(-180 to 180)")
    }
  }

  useEffect(()=>{
    fetchLocation();
  },[la,lon]);

  return (
    <>
      <form  className="w-10/12 flex flex-col mx-auto mb-10 md:flex-row gap-5 items-center justify-center">
        <label className="text-lg" htmlFor="latitude">Latitude:</label>
        <input onChange={changeHandlerLat} name="latitude" id="latitude" value={la} type="number" className="w-10/12 px-5  text-black py-4 rounded-3xl" placeholder="Enter Latitude ...." />
       
      </form>
      <form  className="w-10/12 flex flex-col mx-auto mb-10 md:flex-row gap-5 items-center justify-center">
        <label className="text-lg" htmlFor="longitude">Longitude:</label>
        <input onChange={changeHandlerLon} name="longitude" id="longitude" value={lon} type="number" className="w-10/12 px-5 text-black py-4 rounded-3xl" placeholder="Enter Longitude...." />
      </form>
       
        <MapContainer id="map" center={[la, lon]} zoom={13} style={{ height: '500px' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <MapEventsHandler handleMapClick={handleMapClick} />
        </MapContainer>
      
        <div className=" flex  justify-center mx-auto mt-10 gap-5">
        
        <button onClick={()=>{navigator.clipboard.writeText(add);}} className="flex flex-row  gap-2 px-8 py-4 items-center 
          justify-center bg-yellow-400 hover:bg-yellow-300 
          text-black rounded-xl  transition-all duration-200 ease-in">
            Copy Address 
            <IoCopy/>
          </button>
        </div>
    </> 
  );
};



const MapEventsHandler = ({ handleMapClick }) => {
  useMapEvents({
    click: (e) => handleMapClick(e),
  });
  return null;
};

export default Map;

