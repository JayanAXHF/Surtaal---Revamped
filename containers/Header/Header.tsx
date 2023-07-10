"use client";
import Image from "next/image";
import {
  createStyles,
  Header,
  HoverCard,
  Group,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  Title,
} from "@mantine/core";
import { MantineLogo } from "@mantine/ds";
import { useDisclosure } from "@mantine/hooks";
import Button from "@/components/Button/Button";
import Logo from "../../assets/logo.svg";
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
} from "@tabler/icons-react";
import Link from "next/link";
import Modal from "../BookingModal/Modal";
import React from "react";

const useStyles = createStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("sm")]: {
      height: rem(42),
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark" ? "#0a0a0a" : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: "100%",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),

    "&:active": theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("md")]: {
      display: "none",
    },
  },
}));

const mockdata = [
  {
    icon: IconCode,
    title: "Open source",
    description: "This Pokémon’s cry is very loud and distracting",
  },
  {
    icon: IconCoin,
    title: "Free for everyone",
    description: "The fluid of Smeargle’s tail secretions changes",
  },
  {
    icon: IconBook,
    title: "Documentation",
    description: "Yanma is capable of seeing 360 degrees without",
  },
  {
    icon: IconFingerprint,
    title: "Security",
    description: "The shell’s rounded shape and the grooves on its.",
  },
  {
    icon: IconChartPie3,
    title: "Analytics",
    description: "This Pokémon uses its flying ability to quickly chase",
  },
  {
    icon: IconNotification,
    title: "Notifications",
    description: "Combusken battles with the intensely hot flames it spews",
  },
];

export default function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const { classes, theme } = useStyles();
  const [opened, { open, close }] = useDisclosure();

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group noWrap align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={rem(22)} color={theme.fn.primaryColor()} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" color="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <React.Fragment>
      <Modal opened={opened} open={open} close={close} />
      <Box>
        <Header
          height={80}
          px="md"
          className="dark:bg-[#0a0a0a] dark:text-white"
        >
          <Group position="apart" sx={{ height: "100%", width: "100%" }}>
            <div className="flex gap-5">
              <Image
                src={Logo}
                alt="logo"
                width={30}
                height={30}
                className="dark:invert"
              />
              <Title variant="h1" className="dark:text-white">
                Surtaal
              </Title>
            </div>
            <Group
              sx={{ height: "100%" }}
              spacing={2}
              className={classes.hiddenMobile}
              position="center"
            >
              <Link href="/" className={classes.link}>
                Home
              </Link>
              <Link href="/courses" className={classes.link}>
                Courses
              </Link>
              <Link href="/support" className={classes.link}>
                Support
              </Link>
            </Group>
            <Group className={classes.hiddenMobile} position="right">
              <Button cartoon onClick={open}>
                Book Now
              </Button>
              {/* <Modal opened={opened} open={open} close={close} /> */}

              <Button>Find Booking</Button>
            </Group>
            <UnstyledButton
              className={`${classes.hiddenDesktop} dark:text-white text-xl`}
              onClick={toggleDrawer}
            >
              {!drawerOpened ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </UnstyledButton>
          </Group>
        </Header>
        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          pt={0}
          className={classes.hiddenDesktop}
          zIndex={1000000}
          withCloseButton={false}
        >
          <Drawer.Header>
            <Drawer.Title className="pt-0 mt-0">
              <Title>Surtaal</Title>
            </Drawer.Title>
            <Drawer.CloseButton className="h-8 w-8" />
          </Drawer.Header>
          <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
            <Divider
              my="sm"
              color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
            />
            <Link href="/" className={classes.link}>
              Home
            </Link>
            <Link href="/courses" className={classes.link}>
              Courses
            </Link>
            <Link href="/support" className={classes.link}>
              Support
            </Link>
            <Divider
              my="sm"
              color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
            />

            <Group position="center" pb="xl" px="md">
              <Button cartoon>Book Now</Button>
              <Button>Find Booking</Button>
            </Group>
          </ScrollArea>
        </Drawer>
      </Box>
    </React.Fragment>
  );
}
