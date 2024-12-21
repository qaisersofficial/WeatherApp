import { useState } from "react";
const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <div className=" flex justify-center flex-col lg:flex-row items-center mt-5">
    <div className="relative w-4/6">
    <input
     type="text"
     value={city}
     onChange={(e) => setCity(e.target.value)}
     onKeyPress={(e) => {
       if (e.key === "Enter") {
     handleSearch();
       }}}
      className="peer w-full bg-transparent text-sm border  rounded-lg px-3 py-2 transition duration-300 ease focus:outline-none   shadow-lg focus:shadow "
    />
    <label className="absolute cursor-text px-1 left-2.5 top-2.5  text-l transition-all transform origin-left peer-focus:-top-3.5 peer-focus:left-2.5 peer-focus:text-xs  peer-focus:scale-90">
      Enter Any City
    </label>
  </div>
      <button type="button" onClick={handleSearch} data-ripple-light="true" className="rounded-md bg-slate-800 lg:py-2 lg:px-4 border border-transparent text-center lg:text-sm text-2xl px-10 py-2 text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:ml-2 my-4">Search</button>
    </div>
  );
};

export default SearchBar;
