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
      <head>
        <link
  rel="icon"
  href="/icon?<generated>"
  type="image/<generated>"
  sizes="<generated>"
          />
      </head>
      <body className={"dark:bg-[#0a0a0a]"}>
        {" "}
        <RootStyleRegistry>{children}</RootStyleRegistry>
      </body>
    </html>
  );
}
