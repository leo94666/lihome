import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  RocketLaunchIcon,
  Bars2Icon,
  CogIcon,
} from "@heroicons/react/24/outline";
import { Avatar, Button } from "@material-tailwind/react";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function handleWheelEvent(e: WheelEvent): void {
    let index = value;
    if (e.deltaY > 0) {
      ++index;
      if (index > 2) {
        index = 0;
      }
    } else {
      --index;
      if (index < 0) {
        index = 2;
      }
    }
    setValue(index);
  }

  return (
    <div className="bg-blue-gray-300 flex h-screen" onWheel={handleWheelEvent}>
      <div className="flex-none">
        <div className="grid  items-center">
          <Avatar
            variant="circular"
            size="sm"
            alt="太极"
            className="flex items-center rounded-full lg:ml-auto border border-blue-500 hover:animate-spin"
            src={"/taiji.svg"}
          />
        </div>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label=""
          className="bg-deep-orange-900 w-24 h-max"
          orientation="vertical"
        >
          <Tab label="开发" className="w-12 h-16" />
          <Tab label="咨询" className="w-12 h-16" />
          <Tab label="设计" className="w-12 h-16" />
        </Tabs>

        <div>
          <Button></Button>
        </div>
        <div>HHHHH</div>
      </div>

      <div className="bg-yellow-500 flex-1">
        <div className="mx-auto bg-green-600 h-full">
          <TabPanel value={value} index={0}>
            开发
          </TabPanel>
          <TabPanel value={value} index={1}>
            咨询
          </TabPanel>
          <TabPanel value={value} index={2}>
            设计
          </TabPanel>
        </div>
      </div>
    </div>
  );
}
