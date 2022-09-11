import { Button, Card, CardActions, CardContent, CardMedia, Typography, Grid, Container } from "@mui/material";
import Link from "next/link";
import { Fragment } from "react";

export default function NewsCard({imageURL, title, description, html, cta1, cta2}) {
    return (
      <div className="max-w-lg overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
        {imageURL && (
          <img src={imageURL} className="h-32 w-full object-cover" />
        )}
        <div className="flex flex-col p-5">
          <h2 className="text-lg font-extrabold mb-5 text-gray-700">
            {title || "Default Title"}
          </h2>
          {html ? (<div className="prose" dangerouslySetInnerHTML={{__html: html}}/>) : (
            <div className="text-base text-gray-700">{description}</div>
          )}
          {cta1 ? (
            <div className="mt-5">
            <Link href={cta1}>
              <button className="w-full rounded-md bg-indigo-600 py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75">
                See More
              </button>
            </Link>
            </div>
          ) : (
            <Fragment />
          )}
        </div>
      </div>
    );
}
