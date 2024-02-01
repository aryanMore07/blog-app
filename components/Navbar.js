"use client";
import { navbarContext } from "@/utils/text_utils/text_utils";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  height: "100%",
  backgroundColor: "#fff",
  color: "#111",
}));

const InnerContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  maxWidth: "1140px",
  width: "100%",
  margin: "auto",
  padding: `${theme.spacing(2)} 0px`,
}));

const Heading = styled(Link)(({ theme }) => ({
  fontSize: "24px",
  fontWeight: "bold",
  textDecoration: "none",
  color: "#111",
}));

const MenuContainers = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  columnGap: theme.spacing(2),
}));
const Item = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "#111",
  fontSize: "18px",
  fontWeight: "bold",
  "&:hover": {
    color: "#3040EE",
  },
}));

const Navbar = () => {
  return (
    <Container>
      <InnerContainer>
        <Heading href="/">{navbarContext.heading}</Heading>

        <MenuContainers>
          {navbarContext.menus.map((item, index) => {
            return (
              <Item href={item.src} key={index}>
                {item.name}
              </Item>
            );
          })}
        </MenuContainers>
      </InnerContainer>
    </Container>
  );
};

export default Navbar;
