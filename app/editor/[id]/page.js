async function blogContent(slug) {
    const res = await fetch(`https://api.smartjinny.com/blog/content?slug=${slug}`);
    if (!res.ok) {
      return false;
    }
    return res.json();
}

export default async function Page({ params, searchParams }) {
    const data = await blogContent(params.id);
    if(params.id && data) {
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
    } else {
        return (
            <div>
                <h1>Failed</h1>
            </div>
        )
    }
}