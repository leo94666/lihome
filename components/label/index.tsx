import Image from "next/image";
import bing from "./icon_bing.svg";
import { Typography } from "@mui/material";

type Props = {
  className?: string;
  url?: string;
  title?: string;
};
export default function Index(props: Props) {
  const { className, title, url } = props;
  return (
    <div className={`${className} m-4 w-16 h-24 bg-amber-900  items-center`}>
      <Image className={`${className} rounded-full w-16 h-16 bg-red-900 opacity-90 p-2 hover:p-1 `} src={url} alt="icon" width={240} height={240}/>
      <p className={"text-white text-center justify-center w-16 h-8 mt-1"}>
        {title}
      </p>
    </div>
  );
}



