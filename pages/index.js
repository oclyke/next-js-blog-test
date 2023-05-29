import Head from 'next/head';
import Layout, { siteTitle } from 'components/layout';
import Alert from 'components/alert';
import utilStyles from 'styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Alert type="success">
        Hi, this is a successful alert.
      </Alert>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
