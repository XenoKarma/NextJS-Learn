
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <ul>
            <li>Fashion</li>
            <li>Sports</li>
            <li>Technology</li>
        </ul>
        {children}
    </>
  );
}
