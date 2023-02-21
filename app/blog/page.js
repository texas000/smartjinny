import React from "react";
import JinEditor from "./Editor";
export default async function Page({ params, searchParams }) {
  return (
    <div className="h-screen">
      <JinEditor/>
    </div>
  );
}