import { useSelector, useDispatch } from 'react-redux';
import styles from './Filter.module.css';
import { setFilter } from 'redux/filterSlice/filterSlice';

const FilterSearch = () => {
  const filter = useSelector(store => store.filter);
  const dispatch = useDispatch();

  const onSearchName = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <>
      <div className={styles.filter}>
        <p>Find contacts by name</p>
        <input
          onChange={onSearchName}
          type="text"
          name="filter"
          value={filter}
          required
        />
      </div>
    </>
  );
};

export default FilterSearch;
