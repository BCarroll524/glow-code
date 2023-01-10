import type { SVGProps } from "react";

const Step2 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={64}
    height={64}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path fill="url(#a)" d="M0 0h48v48H0z" />
    <defs>
      <pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#b" transform="scale(.02083)" />
      </pattern>
      <image
        id="b"
        width={64}
        height={64}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFSUlEQVR4nO2Xe0xbVRzH7x+mlwZ1asYebDhNdL4QEcbGikAEhblHwpiRxMSgwBIdo4A6N7fxtOuAPQIyHoYy4gT3h0voFoMhKO1taXkUxhyIELZJImriXxpN5iPxa845vW1pb5+MgqYn+Yam95ze7+ec3+PAcaERGqGxpANm7gHo+TzoeS30/DQE/ncq8lnPd0PHvwEjdz+30gbMnBx62THo+V8h8PCiX6CXHSVruJUwMCCPhMCP2AyOPA5MZgM3ioFbx5lmi4GJbPbMDjIOY9iDy2teJ98IQTZPDZnWAzMFwFy1Z80UsLkUQvY9vpRvWMaw4ceokaFHgVvvezc/ZxWZO/yIeBIW6Liw4AMIsjLbzvtjfs4BwrxOPIkjy1FtWMJO57uaM290TV7TeulwEhM7mNUJAp9vS1hnU99VAoZwwCBnz0WNbpE+ieHHRIjXgwdA6jx56eQ+V0OzJcyQeYNvoTSxl83vl30RPABBNktfSkqls6FvX7OW0yeBqVcZ5PR+YK5KGoCUWDK/V/YPWrg6dAQhoSHwv9GXkhrvbOj6TukGZnlaGoL8Bnmu44FWjmgQzdya5QOYLQK+zgSubmPhdPM9wBzJTE7lSOTMMfZMfzfQFsYgWjgzGjh+6QD0/IzbEJISgRF4YDxNAljJnhkjAWOhHaKVq11KgG6WxNkSSbkbMK11qDoVgDmKmZzY5Tp/MstaZmOA0UqgL0c8hdto4qKWBoDcKt2V0RslgOFeayVaBwxEWHf4PhZO7sro0MsMgOiTKPEUDi9dIyPNhzayPImwKARGohmI8R5g+Alg9qD7RmZYBViO2AF6doqnILg1kXj2OQSiZ6u2IKYsDrn1T1mPfi1wc5FXicEddvNEwn4R4Ic7DrD1lAIx5XFUn39mNUAuZoFe5owPA6PHFwKYisUQ+sMvgLRzGeiauuhV9WONqBpUQT2kxo8Dm+13Hal7kbOm8+07b4gALO8uNE9PoEAEmPcLIL15h08And98ijrLGQpxcliNaZPC3rBIUpLrASmPtn9olOw7+70HMG4CLG+7mqc58FJgOXBQW+wTAFHbeDtyL+YhQaVAbHk8chui8XOftfp4kmEVi3mLU9g4qtNWhQ55BUhvykB6cyYKtUpcmOz0yXxV/wdI/jCNro9TbaVJTRRbEY+s0zFo/fgh/NUbxq4HQjhrUqYYYGjfwmojpb5XfOsDIoCvO+5ofvvZ5IWJXaewVSdRytrNzIhGzjrsaKV3DRxwvE7UuDUfKIDm2nnbzktWqNNJiD+xjVaoZ8ricKVhDTNDTPXleN95q3ltfQS83oUCASi6XOJTqY23hlVsRRx6WzaJ8QzaYXt2sSpDSiX5S5qWPeap+djyOHg07wlAJdTQavRCUybUhpoFz3a3Zfne8KoTKESiWoFL/W/iT/slTVK3NeG41P8WPTmyLmAAYlx89qJTWfUUPlIiCU4Sm5TbE4NqdAkl+Ko9Gj9pVuPvj+7CfNtqjGnT0CmU0p5C5hHzZN2KACBSnElBzcgpao5IoU6xJXrSyVTb97SnjNQhoXY7XRcwAAkbAkHMqw21AYeQqD2aLLq2faID9VcbcbjnKJLUqdT8Oz2HKBzp7Jrr5+k8cV3AAHciiR2lvFLq1zsSlxLAWxl1VmpjGjTXOlYOQBdpZDqVSyOTEplTrVP5/fuJ/gIEdJXQqZDi4STIzvtq/sJkJw50FzEfTRn+AziKQPgTTsrLpdij2YvkhuepyGcS8/6ETaFWKbkJAQGQHfD3yBerdIddXzxAc+Z/GyBxBYn73wOERmiERmhwwR7/AnODJgbhYL1tAAAAAElFTkSuQmCC"
      />
    </defs>
  </svg>
);

export { Step2 };
