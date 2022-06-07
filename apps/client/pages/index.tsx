import { Button } from '@noodle/design-system';
import { useToggleTheme } from '@noodle/stitches';
import { NextPage } from 'next';
import { useQuery } from '../utils/trpc';

const Home: NextPage = () => {
  const hello = useQuery(['hello', { msg: 'noodle' }]);
  const { toggleTheme } = useToggleTheme();
  return (
    <div>
      <h1>Hello World</h1>
      <button type="button" onClick={toggleTheme}>
        Toggle Theme
      </button>
      <Button>I&apos;m from the design-system lib</Button>
      <p>{hello.data && hello.data.greeting}</p>
    </div>
  );
};

export default Home;
