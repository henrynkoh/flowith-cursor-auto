import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <h1 className="mb-4 text-4xl font-bold">Welcome to Flowith Education Hub</h1>
        <p className="mb-8 text-xl">
          Your platform for customized education and workflow automation
        </p>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            title="Custom Learning Paths"
            description="Personalized education journeys tailored to your needs"
          />
          <FeatureCard
            title="Workflow Automation"
            description="Integrate with popular automation tools"
          />
          <FeatureCard
            title="Interactive Learning"
            description="Engage with dynamic content and assessments"
          />
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/courses"
            className="rounded-md bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
          >
            Explore Courses
          </Link>
        </div>
      </div>
    </main>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md">
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
} 