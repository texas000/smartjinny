import dynamic from "next/dynamic";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useMemo, useState } from "react";

export default function Write() {
	const Editor = useMemo(() => {
		return dynamic(
			() => import("react-draft-wysiwyg").then((mod) => mod.Editor),
			{ ssr: false }
		);
	}, []);

	const [editorState, setEditorState] = useState(EditorState.createEmpty());
	const [submit, setSubmit] = useState(false);

	async function Post() {
		const addPost = await fetch("/api/blog/addPost", {
			method: "POST",
			body: JSON.stringify(convertToRaw(editorState.getCurrentContent())),
		});
		const addPostRes = await addPost.json();
		if (addPost.ok) {
			setEditorState(EditorState.createEmpty());
		} else {
			alert(addPost.status);
		}
		// console.log(addPostRes);
	}

	return (
		<>
			<div className="container bg-gray-50">
				<h1 className="text-3xl my-5">Post</h1>
				{Editor && (
					<Editor
						editorState={editorState}
						toolbarClassName="toolbarClassName"
						wrapperClassName="border-2 border-sky-500 p-2"
						editorClassName="border-2 border-gray-200 p-1"
						onEditorStateChange={setEditorState}
					/>
				)}
				<button
					className="bg-sky-600 hover:bg-sky-700 rounded-full text-white p-3 m-2 font-semibold"
					onClick={Post}
				>
					Submit
				</button>
			</div>
		</>
	);
}
