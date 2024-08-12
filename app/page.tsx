// app/page.tsx
"use client";
import Image from 'next/image';
import AnimatedLinkCard from './components/AnimatedLinkCard';
import DarkModeToggle from './components/DarkModeToggle';
import SEO from './components/SEO';

export default function Home() {
  return (
    <>
      <SEO title="Saim's Links" description="Connect with Saim, a developer, tech enthusiast, and innovator." />
      <div className="flex items-center justify-center min-h-screen">
        <div className="absolute top-5 right-5">
          <DarkModeToggle />
        </div>
        <div className="text-center p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <div className="mb-8">
            <Image
              src="/p2.jpg"
              alt="Saim's Profile Picture"
              width={150}
              height={150}
              className="rounded-full mx-auto"
              priority
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">Saim's Links</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mt-4">
            Developer | Tech Enthusiast | Innovator
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatedLinkCard href="https://github.com/yourusername" title="GitHub" />
            <AnimatedLinkCard href="https://www.linkedin.com/in/yourusername/" title="LinkedIn" />
            <AnimatedLinkCard href="mailto:youremail@example.com" title="Email" />
          </div>
        </div>
      </div>
    </>
  );
}
