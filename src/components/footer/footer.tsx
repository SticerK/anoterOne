import React from 'react';
import styles from './footer.module.scss';
import { BsTelegram, BsGithub } from 'react-icons/bs';

const Footer = () => {
  const links = [
    { id: 1, title: 'Вы хотите открыть Telegram?', path: 'https://t.me/AndreyTheBestCoder' },
    { id: 2, title: 'Вы хотите открыть GitHub?', path: 'https://github.com/SticerK' },
  ];

  const onExit = (idx: number) => {
    const ans = window.confirm(links[idx].title);
    ans && window.open(links[idx].path);
  };

  return (
    <div className={styles.footer}>
      <div className={styles.descr}>
        Здесть должно быть что-то написано, но я пока не придумал ...
      </div>
      <div className={styles.social}>
        <p>Мои контакты:</p>
        <div className={styles.socialItem}>
          <BsTelegram className={styles.icon} onClick={() => onExit(0)} />
          <BsGithub className={styles.icon} onClick={() => onExit(1)} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
