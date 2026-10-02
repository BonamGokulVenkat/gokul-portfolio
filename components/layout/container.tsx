import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function Container({
  children,
  className = "",
  as: Component = "div",
  ...props
}: ContainerProps) {
  return (
    <Component
      className={`mx-auto w-full max-w-[1240px] px-5 sm:px-8 md:px-10 lg:px-12 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
