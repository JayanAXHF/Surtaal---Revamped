import Card from "@/components/TeacherCard/Card";
import React from "react";
import Priytam from "../../assets/Priytam.jpg";
import Monica from "../../assets/MonicaBhatia.jpg";
import { Title, Text } from "@mantine/core";

const TeacherShowcase = () => {
  const teachers = [
    {
      name: "Monica Choudhary",
      description:
        "Monica is a well-versed teacher, having taught school for 13 years. She has completed her Visharad in Vocal, and now teaches students and performs at events and programmes. ",
      photo: Monica,
    },
    {
      name: "Priytam Pratihar",
      description:
        "Priytam posses academic and teaching expertise, serving as a college teacher. He also possesses a versatile musical skillset, proficient in harmonium, keyboard, guitar, tabla, cajón, ukulele, and various other instruments. He has also completed his Aalankar and is a member of the Gwalior Gharana.",
      photo: Priytam,
    },
  ];
  const cards = teachers.map((teacher, i) => {
    return <Card {...teacher} key={i} />;
  });

  return (
    <section className="grid gap-y-14 lg:grid-cols-3 dark:bg-[#001E3C] bg-[#f3f6f9]  py-10 px-10 justify-center md:justify-normal animation-fade">
      <div className="flex flex-col justify-center px-10 md:hidden ">
        <Title>Our Teachers</Title>
        <Text>
          All our courses are taught by excellent teachers that have a ton of
          experience and are a master in their field.
        </Text>
      </div>

      <div className="grid grid-flow-row content-center justify-center md:justify-normal lg:col-span-2 gap-y-10">
        {cards}
      </div>
      <div className="md:flex flex-col justify-center px-10 hidden ">
        <Title>Our Teachers</Title>
        <Text>
          All our courses are taught by excellent teachers that have a ton of
          experience and are a master in their field.
        </Text>
      </div>
    </section>
  );
};

export default TeacherShowcase;
