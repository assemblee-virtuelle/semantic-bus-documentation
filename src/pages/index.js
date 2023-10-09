import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import MDXContent from '@theme/MDXContent';
import Tool from './index/Tool';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    // <header className={clsx('hero hero--primary', styles.heroBanner)}>
    //   <div className="container">
    //     <h1 className="hero__title">{siteConfig.title}</h1>
    //     <p className="hero__subtitle">
    //       <p>Un outil open source permettant d'<strong>intéropérer des données</strong></p>
    //       <p>hétérogènes techniquement et sémantiquement, facilement.</p>
    //     </p>
    //     <div className={styles.av}>
    //       <span>Le Bus Sémantique est un projet de l'Assemblée Virtuelle.</span>
    //       <img src="img/av-icon.png" alt="icône Assemblée Virtuelle" />
    //     </div>
    //   </div>
    // </header>

      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <div className="hero__image">
            <img src="img/logo-grappe.png" alt="Logo bus sémantique" />
          </div>
          <div className="hero__text__container">
            <h1 className="hero__title">{siteConfig.title}</h1>
            <div className="hero__subtitle">
              <p>Un outil open source permettant d'<strong>intéropérer des données</strong></p>
              <p>hétérogènes techniquement et sémantiquement, facilement.</p>
            </div>
            <div className={styles.av}>
              <span>Le Bus Sémantique est un projet de l'Assemblée Virtuelle.</span>
              <img src="img/av-icon.png" alt="icône Assemblée Virtuelle" />
            </div>
          </div>
        </div>
      </header>
  );
}

function BusFeatures(){
  <section className={classnames(styles.tools, styles.contrast)}>
    <div className={styles.wrapper}>
      <h2>Intégrez vos données provenant de : </h2>
      <ul>
        <li className={styles.toolCard}>
          <Tool label='InfluxDB' link='https://www.influxdata.com/' />
        </li>
        <li className={styles.toolCard}>
          <Tool label='Google Sheet' link='https://www.google.fr/intl/fr/sheets/about/' />
        </li>
      </ul>
    </div>
  </section>
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      description="Documentation du Bus Sémantique">
      <HomepageHeader />
      <main>
        <BusFeatures />
      </main>
    </Layout>
  );
}
