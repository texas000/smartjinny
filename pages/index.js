import React from "react";
import Page from "../component/Page";
import HeroBanner from "../component/Home/HeroBanner";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import { Constant } from "../common/constant";

export default function Home({}) {
	const raw = Cookies.get("user_session");
	const token = jwt.decode(raw);
	console.log("user-token", token);
	
	return (
    <Page title={Constant.HOME_TITLE} description={Constant.HOME_DESC}>
      <div style={{ backgroundColor: "#165b33" }}>
        <HeroBanner title="SMARTJINNY" mTitle="SMARTJIN" />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate3d(-50%,-50%,0)",            
          }}
        >
          <h1 className="text-4xl md:text-9xl font-bold text-white antialiased">
            {Constant.SITE_NAME}
          </h1>
        </div>
        <div
          style={{
            position: "absolute",
            top: "60%",
            left: "50%",
            transform: "translate3d(-50%,-50%,0)",
          }}
        >
          <h2 className="text-xl md:text-3xl antialiased text-[#ea4630]">
            {Constant.SECONDARY_NAME}
          </h2>
        </div>
      </div>

      {/* <!-- ====== Features Section Start --> */}
      <section className="pt-12 lg:pt-[70px] pb-8 lg:pb-[70px]">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mb-12 lg:mb-20 max-w-[620px]">
                <span className="font-semibold xtext-lg text-primary mb-2 block">
                  {Constant.HOME_COMPONENT[0].SUB_TITLE}
                </span>
                <h2 className="font-bold text-3xl sm:text-4xl md:text-[42px] text-dark mb-4">
                  {Constant.HOME_COMPONENT[0].TITLE}
                </h2>
                <p className="text-lg sm:text-xl leading-relaxed sm:leading-relaxed text-body-color">
                  {Constant.HOME_COMPONENT[0].DESC}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            {Constant.HOME_COMPONENT[0].CARDS.map((ga) => (
              <div className="w-full md:w-1/2 lg:w-1/4 px-4" key={ga.TITLE}>
                <div
                  className="bg-white mb-12 group wow fadeInUp"
                  data-wow-delay=".1s"
                >
                  <div className="w-[70px] h-[70px] flex items-center justify-center bg-primary rounded-2xl mb-8 relative z-10">
                    <span className="w-[70px] h-[70px] flex items-center justify-center bg-primary bg-opacity-20 rounded-2xl mb-8 absolute z-[-1] top-0 left-0 rotate-[25deg] group-hover:rotate-45 duration-300"></span>
                    <svg
                      width="35"
                      height="35"
                      viewBox="0 0 52 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d={ga.SVG} fill="white" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-xl text-dark mb-3">
                    {ga.TITLE}
                  </h4>
                  <p className="text-body-color mb-8 lg:mb-11">{ga.DETAIL}</p>
                  {ga.CTA_LINK && (
                    <a
                      href={ga.CTA_LINK}
                      className="font-medium text-base text-body-color hover:text-primary"
                    >
                      {ga.CTA}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ====== Features Section End --> */}
      {/* <!-- ====== About Section Start --> */}
      <section
        id="about"
        className="pt-20 lg:pt-[120px] pb-20 lg:pb-[120px] bg-[#f3f4fe]"
      >
        <div className="container">
          <div className="bg-white wow fadeInUp" data-wow-delay=".2s">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4">
                <div className="lg:flex items-center justify-between border overflow-hidden">
                  <div className="lg:max-w-[565px] xl:max-w-[640px] w-full py-12 px-7 sm:px-12 md:p-16 lg:py-9 lg:px-16 xl:p-[70px]">
                    <span className="text-sm font-medium text-white py-2 px-5 bg-primary inline-block mb-5">
                      {Constant.HOME_COMPONENT[1].TOP_LABEL}
                    </span>
                    <h2 className="font-bold text-3xl sm:text-4xl 2xl:text-[40px] sm:leading-snug text-dark mb-6">
                      {Constant.HOME_COMPONENT[1].TITLE}
                    </h2>
                    <p className="text-base text-body-color mb-9 leading-relaxed">
                      {Constant.HOME_COMPONENT[1].FIRST_SECTION}
                    </p>
                    <p className="text-base text-body-color mb-9 leading-relaxed">
                      {Constant.HOME_COMPONENT[1].SECOND_SECTION}
                    </p>
                    <a
                      href={Constant.HOME_COMPONENT[1].CTA_LINK}
                      className="inline-flex items-center justify-center py-4 px-6 rounded text-white bg-primary text-base font-medium hover:bg-opacity-90 hover:shadow-lg transition duration-300 ease-in-out"
                    >
                      {Constant.HOME_COMPONENT[1].CTA}
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
        className="bg-white pt-20 lg:pt-[120px] pb-12 lg:pb-[90px] relative z-20 overflow-hidden"
      >
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[620px]">
                <span className="font-semibold text-lg text-primary mb-2 block">
                  {Constant.HOME_COMPONENT[2].SUB_TITLE}
                </span>
                <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
                  {Constant.HOME_COMPONENT[2].TITLE}
                </h2>
                <p className="text-lg sm:text-xl leading-relaxed sm:leading-relaxed text-body-color">
                  {Constant.HOME_COMPONENT[2].DESCRIPTION}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center">
            <div className="w-full md:w-1/2 lg:w-1/3">
              <div
                className="bg-white rounded-xl relative z-10 overflow-hidden border border-primary border-opacity-20 shadow-pricing py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12 mb-10 text-center wow fadeInUp"
                data-wow-delay=".15s"
              >
                <span className="text-dark font-medium text-base uppercase block mb-2">
                  {Constant.HOME_COMPONENT[2].CARDS[0].SUB_TITLE}
                </span>
                <h2 className="font-semibold text-primary mb-9 text-[28px]">
                  {Constant.HOME_COMPONENT[2].CARDS[0].TITLE}
                </h2>

                <div className="mb-10">
                  {Constant.HOME_COMPONENT[2].CARDS[0].LIST.map((ga) => (
                    <p
                      key={ga}
                      className="text-base font-medium text-body-color leading-loose mb-1"
                    >
                      {ga}
                    </p>
                  ))}
                </div>
                <div className="w-full">
                  <a
                    href={Constant.HOME_COMPONENT[2].CARDS[0].CTA_LINK}
                    className="inline-block text-base font-medium text-primary bg-transparent border border-[#D4DEFF] rounded-full text-center py-4 px-11 hover:text-white hover:bg-primary hover:border-primary transition duration-300 ease-in-out"
                  >
                    {Constant.HOME_COMPONENT[2].CARDS[0].CTA}
                  </a>
                </div>
                <span className="absolute left-0 bottom-0 z-[-1] w-14 h-14 rounded-tr-full block bg-primary"></span>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3">
              <div
                className="bg-primary bg-gradient-to-b from-primary to-[#179BEE] rounded-xl relative z-10 overflow-hidden shadow-pricing py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12 mb-10 text-center wow fadeInUp"
                data-wow-delay=".1s"
              >
                <span className="inline-block py-2 px-6 border border-white rounded-full text-base font-semibold text-primary bg-white uppercase mb-5">
                  POPULAR
                </span>
                <span className="text-white font-medium text-base uppercase block mb-2">
                  {Constant.HOME_COMPONENT[2].CARDS[1].SUB_TITLE}
                </span>
                <h2 className="font-semibold text-white mb-9 text-[28px]">
                  {Constant.HOME_COMPONENT[2].CARDS[1].TITLE}
                </h2>

                <div className="mb-10">
                  {Constant.HOME_COMPONENT[2].CARDS[1].LIST.map((ga) => (
                    <p
                      key={ga}
                      className="text-base font-medium text-white leading-loose mb-1"
                    >
                      {ga}
                    </p>
                  ))}
                </div>
                <div className="w-full">
                  <a
                    href={Constant.HOME_COMPONENT[2].CARDS[1].CTA_LINK}
                    className="inline-block text-base font-medium text-dark bg-white border border-white rounded-full text-center py-4 px-11 hover:text-white hover:bg-dark hover:border-dark transition duration-300 ease-in-out"
                  >
                    {Constant.HOME_COMPONENT[2].CARDS[1].CTA}
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3">
              <div
                className="bg-white rounded-xl relative z-10 overflow-hidden border border-primary border-opacity-20 shadow-pricing py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12 mb-10 text-center wow fadeInUp"
                data-wow-delay=".15s"
              >
                <span className="text-dark font-medium text-base uppercase block mb-2">
                  {Constant.HOME_COMPONENT[2].CARDS[2].SUB_TITLE}
                </span>
                <h2 className="font-semibold text-primary mb-9 text-[28px]">
                  {Constant.HOME_COMPONENT[2].CARDS[2].TITLE}
                </h2>

                <div className="mb-10">
                  {Constant.HOME_COMPONENT[2].CARDS[2].LIST.map((ga) => (
                    <p
                      key={ga}
                      className="text-base font-medium text-body-color leading-loose mb-1"
                    >
                      {ga}
                    </p>
                  ))}
                </div>
                <div className="w-full">
                  <a
                    href={Constant.HOME_COMPONENT[2].CARDS[2].CTA_LINK}
                    className="inline-block text-base font-medium text-primary bg-transparent border border-[#D4DEFF] rounded-full text-center py-4 px-11 hover:text-white hover:bg-primary hover:border-primary transition duration-300 ease-in-out"
                  >
                    {Constant.HOME_COMPONENT[2].CARDS[2].CTA}
                  </a>
                </div>
                <span className="absolute right-0 top-0 z-[-1] w-14 h-14 rounded-bl-full block bg-secondary"></span>
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
