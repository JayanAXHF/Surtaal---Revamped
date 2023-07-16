import RootStyleRegistry from "./emotion";
import "./globals.css";

export const metadata = {
  title: "Surtaal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={"dark:bg-[#0a0a0a]"}>
        {" "}
        <RootStyleRegistry>{children}</RootStyleRegistry>
      </body>
    </html>
  );
}
