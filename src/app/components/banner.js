
  export default function Banner() {
    return (

  <div className="relative banner ">
    <div >
      <img
        className=" w-full object-cover"
        src="https://images.unsplash.com/photo-1552984418-b55abf780dd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt=""
      />
    </div>
    <div className="  absolute top-10 inset-x-10  flex flex-col justify-center  items-center   text-white ml-4 mt-4">
      <h1 className="text-5xl my-12 font-serif text-orange-200">Welcome to the NBA World</h1>
      <p className="text-2xl m-0 text-orange-200">I will show you first my top 3 NBA players of all time</p>
    </div>
  </div>


    )
  }
