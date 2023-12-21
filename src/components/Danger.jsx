



export default function Danger({ast}){

 
  let name=ast.name;
  let isHazardous=ast.is_potentially_hazardous_asteroid;
  let dateTime=ast.close_approach_data[0].close_approach_date_full;
  let arr=dateTime.split(" ");
  let day=arr[0];
  let time=arr[1];
  
  let relativeVelocity=ast.close_approach_data[0].relative_velocity.kilometers_per_second;
  let missDistance=ast.close_approach_data[0].miss_distance.astronomical;
  let url=ast.nasa_jpl_url;

  

  //Just make the card now and apply bit of tailwind , finsih in lunch and make our portfolio tomorrow
  return(
    <>
    <div className="flex w-8/12 p-4 mt-5 flex-col md:flex-row justify-between">
      {/*Left section */}
      <div className="flex-col items-start">
        <p>Name:{name}</p>
        <p>Hazardous: {
        isHazardous?(<span className="text-red-700">True</span>):(<span>False</span>)
        }
        </p>
        <p>Time: {time}</p>
      </div>
      {/*right section*/}
      <div className="flex-col items-start">
        <p>Relative Velocity: {relativeVelocity} km/s</p>
        <p>Miss Distance: {missDistance} Au</p>
        <a href={url} className="text-blue-600 underline ">Learn more</a>
      </div>
    </div>
    <div className="w-8/12 bg-green-600 h-1 "></div>
    </>
  );
}