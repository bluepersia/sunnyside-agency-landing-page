import styles from './Header.module.css';
import imgLogo from '../images/logo.svg';
import imgMenu from '../images/icon-hamburger.svg';

export default function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <img src={imgLogo} className={styles.imgLogo} />
        <img src={imgMenu} className={styles.imgMen + ' mobile'} />
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
    </header>
  );
}
