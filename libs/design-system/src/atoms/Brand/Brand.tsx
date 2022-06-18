import { FC } from 'react';

type BrandProps = {
  readonly size?: string;
};

export const Brand: FC<BrandProps> = ({ size = '50' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 50 50"
    role="presentation"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Brand</title>
    <rect width="50" height="50" rx="18" fill="url(#paint0_linear_130_32)" />
    <path
      d="M23.9057 27.1717L37.2223 23.8381L27.3566 14.2927L14.04 17.6264L23.9057 27.1717Z"
      stroke="#161616"
      strokeWidth="2"
    />
    <path
      d="M23.9058 27.1717L33.0201 24.8903C33.3538 27.8206 32.8767 30.7863 31.6408 33.4641C28.2891 32.9058 24.8468 33.4334 21.8162 34.9699C19.9602 32.1244 17.2434 29.9464 14.0622 28.7539C14.3304 25.8168 15.4001 23.0098 17.1545 20.6391L23.9058 27.1717Z"
      stroke="#161616"
      strokeWidth="2"
    />
    <path
      d="M16.6835 33.5188L19.2717 23.8595L25.1901 22.3782M23.9057 27.1717L37.2223 23.8381L27.3566 14.2927L14.04 17.6264L23.9057 27.1717ZM23.9057 27.1717L33.0201 24.8903C33.3537 27.8206 32.8766 30.7863 31.6407 33.4641C28.289 32.9058 24.8467 33.4335 21.8162 34.97C19.9601 32.1244 17.2433 29.9464 14.0621 28.7539C14.3304 25.8169 15.4 23.0099 17.1544 20.6391L23.9057 27.1717Z"
      stroke="#161616"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_130_32"
        x1="0"
        y1="25"
        x2="50"
        y2="25"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F77062" />
        <stop offset="1" stopColor="#FE5196" />
      </linearGradient>
    </defs>
  </svg>
);
