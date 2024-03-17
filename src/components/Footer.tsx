import styles from './Footer.module.css';
import imgLogo from '../images/logo.svg';
import imgFacebook from '../images/icon-facebook.svg';
import imgInsta from '../images/icon-instagram.svg';
import imgTwitter from '../images/icon-twitter.svg';
import imgPin from '../images/icon-pinterest.svg';

export default function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <img src={imgLogo} className={styles.imgLogo} />
      <nav>
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
        </ul>

        <ul className={styles.listSocial}>
          <li>
            <img src={imgFacebook} className={styles.imgSocial} />
          </li>
          <li>
            <img src={imgInsta} className={styles.imgSocial} />
          </li>
          <li>
            <img src={imgTwitter} className={styles.imgSocial} />
          </li>
          <li>
            <img src={imgPin} className={styles.imgSocial} />
          </li>
        </ul>
      </nav>
    </footer>
  );
}
