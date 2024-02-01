"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

const cardStyle = {
  height: "calc(100% - 30px)",
  boxShadow:
    "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em",
  borderRadius: "8px",
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#fff",
  height: "100%",
};

const logoContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const PostPreview = (props) => {
  const router = useRouter();
  const routeHandler = () => {
    router.push(`/blogs/${props.slug}`);
  };
  return (
    <Box onClick={routeHandler} sx={cardStyle}>
      <Box>
        <Box sx={logoContainerStyle}>
          <Image
            src={props.image}
            alt={props.title}
            width={100}
            height={100}
            layout="responsive"
            objectFit="cover"
            style={{
              width: "100%",
              height: "auto",
              aspectRatio: "10 / 9",
              borderRadius: "8px 8px 0px 0px",
            }}
          />
        </Box>
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", padding: "16px", fontSize: "20px" }}
        >
          {props.title}
        </Typography>
      </Box>
      <Box
        sx={{
          padding: "16px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ fontWeight: 500 }}>{props.subtitle}</Typography>
        <Typography variant="p" sx={{ fontWeight: 500, padding: "8px 0px" }}>
          {props.date}
        </Typography>
      </Box>
    </Box>
  );
};

export default PostPreview;
