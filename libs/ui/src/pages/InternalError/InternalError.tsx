import Image from 'next/image';
import { FC } from 'react';
import { FiAlertTriangle } from 'react-icons/fi';

type InternalErrorProps = {
  message: string;
};

export const InternalError: FC<InternalErrorProps> = ({ message }) => {
  return (
    <main className="flex gap-6 flex-col h-screen justify-center items-center">
      <Image
        src="/auth-denied.svg"
        alt="Sad illustration"
        width={150 * 2}
        height={130.58 * 2}
      />
      <h1 className="text-5xl font-extrabold">Something went wrong.</h1>
      <p className="text-red-500 flex items-center gap-3">
        <FiAlertTriangle /> {message}
      </p>
    </main>
  );
};
