import { type FC } from "react";

type BrandProps = {
  size?: number;
  className?: string;
};

export const Brand: FC<BrandProps> = ({ size, className }) => {
  const sizing = size ?? 100;
  return (
    <svg
      className={className}
      width={sizing}
      height={sizing}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Noodle - Rethinking Student Productivity</title>
      <rect
        width="100"
        height="100"
        rx="28"
        fill="url(#paint0_linear_30_565)"
      />
      <path
        d="M47.8115 54.3434L74.4446 47.6761L54.7133 28.5854L28.0802 35.2528L47.8115 54.3434Z"
        stroke="#161616"
        strokeWidth="2"
      />
      <path
        d="M47.8115 54.3434L66.0402 49.7806C66.7075 55.6412 65.7532 61.5726 63.2814 66.9282C56.5782 65.8117 49.6935 66.8669 43.6324 69.9399C39.9204 64.2488 34.4867 59.8929 28.1243 57.5078C28.6608 51.6337 30.8001 46.0197 34.3089 41.2782L47.8115 54.3434Z"
        stroke="#161616"
        strokeWidth="2"
      />
      <path
        d="M33.3672 67.0375L38.5435 47.719L50.3803 44.7563M47.8115 54.3434L74.4446 47.6761L54.7133 28.5854L28.0802 35.2528L47.8115 54.3434ZM47.8115 54.3434L66.0402 49.7806C66.7075 55.6412 65.7532 61.5726 63.2814 66.9282C56.5782 65.8117 49.6935 66.8669 43.6324 69.9399C39.9204 64.2488 34.4867 59.8929 28.1243 57.5078C28.6608 51.6337 30.8001 46.0197 34.3089 41.2782L47.8115 54.3434Z"
        stroke="#161616"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_30_565"
          x1="0"
          y1="50"
          x2="100"
          y2="50"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F77062" />
          <stop offset="1" stopColor="#FE5196" />
        </linearGradient>
      </defs>
    </svg>
  );
};
