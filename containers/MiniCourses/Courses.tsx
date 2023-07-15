"use client";
import Button from "@/components/Button/Button";
import Card from "@/components/Card/Card";
import { Title, Text } from "@mantine/core";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
const framerVariant = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0 },
};

const Courses = () => {
  const displayCourses = [
    {
      title: "Guitar",
      description: "We teach all levels, from beginner to master. ",
    },
    {
      title: "Keyboard",
      description: "Learn the popular keyboard and get a degree.",
    },
    {
      title: "Classical Singing",
      description: "Learn the most popular classical songs and more.",
    },
    {
      title: "Tabla",
      description: "Learn the famous tabla and master how to play it",
    },
  ];
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <motion.section
      variants={framerVariant}
      className="grid grid-cols-1 animation-fade lg:grid-cols-3 gap-4 lg:gap-8 py-20 px-10"
      initial="hidden"
      animate={control}
      ref={ref}
      transition={{ ease: "easeIn", duration: 0.5 }}
    >
      <div className="grid gap-y-0">
        <div className="grid h-full content-center gap-y-8">
          <div className="grid gap-2 items-center content-center md:justify-normal justify-center">
            <Title>
              We offer a lot of courses. Online or Offline? You chose.
            </Title>
            <Text fz="lg">
              We offer a lot of quality courses in tons of different fields,
              ranging from classical singing to Modern Singing. All our courses
              are available in both online and offline.
            </Text>
          </div>
          <Button cartoon link href="/courses" className="w-max h-max">
            View All Courses
          </Button>
        </div>
      </div>
      <div className="lg:col-span-2 grid lg:grid-cols-2">
        {displayCourses.map((course, i) => {
          return <Card small {...course} key={i} />;
        })}
      </div>
    </motion.section>
  );
};

export default Courses;
