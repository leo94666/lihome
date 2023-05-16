import React, { useEffect } from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
} from "@material-tailwind/react";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react"

type Props = {
  toggle?: boolean;
};
export default function Index(props: Props) {
  let { toggle = false } = props;

  const [open, setOpen] = React.useState(true);

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setOpen(!open);
  }, [toggle]);

  return (
    <React.Fragment>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-white shadow-none"
      >
        <DialogHeader className="text-center">
          <div className="mx-auto text-center">
            微信扫码登录
          </div>
        </DialogHeader>
        <DialogBody divider>
          <Image
            width={500}
            height={500}
            className="h-full w-full"
            src="taiji.svg"
            alt="nature image"
          />
        </DialogBody>
      </Dialog>
    </React.Fragment>
  );
}
