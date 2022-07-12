import classNames from "classnames";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";
import Build from "@site/static/contents/icons/build.svg";
import Whitelabel from "@site/static/contents/icons/whitelabel.svg";
import CustomAuthentication from "@site/static/contents/icons/custom-authentication.svg";

export default function QuickNavigation() {
  return (
    <div>
      <h2 className={styles.heading}>
        <strong>Start with Web3Auth</strong>
      </h2>
      <div className={styles.container}>
        <Link className={classNames(styles.card)} to="/docs/quick-start">
          <div>
            <Build className={styles.cardIcon} />
            <h5 className={styles.title}>
              <strong>Start Building</strong>
            </h5>
          </div>
          <p>Integrate instantly through our uniquely designed Integration Builder.</p>

          <a className={styles.footer} href="/docs/quick-start">
            Explore Quick Start →
          </a>
        </Link>

        <Link className={classNames(styles.card)} to="/docs/whitelabel">
          <div>
            <Whitelabel className={styles.cardIcon} />
            <h5 className={styles.title}>
              <strong>Whitelabel</strong>
            </h5>
          </div>
          <p>Make Web3Auth your own with a wide range of Whitelabeling options.</p>

          <a className={styles.footer} href="/docs/whitelabel">
            Checkout Whitelabel Page→
          </a>
        </Link>

        <Link className={classNames(styles.card)} to="/docs/custom-authentication/">
          <div>
            <CustomAuthentication className={styles.cardIcon} />
            <h5 className={styles.title}>
              <strong>Custom Authentication</strong>
            </h5>
          </div>
          <p>Use your own social login and generate a non custodial private key with Web3Auth.</p>

          <a className={styles.footer} href="/docs/custom-authentication/">
            Turn to Custom Authentication →
          </a>
        </Link>
      </div>
    </div>
  );
}
