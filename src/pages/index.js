import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index/index.module.scss';
import clsx from 'clsx';
import Tool from './index/Tool';
import Card from './index/Card';

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

    <section className={styles.hero}>
      <div className={styles.Wrapper}>
        <div className={styles.heroContainer}>
          <div className={styles.heroImageContainer}>
            <img src="img/logo-grappe.png" alt="Logo bus sémantique" />
          </div>
          <div className={styles.heroTextContainer}>
            <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
            <div className={styles.heroSubtitle}>
              <p>Un outil open source permettant d'<strong>intéropérer des données</strong></p>
              <p>hétérogènes techniquement et sémantiquement, facilement.</p>
            </div>
            <div className={styles.av}>
              <span>Le Bus Sémantique est un projet de l'Assemblée Virtuelle.</span>
              <img src="img/av-icon.png" alt="icône Assemblée Virtuelle" />
            </div>
            </div>
          </div>
        </div>
      </section>
  );
}

// function Other(){
// <section className={classnames(styles.tools, styles.contrast)}>
//   <div className={styles.wrapper}>
//   <h2>Intégrez vos données provenant de : </h2>
//   <ul>
//     <li className={styles.toolCard}>
//       <Tool label='InfluxDB' link='https://www.influxdata.com/' />
//     </li>
//     <li className={styles.toolCard}>
//       <Tool label='Google Sheet' link='https://www.google.fr/intl/fr/sheets/about/' />
//     </li>
//   </ul>
// </div> 
// </section>
// }

function BusData(){
  return(
    <section className={clsx(styles.tools, styles.contrast)}>
      <div className={styles.wrapper}>
        <h2>Intégrez vos données provenant de : </h2>
        <ul>
          <li className={styles.toolCard}>
            <Tool label='Bases de données SQL' link='https://www.influxdata.com/' content="Interrogez des BDD PostgreSQL, MySQL, SQLite, Microsoft SQL Server." />
          </li>
          <li className={styles.toolCard}>
            <Tool label='MongoDB' link='https://www.influxdata.com/' content="Interrogez des BDD MongoDB." />
          </li>
          <li className={styles.toolCard}>
            <Tool label='InfluxDB' link='https://www.influxdata.com/' content="Interrogez des BDD InfluDB." />
          </li>
          <li className={styles.toolCard}>
            <Tool label='Fichiers locaux' content="Fichiers au format CSV, XML." />
          </li>
          <li className={styles.toolCard}>
            <Tool label='Fichiers stockés en ligne'  content="Fichiers stockés sur des serveurs (S)FTP" />
          </li>
          <li className={styles.toolCard}>
            <Tool label='API JSON' link='https://fr.wikipedia.org/wiki/JavaScript_Object_Notation' content="Interrogez des APIs au format JSON."/>
          </li>
        </ul>
      </div> 
    </section>
  );
}

const accessibleContent = "Une interface graphique qui simplifie la conception, l’édition et la visualisation des traitements de données nécessitant peu de compétences en programmation.";

function BusFeatures(){
  return(
    <div className={clsx("container","margin--lg")}>
      <div className="row">
        <div className="col col--4">
          <div className="col-demo">
           <Card subtitle="Accessible" content={accessibleContent}></Card>
          </div>
        </div>
        <div className="col col--4">
          <div className="col-demo">4</div>
        </div>
        <div className="col col--4">
          <div className="col-demo">4</div>
        </div>
      </div>
    </div>
  );
}


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={`Documentation du ${siteConfig.title}`}>
      <div className={styles.layoutContainer}>
        <HomepageHeader />
        <BusData />
        <BusFeatures />
      </div>
    </Layout>
  );
}
