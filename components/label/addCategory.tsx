import Image from "next/image";
import bing from "./icon_bing.svg";
import { Typography } from "@mui/material";
import getFavicon from "@/server/utils/favicon";
import {
  Input,
  Popover,
  PopoverContent,
  PopoverHandler,
  Button,
} from "@material-tailwind/react";
import { ReactNode, useEffect } from "react";
import React from "react";

type Props = {
  className?: string;
  toggle?: boolean;
};
export default function Index(props: Props) {
  const { className, toggle } = props;

  const [openPopover, setOpenPopover] = React.useState(false);
  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
  };

  useEffect(() => {
    setOpenPopover(!openPopover);
  }, [toggle]);

  return (
    <>
      <Popover placement="bottom" open={openPopover} handler={setOpenPopover}>
        <PopoverHandler {...triggers}>
          <></>
        </PopoverHandler>
        <PopoverContent className="w-96">
          <Typography variant="h6" color="blue-gray" className="mb-6">
            Newsletter Subscription
          </Typography>
          <div className="flex gap-2">
            <Input label="Email Address" />
            <Button variant="gradient">Subscribe</Button>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
}
