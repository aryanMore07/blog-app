import PostPreview from "@/components/PostPreviews";
import getPostMetadata from "@/components/getPostData";
import { Box, Grid } from "@mui/material";

export default function Home() {
  const postMetaData = getPostMetadata();
  const sortedBlogs = postMetaData.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  return (
    <Box
      sx={{
        maxWidth: "1140px",
        width: "100%",
        margin: "auto",
        height: "100%",
      }}
    >
      <Grid container spacing={5}>
        {sortedBlogs.map((post) => {
          return (
            <Grid key={post.slug} item xs={12} sm={6} md={3}>
              <PostPreview key={post.slug} {...post} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
