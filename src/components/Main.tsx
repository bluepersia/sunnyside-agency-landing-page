import styles from './Main.module.css';
import imgEggMobile from '../images/mobile/image-transform.jpg';
import imgEggDesktop from '../images/desktop/image-transform.jpg';
import imgCupMobile from '../images/mobile/image-stand-out.jpg';
import imgCupDesktop from '../images/desktop/image-stand-out.jpg';
import imgEmily from '../images/image-emily.jpg';
import imgThomas from '../images/image-thomas.jpg';
import imgJennie from '../images/image-jennie.jpg';
import imgMilkMobile from '../images/mobile/image-gallery-milkbottles.jpg';
import imgMilkDesktop from '../images/desktop/image-gallery-milkbottles.jpg';
import imgOrangeMobile from '../images/mobile/image-gallery-orange.jpg';
import imgOrangeDesktop from '../images/desktop/image-gallery-orange.jpg';
import imgConeMobile from '../images/mobile/image-gallery-cone.jpg';
import imgConeDesktop from '../images/desktop/image-gallery-cone.jpg';
import imgSugarMobile from '../images/mobile/image-gallery-sugar-cubes.jpg';
import imgSugarDesktop from '../images/desktop/image-gallery-sugarcubes.jpg';

export default function Main(): JSX.Element {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <div className={styles.gridText}>
          <h2 className={styles.gridTitle}>Transform your brand</h2>
          <p className={styles.gridBody}>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <a href='#' className={styles.btnLearn}>
            Learn more
          </a>
        </div>
        <img src={imgEggMobile} className={styles.egg + ' mobile tablet'} />
        <img src={imgEggDesktop} className={styles.egg + ' desktop'} />
        <img src={imgCupMobile} className={styles.cup + ' mobile tablet'} />
        <img src={imgCupDesktop} className={styles.cup + ' desktop'} />;
        <div className={styles.gridText}>
          <h2 className={styles.gridTitle}>Stand out to the right audience</h2>
          <p className={styles.gridBody}>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.{' '}
          </p>
        </div>
        <div className={styles.gridText2 + ' ' + styles.gridCherries}>
          <h2 className={styles.gridTitle2}>Graphic Design</h2>
          <p className={styles.gridText2}>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
        <div className={styles.gridText2 + ' ' + styles.gridOrange}>
          <h2 className={styles.gridTitle2}>Photography</h2>
          <p className={styles.gridText2}>
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
      <div className={styles.testimonials}>
        <h2 className={styles.testimonialsTitle}>Client testimonials</h2>

        <ul className={styles.testimonialsList}>
          <div className={styles.testimonial}>
            <img src={imgEmily} className={styles.imgAvatar} />
            <p className={styles.testimonialBody}>
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </p>
            <p className={styles.testimonialName}>Emily R.</p>
            <p className={styles.testimonialJob}>Marketing Director</p>
          </div>
          <div className={styles.testimonial}>
            <img src={imgThomas} className={styles.imgAvatar} />
            <p className={styles.testimonialBody}>
              Sunnyside’s enthusiasm coupled with their keen interest in our
              brand’s success made it a satisfying and enjoyable experience.
            </p>
            <p className={styles.testimonialName}>Thomas S.</p>
            <p className={styles.testimonialJob}>Chief Operating Officer</p>
          </div>
          <div className={styles.testimonial}>
            <img src={imgJennie} className={styles.imgAvatar} />
            <p className={styles.testimonialBody}>
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </p>
            <p className={styles.testimonialName}>Jennie F.</p>
            <p className={styles.testimonialJob}>Business Owner</p>
          </div>
        </ul>

        <div className={styles.gallery}>
          <img
            src={imgMilkMobile}
            className={styles.galleryImg + ' mobile tablet'}
          />
          <img
            src={imgOrangeMobile}
            className={styles.galleryImg + ' mobile tablet'}
          />
          <img
            src={imgConeMobile}
            className={styles.galleryImg + ' mobile tablet'}
          />
          <img
            src={imgSugarMobile}
            className={styles.galleryImg + ' mobile tablet'}
          />

          <img
            src={imgMilkDesktop}
            className={styles.galleryImg + ' desktop'}
          />
          <img
            src={imgOrangeDesktop}
            className={styles.galleryImg + ' desktop'}
          />
          <img
            src={imgConeDesktop}
            className={styles.galleryImg + ' desktop'}
          />
          <img
            src={imgSugarDesktop}
            className={styles.galleryImg + ' desktop'}
          />
        </div>
      </div>
    </main>
  );
}
