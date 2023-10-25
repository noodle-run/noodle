export default function Page() {
  return (
    <main className="-mt-12 flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center">
      <h1 className="text-4xl font-extrabold tracking-tighter md:text-5xl lg:text-6xl xl:text-7xl">
        😢 <br /> Access Denied
      </h1>
      <p className="max-w-[45ch] text-sm text-default-500 lg:text-base">
        Our servers have put you on the naughty list. You will need to wait a
        bit before being able to access our services.
      </p>
    </main>
  );
}
