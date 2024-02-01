import React from "react";
import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "@/components/getPostData";
import { Box } from "@mui/material";

const getPostContent = (slug) => {
  const folder = "blogs/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParam = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const blogContentStyle = {
  maxWidth: "1140px",
  width: "100%",
  margin: "auto",
};

const blogHeaderContentStyle = {
  marginBottom: "24px",
  display: "flex",
  flexDirection: "column",
  rowGap: "8px",
};

const page = (props) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <Box sx={blogContentStyle}>
      <Box sx={blogHeaderContentStyle}>
        <h1>{post.data.title}</h1>
        <h3>{post.data.subtitle}</h3>
        <h5>{post.data.date}</h5>
      </Box>
      <Box sx={blogContentStyle}>
        <Markdown>{post.content}</Markdown>
      </Box>
    </Box>
  );
};

export default page;
