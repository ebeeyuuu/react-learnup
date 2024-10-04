import * as React from "react";
const Note = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="60px"
    height="60px"
    viewBox="0 0 256 256"
    {...props}
  >
    <path
      fill="white"
      d="M90 96a6 6 0 0 1 6-6h64a6 6 0 0 1 0 12H96a6 6 0 0 1-6-6m6 38h64a6 6 0 0 0 0-12H96a6 6 0 0 0 0 12m32 20H96a6 6 0 0 0 0 12h32a6 6 0 0 0 0-12m94-106v108.69a13.94 13.94 0 0 1-4.1 9.9l-51.31 51.31a13.94 13.94 0 0 1-9.9 4.1H48a14 14 0 0 1-14-14V48a14 14 0 0 1 14-14h160a14 14 0 0 1 14 14M48 210h106v-50a6 6 0 0 1 6-6h50V48a2 2 0 0 0-2-2H48a2 2 0 0 0-2 2v160a2 2 0 0 0 2 2m153.52-44H166v35.52Z"
    />
  </svg>
);
export default Note;
