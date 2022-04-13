import React from "react";
import { IconSearch } from "../Icons/Search/iconSearch";
import "./componentsInputSearch.css";

const InputSearch: React.FC = () => {
  return (
    <div className="c-containerInputSearch">
      <input type="search" placeholder=" Pesquisar o Produto" />
    </div>
  );
};

export default InputSearch;
