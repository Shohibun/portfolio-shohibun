import type { SVGProps } from "react";

export default function CopyRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1.25em"
      height="1.25em"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M14.83 14.83a4 4 0 1 1 0-5.66"></path>
      </g>
    </svg>
  );
}
