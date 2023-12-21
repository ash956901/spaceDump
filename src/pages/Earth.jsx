import { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";
import Danger from "../components/Danger"
import Map from "../components/map";
import Spinner from "../components/Spinner";

const EPIC_URL =`https://api.nasa.gov/EPIC/api/natural/images`;
const api_key=`roCADWsb0gCLaFAJYRyVkHXqV6XZIcQE1vzorvIB`;

export default function Earth(){

  let earth="";
  let date=[];
  

  //Date evaluation
  let astDate=new Date().toLocaleDateString();
  console.log(astDate);
  let arr=astDate.split("/");
  let month=arr[0];
  let day=arr[1];
  let year=arr[2];
  let astFullDate= year + "-" + month + "-" + day;
  console.log(astFullDate);

  //state Variables
  const[url,setUrl]=useState("");
  const [asteroid,setAsteroid]=useState({});
  const[loading1,setLoading1]=useState(false);
  const[loading2,setLoading2]=useState(true);
  const [count,setCount]=useState(0);

  async function fetchAsteroids(){
    setLoading2(true);
    try{
      const response=await fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${astFullDate}&end_date=${astFullDate}&api_key=${api_key}`);
      const data=await response.json();
      setCount(data.element_count);
      setAsteroid(data.near_earth_objects[`${astFullDate}`]);
     
     
    }
    catch(err){
      setAsteroid({});
      console.log("Error while fetching the near earth objects");
    }
    setLoading2(false);
   
  }

  async function fetchEarth(){
    setLoading1(true);
    try{
      const response=await fetch(EPIC_URL+`?api_key=${api_key}`);
      const data= await response.json();
      earth=data[0].image;
      const dateTime=data[0].date;
      date=dateTime.split(" ")[0].split("-");
      const res=await fetch(`https://api.nasa.gov/EPIC/archive/natural/${date[0]}/${date[1]}/${date[2]}/png/${earth}.png?api_key=${api_key}`);
      setUrl(res.url);
    }
    catch(error){   
      console.log("error while api call");
    }
    setLoading1(false);
  }


  useEffect(()=>{
    fetchEarth();
    fetchAsteroids();
    
  },[])

  console.log(asteroid);

  const downloadFile = (
    fileName = 'Earth-latest-image.png',
  ) => {
    fetch(`${url}`, {
      method: 'GET',
    })
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));

        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;

        document.body.appendChild(link);

        link.click();

        link.parentNode.removeChild(link);
      });
  };

  return(
    <div  className="h-full w-[100vw] ">
    
    
    <div className="bg-black flex flex-col items-center h-auto
       text-white w-10/12 mx-auto mt-10 gap-10 rounded-3xl py-10 font-poppins
       font-bold">
          <p className="sm:text-4xl text-3xl px-2">Our Sweet Home</p>
          {
            loading1?(<Spinner/>):
            (
             <div className="w-10/12">
              <img loading="lazy" alt="earth" src={url} className="rounded-3xl"/>
            </div>
            )
          }
         
          <button onClick={()=>downloadFile()} className="flex flex-row gap-2 px-8 py-4 items-center 
          justify-center bg-yellow-400 hover:bg-yellow-300 
          text-black rounded-xl transition-all duration-200 ease-in">
            Download 
            <FaDownload/>
          </button>

        
          
        </div>
      

      <div className="bg-burger flex flex-col items-center h-auto
      text-white w-10/12 mx-auto mt-10 gap-10 rounded-3xl py-10 font-poppins
      font-bold">
        <p className="px-4 sm:text-4xl text-3xl">Search Your Place</p>
    
        <div className=" w-10/12">
          <Map />
        </div>      
      </div>

      <div className="bg-black flex flex-col items-center h-auto
       text-white w-10/12 mx-auto mt-10 gap-4 rounded-3xl py-10 font-poppins
       font-bold">
        <div>
          <p className="sm:text-4xl text-2xl px-2">Near Earth Objects</p>
         <div className="h-1 mx-auto mt-2 w-2/12 sm:w-3/12 hidden sm:block bg-green-600"></div>
        </div>

        <p className="text-center text-lg  md:text-2xl">Total Count : {`${count}`}</p>
        <div className="w-8/12 mt-4 sm:mt-0 bg-green-600 h-1 "></div>
        {
            loading2?(<Spinner/>):
            (
              asteroid.map((ast)=>(<Danger key={ast.id} ast={ast} />))
            )
        }
    
        </div>


    </div>
  );
}
