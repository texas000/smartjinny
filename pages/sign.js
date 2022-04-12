import Page from "../component/Page";
import Cookie from "js-cookie";
import * as gtag from "../gtag";
import { useRouter } from "next/router";

export default function Home() {
	const router = useRouter();
	async function handleSignSubmit(e) {
		e.preventDefault();
		const sign = await fetch("/api/login", {
			method: "POST",
			body: JSON.stringify({
				username: e.target[0].value,
				password: e.target[1].value,
			}),
		});
		const res = await sign.json();
		if (res.token) {
			Cookie.set("user_session", res.token);
			gtag.event({
				action: "login_attempt",
				category: "Login",
				label: "success",
			});
			router.push("/write");
		} else {
			gtag.event({
				action: "login_attempt",
				category: "Login",
				label: "failed",
			});
			alert("WRONG PASSWORD");
		}
	}

	return (
		<Page>
			{/* <!-- ====== Banner Section Start --> */}
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
								<h1 className="font-semibold text-white text-4xl">
									Log In Page
								</h1>
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
			{/* <!-- ====== Banner Section End --> */}

			{/* <!-- ====== Forms Section Start --> */}
			<section className="bg-[#F4F7FF] py-14 lg:py-20">
				<div className="container">
					<div className="flex flex-wrap -mx-4">
						<div className="w-full px-4">
							<div
								className="
                max-w-[525px]
                mx-auto
                text-center
                bg-white
                rounded-lg
                relative
                overflow-hidden
                py-14
                px-8
                sm:px-12
                md:px-[60px]
                wow
                fadeInUp
              "
								data-wow-delay=".15s"
							>
								<div className="mb-10 text-center">
									<a href="#" className="inline-block max-w-[160px] mx-auto">
										<img src="assets/images/logo/logo.svg" alt="logo" />
									</a>
								</div>
								<form onSubmit={handleSignSubmit}>
									<div className="mb-6">
										<input
											type="text"
											placeholder="Username"
											className="
                      w-full
                      rounded-md
                      border
                      bordder-[#E9EDF4]
                      py-3
                      px-5
                      bg-[#FCFDFE]
                      text-base text-body-color
                      placeholder-[#ACB6BE]
                      outline-none
                      focus-visible:shadow-none
                      focus:border-primary
                      transition
                    "
										/>
									</div>
									<div className="mb-6">
										<input
											type="password"
											placeholder="Password"
											className="
                      w-full
                      rounded-md
                      border
                      bordder-[#E9EDF4]
                      py-3
                      px-5
                      bg-[#FCFDFE]
                      text-base text-body-color
                      placeholder-[#ACB6BE]
                      outline-none
                      focus-visible:shadow-none
                      focus:border-primary
                      transition
                    "
										/>
									</div>
									<div className="mb-10">
										<input
											type="submit"
											value="Sign In"
											className="
                      w-full
                      rounded-md
                      border
                      bordder-primary
                      py-3
                      px-5
                      bg-primary
                      text-base text-white
                      cursor-pointer
                      hover:shadow-md
                      transition
                      duration-300
                      ease-in-out
                    "
										/>
									</div>
								</form>

								<a
									href="#"
									className="
                  text-base
                  inline-block
                  mb-2
                  text-[#adadad]
                  hover:text-primary
                "
								>
									Forget Password?
								</a>

								<div>
									<span className="absolute top-1 right-1">
										<svg
											width="40"
											height="40"
											viewBox="0 0 40 40"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<circle
												cx="1.39737"
												cy="38.6026"
												r="1.39737"
												transform="rotate(-90 1.39737 38.6026)"
												fill="#3056D3"
											/>
											<circle
												cx="1.39737"
												cy="1.99122"
												r="1.39737"
												transform="rotate(-90 1.39737 1.99122)"
												fill="#3056D3"
											/>
											<circle
												cx="13.6943"
												cy="38.6026"
												r="1.39737"
												transform="rotate(-90 13.6943 38.6026)"
												fill="#3056D3"
											/>
											<circle
												cx="13.6943"
												cy="1.99122"
												r="1.39737"
												transform="rotate(-90 13.6943 1.99122)"
												fill="#3056D3"
											/>
											<circle
												cx="25.9911"
												cy="38.6026"
												r="1.39737"
												transform="rotate(-90 25.9911 38.6026)"
												fill="#3056D3"
											/>
											<circle
												cx="25.9911"
												cy="1.99122"
												r="1.39737"
												transform="rotate(-90 25.9911 1.99122)"
												fill="#3056D3"
											/>
											<circle
												cx="38.288"
												cy="38.6026"
												r="1.39737"
												transform="rotate(-90 38.288 38.6026)"
												fill="#3056D3"
											/>
											<circle
												cx="38.288"
												cy="1.99122"
												r="1.39737"
												transform="rotate(-90 38.288 1.99122)"
												fill="#3056D3"
											/>
											<circle
												cx="1.39737"
												cy="26.3057"
												r="1.39737"
												transform="rotate(-90 1.39737 26.3057)"
												fill="#3056D3"
											/>
											<circle
												cx="13.6943"
												cy="26.3057"
												r="1.39737"
												transform="rotate(-90 13.6943 26.3057)"
												fill="#3056D3"
											/>
											<circle
												cx="25.9911"
												cy="26.3057"
												r="1.39737"
												transform="rotate(-90 25.9911 26.3057)"
												fill="#3056D3"
											/>
											<circle
												cx="38.288"
												cy="26.3057"
												r="1.39737"
												transform="rotate(-90 38.288 26.3057)"
												fill="#3056D3"
											/>
											<circle
												cx="1.39737"
												cy="14.0086"
												r="1.39737"
												transform="rotate(-90 1.39737 14.0086)"
												fill="#3056D3"
											/>
											<circle
												cx="13.6943"
												cy="14.0086"
												r="1.39737"
												transform="rotate(-90 13.6943 14.0086)"
												fill="#3056D3"
											/>
											<circle
												cx="25.9911"
												cy="14.0086"
												r="1.39737"
												transform="rotate(-90 25.9911 14.0086)"
												fill="#3056D3"
											/>
											<circle
												cx="38.288"
												cy="14.0086"
												r="1.39737"
												transform="rotate(-90 38.288 14.0086)"
												fill="#3056D3"
											/>
										</svg>
									</span>
									<span className="absolute left-1 bottom-1">
										<svg
											width="29"
											height="40"
											viewBox="0 0 29 40"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<circle
												cx="2.288"
												cy="25.9912"
												r="1.39737"
												transform="rotate(-90 2.288 25.9912)"
												fill="#3056D3"
											/>
											<circle
												cx="14.5849"
												cy="25.9911"
												r="1.39737"
												transform="rotate(-90 14.5849 25.9911)"
												fill="#3056D3"
											/>
											<circle
												cx="26.7216"
												cy="25.9911"
												r="1.39737"
												transform="rotate(-90 26.7216 25.9911)"
												fill="#3056D3"
											/>
											<circle
												cx="2.288"
												cy="13.6944"
												r="1.39737"
												transform="rotate(-90 2.288 13.6944)"
												fill="#3056D3"
											/>
											<circle
												cx="14.5849"
												cy="13.6943"
												r="1.39737"
												transform="rotate(-90 14.5849 13.6943)"
												fill="#3056D3"
											/>
											<circle
												cx="26.7216"
												cy="13.6943"
												r="1.39737"
												transform="rotate(-90 26.7216 13.6943)"
												fill="#3056D3"
											/>
											<circle
												cx="2.288"
												cy="38.0087"
												r="1.39737"
												transform="rotate(-90 2.288 38.0087)"
												fill="#3056D3"
											/>
											<circle
												cx="2.288"
												cy="1.39739"
												r="1.39737"
												transform="rotate(-90 2.288 1.39739)"
												fill="#3056D3"
											/>
											<circle
												cx="14.5849"
												cy="38.0089"
												r="1.39737"
												transform="rotate(-90 14.5849 38.0089)"
												fill="#3056D3"
											/>
											<circle
												cx="26.7216"
												cy="38.0089"
												r="1.39737"
												transform="rotate(-90 26.7216 38.0089)"
												fill="#3056D3"
											/>
											<circle
												cx="14.5849"
												cy="1.39761"
												r="1.39737"
												transform="rotate(-90 14.5849 1.39761)"
												fill="#3056D3"
											/>
											<circle
												cx="26.7216"
												cy="1.39761"
												r="1.39737"
												transform="rotate(-90 26.7216 1.39761)"
												fill="#3056D3"
											/>
										</svg>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- ====== Forms Section End --> */}
		</Page>
	);
}
