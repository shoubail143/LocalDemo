"use client";
import { Navbar } from "@/components/Navbar";
import { useUser } from "@clerk/nextjs";
import React from "react";

const DashboardPage = () => {
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back,{" "}
            {user?.firstName ?? user?.emailAddresses[0].emailAddress[1]}!
          </h1>
          <p className="text-lg text-gray-600">
            Here's what's happening with your boards today.
          </p>
        </div>
      </main>
    </div>
  );
};
export default DashboardPage;
