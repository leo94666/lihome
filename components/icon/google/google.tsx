import Image from "next/image";
import google from "./icon_google.svg"

type Props = {
    className?: string
};
export default function Google(props: Props) {
    return (
        <Image className={`${props.className}`}
               src={google}
               alt="google"/>
    );
}