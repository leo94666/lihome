import React, { useEffect } from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  TabsHeader,
  Tabs,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import Wechat from "./Wechat";
import Account from "./Account";

type Props = {
  toggle?: boolean;
};
export default function Index(props: Props) {
  let { toggle = false } = props;

  const [open, setOpen] = React.useState(true);

  const [activeTab, setActiveTab] = React.useState("qrcode");
  const data = [
    {
      label: "扫码登陆",
      value: "qrcode",
      desc:  <Wechat/>,
    },
    {
      label: "账号登录",
      value: "account",
      desc: <Account/>,
    },
  ];

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
        className="bg-white shadow-none h-1/2"
      >
        <Tabs value={activeTab}>
          <TabsHeader
            className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 h-16"
            indicatorProps={{
              className:
                "bg-transparent border-b-2 border-blue-500 shadow-none rounded-none",
            }}
          >
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
                className={activeTab === value ? "text-blue-500" : ""}
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                {desc}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </Dialog>
    </React.Fragment>
  );
}
