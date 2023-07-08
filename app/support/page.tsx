"use client";

import { Footer } from "@/containers/Footer/Footer";
import Header from "@/containers/Header/Header";
import { AppShell, Container, Text, Title } from "@mantine/core";
import React from "react";

const Support = () => {
  return (
    <div>
      {" "}
      <AppShell
        header={<Header />}
        footer={<Footer />}
        className="dark:text-white p-0"
        padding={"md"}
      >
        {" "}
        <Container fluid h={300}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.873622250626!2d77.02125540961391!3d28.392884794824706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d22c8a7ea2717%3A0x2374578941471cc0!2sGPL%20Eden%20Heights%2C%20Main%20Branch%20Rd%2C%20Sector%2070%2C%20Gurugram%2C%20Haryana%20122103!5e0!3m2!1sen!2sin!4v1688819465748!5m2!1sen!2sin"
            loading="lazy"
            width={"100%"}
            height={"100%"}
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Container>
        <Text className="ml-4 mt-2">
          H-003,
          <br /> GPL Eden Heights,
          <br /> Main Branch Rd,
          <br /> Sector 70,
          <br /> Gurugram, Haryana - 122103.
        </Text>
        <Title order={1}> Contact</Title>
        <Text fz="xl">
          Monica Choudary:
          <br />
          Phone Number: <a href="tel:9799330625">+91 9799330625</a>
          <br />
          Email: monicabhatia9@gmail.com
        </Text>
      </AppShell>
    </div>
  );
};

export default Support;
