import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = (props) => {
  return (
    <div className="searchBar">
      <FontAwesomeIcon className="searchBar-icon" icon={faSearch} />
      <input
        className="searchBar-input"
        type="text"
        placeholder="i.e. Futura, Proxima Nova"
        value={props.search}
        onChange={props.change}
      />
    </div>
  );
};

export default SearchBar;
