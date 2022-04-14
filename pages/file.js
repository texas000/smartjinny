import { useMemo, useState } from "react";
import Page from "../component/Page";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function Write() {
	const router = useRouter();
	const fetcher = (url) => fetch(url).then((r) => r.json());
	const raw = Cookies.get("user_session");
	const token = jwt.decode(raw);
	const { data, error } = useSWR(`/api/files/list`, fetcher);

	async function handleClick(path) {
		console.log(path);
		const res = await fetch(`/api/files/download`, {
			method: "POST",
			body: JSON.stringify({
				path: path,
			}),
		});
		if (res.status == 200) {
			const file = await res.json();
			window.open(file.link, "_blank");
		} else {
			console.log(res.status);
		}
	}

	if (!token) return <div>Invalid Access</div>;
	return (
		<Page>
			<div
				className="
        relative
        z-30
        pt-[20px]
        pb-[20px]
        bg-primary
        overflow-hidden
      "
			>
				<h1 className="text-white text-center">File</h1>
			</div>
			<div className="p-2 bg-gray-50">
				<ul className="flex flex-col bg-gray-300 p-4">
					{data?.entries.map((file) => (
						<li key={file.id} className="border-gray-400 flex flex-row mb-2">
							<div
								className="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
								onClick={() => handleClick(file.path_lower)}
							>
								<div className="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4">
									{file.is_downloadable ? "🧷" : "📂"}
								</div>
								<div className="flex-1 pl-1 mr-16">
									<div className="font-medium">{file.name}</div>
									<div className="text-gray-600 text-sm">{file.path_lower}</div>
								</div>
								<div className="text-gray-600 text-xs">
									{file.client_modified
										? new Date(file.client_modified).toLocaleDateString()
										: ""}
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</Page>
	);
}
