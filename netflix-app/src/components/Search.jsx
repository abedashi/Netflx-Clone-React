import { useContext } from "react";
import appContext from "../store/Context";

const Search = () => {
  const { searchHandler, onToggle, search, clicked } = useContext(appContext);

  const onToggleHandler = () => {
    onToggle((clicked) => !clicked);
  };

  const onChangeSearchHandler = (event) => {
    searchHandler(event.target.value);
  };

  return (
    <>
      <div className="d-flex align-items-center gap-2">
        <i
          onClick={onToggleHandler}
          className="bi bi-search text-white fs-4"
          style={{ cursor: "pointer" }}
        ></i>
        {clicked && (
          <input
            type="search"
            value={search}
            className="search"
            placeholder="TV Shows Title"
            onChange={onChangeSearchHandler}
          />
        )}
      </div>
    </>
  );
};
export default Search;
