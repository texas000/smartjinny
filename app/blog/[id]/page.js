// import { NextSeo } from 'next-seo';
import { Fragment } from "react";

async function blogContent(slug) {
    const res = await fetch(`https://api.smartjinny.com/blog/content?slug=${slug}`);
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
  
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }    
    
  return res.json();
}

export default async function Page({ params, searchParams }) {
    const data = await blogContent(params.id);
    if(params.id) {
        return (
          <div>
            <title>{data.data?.head?.title || "Not Found"}</title>
            <meta content={data.data?.head?.description || "Not Found"} name="description"></meta>
            <meta content={data.data?.head?.title || "Not Found"} property="og:title" />
            <meta content={data.data?.head?.description || "Not Found"} property="og:description" />
            <meta content={data.data?.head?.title || "Not Found"} property="twitter:title" />
            <meta content={data.data?.head?.description || "Not Found"} property="twitter:description" />
            <meta property="og:type" content="website" />
            <meta content="summary_large_image" name="twitter:card" />
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <meta content="Webflow" name="generator" />
    
            <div dangerouslySetInnerHTML={{ __html: data.data?.body }}/>
          </div>
        );
    }
}