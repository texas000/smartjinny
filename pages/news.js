import { Button, Card, CardActions, CardContent, CardMedia, Typography, Grid, Container } from "@mui/material";
import useSWR from "swr";
import NewsCard from "../component/Global/NewsCard";
import Page from "../component/Page";

export default function Home({}) {
	const fetcher = (url) => fetch(url).then((r) =>	r.json());
	const { data: nyt } = useSWR(`/api/news/nyt`, fetcher);
	const { data: chosun } = useSWR(`/api/news/chosun`, fetcher);
	const { data: google } = useSWR(`/api/news/google`, fetcher);
	
  const { motion, useScroll  } = require("framer-motion");
  
  const { scrollYProgress } = useScroll();
	return (
    <Page title={"SMARTJINNY"}>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="py-4 bg-indigo-900">
        <h1 className="text-5xl font-bold p-4 bg-clip-text text-transparent bg-gradient-to-b from-pink-500 to-violet-500">
          NEWS
        </h1>
        <br />
        <blockquote className="text-2xl font-semibold italic text-center text-slate-900">
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-indigo-500 relative inline-block">
            <span className="relative text-white" onClick={()=>console.log(google)}>GOOGLE</span>
          </span>
        </blockquote>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 m-6">
          {/* alignItems="center"  */}
          {google?.rss?.channel?.item?.map((ga) => (
            <NewsCard
              key={ga.guid._text}
              title={ga.title._text}
              html={ga.description._text}
            />
          ))}
        </div>
        {/* <blockquote className="text-2xl font-semibold italic text-center text-slate-900">
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-indigo-500 relative inline-block">
            <span className="relative text-white" onClick={()=>console.log(chosun)}>CHOSUN</span>
          </span>
        </blockquote>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 m-6">
          {chosun?.rss?.channel?.item?.map((ga) => (
            <NewsCard
              key={ga.title._cdata}
              title={ga.title._cdata}
              html={ga.description._cdata}
            />
          ))}
        </div> */}
        <blockquote className="text-2xl font-semibold italic text-center text-slate-900">
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-indigo-500 relative inline-block">
            <span className="relative text-white" onClick={()=>console.log(nyt)}>NYT</span>
          </span>
        </blockquote>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 m-6">
          {nyt?.rss?.channel?.item?.map((ga) => (
            <NewsCard
              key={ga.title._text}
              title={ga.title._text}
              description={ga.description._text}
              imageURL={ga["media:content"]?._attributes?.url}
              cta1={ga["link"]?._text}
            />
          ))}
        </div>
      </div>
    </Page>
  );
}
