"use client";

import Header from "../containers/Header/Header";
import Hero from "@/containers/Hero/Hero";
import { AppShell } from "@mantine/core";
import Courses from "@/containers/MiniCourses/Courses";
import TeacherShowcase from "@/containers/TeacherShowcase/TeacherShowcase";
import { Footer } from "@/containers/Footer/Footer";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
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
      {/* <Modal opened={opened} open={open} close={close} /> */}
    </React.Fragment>
  );
}
