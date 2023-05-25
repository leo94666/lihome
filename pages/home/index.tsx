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
import { useEffect, useState } from "react";
import RightMenu from "@/components/rightmenu";
import { useContextMenu } from "react-contexify";
import { signin } from "next-auth/core/routes";
import Login from "@/components/login";

import axios from "axios";
import { Category } from "@/server/entity/Category";
import AddLabel from "@/components/label/addLabel";
import AddCategory from "@/components/label/addCategory";

type Props = {
  className?: string;
};
export const Index = (props: Props) => {
  const { className } = props;

  const [openSetting, setOpenSetting] = useState(false);

  const [openLogin, setOpenLogin] = React.useState(false);

  const [tabData, setTabData] = React.useState([]);

  const [openAddLabel, setOpenAddLabel] = React.useState(false);
  const [openAddCategory, setOpenAddCategory] = React.useState(false);

  useEffect(() => {
    axios
      .get("/account")
      .then((response) => {
        const { code, msg, data } = response.data;
        if (code == 0) {
          const { config } = data;
          const { category } = config;
          console.log(category);
          setTabData(category);
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {});

    return () => {};
  }, []);

  const search = (msg: string) => {
    console.log(`click search for ${msg}`);
  };

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
        setOpenAddLabel(!openAddLabel);
        break;
      case "addCategory":
        setOpenAddCategory(!openAddCategory);
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
          data={tabData}
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
        <AddLabel toggle={openAddLabel} />

      </div>
    </div>
  );
};

export default Index;
