// Banner.js
export default function Banner({ imageSrc, children }) {
  return (
    <div className="relative banner z-[-1]">
      <div>
        <img
          className="w-full max-h-[80vh] object-cover"
          src={imageSrc}
          alt=""
        />
      </div>
      <div className="2xl:container absolute inset-0 flex flex-col justify-center items-center text-white  mt-4">
        {children}
      </div>
    </div>
    
  );
}
