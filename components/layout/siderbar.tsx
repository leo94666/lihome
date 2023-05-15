import React, { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";
import Head from "next/head";
import {
  Avatar,
  Button,
  Checkbox,
  Drawer,
  IconButton,
  Radio,
  Typography,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { type } from "os";

type Props = {
  className?: string;
};

function SideBar(props: Props) {
  const { className = "pt-6 pr-10" } = props;

  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  return (
    <div className={`${className}`}>
      <React.Fragment>
        <Avatar
          onClick={openDrawer}
          variant="circular"
          size="sm"
          alt="太极"
          className="flex items-center rounded-full lg:ml-auto border border-blue-500"
          src={"/taiji.svg"}
        />
        <Drawer open={open} onClose={closeDrawer} placement="right">
          <div className="mb-6 flex items-center justify-between bg-blue-500 p-4">
            <Typography variant="h5" color="blue-gray">
              配置太极起始页
            </Typography>
            <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
              <XMarkIcon strokeWidth={2} className="h-5 w-5" />
            </IconButton>
          </div>

          <div className="p-4">
            <Radio id="dark" name="color" color="red" />
            <Radio id="solar" name="color" color="green" />
            <Radio id="evergreen" name="color" color="amber" />
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  );
}

export default SideBar;
