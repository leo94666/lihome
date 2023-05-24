import React, { useEffect } from "react";
import WeChat from "../icon/wechat/wechat";

import { Spinner } from "@material-tailwind/react";
import Image from 'next/image'

type Props = {
  toggle?: boolean;
};
export default function Index(props: Props) {
  return (
    <React.Fragment>
      <div className="flex flex-col">
        <div className="mx-auto w-16 h-16">
          <WeChat />
        </div>
        <div className="mx-auto">
          <Image
            src={"/wechat_qr_code.png"}
            alt="Picture of the author"
            width={360} 
            height={360}
            className="border-gray-700"
          />
        </div>
        <div className="text-center">
          <span>打开微信 <strong>扫一扫</strong>, <strong>关注公众号</strong>后即可登录/注册</span>
        </div>
      </div>
    </React.Fragment>
  );
}
