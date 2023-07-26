import "server-only";
import BlogList from "../components/Blog";
import { apiUrl } from "@/constants/api";
import BlogLayout from "./layout";

export default async function Page() {
  // 2. APIを用いたデータ取得
  const data = await getBlogs();
  return (
    <BlogLayout>
      <section>
        <h2 className="mb-6 text-gray-400 text-xs">Blogs</h2>
        <BlogList initialState={data} />
      </section>
    </BlogLayout>
  );
}

export const getBlogs = async () => {
  const res = await fetch(`${apiUrl}/blogs`, { cache: "no-store" });
  const data = await res.json();
  return data;
};
