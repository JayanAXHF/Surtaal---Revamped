import Image, { StaticImageData } from "next/image";
import React from "react";
import { Title } from "@mantine/core";
interface CardProps {
  name: string;
  description: string;
  photo: StaticImageData;
}

const Card = ({ name, description, photo, ...other }: CardProps) => {
  return (
    <div>
      <div className="relative grid grid-flow-row h-max hover:scale-105 transition-all duration-200 ease-out bg-white dark:bg-main lg:grid-cols-3 overflow-hidden rounded-lg border border-gray-100 dark:border-gray-800 md:grid-flow-col cursor-pointer shadow-md">
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

        <div className="lg:col-span-2 dark:text-white p-4 sm:p-6 lg:p-8">
          <div className="sm:flex sm:justify-between sm:gap-4 ">
            <div>
              <Title
                order={2}
                className=" font-bold text-gray-900 dark:text-gray-50 sm:text-xl"
              >
                {name}
              </Title>
            </div>
            <div className="hidden sm:block sm:shrink-0"></div>
          </div>
          <div className="mt-4">
            <p className="max-w-[60ch] text-sm text-gray-600 dark:text-gray-400">
              {description}
            </p>
          </div>
        </div>
        <div>
          <Image
            src={photo}
            className=" shadow-sm h-full  lg:aspect-video w-auto md:order-last order-1"
            alt="teacher"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
