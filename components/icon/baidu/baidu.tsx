import Image from "next/image";
import baidu from "./icon_baidu.svg"

type Props = {
    className?: string
};
export default function Baidu(props: Props) {
    return (
        <Image className={`${props.className}`}
               src={baidu}
               alt="baidu"/>
    );
}