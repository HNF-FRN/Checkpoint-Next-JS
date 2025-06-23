import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-white text-center">
        <h1 className="text-4xl font-bold text-blue-600">Hi, I'm Hanafi</h1>
        <p className="mt-4 text-lg text-gray-700">
          I'm a web developer passionate about building web apps.
        </p>
        <Image
          src="/profile.jpg"
          alt="Profile"
          width={200}
          height={200}
          className="rounded-full mt-6 shadow-md"
        />
      </main>
    </>
  );
}
