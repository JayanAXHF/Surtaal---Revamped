"use client";

import React from "react";
import "../../app/globals.css";
import { UnstyledButton, useMantineTheme } from "@mantine/core";
import Link from "next/link";
interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  onClick?: () => any;
  cartoon?: boolean;
  link?: boolean;
  href?: string;
  className?: string;
  type?: string;
}
const Button = ({
  children,
  primary = false,
  onClick = () => {
    null;
  },
  cartoon = false,
  link = false,
  href = "/",
  className = "",
  type = "button",
  ...props
}: ButtonProps) => {
  const theme = useMantineTheme();

  const RootButton = ({ className, children }: any) => {
    if (link) {
      return (
        <UnstyledButton
          component={Link}
          href={href}
          className={className}
          onClick={onClick}
          type={type}
        >
          {children}
        </UnstyledButton>
      );
    }
    return (
      <UnstyledButton className={className} onClick={onClick}>
        {children}
      </UnstyledButton>
    );
  };

  if (cartoon) {
    return (
      <RootButton
        className={
          "group relative inline-block focus:outline-none focus:ring " +
          className
        }
      >
        <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-primary transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>

        <span
          className="relative inline-block border-2 border-black dark:border-white px-6 py-2.5
         text-sm font-bold  tracking-widest text-black group-active:text-opacity-75 dark:group-hover:border-gray-500"
        >
          {children}
        </span>
      </RootButton>
    );
  }
  if (primary) {
    return (
      <RootButton
        className={`inline-block rounded border border-[${theme.fn.darken(
          "#FFC700",
          0.1
        )}] bg-primary px-12 py-3 text-sm font-medium text-black hover:bg-${theme.fn.darken(
          "#FFC700",
          0.05
        )}  focus:outline-none focus:ring `}
      >
        {children}
      </RootButton>
    );
  }
  return (
    <RootButton className="  dark:text-white px-6 py-2.5 rounded-lg font-bold">
      {children}
    </RootButton>
  );
};

export default Button;
