import type { SVGProps } from "react";

const Step3 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={64}
    height={64}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path fill="url(#a)" d="M0 0h64v64H0z" />
    <defs>
      <pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#b" transform="scale(.01563)" />
      </pattern>
      <image
        id="b"
        width={64}
        height={64}
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

export { Step3 };
