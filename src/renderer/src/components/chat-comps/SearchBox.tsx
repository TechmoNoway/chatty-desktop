import React from "react";
import SearchIcon from "../../assets/icons-svg/search.svg";

const SearchBox = React.memo(() => {
  return (
    <div className="w-full p-2.5">
      <div className="flex items-center border-[1px] border-[#e7e5e4] rounded-md px-2 py-1">
        <img
          src={SearchIcon}
          alt="Search"
          className="w-4 h-4 mr-2 flex-shrink-0 select-none"
        />
        <input
          type="text"
          className="w-full bg-transparent outline-none placeholder:font-semibold placeholder:text-[#d4d4d4]"
          placeholder="Search"
        />
      </div>
    </div>
  );
});

export default SearchBox;
