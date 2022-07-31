// User Page: Create a User
// User Page: List Users
import useSWR from "swr";
import Page from "../../component/Page";
// import { useSnackbar } from "notistack";

export default function Home() {
	const fetcher = (...args) => fetch(...args).then((res) => res.json());
	const { data: mock, mutate: getMock } = useSWR("/api/agent/list", fetcher);
	const { data: list, mutate: getList } = useSWR(
		"/api/agent/listAgent",
		fetcher
	);
	// const { enqueueSnackbar } = useSnackbar();

	async function saveUser(event) {
		event.preventDefault();
		const post = await fetch(`/api/agent/addAgent`, {
			method: "POST",
			body: JSON.stringify(mock),
		});

		if (post.status === 200) {
			getMock();
			getList();
			// enqueueSnackbar(`User has been added`, {
			// 	variant: "success",
			// });
		} else {
			// enqueueSnackbar(`${post.status}`, {
			// 	variant: "danger",
			// });
		}
	}
	return (
		<Page title="User">
			<div className="mt-10 sm:mt-0 p-5">
				<div className="md:grid md:grid-cols-3 md:gap-6">
					<div className="md:col-span-1">
						<div className="px-4 sm:px-0">
							<h3 className="text-lg font-medium leading-6 text-gray-900">
								Personal Information
							</h3>
							<p className="mt-1 text-sm text-gray-600">
								Use a permanent address where you can receive mail.
							</p>
						</div>
					</div>
					<div className="mt-5 md:mt-0 md:col-span-2">
						<form method="POST" onSubmit={saveUser}>
							{/* <form action="#" method="POST" onSubmit={(e) => saveUser(e)}> */}
							<div className="shadow overflow-hidden sm:rounded-md">
								<div className="px-4 py-5 bg-white sm:p-6">
									<div className="grid grid-cols-6 gap-6">
										<div className="col-span-6 sm:col-span-3">
											<label className="block text-sm font-medium text-gray-700">
												Photo
											</label>
											<div className="mt-1 flex items-center">
												<span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
													<img src={mock?.avatar} />
												</span>
											</div>
										</div>

										<div className="col-span-6 sm:col-span-3">
											<label
												htmlFor="username"
												className="block text-sm font-medium text-gray-700"
											>
												Username
											</label>
											<input
												key="username"
												type="text"
												disabled
												name="username"
												id="username"
												autoComplete="username"
												value={mock?.username}
												className="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
											/>
										</div>

										<div className="col-span-6 sm:col-span-3">
											<label
												htmlFor="first-name"
												className="block text-sm font-medium text-gray-700"
											>
												First name
											</label>
											<input
												type="text"
												disabled
												name="first-name"
												id="first-name"
												autoComplete="given-name"
												value={mock?.first}
												className="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
											/>
										</div>

										<div className="col-span-6 sm:col-span-3">
											<label
												htmlFor="last-name"
												className="block text-sm font-medium text-gray-700"
											>
												Last name
											</label>
											<input
												disabled
												type="text"
												name="last-name"
												id="last-name"
												autoComplete="family-name"
												value={mock?.last}
												className="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
											/>
										</div>

										<div className="col-span-6 sm:col-span-3">
											<label
												htmlFor="email-address"
												className="block text-sm font-medium text-gray-700"
											>
												Email address
											</label>
											<input
												type="text"
												disabled
												value={mock?.email}
												name="email-address"
												id="email-address"
												autoComplete="email"
												className="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
											/>
										</div>

										<div className="col-span-6 sm:col-span-3">
											<label
												htmlFor="country"
												className="block text-sm font-medium text-gray-700"
											>
												Country
											</label>
											<input
												type="country"
												name="country"
												id="country"
												autoComplete="country"
												disabled
												value={mock?.country}
												className="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
											/>
										</div>

										<div className="col-span-6">
											<label
												htmlFor="street-address"
												className="block text-sm font-medium text-gray-700"
											>
												Street address
											</label>
											<input
												type="text"
												name="street-address"
												id="street-address"
												autoComplete="street-address"
												value={mock?.street}
												disabled
												className="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
											/>
										</div>

										<div className="col-span-6 sm:col-span-6 lg:col-span-2">
											<label
												htmlFor="city"
												className="block text-sm font-medium text-gray-700"
											>
												City
											</label>
											<input
												type="text"
												name="city"
												id="city"
												disabled
												value={mock?.city}
												autoComplete="address-level2"
												className="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
											/>
										</div>

										<div className="col-span-6 sm:col-span-3 lg:col-span-2">
											<label
												htmlFor="region"
												className="block text-sm font-medium text-gray-700"
											>
												State / Province
											</label>
											<input
												type="text"
												name="region"
												id="region"
												disabled
												value={mock?.state}
												autoComplete="address-level1"
												className="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
											/>
										</div>

										<div className="col-span-6 sm:col-span-3 lg:col-span-2">
											<label
												htmlFor="postal-code"
												className="block text-sm font-medium text-gray-700"
											>
												ZIP / Postal code
											</label>
											<input
												type="text"
												disabled
												value={mock?.zipcode}
												name="postal-code"
												id="postal-code"
												autoComplete="postal-code"
												className="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
											/>
										</div>

										{/* <div className="col-span-6 sm:col-span-3 lg:col-span-2">
											<label
												htmlFor="birth"
												className="block text-sm font-medium text-gray-700"
											>
												Birth
											</label>
											<input
												type="date"
												disabled
												value={
													new Date(mock?.birth).toJSON().slice(0, 10)}
												name="birth"
												id="birth"
												autoComplete="birth"
												className="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
											/>
										</div> */}

										<div className="col-span-6 sm:col-span-3 lg:col-span-4">
											<label
												htmlFor="uuid"
												className="block text-sm font-medium text-gray-700"
											>
												UUID
											</label>
											<input
												type="text"
												disabled
												value={mock?.uuid}
												name="uuid"
												id="uuid"
												autoComplete="uuid"
												className="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
											/>
										</div>

										<div className="col-span-6 sm:col-span-3 lg:col-span-2 hidden">
											<label
												htmlFor="password"
												className="block text-sm font-medium text-gray-700"
											>
												Password
											</label>
											<input
												type="text"
												disabled
												value={mock?.password}
												name="password"
												id="password"
												autoComplete="password"
												className="p-2 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
											/>
										</div>
									</div>
								</div>
								<div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
									<button
										type="submit"
										className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
									>
										Save
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>

			<div className="hidden sm:block" aria-hidden="true">
				<div className="py-5">
					<div className="border-t border-gray-200" />
				</div>
			</div>

			<div className="max-w-3xl mx-auto">
				<div className="p-4 max-w-3xl bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
					<div className="flex justify-between items-center mb-4">
						<h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
							Latest Customers
						</h3>
						<a
							href="#"
							className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
						>
							View all
						</a>
					</div>
					<div className="flow-root">
						<ul
							role="list"
							className="divide-y divide-gray-200 dark:divide-gray-700"
						>
							{list?.map((ga) => (
								<li className="py-3 sm:py-4" key={ga._id}>
									<div className="flex items-center space-x-4">
										<div className="flex-shrink-0">
											<img
												className="w-8 h-8 rounded-full"
												src={ga.avatar}
												alt="Neil image"
											/>
										</div>
										<div className="flex-1 min-w-0">
											<p className="text-sm font-medium text-gray-900 truncate dark:text-white">
												{ga.first} {ga.last}
											</p>
											<p className="text-sm text-gray-500 truncate dark:text-gray-400">
												{ga.email}
											</p>
										</div>
										<div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
											{ga.username}
										</div>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</Page>
	);
}
