import * as React from "react";
const Book = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      fill="white"
      d="M101.667 400H464V16H100.667A60.863 60.863 0 0 0 40 76.667V430.25h.011c0 .151-.011.3-.011.453c0 35.4 27.782 65.3 60.667 65.3H464V464H100.667C85.664 464 72 448.129 72 430.7c0-16.64 13.585-30.7 29.667-30.7M360 48.333v172.816l-48.4-42.49L264 220.9V48.333ZM232 48v216h31.641l48.075-42.659L360.305 264H392V48h40v320H136.08L136 48Zm-131.333 0H104l.076 320h-2.413A59.793 59.793 0 0 0 72 375.883V76.917A28.825 28.825 0 0 1 100.667 48"
    />
  </svg>
);
export default Book;