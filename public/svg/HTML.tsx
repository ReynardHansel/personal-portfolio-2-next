import { SVGProps } from "react";

interface HTMLProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

export function HTML({ className, ...props }: HTMLProps) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="m3.183 2l1.604 18l7.202 2l7.222-2.002L20.818 2Zm14.142 5.887H8.877l.202 2.261h8.045l-.606 6.778L12 18.178l-.01.004l-4.522-1.256l-.31-3.466h2.216l.157 1.76l2.46.664h.001l2.463-.665l.256-2.863H7.06L6.464 5.68h11.059Z"
      ></path>
    </svg>
  );
}