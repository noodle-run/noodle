import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';

export const LoadingScreen = () => {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <ClimbingBoxLoader color="#fa617b" size={24} title="Loading animation" />
    </main>
  );
};
