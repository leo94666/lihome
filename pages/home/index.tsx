import * as React from "react";
import Head from "next/head";
import SearchBox from "@/components/searchbox";
import Tabs from "@/components/tabs";
import SuperTabs from "@/components/supertabs";
import { signIn, signOut, useSession } from "next-auth/react";

import Profile from "@/components/profile";
import Account from "@/components/login";
import Avatar from "@/components/avatar";
import dynamic from "next/dynamic";
import { Tab } from "@material-tailwind/react";
import Setting from "@/components/setting";
import { useState } from "react";
import RightMenu from "@/components/rightmenu";
import { useContextMenu } from "react-contexify";
import { signin } from "next-auth/core/routes";
import Login from "@/components/login";

type Props = {
  className?: string;
};
export const Index = (props: Props) => {
  const [openSetting, setOpenSetting] = useState(false);

  const { className } = props;

  const [openLogin, setOpenLogin] = React.useState(false);

  const search = (msg: string) => {
    console.log(`click search for ${msg}`);
  };


  //http://localhost:3000/api/account
  let tabs = [
    {
      id: 0,
      name: "首页",
      labels: [],
    },
    {
      id: 1,
      name: "开发",
      labels: [
        { id: 0, name: "太极", url: "" },
        { id: 1, name: "太极", url: "" },
        { id: 2, name: "太极", url: "" },
      ],
    },
    {
      id: 2,
      name: "咨询",
      labels: [{ id: 0, name: "太极", url: "" }],
    },
    {
      id: 3,
      name: "商业",
      labels: [{ id: 0, name: "太极", url: "" }],
    },
    {
      id: 4,
      name: "娱乐",
      labels: [{ id: 0, name: "太极", url: "" }],
    },
  ];

  function handleSetting() {
    setOpenSetting(!openSetting);
  }

  const { show } = useContextMenu({ id: "rightmenu" });

  const handleContextMenu = (event: any) => {
    show({
      event,
      props: {
        key: "value",
      },
    });
  };

  const handleItemClick = (id: string) => {
    switch (id) {
      case "setting":
        setOpenSetting(!openSetting);
        break;
      case "addLabel":
        break;
      case "addCategory":
        break;
      case "theme":
        break;
    }
  };

  function handleQR() {}

  function handleAvatar() {
    setOpenLogin(!openLogin);
  }

  return (
    <div>
      <Head>
        <title></title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        onContextMenu={handleContextMenu}
        className={`${className} h-full relative bg-no-repeat bg-cover bg-[url('https://bing.img.run/rand_uhd.php')] overflow-hidden`}
      >
        <RightMenu id={"rightmenu"} onItemClick={handleItemClick} />

        <SuperTabs
          data={tabs}
          onClickSetting={handleSetting}
          onClickQR={handleQR}
          onClickAvatar={handleAvatar}
        />
        <SearchBox
          onSearch={search}
          className={"absolute w-full md:top-24 md:w-1/3 md:left-1/3"}
        />
        <Setting toggle={openSetting} />
        <Login toggle={openLogin} />
      </div>
    </div>
  );
};

export default Index;
