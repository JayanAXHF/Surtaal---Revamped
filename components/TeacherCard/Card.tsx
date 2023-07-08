import Image, { StaticImageData } from "next/image";
import React from "react";

interface CardProps {
  name: string;
  description: string;
  photo: StaticImageData;
}

const Card = ({ name, description, photo, ...other }: CardProps) => {
  return (
    <div>
      <div className="relative grid grid-cols-1 lg:grid-cols-3 overflow-hidden rounded-lg border border-gray-100 dark:border-gray-800 grid-flow-col cursor-pointer">
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

        <div className="lg:col-span-2 dark:text-white p-4 sm:p-6 lg:p-8">
          <div className="sm:flex sm:justify-between sm:gap-4 ">
            <div>
              <h3 className="text-lg font-bold text-gray-50 sm:text-xl">
                {name}
              </h3>
            </div>
            <div className="hidden sm:block sm:shrink-0"></div>
          </div>
          <div className="mt-4">
            <p className="max-w-[40ch] text-sm text-gray-400">{description}</p>
          </div>
        </div>
        <div>
          <Image
            src={photo}
            className=" shadow-sm h-full w-auto"
            alt="teacher"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
