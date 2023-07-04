"use client";
import { ZBlog, zBlogs } from "../blogs/type";
import useSWR from "swr";

type Props = {
  initialState: Blog[];
};

const fetcher = (url: string) =>
  fetch(url).then(async (res) => {
    const data = await res.json();
    const blogs = zBlogs.parse(data);
    return blogs;
  });

const BlogList: React.FC<Props> = ({ initialState }) => {
  const { data } = useSWR("/api/blogs", fetcher, {
    suspense: true,
    fallbackData: initialState,
  });
  return (
    <div className="grid mb-6 sm:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-y-10">
      {data.map((note) => (
        <BlogItem key={note.id} item={note} />
      ))}
    </div>
  );
};

type BlogProps = {
  item: ZBlog;
};

const BlogItem: React.FC<BlogProps> = ({ item }) => {
  return (
    <div className="bg-gray-100 rounded-lg relative p-5 pt-8">
      <h3 className="text-pink-500 hover:text-pink-700 text-lg md:text-xl font-semibold mb-3 break-all underline underline-offset-2">
        {item.title}
      </h3>
      <p className="text-gray-500 break-all">{item.title}</p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.image.url}
        alt={item.image.text}
        width={item.image.width}
        height={item.image.height}
      />
    </div>
  );
};

export default BlogList;
