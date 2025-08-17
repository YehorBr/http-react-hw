import { useState } from "react";
import {SearchbarWrapper, SearchForm, SearchButton,SearchInput } from "./searchBar.styled"
import { IoSearch } from "react-icons/io5";

export const SearchBar = ({ handleSearched }) => {
  const [input, setInput] = useState("");

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleSearched(input.trim());
    setInput("");
  };

  return (
    <SearchbarWrapper>
      <SearchForm onSubmit={onSubmitForm}>
        <SearchButton type="submit">
          <IoSearch size={20}/>
        </SearchButton>
        <SearchInput
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarWrapper>
  );
};
