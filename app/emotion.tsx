"use client";
import { CacheProvider } from "@emotion/react";
import { useEmotionCache, MantineProvider } from "@mantine/core";
import { useColorScheme } from "@mantine/hooks";
import { useServerInsertedHTML } from "next/navigation";

export default function RootStyleRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const cache = useEmotionCache();
  cache.compat = true;

  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(" ")}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(" "),
      }}
    />
  ));
  const darkMode = useColorScheme() === "dark";

  return (
    <CacheProvider value={cache}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          headings: {
            fontFamily: "Zilla Slab",
            fontWeight: "700",
            sizes: {
              h1: { fontSize: "2rem" },
            },
          },
          fontFamily: "Inter",
          colorScheme: darkMode ? "dark" : "light",
        }}
      >
        {children}
      </MantineProvider>
    </CacheProvider>
  );
}
