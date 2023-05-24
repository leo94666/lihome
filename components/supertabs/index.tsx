import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {Cog6ToothIcon} from "@heroicons/react/24/outline";
import {Avatar, Button} from "@material-tailwind/react";
import {QrCodeIcon} from "@heroicons/react/24/solid";
import TabPanel from "@/components/supertabs/TabPanel";
import {Category} from "@/components/tabs/model";
import Label from "../label";
import Grid from '@mui/material/Grid';
import {useCallback, useEffect, useRef} from "react";

type TabProps = {
    children?: React.ReactNode;
    data?: Category[];
    onClickQR?: Function;
    onClickSetting?: Function;
    onClickAvatar?: Function;

};

export default function Index(props: TabProps) {
    const {
        data,
        onClickQR,
        onClickSetting,
        onClickAvatar
    } = props;

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };


    function handleTabWheelEvent(event: WheelEvent) {
        console.log("=======parent================" + event.deltaY)
    }

    function handleLabelWheelEvent(event: WheelEvent) {
        event.stopPropagation()

    }

    let labelPanel = useRef(); // 这里就是获取ref绑定的那个DOM元素值


    useEffect(() => {
        if (labelPanel) {
            // @ts-ignore
            // labelPanel.current.addEventListener("scroll", e => {
            //     const {clientHeight, scrollHeight, scrollTop} = e.target;
            //     const isBottom = scrollTop + clientHeight + 20 > scrollHeight;
            //     const isTop = scrollTop + clientHeight + 20 > scrollHeight;
            //
            //     console.log(scrollTop, clientHeight, scrollHeight, isBottom);
            // });
        }
    }, []);

    const handleQR = () => {
        if (onClickQR){
            onClickQR()
        }
    }
    const handleSetting = () => {
        if (onClickSetting){
            onClickSetting()
        }
    }

    const handleAvatar = () => {
        if (onClickAvatar){
            onClickAvatar()
        }
    }


    // @ts-ignore
    // @ts-ignore
    return (
        <div className="relative h-screen " onWheel={handleTabWheelEvent}>
            <div className="absolute inset-y-0 left-0 w-16 bg-gray-900 bg-opacity-50 ">
                <div className="flex justify-center items-center h-24" onClick={handleAvatar}>
                    <Avatar
                        size="md"
                        alt="太极"
                        className="rounded-full hover:animate-spin"
                        src={"/taiji.svg"}
                    />
                </div>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label=""
                    className="w-16 h-max text-white"
                    orientation="vertical"
                >
                    {data.map(({id, name}) => (
                        <Tab key={id} label={name} className="w-12 h-16 text-white pl-0"/>
                    ))}
                </Tabs>
                {/* <div className={"flex flex-col  h-max absolute inset-x-0 bottom-0 "}>
                    <div
                        className={"w-full h-16 flex flex-col justify-center items-center"}
                    >
                        <QrCodeIcon className={"w-8 h-8 text-white"} onClick={handleQR}/>
                    </div>
                    <div
                        className={
                            "w-full h-16 flex flex-col justify-center items-center hover:animate-spin"
                        }
                    >
                        <Cog6ToothIcon className={"w-8 h-8 text-white"} onClick={handleSetting}/>
                    </div>
                    <div className={"w-full h-5"}></div>
                </div> */}
            </div>

            <div className="absolute inset-0 container mx-auto h-full justify-center items-center">
                {data.map(({id, name, labels}) => (
                    <TabPanel key={id} value={value} index={id}>
                        <div
                            className={
                                "flex h-full w-full "
                            }>
                            <div ref={labelPanel}
                                 className="grid md:grid-cols-12 sm:grid-cols-6 gap-0 mt-64 hmin-h-min	 overflow-y-auto no-scrollbar"
                                 onWheel={handleLabelWheelEvent}>
                                {labels.map(({id, name: labelName, url}) => (
                                    <Label key={id} title={labelName} url={url} className={""}></Label>
                                ))}
                                {/* <Label key={id} title={"添加"} url={"https://files.codelife.cc/icons/add.svg"}></Label> */}
                            </div>

                        </div>
                    </TabPanel>
                ))}
            </div>
        </div>
    );
}
