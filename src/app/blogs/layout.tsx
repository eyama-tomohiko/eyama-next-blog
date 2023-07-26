export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="mx-2 sm:mx-4 relative">{children}</main>;
}
