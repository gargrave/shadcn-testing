import React from "react";
import clsx from "clsx";

// https://ui.shadcn.com/docs/components/typography

const textSizes: Record<Props["tag"], string> = {
  h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
  h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
  h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
  h4: "scroll-m-20 text-xl font-semibold tracking-tight",
  h5: "text-xl font-medium",
  h6: "text-base font-medium",
};

interface Props {
  children: React.ReactNode;
  classes?: string;
  id?: string;
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

function Heading({ children, classes, id, tag }: Props) {
  const className = clsx(textSizes[tag], classes);
  return React.createElement(tag, { className, id }, children);
}

export { Heading };
