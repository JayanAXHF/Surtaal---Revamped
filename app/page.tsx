"use client";

import Header from "../containers/Header/Header";
import Hero from "@/containers/Hero/Hero";
import { AppShell } from "@mantine/core";
import Courses from "@/containers/MiniCourses/Courses";
import TeacherShowcase from "@/containers/TeacherShowcase/TeacherShowcase";
import { Footer } from "@/containers/Footer/Footer";

export default function Home() {
  return (
    <AppShell
      header={<Header />}
      footer={<Footer />}
      className="dark:text-white p-0"
      padding={0}
    >
      <>
        <Hero />
        <Courses />
        <TeacherShowcase />
      </>
    </AppShell>
  );
}
