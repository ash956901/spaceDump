import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { ImCross } from "react-icons/im";
export default function Navbar(){
  const [pressed,setPress]=useState(false);
  return(

    <div>
      <div className="w-10/12 mx-auto flex flex-row  justify-between items-center">

          <div className=" p-3">
            <Link to="./">
              <img className="w-[80px]" src="../logo-no-background.png" alt="Logo Here" />
            </Link>
          </div>

        <div className="text-white text-lg relative flex font-poppins font-semibold">

          <div className="hidden sm:flex  flex-row items-center space-x-4">
            <Link to="./">
              <p className="hover:text-[#dede50] transiton-all duration-200 ease-in">Home</p>
            </Link>

            <Link to="./earth">
              <p className="hover:text-[#dede50] transiton-all duration-200 ease-in">Earth</p>
            </Link>

            <Link to="./mars">
              <p className="hover:text-[#dede50] transiton-all duration-200 ease-in">Mars</p>
            </Link>

            <Link to="./potd">
              <p className="hover:text-[#dede50] transiton-all duration-200 ease-in">POTD</p>
            </Link>

            <Link to="./patents">
              <p className="hover:text-[#dede50] transiton-all duration-200 ease-in">Patents</p>
            </Link>

          
          </div>
          

          <div onClick={()=>setPress(true)} className="sm:hidden cursor-pointer">
            <GiHamburgerMenu className={pressed?("hidden "):("block")} color="yellow" size="30"/>
          </div>

          <div onClick={()=>setPress(false)} className="sm:hidden cursor-pointer">
          <ImCross className={pressed?("block "):("hidden")} color="yellow" size="25"/>
          </div> 

        </div>
      </div>

   <div className={pressed?("flex transition-all  duration-300 ease-in bg-yellow-400 flex-col items-center justify-center sm:hidden text-black font-bold font-poppins"):("hidden")}>

        <Link className="py-4  hover:bg-burger w-full flex justify-center hover:text-yellow-400  transition-all duration-300 ease-in" to="./">Home</Link>        
        <Link className="py-4 hover:bg-burger w-full flex justify-center hover:text-yellow-400  transition-all duration-300 ease-in" to="./earth">Earth</Link>        
        <Link className="py-4 hover:bg-burger w-full flex justify-center hover:text-yellow-400  transition-all duration-300 ease-in" to="./mars">Mars</Link>        
        <Link className="py-4 hover:bg-burger w-full flex justify-center hover:text-yellow-400  transition-all duration-300 ease-in" to="./potd">Potd</Link>        
        <Link className="py-4  hover:bg-burger w-full flex justify-center hover:text-yellow-400  transition-all duration-300 ease-in" to="./patents">Patents</Link>        
      </div>
    </div>
    


  );
}
