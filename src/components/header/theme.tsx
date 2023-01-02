import React from 'react';
import { BsSun, BsSunFill, BsMoon, BsMoonFill } from 'react-icons/bs';
import styles from './header.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { changeMod } from '../redux/themeSlice';
const Theme = () => {
  const theme = useSelector((state: RootState) => state.themeSlice.mode);
  const dispatch = useDispatch();

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme ? 'dark' : 'white';
  }, [theme]);

  return (
    <div className={styles.theme}>
      <div
        className={styles.themeItem}
        onClick={() => {
          dispatch(changeMod(0));
        }}>
        {theme === 0 ? <BsSunFill /> : <BsSun />}
      </div>
      <div
        className={styles.themeItem}
        onClick={() => {
          dispatch(changeMod(1));
        }}>
        {theme === 1 ? <BsMoonFill /> : <BsMoon />}
      </div>
    </div>
  );
};

export default Theme;
