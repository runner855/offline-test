import React from "react";
import "../SearchBar/SearchBar.css";

type SearchBarProps = {
  searchBarValue: string;
  setSearchBarValue: (text: string) => void;
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const SearchBar = ({
  handleSubmit,
  setSearchBarValue,
  searchBarValue,
}: SearchBarProps) => {
  return (
    <div className="search_bar">
      <div className="form_container">
        <input
          type="text"
          placeholder="Search Images Here!!"
          required
          onChange={(e) => setSearchBarValue(e.target.value)}
          value={searchBarValue}
        />
        <button
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleSubmit(e)}
        >
          Search
        </button>
      </div>
    </div>
  );
};
