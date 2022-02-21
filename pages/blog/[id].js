import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";
import { convertFromRaw, EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Post = () => {
	const router = useRouter();

	useEffect(() => {
		fetchPost();
	}, []);
	const [post, setPost] = useState(EditorState.createEmpty());

	async function fetchPost() {
		if (router.query.id != undefined) {
			const getPost = await fetch(`/api/blog/getPost?id=${router.query.id}`);
			if (getPost.ok) {
				const postRes = await getPost.json();
				const contentBlock = convertFromRaw(JSON.parse(postRes.markdown));
				const editorState = EditorState.createWithContent(contentBlock);
				setPost(editorState);
				// const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
				// const editorState = EditorState.createWithContent(contentBlock);
				// setPost(convertFromRaw(JSON.parse(postRes.markdown)));
			} else {
				alert(getPost.status);
			}
		}
	}

	const Editor = useMemo(() => {
		return dynamic(
			() => import("react-draft-wysiwyg").then((mod) => mod.Editor),
			{ ssr: false }
		);
	}, []);

	return (
		<>
			<h1 onClick={fetchPost} className="text-3xl p-2">
				Post: {router.query.id}
			</h1>

			<div className="readonly">
				{Editor && (
					<Editor
						editorState={post}
						toolbarClassName="border-2"
						toolbarHidden
						// toolbarClassName="bg-black"
						// wrapperClassName="hidden"
						// editorClassName="hidden"
						readOnly={true}
					/>
				)}
			</div>
			{/* {JSON.stringify(post)} */}
		</>
	);
};

export default Post;
