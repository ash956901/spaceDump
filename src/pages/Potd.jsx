import React from "react";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import "../App.css";
const api_key=`roCADWsb0gCLaFAJYRyVkHXqV6XZIcQE1vzorvIB`;


export default function Potd(){
  const [video,setVideo]=useState(false);
  const [potd,setPotd]=useState([]);
  const [loading,setLoading]=useState(false);

  async function fetchData(){
    setLoading(true);
    try{
      const response=await fetch(`https://api.nasa.gov/planetary/apod?api_key=${api_key}`);
      const data=await response.json();
      if(data.media_type==="video"){
        setVideo(true);
      }
      else{
        setVideo(false);
      }
      setPotd(data);
      console.log(data);
    }
    catch(error){
        console.log(error);
        throw new Error("Error in fetching image/video");
    }
    setLoading(false);
  }


  useEffect(()=>{
    fetchData();
  },[]);

  return(
    <div className="bg-black flex flex-col gap-10 bg-cover h-auto min-h-screen font-poppins text-white  w-full">

        <div className="w-10/12 mt-8 mx-auto">
          <p className="text-5xl sm:text-6xl text-center font-bold potd-header ">ASTRONOMY</p>
          <p className="text-lg sm:text-xl text-center font-bold ">PICK OF THE DAY</p>
          <div className="bg-green-600 h-1 w-2/12 mx-auto "></div>
        </div>
        <div className="w-10/12 relative flex flex-col gap-10 justify-center items-center mx-auto">
        
        <p className="text-4xl sm:text-6xl text-center font-bold ">{potd.title}</p>
        {
          loading?
          (<Spinner/>):
          (
            video?
            (
              <ReactPlayer
              url={potd?.url}
              controls={true}
              
              
              />
            ):
            (<img alt="picoftheday" className="rounded-xl  w-3/4"  src={potd.url}/>)
          )
        }

        <p className="font-poppins text-center text-lg mb-8">{potd.explanation}</p>

      </div>  
    </div>
  );
}
