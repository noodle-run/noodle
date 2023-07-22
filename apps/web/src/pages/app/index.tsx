import { UserButton } from '@clerk/nextjs';

import { type NextPageWithLayout } from '../../utils/NextPageWithLayout';

const AppPage: NextPageWithLayout = () => {
  return (
    <main>
      <h1>Welcome to Noodle&apos;s application</h1>
      <UserButton afterSignOutUrl="/" />
    </main>
  );
};

export default AppPage;
