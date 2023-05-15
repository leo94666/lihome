import Image from "next/image";
import Icon360 from "./icon_360.svg"

type Props = {
    className?: string
};
export default function G360(props: Props) {
    return (
        <Image className={`${props.className}`}
               src={Icon360}
               alt="360"/>
    );
}