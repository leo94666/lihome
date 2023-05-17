import React, { useEffect } from "react";
import WeChat from "../icon/wechat/wechat";

import {
  Avatar,
  Button,
  Input,
  Typography,
  useSelect,
} from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/solid";

type Props = {
  toggle?: boolean;
};
export default function Index(props: Props) {
  const [isLogin, setLogin] = React.useState(true);

  const handleLogin = () => {};
  const handleRegister = () => {};

  if (isLogin) {
    return (
      <div className="w-[32rem] mx-auto flex flex-col w-72 items-center gap-6 top-0 bottom-0">
        <Avatar
          src="/taiji.svg"
          alt="avatar"
          size="xxl"
          className="animate-spin"
        />
        <Input type="account" label="账号" />
        <Input type="password" label="密码" />
        <div className="w-full">
          <Button className="w-full" onClick={handleLogin}>
            登录
          </Button>
          <div className="flex flex-row justify-center items-center text-center">
            <Typography variant="small" className="mt-6 flex justify-center">
              还没有账号?
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue"
                className="ml-1 font-bold"
                onClick={() => {
                  setLogin(false);
                }}
              >
                注册
              </Typography>
            </Typography>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-[32rem] mx-auto flex flex-col w-72 items-center gap-6 top-0 bottom-0">
        <Avatar
          src="/taiji.svg"
          alt="avatar"
          size="xxl"
          className="animate-spin"
        />
        <Input type="account" label="请输入账号" />
        <Input type="password" label="请输入密码" />
        <Input type="password_sure" label="请再次输入密码" />

        <div className="w-full">
          <Button className="w-full" onClick={handleRegister}>
            立即注册
          </Button>
          <div className="flex flex-row justify-center items-center text-center">
            <Typography variant="small" className="mt-6 flex justify-center">
              已经有账号?
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue"
                className="ml-1 font-bold"
                onClick={() => {
                  setLogin(true);
                }}
              >
                登录
              </Typography>
            </Typography>
          </div>
        </div>
      </div>
    );
  }
}
