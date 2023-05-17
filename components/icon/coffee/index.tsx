import Image from "next/image";
import coffee from "./icon_coffee.svg"

type Props = {
    className?: string
};
export default function Coffee(props: Props) {
    return (
        <Image className={`${props.className}`}
               src={coffee}
               alt="coffee"/>
    );
}
