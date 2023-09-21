
  export default function Text({  children }) {
    return (
        <div className=" sm:text-lg text-sm italic sm:font-semibold font-medium text-center indent-4 text-orange-950 bg-amber-100 border-4 border-slate-950 sm:my-16 my-2 sm:mx-48 mx-2 sm:p-8 p-4">
        {children}
      </div>
      
    );
  }
  