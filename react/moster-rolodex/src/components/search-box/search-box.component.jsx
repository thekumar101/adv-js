import "./search-box.styles.css";

const SearchBox = ({ className, placeholder, onSearchChangeHandler }) => {
  return (
    <input
      className={className}
      type="search"
      placeholder={placeholder}
      onChange={onSearchChangeHandler}
    />
  );
};

export default SearchBox;
