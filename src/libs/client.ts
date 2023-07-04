import { createClient } from "microcms-js-sdk";

const API_KEY = process.env.NEXT_PUBLIC_CMS_API_KEY || "";

export const client = createClient({
  serviceDomain: "nextjs-blog-eyama",
  apiKey: API_KEY,
});
