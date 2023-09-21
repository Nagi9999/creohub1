export default function Form() {
  return (
    <div className=" flex justify-center object-center  m-9 ">
      <div className="sm:space-x-4 space-x-2">
        <div className="flex-col bg-orange-500 sm:p-6 p-4 rounded-md shadow-gray-800 shadow-lg py-6">
          <h2 className="text-center text-black flow-root text-lg">Contact Me</h2>
          <form>
            <div className=" sm:m-5 m-2 flex  justify-between  items-center  ">
              <label className="font-bold text-black inline-block text-sm pr-5" htmlFor="name">Name:</label>
              <input
                className="sm:w-72 w-48 sm:p-2.5 p-1  border border-solid rounded"
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="sm:m-5 m-2  flex justify-between items-center ">
              <label className="font-bold text-black inline-block text-sm pr-5" htmlFor="message">Message:</label>
              <textarea
                className="sm:w-72 w-48 sm:p-2.5 p-1  border border-solid rounded"
                placeholder="Your Best Player"
                required
              ></textarea>
            </div>
            <button className="bg-black text-white rounded block cursor-pointer py-2 p-3.5 m-auto" type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}
