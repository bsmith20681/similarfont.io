const SearchBar = (props) => {
  return (
    <input
      className="searchBar"
      type="text"
      placeholder="search"
      value={props.search}
      onChange={props.change}
    />
  );
};

export default SearchBar;
