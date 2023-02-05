import { useState, ChangeEvent, KeyboardEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SearchIcon, CloseIcon } from "../../ui/icons";
import "./BasicSearchForm.scss";

const BasicSearchForm = () => {
  let { word } = useParams();
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>(word || "");

  const onSearch = () => {
    if (!search) {
      return;
    }

    navigate(`/q/${search}`);
  };

  const onClear = () => {
    setSearch("");
  };

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSearchKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-sm-between">
      <div className="position-relative flex-grow-2">
        <span className="position-absolute top-50 translate-middle left-2 color-primary">
          <SearchIcon />
        </span>
        <input
          type="text"
          className="form-control form-control-solid padding-3 font-size-2 color-primary"
          name="search"
          value={search}
          onChange={onSearchChange}
          placeholder="Type to search...let's say videos with the word 'Monkey'"
          onKeyUp={onSearchKeyUp}
        />
        {search && (
          <span
            className="position-absolute top-50 translate-middle right-0 color-primary cursor-pointer"
            onClick={onClear}
          >
            <CloseIcon />
          </span>
        )}
      </div>
      <button
        type="button"
        onClick={onSearch}
        className="btn btn-primary btn-lg btn-primary-custom ms-1"
        disabled={!search}
      >
        Search
      </button>
    </div>
  );
};

export { BasicSearchForm };
