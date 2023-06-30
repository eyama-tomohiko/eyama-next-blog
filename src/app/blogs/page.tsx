import { apiUrl } from "@/constants/api";
import "server-only";
import BlogList from "../components/Blog";
import { zBlogs } from "./type";

export default async function Page() {
  // 2. APIを用いたデータ取得
  const notes = await getBlogs();
  return (
    <main className="mx-2 sm:mx-4 relative">
      <h2 className="mb-6 text-gray-400 text-xs">Blogs</h2>
      <BlogList initialState={notes} />
    </main>
  );
}

export const getBlogs = async () => {
  const res = await fetch(`${apiUrl}/blogs`, { cache: "no-store" });
  const data = await res.json();
  const notes = zBlogs.parse(data);
  return notes;
};
