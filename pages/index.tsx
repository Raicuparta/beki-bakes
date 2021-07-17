import { useRouter } from 'next/dist/client/router';
import { Products } from '../components';

const Home = () => {
  const { beforePopState } = useRouter();
  beforePopState(state => {
    // Disable scroll restoration on navigation,
    // to prevent messy animations.
    state.options.scroll = false;
    return true;
  });
  
  return (
    <Products />
  );
};

export default Home;
