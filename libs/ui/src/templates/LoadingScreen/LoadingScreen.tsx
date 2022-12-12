import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';

export const LoadingScreen = () => {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <ClimbingBoxLoader color="#fa617b" size={24} title="Loading animation" />
    </main>
  );
};
