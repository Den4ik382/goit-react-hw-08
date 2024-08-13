import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../redux/filter/selectors";
import { changeFilter } from "../redux/filter/slice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={(event) => dispatch(changeFilter(event.target.value))}
      />
    </div>
  );
};

export default SearchBox;
