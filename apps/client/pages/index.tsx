import { useToggleTheme } from '@noodle/stitches';
import { NextPage } from 'next';

const Home: NextPage = () => {
  const { toggleTheme } = useToggleTheme();
  return (
    <div>
      <h1>Hello World</h1>
      <button type="button" onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
};

export default Home;
