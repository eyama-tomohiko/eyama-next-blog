import { client } from "../../../libs/client";
import { NextResponse } from "next/server";

export async function GET() {
  const data: ListResponse<Blog> = await client.get({
    endpoint: "blog",
    queries: {
      limit: 100,
    },
  });

  return NextResponse.json(data.contents);
}
