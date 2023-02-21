'use client'
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useState } from "react";

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor"),
  { ssr: false }
);

// https://www.npmjs.com/package/@uiw/react-md-editor

export default function JinEditor() {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const slug = (string) => {
    let result = string.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    return result
  }

  async function pushContent() {
    if(value && title && desc) {
        const res = await fetch(`https://api.smartjinny.com/blog/push`, {
          method: "POST",
          body: JSON.stringify({
            markdown: value,
            title: title,
            description: desc,
            slug: title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
          }),
        });
        if (!res.ok) {
          window.alert('Error:', res.status)
        }
        window.alert('CONTENT SAVED');
    } else {
        window.alert('PLEASE FILL REQUIRED FIELD')
    }
  }

  return (
    <div className="h-full p-5">
      <h1 className="font-bold">Page Name: {title !== "" && slug(title)}</h1>
      <div className="grid grid-cols-4 py-5 w-full gap-3 justify-items-start">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control w-full max-w-xs col-span-2">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <button
          className="justify-self-end mx-auto btn font-bold"
          onClick={() => pushContent()}
        >
          Publish
        </button>
      </div>

      <MDEditor
        value={value}
        onChange={setValue}
        autoFocus={true}
        height={500}
      />
    </div>
  );
}