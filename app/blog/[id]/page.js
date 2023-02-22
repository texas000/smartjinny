async function blogContent(path) {
  const res = await fetch(`https://api.smartjinny.com/blog/slug?path=${path}`);
  if (!res.ok) {
    return false;
  }
  return res.json();
}

export default async function Page({ params, searchParams }) {
  const data = await blogContent(params.id);
  if(params.id && data) {
    return (
      <div className="m-4">
          <title>{data.title || "Not Found"}</title>
          <meta
            content={data.description || "Not Found"}
            name="description"
          ></meta>
          <meta content={data.title || "Not Found"} property="og:title" />
          <meta
            content={data.description || "Not Found"}
            property="og:description"
          />
          <meta content={data.title || "Not Found"} property="twitter:title" />
          <meta
            content={data.description || "Not Found"}
            property="twitter:description"
          />
          <meta property="og:type" content="website" />
          <meta content="summary_large_image" name="twitter:card" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <meta content="Smartjinny" name="generator" />
        <h1 className="text-center content-center font-extrabold text-6xl">
          {data?.title}
        </h1>
        <div className="xl:mx-40 lg:mx-30 sm:mx-20 xs:mx-5 mt-10 prose md:prose-lg lg:prose-xl prose-img:rounded-xl prose-img:max-w-lg prose-a:text-blue-600 hover:prose-a:text-blue-500 max-w-none">
          <div dangerouslySetInnerHTML={{ __html: data?.html }}/>
        </div>
      </div>
    );
  } else {
    return (
      <h1>PAGE NOT FOUND</h1>
    )
  }
  
}