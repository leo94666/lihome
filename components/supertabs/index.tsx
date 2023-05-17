import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
    Cog6ToothIcon
} from "@heroicons/react/24/outline";
import {Avatar, Button} from "@material-tailwind/react";
import {QrCodeIcon} from "@heroicons/react/24/solid";
import TabPanel from "@/components/supertabs/TabPanel";
import {Category} from "@/components/tabs/model";


type TabProps = {
    children?: React.ReactNode;
    data?: Category[];
}

export default function Index(props: TabProps) {

    const {
        data = [
            {
                id: 0,
                name: "首页",
                labels: [
                    {id: 0, name: "太极", url: ""},
                    {id: 1, name: "太极", url: ""},
                    {id: 2, name: "太极", url: ""},
                    {id: 3, name: "太极", url: ""},
                    {id: 4, name: "太极", url: ""},
                    {id: 5, name: "太极", url: ""},
                    {id: 6, name: "太极", url: ""},
                ],
            },
            {
                id: 1,
                name: "开发",
                labels: [
                    {id: 0, name: "太极", url: ""},
                    {id: 1, name: "太极", url: ""},
                    {id: 2, name: "太极", url: ""},
                    {id: 3, name: "太极", url: ""},
                    {id: 4, name: "太极", url: ""},
                    {id: 5, name: "太极", url: ""},
                    {id: 6, name: "太极", url: ""},
                ],
            }
        ],
    } = props;

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

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
        <div onWheel={handleWheelEvent} className="flex h-screen bg-transparent">
            <div className="relative flex-none bg-gray-400 opacity-50">
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
                    className="w-16 h-max"
                    orientation="vertical">
                    {data.map(({id, name}) => (
                        <Tab key={id} label={name} className="w-12 h-16 text-black pl-0"/>
                    ))}
                </Tabs>
                <div className={"flex flex-col  h-max absolute inset-x-0 bottom-0"}>
                    <div className={"w-full h-16 flex flex-col justify-center items-center"}>
                        <QrCodeIcon className={"w-8 h-8"}/>
                    </div>
                    <div className={"w-full h-16 flex flex-col justify-center items-center hover:animate-spin"}>
                        <Cog6ToothIcon className={"w-8 h-8"}/>
                    </div>
                    <div className={"w-full h-5"}>

                    </div>
                </div>

            </div>

            <div className="flex flex-col mx-auto flex-1 h-full bg-transparent">

                {data.map(({id, name, labels}) => (
                    <TabPanel key={id} value={value} index={id}>
                        <div className={"container flex justify-center items-center h-full w-full"}>
                            {name}
                        </div>
                    </TabPanel>
                ))}


            </div>
        </div>
    );
}
