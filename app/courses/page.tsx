"use client";
import { Footer } from "@/containers/Footer/Footer";
import Header from "@/containers/Header/Header";
import { AppShell, Title, Text, rem } from "@mantine/core";
import React from "react";
import * as CourseList from "./courses.json";
import Card from "@/components/Card/Card";
interface Course {
  desc: string;
  name: string;
  price: number;
}

export const list: Course[] = [
  {
    desc: "The Gwalior Gharana is the oldest Gharana of Hindustani classical music.This gharana is the most famous gharana of Khayal singing. In this gharana, the initial note is made open and loud in the form of aakar. ",
    name: "Gwalior Gharana",
    price: 2000,
  },
  {
    desc: "Starting from: br Grade 1 prarumbhik | Grade 2 praveshika pratam br Grade 3 praveshika puuren | Grade 4 Madhyama pratam br Grade 5 madhayam purren br Visharad pratam | Visharad purren | Alankaar purren | Alankaar purren (Exam and Practical fee ₹4000/-) .",
    name: "Diploma Courses",
    price: 3000,
  },
  {
    desc: "Versatile Swar Alaapbr Bandish Styles br Swar Vishtaar br Raag Aalap br Bol Aalap br Swargmaan br Dhrupad Dhamaar",
    name: "Classical Singing",
    price: 2000,
  },
  {
    desc: "Starting from the Alankaar Taan-Palte, Variety of Taan, Gamak, Mheed etc; Bollywood Playing | Classical Playing | Versatile Playing | Performer Playing",
    name: "Harmonium",
    price: 2000,
  },
  {
    desc: "Basic Guitar Course | Intermediate Course | Advance Course; Streaming Pattern | Code Pattern | Tab; Reading Finger Pattern | Plugging Pattern Bollywood; Playing Classical | Playing Versatile | Playing Performer Playing",
    name: "Guitar",
    price: 2000,
  },
  {
    desc: "Basic keyboard course | Intermediate keyboard course | Advance keyboard course; Left & Right Hand Use | Code pattern | Book Reading | Versatile playing; Bollywood Playing | Classical Playing | Versatile Playing | Perfomer Playing ",
    name: "Keyboard",
    price: 2000,
  },
  {
    desc: "Hand Movement | BasicTaal: Kayda, Thukda Thiha  ",
    name: "Tabla",
    price: 2000,
  },
  {
    desc: "Bollywood bhajan | Semi Classical bhajan | Hindi bhajan | Sufi bhajan | Raag based bhajan",
    name: "Bhajan",
    price: 2000,
  },
  {
    desc: "Live Singing | Track Singing | Live Instrumental",
    name: "Karaoke Singing",
    price: 2000,
  },
  {
    desc: "Live Singing | SOLO & DUET Song | Track Songs | Open Mick Singing | Fussion Songs | Mashup ",
    name: "Bollywood Singing",
    price: 2000,
  },
  {
    desc: "Semi Classical Songs | Sufi | Bollywood Gazal",
    name: "Bollywood-Classical Singing",
    price: 2000,
  },
];
const Courses = () => {
  const cards = list.map((course: Course, i: number) => {
    return (
      <Card
        title={course.name}
        description={course.desc}
        small={false}
        course={course}
        key={i}
      />
    );
  });
  return (
    <div>
      {" "}
      <AppShell
        header={<Header />}
        footer={<Footer />}
        className="dark:text-white p-0"
        padding={0}
      >
        <section className="pt-10">
          <Title className="text-center mb-2" fz={rem(60)}>
            {" "}
            Explore our&nbsp;
            <Text
              component="span"
              className={
                "bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
              }
              inherit
            >
              Diverse Course Catalogue
            </Text>
          </Title>
          <Title order={3} className="mb-10 text-center">
            Unleash Your Potential and Expand Your Skill Set with Our Diverse
            Catalog of Courses!
          </Title>
          <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-3 gap-3">
            {cards}
          </div>
        </section>
      </AppShell>
    </div>
  );
};

export default Courses;
