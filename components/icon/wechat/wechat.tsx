import Image from "next/image";
import wechat from "./icon_wechat.svg"

type Props = {
    className?: string
};
export default function WeChat(props: Props) {
    return (
        <Image className={`${props.className}`}
               src={wechat}
               alt="wechat"/>
    );
}