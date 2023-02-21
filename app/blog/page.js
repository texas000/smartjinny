async function blogContent() {
  const res = await fetch(`https://api.smartjinny.com/blog/list`);
  if (!res.ok) {
    return false;
  }
  return res.json();
}

export default async function Page({ params, searchParams }) {
  const data = await blogContent();
  return (
    <div>
 <title>SMARTJINNY | BLOG</title>
        <meta
          content="NUMBER ONE DEVELOPER WITH BEST QUALITY AND FAST BUILD"
          name="description"
        ></meta>
        <meta content="SMARTJINNY | BLOG" property="og:title" />
        <meta
          content="NUMBER ONE DEVELOPER WITH BEST QUALITY AND FAST BUILD"
          property="og:description"
        />
        <meta content="SMARTJINNY | BLOG" property="twitter:title" />
        <meta
          content="NUMBER ONE DEVELOPER WITH BEST QUALITY AND FAST BUILD"
          property="twitter:description"
        />
        <meta property="og:type" content="website" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="Smartjinny" name="generator" />
    <div className="flex justify-center">
      <div className="stats stats-vertical shadow">
        {data?.map((ga) => (
          <a className="stat" key={ga._id} href={`/blog/${ga.slug}`}>
            <div className="stat-title">{ga.description}</div>
            <div className="stat-value">{ga.title}</div>
            <div className="stat-desc">
              {new Date(ga.created).toDateString()}
            </div>
          </a>
        ))}
      </div>
    </div>
    </div>
  );
}