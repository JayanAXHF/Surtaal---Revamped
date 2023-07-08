"use client";

import Button from "@/components/Button/Button";
import Header from "../containers/Header/Header";
import Hero from "@/containers/Hero/Hero";
import { AppShell } from "@mantine/core";
import Courses from "@/containers/MiniCourses/Courses";
import TeacherShowcase from "@/containers/TeacherShowcase/TeacherShowcase";

export default function Home() {
  return (
    <AppShell header={<Header />} className="dark:text-white">
      <Hero />
      <Courses />
      <TeacherShowcase />
    </AppShell>
  );
}
