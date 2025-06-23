import Navbar from '@/components/Navbar';

export default function About() {
  return (
    <>
      <Navbar />
      <main className="p-8">
        <h1 className="text-3xl font-bold">About Me</h1>
        <p className="mt-4 text-gray-600">
          I'm a frontend developer focused on building clean and user-friendly web applications.
        </p>
      </main>
    </>
  );
}
