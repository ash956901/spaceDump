export default function About(){
  return(
    <div className="bg-black w-full h-auto">
      
      <div className="flex w-10/12 mx-auto flex-col gap-5 justify-center items-center">

      
      <div>
          <img src="../astronaut.png" alt="" />
      </div>

      <div>
          <p className="text-center font-bold text-5xl sm:text-6xl text-white font-poppins" >SPACE DUMP</p>
          <p className="text-center font-bold text-base sm:text-lg text-white font-poppins">A Place Of Your Dreams</p>
      </div>

    </div>

    <div className="h-1 w-1/12 bg-green-600 mx-auto mt-2"></div>


    <div className="flex w-10/12 mx-auto flex-col sm:flex-row gap-5 mt-8 justify-between items-center">

      <div>
          <img src="../astronaut_1.png" alt="" />
      </div>

      <div className=" sm:w-[40%]">
          <p className="text-center font-semibold text-3xl sm:text-4xl text-white font-poppins" >-Carl Sagan</p>
          <p className="text-center mt-2 text-sm sm:text-base text-white font-poppins italic">“Space is for questing and wondering, for exploring unanswered questions about the universe and ourselves.”</p>
      </div>
    </div>


    <div className="flex w-10/12 mx-auto flex-col sm:flex-row-reverse gap-5 mt-8 justify-between items-center">

      <div className="">
          <img src="../astronaut_2.png" alt="" />
      </div>

      <div className=" sm:w-[40%]">
          <p className="text-center font-semibold text-3xl sm:text-4xl text-white font-poppins" >-Sir Arthur Eddington</p>
          <p className="text-center mt-2 text-sm sm:text-base text-white font-poppins italic">
          “The universe is not only stranger than we imagine, it is stranger than we can imagine.”
          </p>
      </div>
    </div>

    <div className="h-1 w-1/12 bg-green-600 mx-auto mt-8"></div>

    <div className="w-10/12 mx-auto mt-8 sm:mt-16 flex flex-col gap-5 items-center text-white font-poppins text-center ">
      <p className="font-bold text-3xl sm:text-5xl text-center">Word From the Developer</p>
      <img src="../father.jpg" width="600" alt="" />
      <p className="text-sm sm:text-base italic text-center">
        This space was created to revive some of the nostalgic memories of watching stars in a dark knight, our long lost Dreams
        of becoming an astronaut to explore the unknown. It was made to be a reminiscing memory for all the ones getting abord the 
        ship of space. For all those who dare to go far beyond what is known!
      </p>
    </div>
    </div>

  );
}