import { z } from "zod";

const SrcData = z.object({
  url: z.string(),
  width: z.number().int(),
  height: z.number().int(),
});

const Image = z.object({
  fieldId: z.literal("image"),
  srcData: SrcData,
  text: z.string(),
});

export const zBlog = z.object({
  id: z.string(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  publishedAt: z.string().datetime(),
  revisedAt: z.string().datetime(),
  title: z.string(),
  image: Image,
  text: z.string(),
});
export const zBlogs = z.array(zBlog);

export type ZBlog = z.infer<typeof zBlog>;
export type ZBlogs = z.infer<typeof zBlogs>;
