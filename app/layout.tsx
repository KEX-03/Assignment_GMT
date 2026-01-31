import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans text-textPrimary bg-secondary antialiased">
        {children}
      </body>
    </html>
  );
}
