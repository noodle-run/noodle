import { Button } from '@noodle/design-system';
import { useToggleTheme } from '@noodle/stitches';
import { NextPage } from 'next';
import { useQuery } from '../utils/trpc';

const Home: NextPage = () => {
  const { data, isLoading, error } = useQuery(['hello', { msg: 'noodle' }]);
  const { toggleTheme } = useToggleTheme();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>Hello World</h1>
      <button type="button" onClick={toggleTheme}>
        Toggle Theme
      </button>
      <Button>I&apos;m from the design-system lib</Button>
      {data && <p>{data.greeting}</p>}
    </div>
  );
};

export default Home;
