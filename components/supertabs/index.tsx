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
};

export default function Index(props: TabProps) {
    const {
        data
    } = props;

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const { current} = useRef({
        isScroll: true, // 是否可以滚动
        timer: null, // setTimeout句柄
        delay: 300 // 防抖时间
    })
// wheel事件回调
    const onWheel = useCallback(
        (e:WheelEvent) => {
            // 是否可以滚动，不写到setTimeout里面就可以先执行逻辑，在进行防抖，避免造成不跟手的情况
            if (current.isScroll) {
                current.isScroll = false;
                console.log("-----------------------------------"+e.deltaY)
                handleWheelEvent(e)
            }
            // 如果已经上次的防抖效果还没有释放，又触发了wheel回调，那么就取消上次的防抖效果
            if (current.timer) {
                clearTimeout(current.timer);
            }
            // 重新开始计算
            current.timer = setTimeout(() => {
                current.isScroll = true;
            }, current.delay);
        },
        []
    );

    useEffect(() => {
        window.addEventListener('wheel', onWheel);

        return function () {
            window.removeEventListener('wheel', onWheel);
        };
    }, []);

    function handleWheelEvent(event: WheelEvent) {
        let index = value;
        if (event.deltaY > 0) {
            ++index;
            if (index > data.length - 1) {
                index = 0;
            }
        } else {
            --index;
            if (index < 0) {
                index = data.length - 1;
            }
        }
        setValue(index);
    }

    // @ts-ignore
    // @ts-ignore
    return (
        <div  className="flex h-screen  bg-transparent">
            <div className="relative flex-none bg-gray-900 opacity-50">
                <div className="container flex justify-center items-center h-24">
                    <Avatar
                        variant="circular"
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
                <div className={"flex flex-col  h-max absolute inset-x-0 bottom-0"}>
                    <div
                        className={"w-full h-16 flex flex-col justify-center items-center"}
                    >
                        <QrCodeIcon className={"w-8 h-8 text-white"}/>
                    </div>
                    <div
                        className={
                            "w-full h-16 flex flex-col justify-center items-center hover:animate-spin"
                        }
                    >
                        <Cog6ToothIcon className={"w-8 h-8 text-white"}/>
                    </div>
                    <div className={"w-full h-5"}></div>
                </div>
            </div>

            <div className="flex flex-col mx-auto flex-1 h-full container justify-center items-center">
                {data.map(({id, name, labels}) => (
                    <TabPanel key={id} value={value} index={id}>
                        <div
                            className={
                                "flex h-full w-full"
                            }
                        >
                            <div className="grid grid-cols-12 gap-0 mt-64 h-2/3 overflow-y-hidden  bg-green-600">
                                {labels.map(({id, name: labelName, url}) => (
                                        <Label key={id} title={labelName} url={url} className={""}></Label>
                                ))}
                                <Label key={id} title={"添加"} url={"https://files.codelife.cc/icons/add.svg"}></Label>
                            </div>

                        </div>
                    </TabPanel>
                ))}
            </div>
        </div>
    );
}
