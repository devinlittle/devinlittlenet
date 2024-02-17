import { error } from "@sveltejs/kit";
import { pgs } from "../validBlogPages";

export function load({ params }) {
 let pagedt = pgs.find((v) => v.slug === params.slug);

  if (!pagedt) {
    throw error(404);
  }


  return { 
    pagedt
  };
}
