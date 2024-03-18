import styles from './Header.module.css';
import imgLogo from '../images/logo.svg';
import imgMenu from '../images/icon-hamburger.svg';
import imgArrow from '../images/icon-arrow-down.svg';
import { useEffect, useState } from 'react';

export default function Header(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    document.addEventListener('click', handleBodyClick);

    return () => {
      document.removeEventListener('click', handleBodyClick);
    };
  }, []);

  function handleBodyClick(): void {
    setIsMenuOpen(false);
  }

  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <img src={imgLogo} className={styles.imgLogo} />
        <img
          onClick={(e: React.MouseEvent) => {
            e.stopPropagation();
            setIsMenuOpen(true);
          }}
          src={imgMenu}
          className={styles.imgMen + ' mobile'}
        />
        <nav className='tablet desktop'>
          <ul className='navlist'>
            <li>
              <a href='#' className={styles.navlink}>
                About
              </a>
            </li>
            <li>
              <a href='#' className={styles.navlink}>
                Services
              </a>
            </li>
            <li>
              <a href='#' className={styles.navlink}>
                Projects
              </a>
            </li>
            <li>
              <button className={styles.btnContact}>Contact</button>
            </li>
          </ul>
        </nav>
      </div>

      <h1 className={styles.title}>We are creatives</h1>
      <img src={imgArrow} className={styles.imgArrow} />

      <nav
        className={
          styles.menuMobile + ' mobile ' + (isMenuOpen ? styles.open : '')
        }
      >
        <ul className={styles.navMobile}>
          <li>
            <a href='#' className={styles.navlinkMobile}>
              About
            </a>
          </li>
          <li>
            <a href='#' className={styles.navlinkMobile}>
              Services
            </a>
          </li>
          <li>
            <a href='#' className={styles.navlinkMobile}>
              Projects
            </a>
          </li>
          <li>
            <button
              className={styles.btnContact + ' ' + styles.btnContactMobile}
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
