import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

/**
 * Landing page with a simple gradient background and a hero asset.
 * Free to customize as you see fit.
 */
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.hero}>
          <div className={styles.heroBackground}>
            <div className={styles.heroBackgroundInner}>
              <Image
                src="/hero-gradient.png"
                width={1390}
                height={1390}
                alt="Background gradient from red to blue"
                quality={100}
                className={styles.gradient}
              />
            </div>
          </div>
          <div className={styles.heroAssetFrame}>
            <Image
              src="/hero-asset.png"
              width={860}
              height={540}
              alt="Hero asset, NFT marketplace"
              quality={100}
              className={styles.heroAsset}
            />
          </div>
          <div className={styles.heroBodyContainer}>
            <div className={styles.heroBody}>
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleGradient}>
                  BLOCKSWAP NFT Marketplace
                </span>
                <br />
                Trade and List your favourite NFTs.
              </h1>
              <p className={styles.heroSubtitle}>
                <Link
                  className={styles.link}
                  href="https://thirdweb.com"
                  target="_blank"
                >
                  Blocklab-Protocol || Blockswap
                </Link>{" "}
                gives you the best marketplace experience that you need.
                Performance, security and flexible our watch word <b>Welcome</b> <i></i>.
              </p>

              <div className={styles.heroCtaContainer}>
                <Link className={styles.heroCta} href="/buy">
                  Get Started
                </Link>
                <Link
                  className={styles.secondaryCta}
                  href="https://blockswap-polygon-dex.vercel.app/"
                  target="_blank"
                >
                  Back to Dex
                </Link>
                <Link
                  className={styles.secondaryCta}
                  href="/"
                  target="_blank"
                >
                  contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
