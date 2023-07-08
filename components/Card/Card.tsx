import { Title } from "@mantine/core";
import React from "react";

interface CardProps {
  title: string;
  description: string;
  small: boolean;
}

const Card = ({ title, description, small, ...props }: CardProps) => {
  return (
    <div className={`p-5 ${small && "h-max w-auto"}`}>
      <div className="group relative block  h-48 sm:h-72 lg:h-80 w-auto cursor-pointer">
        <span className="absolute inset-0 border-2 border-dashed border-black dark:border-white"></span>

        <div className="relative flex h-full transform items-end border-2 border-black bg-white dark:border-white dark:bg-[#0a0a0a] transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
          <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
            <Title order={1} className="mt-4    font-medium">
              {title}
            </Title>
          </div>

          <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
            <Title order={2} className="mt-4 font-medium">
              {title}
            </Title>

            <p className="mt-4 text-sm sm:text-base">{description}</p>

            {!small && <p className="mt-8 font-bold">Read more</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
