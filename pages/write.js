import dynamic from "next/dynamic";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useMemo, useState } from "react";
import Page from "../component/Page";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import { useRouter } from "next/router";
export default function Write() {
	const router = useRouter();
	const raw = Cookies.get("user_session");
	const token = jwt.decode(raw);

	const Editor = useMemo(() => {
		return dynamic(
			() => import("react-draft-wysiwyg").then((mod) => mod.Editor),
			{ ssr: false }
		);
	}, []);

	const [editorState, setEditorState] = useState(EditorState.createEmpty());
	const [title, setTitle] = useState("");

	async function Post() {
		const addPost = await fetch("/api/blog/addPost", {
			method: "POST",
			body: JSON.stringify({
				title: title,
				markdown: JSON.stringify(convertToRaw(editorState.getCurrentContent())),
			}),
		});
		if (addPost.ok) {
			setEditorState(EditorState.createEmpty());

			router.push("/blog");
		} else {
			alert(addPost.status);
		}
	}
	if (!token) return <div>Invalid Access</div>;
	return (
		<Page>
			<div
				className="
        relative
        z-10
        pt-[20px]
        pb-[50px]
        bg-primary
        overflow-hidden
      "
			>
				<div className="container">
					<div className="flex flex-wrap items-center -mx-4">
						<div className="w-full px-4 flex flex-col gap-5">
							<div className="text-center">
								<input
									className="bg-transparent font-semibold text-white text-4xl text-center placeholder-slate-400 border-2 border-gray-100 rounded"
									defaultValue="title..."
									value={title}
									onChange={(e) => setTitle(e.target.value)}
								></input>
							</div>
							<button
								className="font-semibold rounded-md bg-indigo-200 hover:bg-indigo-300 text-indigo-700 px-5 py-2 mr-2"
								onClick={Post}
							>
								Submit
							</button>
						</div>
					</div>
				</div>
				<div>
					<span className="absolute top-0 left-0 z-[-1]">
						<svg
							width="495"
							height="470"
							viewBox="0 0 495 470"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle
								cx="55"
								cy="442"
								r="138"
								stroke="white"
								strokeOpacity="0.04"
								strokeWidth="50"
							/>
							<circle
								cx="446"
								r="39"
								stroke="white"
								strokeOpacity="0.04"
								strokeWidth="20"
							/>
							<path
								d="M245.406 137.609L233.985 94.9852L276.609 106.406L245.406 137.609Z"
								stroke="white"
								strokeOpacity="0.08"
								strokeWidth="12"
							/>
						</svg>
					</span>
					<span className="absolute top-0 right-0 z-[-1]">
						<svg
							width="493"
							height="470"
							viewBox="0 0 493 470"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle
								cx="462"
								cy="5"
								r="138"
								stroke="white"
								strokeOpacity="0.04"
								strokeWidth="50"
							/>
							<circle
								cx="49"
								cy="470"
								r="39"
								stroke="white"
								strokeOpacity="0.04"
								strokeWidth="20"
							/>
							<path
								d="M222.393 226.701L272.808 213.192L259.299 263.607L222.393 226.701Z"
								stroke="white"
								strokeOpacity="0.06"
								strokeWidth="13"
							/>
						</svg>
					</span>
				</div>
			</div>
			<div className="p-2 bg-gray-50 h-max">
				{Editor && (
					<Editor
						editorState={editorState}
						toolbarClassName="toolbarClassName"
						wrapperClassName="border-2 border-sky-500 p-2"
						editorClassName="border-2 border-gray-200 p-1"
						onEditorStateChange={setEditorState}
					/>
				)}
			</div>
		</Page>
	);
}
