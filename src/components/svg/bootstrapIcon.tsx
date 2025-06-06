import type { SVGProps } from "react";

export default function BootstrapIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      width="5em"
      height="5em"
      {...props}
    >
      <defs>
        <linearGradient
          id="deviconOriginalBootstrap0"
          x1="76.079"
          x2="523.48"
          y1="10.798"
          y2="365.95"
          gradientTransform="translate(1.11 14.613) scale(.24566)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#9013fe"></stop>
          <stop offset="1" stopColor="#6610f2"></stop>
        </linearGradient>
        <linearGradient
          id="deviconOriginalBootstrap1"
          x1="193.51"
          x2="293.51"
          y1="109.74"
          y2="278.87"
          gradientTransform="translate(0 52)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fff"></stop>
          <stop offset="1" stopColor="#f1e5fc"></stop>
        </linearGradient>
        <filter
          id="deviconOriginalBootstrap2"
          width="197"
          height="249"
          x="161.9"
          y="135.46"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="4"></feOffset>
          <feGaussianBlur stdDeviation="8"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
      <path
        fill="url(#deviconOriginalBootstrap0)"
        d="M14.985 27.712c-.237-6.815 5.072-13.099 12.249-13.099h73.54c7.177 0 12.486 6.284 12.249 13.099c-.228 6.546.068 15.026 2.202 21.94c2.141 6.936 5.751 11.319 11.664 11.883v6.387c-5.913.564-9.523 4.947-11.664 11.883c-2.134 6.914-2.43 15.394-2.202 21.94c.237 6.815-5.072 13.098-12.249 13.098h-73.54c-7.177 0-12.486-6.284-12.249-13.098c.228-6.546-.068-15.026-2.203-21.94c-2.14-6.935-5.76-11.319-11.673-11.883v-6.387c5.913-.563 9.533-4.947 11.673-11.883c2.135-6.914 2.43-15.394 2.203-21.94z"
      ></path>
      <path
        fill="url(#deviconOriginalBootstrap1)"
        d="M267.1 364.46c47.297 0 75.798-23.158 75.798-61.355c0-28.873-20.336-49.776-50.532-53.085v-1.203c22.185-3.609 39.594-24.211 39.594-47.219c0-32.783-25.882-54.138-65.322-54.138h-88.74v217zm-54.692-189.48h45.911c24.958 0 39.131 11.128 39.131 31.279c0 21.505-16.484 33.535-46.372 33.535h-38.67zm0 161.96v-71.431h45.602c32.661 0 49.608 12.03 49.608 35.49c0 23.459-16.484 35.941-47.605 35.941z"
        filter="url(#deviconOriginalBootstrap2)"
        transform="translate(1.494 2.203) scale(.24566)"
      ></path>
    </svg>
  );
}
