import React from 'react';
import styles from './profile.module.scss';
const Content = () => {
  return (
    <div className={styles.content}>
      <p style={{ marginBottom: '6px' }}>Привет.</p>{' '}
      <p>
        Ищу работу Frontend разработчика. После изучения языка JavaScript начал изучать Vue, но
        впоследствии перешел React. Поначалу казалось это все лишним и можно все написать на
        ванильном JS, но время меня переубедило. Помимо реакта поглядел на разные библиотеки: react
        transition group, react-intersection-observer, react-router-dom, react-parallax, axios. В
        качестве хранилища использовал Redux Toolkit. Крайние два проекта написаны на TypeScript.
      </p>
      <p style={{ marginTop: '6px' }}>
        Комерческого опыта разработки я не имею, но ончень хотелось бы получить. Мои pet-проекты и
        ссылки на github находяться чуть ниже.
      </p>
    </div>
  );
};

export default Content;
