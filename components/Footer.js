"use client";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

const Container = styled(Box)(({ theme }) => ({
  backgroundColor: "#111",
  display: "flex",
  justifyContent: "center",
  color: "#fff",
  padding: `${theme.spacing(3)} 0px`
}));

const Footer = () => {
  return <Container>© Flexagn 2024 | Designed by Flexagn</Container>;
};

export default Footer;
