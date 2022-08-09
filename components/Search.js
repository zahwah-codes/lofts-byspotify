import { MdOutlineShortText } from "react-icons/md";

function Search({ search, setSearch }) {
  return (
    <div className="max-w-[1150px] bg-white rounded-full overflow-hidden border-2 border-[#333333] p-3 px-5 pr-8 flex items-center">
        <div className="h-4 w-4 rounded-full border-2 border-black flex-shrink-0 animate-pulse" />
        <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className=" ml-3 text-black border-none lg:w-full focus:ring-0 outline-none placeholder-black font-editorial text-3xl"
        placeholder="Search..."
      />


    <div className="flex items-center divide-dotted divide-x-2 divide-[#333333] ml-auto">
        <div className="flex space-x-2 pr-10">
          <button className="tag">Minimal</button>
          <button className="tag">House</button>
          <button className="tag">DnB</button>
        </div>
      
      
    <div className="flex items-center space-x-1.5 text-black pl-4">
          <MdOutlineShortText className="text-2xl animate-pulse" />
          <span className="font-editorial text-lg">Filters</span>
    </div>  

    </div>
    </div>
  )
}

export default Search