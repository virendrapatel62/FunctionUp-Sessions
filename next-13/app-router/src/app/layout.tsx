import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Head from "./head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />

      <body>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
