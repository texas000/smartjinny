import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";
import { convertFromRaw, EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Page from "../../component/Page";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import useSWR from "swr";
import LoadingPage from "../../component/LoadingPage";
export default function Post() {
	const router = useRouter();

	const fetcher = (url) => fetch(url).then((r) => r.json());
	const { data, error } = useSWR(
		`/api/blog/getPost?id=${router.query.id}`,
		fetcher
	);
	const [post, setPost] = useState(EditorState.createEmpty());
	const [title, setTitle] = useState(false);
	const [isLoading, setLoading] = useState(false);

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
	if (!data) return <LoadingPage />;

	return (
		<Page
			title={data.title}
			description={post.getCurrentContent().getBlockMap().first().getText()}
		>
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
								{token ? (
									<input
										type="text"
										className="w-full bg-transparent font-semibold text-white text-4xl text-center"
										value={title}
										onChange={(e) => {
											e.preventDefault();
											setTitle(e.target.value);
										}}
									></input>
								) : (
									<h1 className="font-bold text-white text-4xl">
										{title ? title : ""}
									</h1>
								)}
								{token && (
									<div className="my-2">
										<button
											className="inline-flex font-semibold rounded-md bg-indigo-200 hover:bg-indigo-300 text-indigo-700 px-5 py-2 mr-2"
											onClick={() => {
												setLoading(true);
												fetch("/api/blog/updatePost", {
													method: "POST",
													body: JSON.stringify({
														id: data._id,
														title: title,
														markdown: JSON.stringify(
															convertToRaw(post.getCurrentContent())
														),
													}),
												}).then(() => setLoading(false));
											}}
										>
											{isLoading && (
												<svg
													className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
												>
													<circle
														className="opacity-25"
														cx="12"
														cy="12"
														r="10"
														stroke="currentColor"
														strokeWidth="4"
													></circle>
													<path
														className="opacity-75"
														fill="currentColor"
														d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
													></path>
												</svg>
											)}
											<span>Push</span>
										</button>
										<button
											className="font-semibold rounded-md bg-red-200 hover:bg-red-300 text-red-700 px-5 py-2"
											onClick={() => {
												fetch(`/api/blog/deletePost?id=${data._id}`).then(
													() => {
														router.push("/blog");
													}
												);
											}}
										>
											Delete
										</button>
									</div>
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
