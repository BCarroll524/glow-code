import type { SVGProps } from "react";

const Step4 = (props: SVGProps<SVGSVGElement>) => (
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

export { Step4 };
