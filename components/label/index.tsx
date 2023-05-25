import Image from "next/image";
import bing from "./icon_bing.svg";
import { Typography } from "@mui/material";
import getFavicon from "@/server/utils/favicon";

type Props = {
  className?: string;
  url?: string;
  title?: string;
};
export default function Index(props: Props) {
  const { className, title, url } = props;

  const handleClick =()=>{
    window.open(url)
  }

  return (
    <div className={`${className} m-4 w-16 h-24  items-center`} onClick={handleClick}>
      <img className={`${className} rounded-full bg-gray-700 w-12 h-12 p-2 hover:p-1 `} src={getFavicon(url)} alt={`${title}`}/>
      <p className={"text-white text-center justify-center w-16 h-8 mt-1"}>
        {title}
      </p>
    </div>
  );
}



