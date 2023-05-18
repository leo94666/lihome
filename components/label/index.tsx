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
    <div className={`${className}`}>
      <Image className={`${className}`} src={url} alt="icon" />
      <Typography variant="h1" gutterBottom>
        {title}
      </Typography>
    </div>
  );
}