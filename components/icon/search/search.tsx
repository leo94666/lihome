import Image from "next/image";
import search from "./icon_search.svg"

type Props = {
    className?: string
};
export default function Search(props: Props) {
    return (
        <Image className={`${props.className}`}
               src={search}
               alt="search"/>
    );
}