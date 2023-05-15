// @flow
import * as React from "react";
import { KeyboardEvent, ReactNode, useEffect, useState } from "react";

import {
  DialogFooter,
  Dialog,
  DialogBody,
  DialogHeader,
  Button,
  Avatar,
  Tabs,
  TabsHeader,
  TabsBody,
  TabPanel,
  Tab,
} from "@material-tailwind/react";

type Props = {
  className?: string;
  show: boolean;
};

function Index(props: Props) {
  const { show = false, className = "pt-6 pr-10" } = props;

  const [open, setOpen] = useState(show);

  const handleOpen = () => setOpen(!open);

  const data = [
    {
      label: "账户",
      value: "account",
      desc: `账户配置`,
    },
    {
      label: "主题",
      value: "theme",
      desc: `主题配置`,
    },
    {
      label: "搜索栏",
      value: "searchbar",
      desc: `搜索栏设置`,
    },
    {
      label: "图标",
      value: "icon",
      desc: `图标设置`,
    },
    {
      label: "日期",
      value: "date",
      desc: `日期时间设置`,
    },
    {
      label: "关于",
      value: "about",
      desc: `关于`,
    },
    {
      label: "喝杯咖啡",
      value: "drink",
      desc: `喝杯咖啡`,
    },
  ];

  return (
    <div className={`${className}`}>
      <React.Fragment>
        <Avatar
          onClick={handleOpen}
          variant="circular"
          size="sm"
          alt="太极"
          className="flex items-center rounded-full lg:ml-auto border border-blue-500 hover:animate-spin"
          src={"/taiji.svg"}
        />

        <Dialog open={open} handler={handleOpen} className="relative h-1/2 ">
          <DialogHeader className="text-center">
            太极起始页 配置中心
          </DialogHeader>
          <DialogBody className="h-full m-0 p-0 mt-1 ">
            <Tabs value="account" orientation="vertical">
              <TabsHeader
                className="w-32 text-left bg-blue-gray-100 rounded-none p-0 m-0"
                indicatorProps={{
                  className: "bg-white shadow-none rounded-none text-left",
                }}
              >
                {data.map(({ label, value }) => (
                  <Tab
                    key={value}
                    value={value}
                    className="rounded-none text-right font-bold h-12 w-full"
                    activeClassName="h-12 text-right w-full"
                  >
                    <div className="text-left  w-full p-1">{label}</div>
                  </Tab>
                ))}
              </TabsHeader>
              <TabsBody>
                {data.map(({ value, desc }) => (
                  <TabPanel key={value} value={value} className="py-0">
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                    {desc}
                  </TabPanel>
                ))}
              </TabsBody>
            </Tabs>
          </DialogBody>
          <DialogFooter className="space-x-5 absolute bottom-0 right-0">
            <Button variant="outlined" color="red" onClick={handleOpen}>
              关闭
            </Button>
            <Button variant="gradient" color="green" onClick={handleOpen}>
              保存
            </Button>
          </DialogFooter>
        </Dialog>
      </React.Fragment>
    </div>
  );
}

export default Index;
