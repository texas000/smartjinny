import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";
import { convertFromRaw, EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Page from "../../component/Page";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import useSWR from "swr";
export default function Post() {
	const router = useRouter();

	const fetcher = (url) => fetch(url).then((r) => r.json());
	const { data, error } = useSWR(
		`/api/blog/getPost?id=${router.query.id}`,
		fetcher
	);
	const [post, setPost] = useState(EditorState.createEmpty());
	const [title, setTitle] = useState(false);

	const raw = Cookies.get("user_session");
	const token = jwt.decode(raw);

	useEffect(() => {
		if (data) {
			const contentBlock = convertFromRaw(JSON.parse(data?.markdown));
			const editorState = EditorState.createWithContent(contentBlock);
			setPost(editorState);
			setTitle(data.title);
		}
	}, [data]);

	const Editor = useMemo(() => {
		return dynamic(
			() => import("react-draft-wysiwyg").then((mod) => mod.Editor),
			{ ssr: false }
		);
	}, []);

	if (error) return <div>failed to load</div>;
	if (!data) return <div>loading...</div>;

	return (
		<Page title="BLOG">
			<div
				className="
        relative
        z-10
        pt-[120px]
        md:pt-[130px]
        lg:pt-[160px]
        pb-[50px]
        bg-primary
        overflow-hidden
      "
			>
				<div className="container">
					<div className="flex flex-wrap items-center -mx-4">
						<div className="w-full px-4">
							<div className="text-center">
								<input
									type="text"
									className="bg-transparent font-semibold text-white text-4xl text-center"
									disabled={!token}
									value={title}
									onChange={(e) => {
										e.preventDefault();
										setTitle(e.target.value);
									}}
								></input>
								{token && (
									<button
										onClick={() => {
											fetch("/api/blog/updatePost", {
												method: "POST",
												body: JSON.stringify({
													id: data._id,
													title: title,
													markdown: JSON.stringify(
														convertToRaw(post.getCurrentContent())
													),
												}),
											});
										}}
									>
										Push
									</button>
								)}
							</div>
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
			{/* <h1 onClick={fetchPost} className="text-3xl p-2">
				Post: {router.query.id}
			</h1> */}

			<div className="readonly px-1">
				{Editor && (
					<Editor
						editorState={post}
						toolbarClassName="border-2"
						toolbarHidden={!token}
						// toolbarClassName="bg-black"
						// wrapperClassName="hidden"
						// editorClassName="hidden"
						onEditorStateChange={setPost}
						readOnly={!token}
					/>
				)}
			</div>
		</Page>
	);
}
