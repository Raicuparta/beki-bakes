import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';
import { Products } from '../components';

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
    <Products />
  );
};

export default Home;
