import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Handbook First</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        This handbook is the central repository for how we run the company.
        This handbook is an evolving resource and meant to be updated.
        You can do this by contributing here.
     </>
    ),
  },
  {
    title: <>How To Use This Handbook</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        You can contribute to the handbook by following this quick guide.
      </>
    ),
  },
  {
    title: <>New Employee On-Boarding</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        New employees can use this section for new hire onboarding.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3 class="text--center">{title}</h3>
      <p class="text--center">{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container container-index">
          <div class="row">
            <div class="col padding-top--lg">
              <h1 className="hero__title">{siteConfig.title}</h1>
              <p className="hero__subtitle">{siteConfig.tagline}</p>
              <div className={styles.buttons}>
                <Link
                  className={clsx(
                    'button button--outline button--secondary button--lg',
                    styles.getStarted,
                  )}
                  to={useBaseUrl('docs/introduction')}>
                  Explore The Handbook!
                </Link>
              </div>
            </div>
            <div class="col text--center">
              <img src="img/handbook-hero.png" />
            </div>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
