import React from "react";
import Link from "next/link";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const baseStyles =
  "inline-flex items-center justify-center font-medium rounded-md transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 min-h-[44px] cursor-pointer text-sm select-none";

const variantStyles = {
  primary:
    "bg-[#3157D5] text-white hover:bg-[#2645af] active:bg-[#1d3790] focus-visible:outline-[#3157D5] border border-transparent shadow-xs",
  secondary:
    "bg-[#111418] text-[#F7F7F3] hover:bg-[#1f242b] active:bg-[#0a0c0e] focus-visible:outline-[#111418] border border-transparent",
  outline:
    "bg-[#FFFFFF] text-[#16181B] border border-[#DADCD8] hover:border-[#16181B] hover:bg-[#F7F7F3] active:bg-[#ebece8] focus-visible:outline-[#3157D5]",
};

const sizeStyles = {
  sm: "px-3.5 py-2 text-xs",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  target,
  rel,
  ariaLabel,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
}) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </Link>
  );
}
