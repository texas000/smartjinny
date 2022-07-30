import { Button, Card, CardActions, CardContent, CardMedia, Typography, Grid, Container } from "@mui/material";
import useSWR from "swr";
import Page from "../component/Page";

export default function Home({}) {
	const fetcher = (url) => fetch(url).then((r) =>	r.json());
	const { data: nyt } = useSWR(`/api/news/nyt`, fetcher);
	const { data: chosun } = useSWR(`/api/news/chosun`, fetcher);
	const { data: google } = useSWR(`/api/news/google`, fetcher);
	
	const NewsCard = ({ imageURL, title, description, cta1, cta2 }) => (
    <Card sx={{ maxWidth: 500, margin: 2, padding: 1 }}>
      {imageURL && (
        <CardMedia
          component="img"
          height="140"
          width="140"
          image={imageURL}
          alt={title}
		  style={{
			  maxHeight: '200px'
		  }}
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
			<div dangerouslySetInnerHTML={{__html:description }} className="description"/>
          {/* {description} */}
        </Typography>
      </CardContent>
      <CardActions>
        {cta1 && (
          <Button size="small" color="secondary">
            Share
          </Button>
        )}
        {cta2 && (
          <Button size="small" color="secondary">
            Learn More
          </Button>
        )}
      </CardActions>
    </Card>
  );

	return (
    <Page title={"SMARTJINNY"}>
      <div className="my-4">
        <h1 className="text-5xl font-bold p-4">NEWS</h1>
        <br />
        <blockquote className="text-2xl font-semibold italic text-center text-slate-900">
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-indigo-500 relative inline-block">
            <span className="relative text-white">GOOGLE</span>
          </span>
        </blockquote>
        <Grid
          container
          columns={{ xs: 4, sm: 8, md: 12 }}
          justifyContent="center"
        >
          {/* alignItems="center"  */}
          {google?.rss?.channel?.item?.map((ga) => (
            <NewsCard
              key={ga.title._text}
              title={ga.title._text}
              description={ga.description._text}
            />
          ))}
        </Grid>
        <blockquote className="text-2xl font-semibold italic text-center text-slate-900">
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-indigo-500 relative inline-block">
            <span className="relative text-white">CHOSUN</span>
          </span>
        </blockquote>
        <Grid
          container
          columns={{ xs: 4, sm: 8, md: 12 }}
          justifyContent="center"
        >
          {/* alignItems="center"  */}
          {chosun?.rss?.channel?.item?.map((ga) => (
            <NewsCard
              key={ga.title._cdata}
              title={ga.title._cdata}
              description={ga.description._cdata}
            />
          ))}
        </Grid>
        <blockquote className="text-2xl font-semibold italic text-center text-slate-900">
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-indigo-500 relative inline-block">
            <span className="relative text-white">NYT</span>
          </span>
        </blockquote>
		<Grid
          container
          columns={{ xs: 4, sm: 8, md: 12 }}
          justifyContent="center"
        >
        {nyt?.rss?.channel?.item?.map((ga) => (
            <NewsCard
              key={ga.title._text}
              title={ga.title._text}
              description={ga.description._text}
              imageURL={ga["media:content"]?._attributes?.url}
            />
          
        ))}
		</Grid>
      </div>
      <style global jsx>{`
        body {
          background: gray;
        }
        a {
          color: LightGray;
        }
      `}</style>
    </Page>
  );
}
