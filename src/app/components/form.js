export default function Form() {
  return (
    <div className="relative flex justify-center object-center m-9 ">
      <div className="space-x-4">
        <div className="flex-col bg-orange-500 p-6 rounded-md shadow-gray-800 shadow-lg py-6">
          <h2 className="text-center text-black flow-root text-lg">Contact Me</h2>
          <form>
            <div className="m-5 flex items-center justify-between">
              <label className="font-bold text-black inline-block text-sm pr-5" htmlFor="name">Name:</label>
              <input
                className="w-72 p-2.5 border border-solid rounded"
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="m-5 flex items-center justify-between">
              <label className="font-bold text-black inline-block text-sm pr-5" htmlFor="message">Message:</label>
              <textarea
                className="w-72 p-2.5 border border-solid rounded"
                id="message"
                name="message"
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
