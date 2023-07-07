"use client";
import React from "react";
import RootSidebar from "../../../components/pages/ProfilePage/RootSidebar";

export default function MyprofileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="container mt-main-content-gap grid grid-cols-12 mx-auto gap-main-content-gap">
      <aside className="box_area col-span-12 lg:col-span-3 oveflowClass">
        <RootSidebar />
      </aside>
      <main className="box_area col-span-12 lg:col-span-9 content-bg oveflowClass">
        {children}
      </main>
    </section>
  );
}
