import Navbar from '@/components/Navbar';

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="p-8">
        <h1 className="text-3xl font-bold">Contact Me</h1>
        <p className="mt-4 text-gray-600">
          You can reach me at{' '}
          <a href="mailto:you@example.com" className="text-blue-500 underline">
            you@example.com
          </a>
        </p>
      </main>
    </>
  );
}
