const SearchBar = (props) => {
  return (
    <input
      type="text"
      placeholder="search"
      value={props.search}
      onChange={props.change}
    />
  );
};

export default SearchBar;
