import Image from "next/image";
import bing from "./icon_bing.svg"

type Props = {
    className?: string
};
export default function Bing(props: Props) {
    return (
        <Image className={`${props.className}`}
               src={bing}
               alt="bing"/>
    );
}