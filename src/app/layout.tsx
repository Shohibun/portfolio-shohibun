import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Shohibun Najam</title>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
