import Box from "@mui/material/Box";
import * as React from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export default function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className={"w-full h-full bg-transparent"}
    >
      <Box sx={{ p: 3 }} className={"w-full h-full bg-transparent"}>
        {children}
      </Box>
    </div>
  );
}
