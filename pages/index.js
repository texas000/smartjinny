import React from "react";
import Page from "../component/Page";
import HeroBanner from "../component/Home/HeroBanner";

export default function Home({ data }) {
		return (
		<Page title={"SMARTJINNY"}>
			<HeroBanner title="SMARTJINNY" mTitle="SMARTJIN" />
			{/* <!-- ====== Features Section Start --> */}
			<section className="pt-20 lg:pt-[120px] pb-8 lg:pb-[70px]">
				<div className="container">
					<div className="flex flex-wrap -mx-4">
						<div className="w-full px-4">
							<div className="mb-12 lg:mb-20 max-w-[620px]">
								<span className="font-semibold xtext-lg text-primary mb-2 block">
									Features
								</span>
								<h2
									className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[42px]
                  text-dark
                  mb-4
                "
								>
									Main Features Of GERP
								</h2>
								<p
									className="
                  text-lg
                  sm:text-xl
                  leading-relaxed
                  sm:leading-relaxed
                  text-body-color
                "
								>
									There are many variations of passages of Lorem Ipsum available
									but the majority have suffered alteration in some form.
								</p>
							</div>
						</div>
					</div>
					<div className="flex flex-wrap -mx-4">
						<div className="w-full md:w-1/2 lg:w-1/4 px-4">
							<div
								className="bg-white mb-12 group wow fadeInUp"
								data-wow-delay=".1s"
							>
								<div
									className="
                  w-[70px]
                  h-[70px]
                  flex
                  items-center
                  justify-center
                  bg-primary
                  rounded-2xl
                  mb-8
                  relative
                  z-10
                "
								>
									<span
										className="
                    w-[70px]
                    h-[70px]
                    flex
                    items-center
                    justify-center
                    bg-primary bg-opacity-20
                    rounded-2xl
                    mb-8
                    absolute
                    z-[-1]
                    top-0
                    left-0
                    rotate-[25deg]
                    group-hover:rotate-45
                    duration-300
                  "
									></span>
									<svg
										width="35"
										height="35"
										viewBox="0 0 52 52"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M44.9313 11.7H38.9188C40.5438 10.9687 41.7626 9.99374 42.2501 8.69374C42.9001 6.98749 42.2501 5.19999 40.3001 3.33124C38.1876 1.29999 35.9938 0.568738 33.8001 1.13749C29.9813 2.11249 27.4626 7.06874 26.2438 9.99374C25.1063 7.06874 22.5876 2.11249 18.6876 1.13749C16.4938 0.568738 14.3001 1.29999 12.1876 3.33124C10.2376 5.19999 9.5876 6.98749 10.2376 8.69374C10.7251 9.99374 12.0251 10.9687 13.5688 11.7H7.06885C5.0376 11.7 3.4126 13.325 3.4126 15.3562V21.5312C3.4126 23.5625 5.0376 25.1875 7.06885 25.1875H7.71885V46.2312C7.71885 48.8312 9.83135 51.025 12.5126 51.025H40.1376C42.7376 51.025 44.9313 48.9125 44.9313 46.2312V25.1875C46.9626 25.1875 48.5876 23.5625 48.5876 21.5312V15.3562C48.5063 13.325 46.8813 11.7 44.9313 11.7ZM34.5313 3.98124C34.7751 3.89999 35.0188 3.89999 35.1813 3.89999C36.1563 3.89999 37.2126 4.38749 38.2688 5.52499C38.7563 6.01249 39.8126 7.06874 39.5688 7.79999C39.0001 9.34374 33.9626 10.6437 28.9251 11.05C30.0626 8.36874 32.1751 4.54999 34.5313 3.98124ZM13.0001 7.71874C12.7563 6.98749 13.8126 5.93124 14.3001 5.44374C15.4376 4.38749 16.4126 3.81874 17.3876 3.81874C17.6313 3.81874 17.8751 3.81874 18.0376 3.89999C20.4751 4.54999 22.5063 8.28749 23.6438 10.9687C18.6063 10.5625 13.5688 9.26249 13.0001 7.71874ZM42.0063 46.2312C42.0063 47.2875 41.1126 48.1812 40.0563 48.1812H12.4313C11.3751 48.1812 10.4813 47.2875 10.4813 46.2312V25.1875H41.9251V46.2312H42.0063ZM45.6626 21.5312C45.6626 22.0187 45.3376 22.3437 44.8501 22.3437H7.06885C6.6626 22.3437 6.25635 22.0187 6.25635 21.5312V15.3562C6.25635 14.95 6.6626 14.5437 7.06885 14.5437H44.8501C45.2563 14.5437 45.6626 14.8687 45.6626 15.3562V21.5312Z"
											fill="white"
										/>
									</svg>
								</div>
								<h4 className="font-bold text-xl text-dark mb-3">
									Approval System
								</h4>
								<p className="text-body-color mb-8 lg:mb-11">
									Professional approval solutions
									<br />
									(전자 결재 시스템)
								</p>

								<a
									href="#"
									className="font-medium text-base text-body-color hover:text-primary"
								>
									Learn More
								</a>
							</div>
						</div>
						<div className="w-full md:w-1/2 lg:w-1/4 px-4">
							<div
								className="bg-white mb-12 group wow fadeInUp"
								data-wow-delay=".15s"
							>
								<div
									className="
                  w-[70px]
                  h-[70px]
                  flex
                  items-center
                  justify-center
                  bg-primary
                  rounded-2xl
                  mb-8
                  relative
                  z-10
                "
								>
									<span
										className="
                    w-[70px]
                    h-[70px]
                    flex
                    items-center
                    justify-center
                    bg-primary bg-opacity-20
                    rounded-2xl
                    mb-8
                    absolute
                    z-[-1]
                    top-0
                    left-0
                    rotate-[25deg]
                    group-hover:rotate-45
                    duration-300
                  "
									></span>
									<svg
										width="35"
										height="35"
										viewBox="0 0 52 52"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M49.8062 23.3187L43.875 17.3875C43.3063 16.8187 42.4125 16.8187 41.8438 17.3875C41.275 17.9562 41.275 18.85 41.8438 19.4187L46.9625 24.6187H27.4625V4.87498L32.5812 10.075C33.15 10.6437 34.0437 10.6437 34.6125 10.075C35.1812 9.50623 35.1812 8.61248 34.6125 8.04373L28.6812 2.11248C27.95 1.38123 26.975 0.974976 26 0.974976C24.9438 0.974976 24.05 1.38123 23.3188 2.11248L17.3875 8.04373C16.8187 8.61248 16.8187 9.50623 17.3875 10.075C17.6312 10.3187 18.0375 10.4812 18.3625 10.4812C18.6875 10.4812 19.0937 10.3187 19.3375 10.075L24.6187 4.87498V24.5375H4.95625L10.075 19.3375C10.6437 18.7687 10.6437 17.875 10.075 17.3062C9.50625 16.7375 8.6125 16.7375 8.04375 17.3062L2.1125 23.2375C0.65 24.7 0.65 27.1375 2.1125 28.6L8.04375 34.5312C8.2875 34.775 8.69375 34.9375 9.01875 34.9375C9.34375 34.9375 9.75 34.775 9.99375 34.5312C10.5625 33.9625 10.5625 33.0687 9.99375 32.5L4.79375 27.3H24.4563V47.125L19.2563 41.925C18.6875 41.3562 17.7938 41.3562 17.225 41.925C16.6563 42.4937 16.6563 43.3875 17.225 43.9562L23.1562 49.8875C23.8875 50.6187 24.8625 51.025 25.8375 51.025C26.8937 51.025 27.7875 50.6187 28.5187 49.8875L34.45 43.9562C35.0188 43.3875 35.0188 42.4937 34.45 41.925C33.8813 41.3562 32.9875 41.3562 32.4188 41.925L27.4625 47.125V27.3812H47.0438L41.8438 32.5812C41.275 33.15 41.275 34.0437 41.8438 34.6125C42.0875 34.8562 42.4938 35.0187 42.8188 35.0187C43.1438 35.0187 43.55 34.8562 43.7938 34.6125L49.725 28.6812C51.2688 27.2187 51.2687 24.7812 49.8062 23.3187Z"
											fill="white"
										/>
									</svg>
								</div>
								<h4 className="font-bold text-xl text-dark mb-3">
									Customizable Solution
								</h4>
								<p className="text-body-color mb-8 lg:mb-11">
									Enhance Customer Relationship Management
								</p>
								<a
									href="#"
									className="font-medium text-base text-body-color hover:text-primary"
								>
									Learn More
								</a>
							</div>
						</div>
						<div className="w-full md:w-1/2 lg:w-1/4 px-4">
							<div
								className="bg-white mb-12 group wow fadeInUp"
								data-wow-delay=".2s"
							>
								<div
									className="
                  w-[70px]
                  h-[70px]
                  flex
                  items-center
                  justify-center
                  bg-primary
                  rounded-2xl
                  mb-8
                  relative
                  z-10
                "
								>
									<span
										className="
                    w-[70px]
                    h-[70px]
                    flex
                    items-center
                    justify-center
                    bg-primary bg-opacity-20
                    rounded-2xl
                    mb-8
                    absolute
                    z-[-1]
                    top-0
                    left-0
                    rotate-[25deg]
                    group-hover:rotate-45
                    duration-300
                  "
									></span>
									<svg
										width="35"
										height="35"
										viewBox="0 0 35 35"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M10.7734 14.3281H3.82813C2.07813 14.3281 0.65625 12.9062 0.65625 11.1562V4.21094C0.65625 2.46094 2.07813 1.03906 3.82813 1.03906H10.7734C12.5234 1.03906 13.9453 2.46094 13.9453 4.21094V11.1562C13.9453 12.9062 12.5234 14.3281 10.7734 14.3281ZM3.82813 2.95312C3.17188 2.95312 2.57031 3.5 2.57031 4.21094V11.1562C2.57031 11.8125 3.11719 12.4141 3.82813 12.4141H10.7734C11.4297 12.4141 12.0313 11.8672 12.0313 11.1562V4.21094C12.0313 3.55469 11.4844 2.95312 10.7734 2.95312H3.82813Z"
											fill="white"
										/>
										<path
											d="M31.1719 14.3281H24.2266C22.4766 14.3281 21.0547 12.9062 21.0547 11.1562V4.21094C21.0547 2.46094 22.4766 1.03906 24.2266 1.03906H31.1719C32.9219 1.03906 34.3438 2.46094 34.3438 4.21094V11.1562C34.3438 12.9062 32.9219 14.3281 31.1719 14.3281ZM24.2266 2.95312C23.5703 2.95312 22.9688 3.5 22.9688 4.21094V11.1562C22.9688 11.8125 23.5156 12.4141 24.2266 12.4141H31.1719C31.8281 12.4141 32.4297 11.8672 32.4297 11.1562V4.21094C32.4297 3.55469 31.8828 2.95312 31.1719 2.95312H24.2266Z"
											fill="white"
										/>
										<path
											d="M10.7734 33.9609H3.82813C2.07813 33.9609 0.65625 32.5391 0.65625 30.7891V23.8438C0.65625 22.0938 2.07813 20.6719 3.82813 20.6719H10.7734C12.5234 20.6719 13.9453 22.0938 13.9453 23.8438V30.7891C13.9453 32.5391 12.5234 33.9609 10.7734 33.9609ZM3.82813 22.5859C3.17188 22.5859 2.57031 23.1328 2.57031 23.8438V30.7891C2.57031 31.4453 3.11719 32.0469 3.82813 32.0469H10.7734C11.4297 32.0469 12.0313 31.5 12.0313 30.7891V23.8438C12.0313 23.1875 11.4844 22.5859 10.7734 22.5859H3.82813Z"
											fill="white"
										/>
										<path
											d="M31.1719 33.9609H24.2266C22.4766 33.9609 21.0547 32.5391 21.0547 30.7891V23.8438C21.0547 22.0938 22.4766 20.6719 24.2266 20.6719H31.1719C32.9219 20.6719 34.3438 22.0938 34.3438 23.8438V30.7891C34.3438 32.5391 32.9219 33.9609 31.1719 33.9609ZM24.2266 22.5859C23.5703 22.5859 22.9688 23.1328 22.9688 23.8438V30.7891C22.9688 31.4453 23.5156 32.0469 24.2266 32.0469H31.1719C31.8281 32.0469 32.4297 31.5 32.4297 30.7891V23.8438C32.4297 23.1875 31.8828 22.5859 31.1719 22.5859H24.2266Z"
											fill="white"
										/>
									</svg>
								</div>
								<h4 className="font-bold text-xl text-dark mb-3">
									User Friendly Web Based
								</h4>
								<p className="text-body-color mb-8 lg:mb-11">Web Based Only</p>
								<a
									href="#"
									className="font-medium text-base text-body-color hover:text-primary"
								>
									Learn More
								</a>
							</div>
						</div>
						<div className="w-full md:w-1/2 lg:w-1/4 px-4">
							<div
								className="bg-white mb-12 group wow fadeInUp"
								data-wow-delay=".25s"
							>
								<div
									className="
                  w-[70px]
                  h-[70px]
                  flex
                  items-center
                  justify-center
                  bg-primary
                  rounded-2xl
                  mb-8
                  relative
                  z-10
                "
								>
									<span
										className="
                    w-[70px]
                    h-[70px]
                    flex
                    items-center
                    justify-center
                    bg-primary bg-opacity-20
                    rounded-2xl
                    mb-8
                    absolute
                    z-[-1]
                    top-0
                    left-0
                    rotate-[25deg]
                    group-hover:rotate-45
                    duration-300
                  "
									></span>
									<svg
										width="35"
										height="35"
										viewBox="0 0 35 35"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M29.5312 21.6562L28.6563 21.1641L29.6953 20.5625C30.7344 19.9062 31.3359 18.8125 31.2812 17.6094C31.2266 16.4063 30.625 15.3125 29.5312 14.7109L27.8906 13.7813L29.6406 12.6875C30.6797 12.0313 31.2812 10.9375 31.2266 9.73438C31.1719 8.53125 30.5703 7.4375 29.4766 6.83594L19.25 1.09375C18.2109 0.492187 16.9531 0.546875 15.9141 1.09375L5.41406 7.21875C4.375 7.82031 3.71875 8.91406 3.71875 10.1172C3.71875 11.3203 4.375 12.4141 5.41406 13.0156L7.10938 14L5.41406 14.9844C4.375 15.5859 3.71875 16.6797 3.71875 17.8828C3.71875 19.0859 4.32031 20.1797 5.41406 20.7812L6.39844 21.3281L5.46875 21.875C4.42969 22.4766 3.77344 23.5703 3.77344 24.7734C3.77344 25.9766 4.375 27.0703 5.46875 27.6719L15.9141 33.6875C16.4609 34.0156 17.0078 34.125 17.6094 34.125C18.2109 34.125 18.8125 33.9609 19.3594 33.6328L29.6953 27.2891C30.7344 26.6328 31.3359 25.5391 31.2812 24.3359C31.2266 23.2969 30.625 22.2031 29.5312 21.6562ZM5.63281 10.1172C5.63281 9.57031 5.90625 9.13281 6.34375 8.85938L16.8438 2.78906C17.0625 2.67969 17.3359 2.57031 17.5547 2.57031C17.7734 2.57031 18.0469 2.625 18.2656 2.73437L28.5469 8.47656C28.9844 8.75 29.2578 9.1875 29.3125 9.73438C29.3125 10.2812 29.0391 10.7188 28.6016 10.9922L18.3203 17.3906C17.8828 17.6641 17.2812 17.6641 16.8438 17.3906L6.39844 11.375C5.90625 11.1562 5.63281 10.6641 5.63281 10.1172ZM5.63281 17.9375C5.63281 17.3906 5.90625 16.9531 6.34375 16.6797L9.02344 15.1484L15.8594 19.0859C16.4062 19.4141 16.9531 19.5234 17.5547 19.5234C18.1562 19.5234 18.7578 19.3594 19.3047 19.0312L26.0312 14.875L28.6016 16.2969C29.0391 16.5703 29.3125 17.0078 29.3672 17.5547C29.3672 18.1016 29.0938 18.5391 28.6563 18.8125L18.3203 25.2656C17.8828 25.5391 17.2812 25.5391 16.8438 25.2656L6.39844 19.25C5.90625 18.9766 5.63281 18.4844 5.63281 17.9375ZM28.6563 25.8125L18.3203 32.2109C17.8828 32.4844 17.2812 32.4844 16.8438 32.2109L6.39844 26.1953C5.96094 25.9219 5.6875 25.4844 5.6875 24.9375C5.6875 24.3906 5.96094 23.9531 6.39844 23.6797L8.3125 22.5859L15.8594 26.9609C16.4062 27.2891 16.9531 27.3984 17.5547 27.3984C18.1562 27.3984 18.7578 27.2344 19.3047 26.9062L26.7969 22.2578L28.6563 23.2969C29.0938 23.5703 29.3672 24.0078 29.4219 24.5547C29.3672 25.0469 29.0938 25.5391 28.6563 25.8125Z"
											fill="white"
										/>
									</svg>
								</div>
								<h4 className="font-bold text-xl text-dark mb-3">
									Agile Development
								</h4>
								<p className="text-body-color mb-8 lg:mb-11">
									Scrum Master Certificate
								</p>
								<a
									href="#"
									className="font-medium text-base text-body-color hover:text-primary"
								>
									Learn More
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- ====== Features Section End -->			 */}

			{/* <!-- ====== About Section Start --> */}
			<section
				id="about"
				className="pt-20 lg:pt-[120px] pb-20 lg:pb-[120px] bg-[#f3f4fe]"
			>
				<div className="container">
					<div className="bg-white wow fadeInUp" data-wow-delay=".2s">
						<div className="flex flex-wrap -mx-4">
							<div className="w-full px-4">
								<div
									className="
                  lg:flex
                  items-center
                  justify-between
                  border
                  overflow-hidden
                "
								>
									<div
										className="
                    lg:max-w-[565px]
                    xl:max-w-[640px]
                    w-full
                    py-12
                    px-7
                    sm:px-12
                    md:p-16
                    lg:py-9 lg:px-16
                    xl:p-[70px]
                  "
									>
										<span
											className="
                      text-sm
                      font-medium
                      text-white
                      py-2
                      px-5
                      bg-primary
                      inline-block
                      mb-5
                    "
										>
											About Us
										</span>
										<h2
											className="
                      font-bold
                      text-3xl
                      sm:text-4xl
                      2xl:text-[40px]
                      sm:leading-snug
                      text-dark
                      mb-6
                    "
										>
											Brilliant Toolkit to Build Nextgen Website Faster.
										</h2>
										<p className="text-base text-body-color mb-9 leading-relaxed">
											The main ‘thrust' is to focus on educating attendees on
											how to best protect highly vulnerable business
											applications with interactive panel discussions and
											roundtables led by subject matter experts.
										</p>
										<p className="text-base text-body-color mb-9 leading-relaxed">
											The main ‘thrust' is to focus on educating attendees on
											how to best protect highly vulnerable business
											applications with interactive panel.
										</p>
										<a
											href="#"
											className="
                      inline-flex
                      items-center
                      justify-center
                      py-4
                      px-6
                      rounded
                      text-white
                      bg-primary
                      text-base
                      font-medium
                      hover:bg-opacity-90 hover:shadow-lg
                      transition
                      duration-300
                      ease-in-out
                    "
										>
											Learn More
										</a>
									</div>
									<div className="text-center">
										<div className="relative inline-block z-10">
											<img
												src="assets/images/about/about-image.svg"
												alt="image"
												className="mx-auto lg:ml-auto"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- ====== About Section End --> */}

			{/* <!-- ====== Pricing Section Start --> */}
			<section
				id="pricing"
				className="
        bg-white
        pt-20
        lg:pt-[120px]
        pb-12
        lg:pb-[90px]
        relative
        z-20
        overflow-hidden
      "
			>
				<div className="container">
					<div className="flex flex-wrap -mx-4">
						<div className="w-full px-4">
							<div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[620px]">
								<span className="font-semibold text-lg text-primary mb-2 block">
									Pricing Table
								</span>
								<h2
									className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                "
								>
									Our Pricing Plan
								</h2>
								<p
									className="
                  text-lg
                  sm:text-xl
                  leading-relaxed
                  sm:leading-relaxed
                  text-body-color
                "
								>
									There are many variations of passages of Lorem Ipsum available
									but the majority have suffered alteration in some form.
								</p>
							</div>
						</div>
					</div>

					<div className="flex flex-wrap items-center justify-center">
						<div className="w-full md:w-1/2 lg:w-1/3">
							<div
								className="
                bg-white
                rounded-xl
                relative
                z-10
                overflow-hidden
                border border-primary border-opacity-20
                shadow-pricing
                py-10
                px-8
                sm:p-12
                lg:py-10 lg:px-6
                xl:p-12
                mb-10
                text-center
                wow
                fadeInUp
              "
								data-wow-delay=".15s
              "
							>
								<span className="text-dark font-medium text-base uppercase block mb-2">
									STARTING FROM
								</span>
								<h2 className="font-semibold text-primary mb-9 text-[28px]">
									$ 19.99/mo
								</h2>

								<div className="mb-10">
									<p
										className="
                    text-base
                    font-medium
                    text-body-color
                    leading-loose
                    mb-1
                  "
									>
										1 User
									</p>
									<p
										className="
                    text-base
                    font-medium
                    text-body-color
                    leading-loose
                    mb-1
                  "
									>
										All UI components
									</p>
									<p
										className="
                    text-base
                    font-medium
                    text-body-color
                    leading-loose
                    mb-1
                  "
									>
										Lifetime access
									</p>
									<p
										className="
                    text-base
                    font-medium
                    text-body-color
                    leading-loose
                    mb-1
                  "
									>
										Free updates
									</p>
									<p
										className="
                    text-base
                    font-medium
                    text-body-color
                    leading-loose
                    mb-1
                  "
									>
										Use on 1 (one) project
									</p>
									<p
										className="
                    text-base
                    font-medium
                    text-body-color
                    leading-loose
                    mb-1
                  "
									>
										3 Months support
									</p>
								</div>
								<div className="w-full">
									<a
										href="#"
										className="
                    inline-block
                    text-base
                    font-medium
                    text-primary
                    bg-transparent
                    border border-[#D4DEFF]
                    rounded-full
                    text-center
                    py-4
                    px-11
                    hover:text-white hover:bg-primary hover:border-primary
                    transition
                    duration-300
                    ease-in-out
                  "
									>
										Purchase Now
									</a>
								</div>
								<span
									className="
                  absolute
                  left-0
                  bottom-0
                  z-[-1]
                  w-14
                  h-14
                  rounded-tr-full
                  block
                  bg-primary
                "
								></span>
							</div>
						</div>
						<div className="w-full md:w-1/2 lg:w-1/3">
							<div
								className="
                bg-primary bg-gradient-to-b
                from-primary
                to-[#179BEE]
                rounded-xl
                relative
                z-10
                overflow-hidden
                shadow-pricing
                py-10
                px-8
                sm:p-12
                lg:py-10 lg:px-6
                xl:p-12
                mb-10
                text-center
                wow
                fadeInUp
              "
								data-wow-delay=".1s
              "
							>
								<span
									className="
                  inline-block
                  py-2
                  px-6
                  border border-white
                  rounded-full
                  text-base
                  font-semibold
                  text-primary
                  bg-white
                  uppercase
                  mb-5
                "
								>
									POPULAR
								</span>
								<span className="text-white font-medium text-base uppercase block mb-2">
									STARTING FROM
								</span>
								<h2 className="font-semibold text-white mb-9 text-[28px]">
									$ 19.99/mo
								</h2>

								<div className="mb-10">
									<p className="text-base font-medium text-white leading-loose mb-1">
										5 User
									</p>
									<p className="text-base font-medium text-white leading-loose mb-1">
										All UI components
									</p>
									<p className="text-base font-medium text-white leading-loose mb-1">
										Lifetime access
									</p>
									<p className="text-base font-medium text-white leading-loose mb-1">
										Free updates
									</p>
									<p className="text-base font-medium text-white leading-loose mb-1">
										Use on 1 (one) project
									</p>
									<p className="text-base font-medium text-white leading-loose mb-1">
										4 Months support
									</p>
								</div>
								<div className="w-full">
									<a
										href="#"
										className="
                    inline-block
                    text-base
                    font-medium
                    text-dark
                    bg-white
                    border border-white
                    rounded-full
                    text-center
                    py-4
                    px-11
                    hover:text-white hover:bg-dark hover:border-dark
                    transition
                    duration-300
                    ease-in-out
                  "
									>
										Purchase Now
									</a>
								</div>
							</div>
						</div>
						<div className="w-full md:w-1/2 lg:w-1/3">
							<div
								className="
                bg-white
                rounded-xl
                relative
                z-10
                overflow-hidden
                border border-primary border-opacity-20
                shadow-pricing
                py-10
                px-8
                sm:p-12
                lg:py-10 lg:px-6
                xl:p-12
                mb-10
                text-center
                wow
                fadeInUp
              "
								data-wow-delay=".15s
              "
							>
								<span className="text-dark font-medium text-base uppercase block mb-2">
									STARTING FROM
								</span>
								<h2 className="font-semibold text-primary mb-9 text-[28px]">
									$ 70.99/mo
								</h2>

								<div className="mb-10">
									<p
										className="
                    text-base
                    font-medium
                    text-body-color
                    leading-loose
                    mb-1
                  "
									>
										1 User
									</p>
									<p
										className="
                    text-base
                    font-medium
                    text-body-color
                    leading-loose
                    mb-1
                  "
									>
										All UI components
									</p>
									<p
										className="
                    text-base
                    font-medium
                    text-body-color
                    leading-loose
                    mb-1
                  "
									>
										Lifetime access
									</p>
									<p
										className="
                    text-base
                    font-medium
                    text-body-color
                    leading-loose
                    mb-1
                  "
									>
										Free updates
									</p>
									<p
										className="
                    text-base
                    font-medium
                    text-body-color
                    leading-loose
                    mb-1
                  "
									>
										Use on unlimited project
									</p>
									<p
										className="
                    text-base
                    font-medium
                    text-body-color
                    leading-loose
                    mb-1
                  "
									>
										4 Months support
									</p>
								</div>
								<div className="w-full">
									<a
										href="#"
										className="
                    inline-block
                    text-base
                    font-medium
                    text-primary
                    bg-transparent
                    border border-[#D4DEFF]
                    rounded-full
                    text-center
                    py-4
                    px-11
                    hover:text-white hover:bg-primary hover:border-primary
                    transition
                    duration-300
                    ease-in-out
                  "
									>
										Purchase Now
									</a>
								</div>

								<span
									className="
                  absolute
                  right-0
                  top-0
                  z-[-1]
                  w-14
                  h-14
                  rounded-bl-full
                  block
                  bg-secondary
                "
								></span>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* <!-- ====== Pricing Section End --> */}
			{/* <!-- ====== Faq Section Start --> */}
			<section
				className="
        bg-[#f3f4ff]
        pt-20
        lg:pt-[120px]
        pb-12
        lg:pb-[90px]
        relative
        z-20
        overflow-hidden
      "
			>
				<div className="container">
					<div className="flex flex-wrap -mx-4">
						<div className="w-full px-4">
							<div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[620px]">
								<span className="font-semibold text-lg text-primary mb-2 block">
									FAQ
								</span>
								<h2
									className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[42px]
                  text-dark
                  mb-4
                "
								>
									Any Questions? Answered
								</h2>
								<p
									className="
                  text-lg
                  sm:text-xl
                  leading-relaxed
                  sm:leading-relaxed
                  text-body-color
                "
								>
									There are many variations of passages of Lorem Ipsum available
									but the majority have suffered alteration in some form.
								</p>
							</div>
						</div>
					</div>

					<div className="flex flex-wrap -mx-4">
						<div className="w-full lg:w-1/2 px-4">
							<div
								className="
                single-faq
                w-full
                bg-white
                border border-[#F3F4FE]
                rounded-lg
                p-5
                sm:p-8
                mb-8
                wow
                fadeInUp
              "
								data-wow-delay=".1s
              "
							>
								<button className="faq-btn flex items-center w-full text-left">
									<div
										className="
                    w-full
                    max-w-[40px]
                    h-10
                    flex
                    items-center
                    justify-center
                    rounded-lg
                    bg-primary
                    text-primary
                    bg-opacity-5
                    mr-5
                  "
									>
										<svg
											width="17"
											height="10"
											viewBox="0 0 17 10"
											className="fill-current icon"
										>
											<path
												d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
												fill="#3056D3"
												stroke="#3056D3"
											/>
										</svg>
									</div>
									<div className="w-full">
										<h4 className="text-base sm:text-lg font-semibold text-black">
											How to use TailGrids?
										</h4>
									</div>
								</button>
								<div className="faq-content pl-[62px] hidden">
									<p className="text-base text-body-color leading-relaxed py-3">
										It takes 2-3 weeks to get your first blog post ready. That
										includes the in-depth research & creation of your monthly
										content marketing strategy that we do before writing your
										first blog post, Ipsum available .
									</p>
								</div>
							</div>
							<div
								className="
                single-faq
                w-full
                bg-white
                border border-[#F3F4FE]
                rounded-lg
                p-5
                sm:p-8
                mb-8
                wow
                fadeInUp
              "
								data-wow-delay=".15s
              "
							>
								<button className="faq-btn flex items-center w-full text-left">
									<div
										className="
                    w-full
                    max-w-[40px]
                    h-10
                    flex
                    items-center
                    justify-center
                    rounded-lg
                    bg-primary
                    text-primary
                    bg-opacity-5
                    mr-5
                  "
									>
										<svg
											width="17"
											height="10"
											viewBox="0 0 17 10"
											className="fill-current icon"
										>
											<path
												d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
												fill="#3056D3"
												stroke="#3056D3"
											/>
										</svg>
									</div>
									<div className="w-full">
										<h4 className="text-base sm:text-lg font-semibold text-black">
											How to download icons from LineIcons?
										</h4>
									</div>
								</button>
								<div className="faq-content pl-[62px] hidden">
									<p className="text-base text-body-color leading-relaxed py-3">
										It takes 2-3 weeks to get your first blog post ready. That
										includes the in-depth research & creation of your monthly
										content marketing strategy that we do before writing your
										first blog post, Ipsum available .
									</p>
								</div>
							</div>
							<div
								className="
                single-faq
                w-full
                bg-white
                border border-[#F3F4FE]
                rounded-lg
                p-5
                sm:p-8
                mb-8
                wow
                fadeInUp
              "
								data-wow-delay=".2s
              "
							>
								<button className="faq-btn flex items-center w-full text-left">
									<div
										className="
                    w-full
                    max-w-[40px]
                    h-10
                    flex
                    items-center
                    justify-center
                    rounded-lg
                    bg-primary
                    text-primary
                    bg-opacity-5
                    mr-5
                  "
									>
										<svg
											width="17"
											height="10"
											viewBox="0 0 17 10"
											className="fill-current icon"
										>
											<path
												d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
												fill="#3056D3"
												stroke="#3056D3"
											/>
										</svg>
									</div>
									<div className="w-full">
										<h4 className="text-base sm:text-lg font-semibold text-black">
											Is GrayGrids part of UIdeck?
										</h4>
									</div>
								</button>
								<div className="faq-content pl-[62px] hidden">
									<p className="text-base text-body-color leading-relaxed py-3">
										It takes 2-3 weeks to get your first blog post ready. That
										includes the in-depth research & creation of your monthly
										content marketing strategy that we do before writing your
										first blog post, Ipsum available .
									</p>
								</div>
							</div>
						</div>
						<div className="w-full lg:w-1/2 px-4">
							<div
								className="
                single-faq
                w-full
                bg-white
                border border-[#F3F4FE]
                rounded-lg
                p-5
                sm:p-8
                mb-8
                wow
                fadeInUp
              "
								data-wow-delay=".1s
              "
							>
								<button className="faq-btn flex items-center w-full text-left">
									<div
										className="
                    w-full
                    max-w-[40px]
                    h-10
                    flex
                    items-center
                    justify-center
                    rounded-lg
                    bg-primary
                    text-primary
                    bg-opacity-5
                    mr-5
                  "
									>
										<svg
											width="17"
											height="10"
											viewBox="0 0 17 10"
											className="fill-current icon"
										>
											<path
												d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
												fill="#3056D3"
												stroke="#3056D3"
											/>
										</svg>
									</div>
									<div className="w-full">
										<h4 className="text-base sm:text-lg font-semibold text-black">
											Can I use this template for commercial project?
										</h4>
									</div>
								</button>
								<div className="faq-content pl-[62px] hidden">
									<p className="text-base text-body-color leading-relaxed py-3">
										It takes 2-3 weeks to get your first blog post ready. That
										includes the in-depth research & creation of your monthly
										content marketing strategy that we do before writing your
										first blog post, Ipsum available .
									</p>
								</div>
							</div>
							<div
								className="
                single-faq
                w-full
                bg-white
                border border-[#F3F4FE]
                rounded-lg
                p-5
                sm:p-8
                mb-8
                wow
                fadeInUp
              "
								data-wow-delay=".15s
              "
							>
								<button className="faq-btn flex items-center w-full text-left">
									<div
										className="
                    w-full
                    max-w-[40px]
                    h-10
                    flex
                    items-center
                    justify-center
                    rounded-lg
                    bg-primary
                    text-primary
                    bg-opacity-5
                    mr-5
                  "
									>
										<svg
											width="17"
											height="10"
											viewBox="0 0 17 10"
											className="fill-current icon"
										>
											<path
												d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
												fill="#3056D3"
												stroke="#3056D3"
											/>
										</svg>
									</div>
									<div className="w-full">
										<h4 className="text-base sm:text-lg font-semibold text-black">
											Do you have plan to releasing Play Pro?
										</h4>
									</div>
								</button>
								<div className="faq-content pl-[62px] hidden">
									<p className="text-base text-body-color leading-relaxed py-3">
										It takes 2-3 weeks to get your first blog post ready. That
										includes the in-depth research & creation of your monthly
										content marketing strategy that we do before writing your
										first blog post, Ipsum available .
									</p>
								</div>
							</div>
							<div
								className="
                single-faq
                w-full
                bg-white
                border border-[#F3F4FE]
                rounded-lg
                p-5
                sm:p-8
                mb-8
                wow
                fadeInUp
              "
								data-wow-delay=".2s
              "
							>
								<button className="faq-btn flex items-center w-full text-left">
									<div
										className="
                    w-full
                    max-w-[40px]
                    h-10
                    flex
                    items-center
                    justify-center
                    rounded-lg
                    bg-primary
                    text-primary
                    bg-opacity-5
                    mr-5
                  "
									>
										<svg
											width="17"
											height="10"
											viewBox="0 0 17 10"
											className="fill-current icon"
										>
											<path
												d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
												fill="#3056D3"
												stroke="#3056D3"
											/>
										</svg>
									</div>
									<div className="w-full">
										<h4 className="text-base sm:text-lg font-semibold text-black">
											Where and how to host this template?
										</h4>
									</div>
								</button>
								<div className="faq-content pl-[62px] hidden">
									<p className="text-base text-body-color leading-relaxed py-3">
										It takes 2-3 weeks to get your first blog post ready. That
										includes the in-depth research & creation of your monthly
										content marketing strategy that we do before writing your
										first blog post, Ipsum available .
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="absolute bottom-0 right-0 z-[-1]">
					<svg
						width="1440"
						height="886"
						viewBox="0 0 1440 886"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							opacity="0.5"
							d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
							fill="url(#paint0_linear)"
						/>
						<defs>
							<linearGradient
								id="paint0_linear"
								x1="1308.65"
								y1="1142.58"
								x2="602.827"
								y2="-418.681"
								gradientUnits="userSpaceOnUse"
							>
								<stop stopColor="#3056D3" stopOpacity="0.36" />
								<stop offset="1" stopColor="#F5F2FD" stopOpacity="0" />
								<stop offset="1" stopColor="#F5F2FD" stopOpacity="0.096144" />
							</linearGradient>
						</defs>
					</svg>
				</div>
			</section>
			{/* <!-- ====== Faq Section End --> */}
			<a
				className="flex bg-secondary text-white rounded-xl p-2 m-4 w-20 items-center justify-center"
				href="/sign"
			>
				Sign In
			</a>
		</Page>
	);
}

// This gets called on every request
export async function getServerSideProps() {
	var data = [];
	// Pass data to the page via props
	return { props: { data } };
}
