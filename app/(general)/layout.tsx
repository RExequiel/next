
export default function SecondLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col items-center p-24">
        <h2>Segundo layout</h2>
      {children}
    </main>
  );
}