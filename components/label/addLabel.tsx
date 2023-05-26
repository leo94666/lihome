import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogBody,
  TabPanel,
  DialogHeader,
  Tab,
  Tabs,
  TabsBody,
  TabsHeader,
  Input,
  Button,
} from "@material-tailwind/react";

import { CirclePicker, SketchPicker } from "react-color";
import SketchExample from "../colorpicker";
import Label from ".";

type Props = {
  className?: string;
  toggle?: boolean;
};
export default function Index(props: Props) {
  const { className, toggle } = props;

  const [open, setOpen] = useState(true);

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setOpen(!open);
  }, [toggle]);

  const data = [
    {
      label: "自定义图标",
      value: "component",
    },
    {
      label: "小组件圈子",
      value: "component_circle",
    },
  ];
  function handleClose(): void {}

  const [value, setValue] = React.useState("#ffffff");
  const handleChange = (newValue:string) => {
    setValue(newValue);
  };
  return (
    <div className={`${className}`}>
      <React.Fragment>
        <Dialog
          size="xs"
          open={open}
          handler={handleOpen}
          className="relative  bg-white"
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
        >
          <DialogHeader className="text-center">小组件管理</DialogHeader>
          <DialogBody className="m-0 p-0 mt-1 h-96">
            <Tabs value={"component"} orientation="vertical">
              <TabsHeader
                className="w-32 text-left bg-blue-gray-100 rounded-none p-0 m-0"
                indicatorProps={{
                  className: "bg-white shadow-none rounded-none text-left",
                }}
              >
                <Tab
                  key={"component"}
                  value={"component"}
                  className="rounded-none text-right font-bold h-12 w-full"
                  activeClassName="h-12 text-right w-full"
                >
                  <div className="flex items-center gap-2">{"自定义图标"}</div>
                </Tab>

                <Tab
                  key={"component_circle"}
                  value={"component_circle"}
                  className="rounded-none text-right font-bold h-12 w-full"
                  activeClassName="h-12 text-right w-full"
                >
                  <div className="flex items-center gap-2">{"小组件圈子"}</div>
                </Tab>
              </TabsHeader>
              <TabsBody className="h-96">
                <TabPanel value={"component"} key={"component"}>
                  <div className=" h-full ">
                    <div className="relative flex w-full max-w-[24rem] h-ful">
                      <Input
                        type="url"
                        label="请输入网址"
                        value={""}
                        className="pr-20"
                        containerProps={{
                          className: "min-w-0",
                        }}
                      />
                      <Button
                        size="sm"
                        className="!absolute right-1 top-1 rounded"
                      >
                        获取网址图标
                      </Button>
                    </div>
                    <div className="relative flex w-full max-w-[24rem] mt-4">
                      <Input
                        type="url"
                        label="请输入网站名称"
                        value={""}
                        className="pr-20"
                        containerProps={{
                          className: "min-w-0",
                        }}
                      />
                    </div>
                    <div className="relative flex w-full max-w-[24rem] mt-4 h-max">
                      <p>图标背景颜色: </p>
                      <CirclePicker />
                    </div>
                    <div>
                      <p>图标预览: </p>
                      <Label title={""} url={""} className={""}></Label>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel value={"component_circle"} key={"component_circle"}>
                  暂未支持
                </TabPanel>
              </TabsBody>
            </Tabs>
          </DialogBody>
        </Dialog>
      </React.Fragment>
    </div>
  );
}
