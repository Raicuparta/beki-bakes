import Head from 'next/head'

import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';
import { PageHeader, Products, SocialIcons } from '../components';

const Home = () => {
  const { beforePopState } = useRouter();

  useEffect(() => {
    beforePopState(state => {
      // Disable scroll restoration on navigation,
      // to prevent messy animations.
      state.options.scroll = false;
      return true;
    });
  }, [beforePopState]);
  
  return (
    <>
      <Head>
        <title>bekibakes</title>
      </Head>
      <main>
        <PageHeader />
        <SocialIcons />
        <Products />
      </main>
    </>
  );
};

export default Home;
