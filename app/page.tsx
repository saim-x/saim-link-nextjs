"use client";
import Image from 'next/image';
import AnimatedLinkCard from './components/AnimatedLinkCard';
import DarkModeToggle from './components/DarkModeToggle';
import SEO from './components/SEO';
import TechStackFlairs from './components/TechStackFlairs';

export default function Home() {
  return (
    <>
      <SEO title="Saim&apos;s Links" description="Connect with Saim, a Web & App developer, Designer, and CS student." />
      <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="absolute top-5 right-5">
          <DarkModeToggle />
        </div>
        <div className="text-center p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg max-w-md mx-auto w-full sm:w-11/12 md:w-10/12 lg:w-8/12">
          <div className="mb-8">
            <Image
              src="/p2.jpg"
              alt="Saim&apos;s Profile Picture"
              width={150}
              height={150}
              className="rounded-full mx-auto"
              priority
            />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100">Saim&apos;s Links</h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mt-4">
            Web & App Developer | Designer | CS Student
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatedLinkCard href="https://github.com/saim-x" title="GitHub" />
            <AnimatedLinkCard href="https://www.linkedin.com/in/contactsaim/" title="LinkedIn" />
            <AnimatedLinkCard href="mailto:x_aci@hotmail.com" title="Email" />
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Website Produced Using:</h2>
            <TechStackFlairs />
          </div>
        </div>
      </div>
    </>
  );
}
