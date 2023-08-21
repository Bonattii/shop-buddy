export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section
      className="bg-gradient-to-br from-indigo-950 from-% via-black 3xl:via-40% via-30% to-black to-90% sm:bg-black
      pb-10 sm:pb-0  h-screen w-screen bg-fixed">
      <div className="mx-auto max-w-2xl md:max-w-4xl lg:max-w-7xl px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
