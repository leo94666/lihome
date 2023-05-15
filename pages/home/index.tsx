import * as React from 'react';
import Head from "next/head";
import SearchBox from "@/components/searchbox";
import Tabs from "@/components/tabs";
import Profile from "@/components/profile";
import Account from "@/pages/account";

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
                {id: 0, name: "太极", url: ""},
                {id: 0, name: "太极", url: ""},
                {id: 0, name: "太极", url: ""},
                {id: 0, name: "太极", url: ""},
                {id: 0, name: "太极", url: ""},
                {id: 0, name: "太极", url: ""},
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
                <title>欢迎来到太极起始页</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div className={`${className} h-full relative text-base`}>
                <Profile onLogin={showLogin}/>
                <SearchBox onSearch={search} className={"absolute top-16 w-full md:top-1/4 md:w-1/3 md:left-1/3"}/>
                <Tabs className={"absolute top-1/3 w-1/2 left-1/4 md:w-1/2 md:left-1/4"} data={tabs}/>
                <Account toggle={toggle}/>
            </div>
        </div>
    );
};

export default Index