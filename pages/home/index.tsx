import * as React from 'react';
import Head from "next/head";
import SearchBox from "@/components/searchbox";
import Tabs from "@/components/tabs";
import SuperTabs from "@/components/supertabs";

import Profile from "@/components/profile";
import Account from "@/components/wechat";
import Avatar from '@/components/avatar';
import dynamic from "next/dynamic";
import {Tab} from '@material-tailwind/react';

type Props = {
    className?: string
};
export const Index = (props: Props) => {

    const {className} = props

    const [toggle, setToggle] = React.useState(false);

    const search = (msg: string) => {
        console.log(`click search for ${msg}`)
    }

    function showLogin() {
        setToggle(!toggle)
    }

    let tabs = [
        {
            id: 0, name: "常用", labels: [
                {id: 0, name: "太极", url: ""},
                {id: 1, name: "太极", url: ""},
                {id: 2, name: "太极", url: ""},
                {id: 3, name: "太极", url: ""},
                {id: 4, name: "太极", url: ""},
                {id: 5, name: "太极", url: ""},
                {id: 6, name: "太极", url: ""},
            ]
        }, {
            id: 1, name: "开发", labels: [
                {id: 0, name: "太极", url: ""},
                {id: 1, name: "太极", url: ""},
                {id: 2, name: "太极", url: ""}
            ]
        }, {
            id: 2, name: "咨询", labels: [
                {id: 0, name: "太极", url: ""}
            ]
        }, {
            id: 3, name: "商业", labels: [
                {id: 0, name: "太极", url: ""}
            ],
        }, {
            id: 4, name: "娱乐", labels: [
                {id: 0, name: "太极", url: ""}
            ],
        }
    ]

    return (
        <div>
            <Head>
                <title></title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div className={`${className} h-full relative bg-no-repeat bg-cover bg-[url('https://bing.img.run/rand_uhd.php')]`}>
                <SearchBox onSearch={search} className={"absolute w-full md:top-24 md:w-1/3 md:left-1/3"}/>
                <SuperTabs data={tabs}/>
                {/*<Tabs className={"absolute top-1/3 w-1/2 left-1/4 md:w-1/2 md:left-1/4"} data={tabs}/>*/}
            </div>
        </div>
    );
};

export default Index