import React from "react";
import { Box, useTheme } from "@mui/material";

type Props = {};

const gridTemplate = `
 "a b c"
 "a b c"
 "a b c"
 "a b f"
 "d e f"
 "d e f"
 "d h i"
 "g h i"
 "g h j"
 "g h j"
 `;

const Dashboard: React.FC<Props> = (props) => {
  const { palette } = useTheme();
  return (
    <Box
      width="100%"
      height="100%"
      display="grid"
      gap="1.5em"
      sx={{
        gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
        gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
        gridTemplateAreas: gridTemplate,
      }}
    >
      <Box bgcolor="#fff" gridArea="a" />
      <Box bgcolor="#fff" gridArea="b" />
      <Box bgcolor="#fff" gridArea="c" />
      <Box bgcolor="#fff" gridArea="d" />
      <Box bgcolor="#fff" gridArea="e" />
      <Box bgcolor="#fff" gridArea="f" />
      <Box bgcolor="#fff" gridArea="g" />
      <Box bgcolor="#fff" gridArea="h" />
      <Box bgcolor="#fff" gridArea="i" />
      <Box bgcolor="#fff" gridArea="j" />
    </Box>
  );
};

export default Dashboard;
