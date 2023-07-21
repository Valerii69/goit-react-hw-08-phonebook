import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filter/sliceFilter';
import { selectFilter } from 'redux/filter/selectorsFilter';
import * as S from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChangeFilter = e => {
    dispatch(changeFilter(e.target.value.toLowerCase().trim()));
  };

  return (
    <>
      <S.Text>Пошук контактів за іменами</S.Text>
      <S.Label aria-label="Contacts filter by name">
        <S.Input
          onChange={handleChangeFilter}
          value={filter}
          name="filter"
          type="text"
          placeholder="Друкуйте тут..."
        />
      </S.Label>
    </>
  );
};
