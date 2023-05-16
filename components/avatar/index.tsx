// @flow
import * as React from "react";
import { useState } from "react";

import { Avatar } from "@material-tailwind/react";
import { useSession } from "next-auth/react";
import Wechat from "@/components/wechat";
import Setting from "@/components/setting";

type Props = {
  className?: string;
};

function Index(props: Props) {
  const { className = "pt-6 pr-10" } = props;

  const { data: session, status } = useSession();

  const [openSetting, setOpenSetting] = useState(false);

  const [openLogin, setOpenLogin] = useState(false);

  const handleOpen = () => {
    if (session) {
      setOpenSetting(!openSetting);
    } else {
      setOpenLogin(!openLogin);
    }
  };

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
      </React.Fragment>
      <Setting toggle={openSetting} />
      <Wechat toggle={openLogin} />
    </div>
  );
}

export default Index;
