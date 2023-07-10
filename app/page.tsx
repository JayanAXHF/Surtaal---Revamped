"use client";

import Header from "../containers/Header/Header";
import Hero from "@/containers/Hero/Hero";
import { AppShell } from "@mantine/core";
import Courses from "@/containers/MiniCourses/Courses";
import TeacherShowcase from "@/containers/TeacherShowcase/TeacherShowcase";
import { Footer } from "@/containers/Footer/Footer";
import Modal from "@/containers/BookingModal/Modal";
import { useDisclosure } from "@mantine/hooks";
import React from "react";

export default function Home() {
  const [opened, { open, close }] = useDisclosure();

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
