// @flow
import * as React from 'react';
import {KeyboardEvent, ReactNode, useEffect, useState} from "react";

import {Button, Menu, MenuHandler, MenuItem, MenuList} from "@material-tailwind/react";

import Google from "@/components/icon/google/google"
import Baidu from "@/components/icon/baidu/baidu";
import Bing from "@/components/icon/bing/bing";
import G360 from "@/components/icon/360/360";
import Search from "@/components/icon/search/search";
import dynamic from "next/dynamic";
const Clock =  dynamic(()=> import('@/components/clock'),{ssr:false}) // 在SSR的时候不要渲染<DynamicImage />组件



type SearchHistory = {
    name: string,
    link: string
}

type SearchType = {
    name: string,
    icon: ReactNode,
    link: string
}

type Props = {
    className?: string,
    placeholder?: string,
    defaultSearchType?: SearchType,
    searchType?: SearchType[],
    onSearch?: Function,
    history?:SearchHistory[]
};

function Index(props: Props) {

    const {
        onSearch,
        className="w-1/3",
        placeholder = "请输入关键字",
        defaultSearchType = {name: "Google", icon: <Google/>, link: "https://www.google.com/search?q="},
        searchType = [
            {name: "Google", icon: <Google/>, link: "https://www.google.com/search?q="},
            {name: "Baidu", icon: <Baidu/>, link: "https://www.baidu.com/s?wd="},
            {name: "Bing", icon: <Bing/>, link: "https://www.bing.com/search?q="},
            {name: "360", icon: <G360/>, link: "https://www.so.com/s?q="}
        ],
        history=[
            {name:"太极主页是什么",link:""}
        ]
    } = props;

    let [content, setContent] = useState('')

    let [selectSearchType, setSelectSearchType] = useState(defaultSearchType)

    useEffect(() => {
        let item = localStorage.getItem("SearchType");
        searchType.map((type) => {
            if (type.name == item) {
                setSelectSearchType(type)
                localStorage.setItem("SearchType", type.name)
            }
        })
    }, [])

    function handleSearch() {
        console.log("click search.")
        if (onSearch) {
            onSearch(content.toString())
        }
        window.open(selectSearchType.link + content.toString())

        setContent("")
    }

    const handleInputChange = (value: any) => {
        setContent(value.target.value)
        setOpenSearchHistory(true)
    }

    const handleInputFocus = (value: any) => {
        setOpenSearchHistory(true)
    }


    const handleInputKeyDown = (event: KeyboardEvent) => {
        if (event.keyCode == 13) {
            handleSearch()
        }
    }

    const handleClickMenuItem = (type: SearchType) => {
        setSelectSearchType(type)
        localStorage.setItem("SearchType", type.name)
    }

    const [openSearchTypeMenu, setOpenSearchTypeMenu] = React.useState(false);
    const [openSearchHistory, setOpenSearchHistory] = React.useState(false);

    let input: HTMLInputElement | null;

    function handleInputBlur() {
        setTimeout(() => {
            input?.focus()
        }, 10)
    }



    return (
        <div className={`${className} flex flex-col gap-3`}>
            <div className={"flex-none justify-center items-center"}>
                <Clock className={"text-5xl mx-auto text-gray-200"} format={"HH:MM:ss"}/>
                <Clock className={"text-1xl mx-auto text-gray-200 p-2"} format={"yyyy年mm月dd日 dddd"}/>
            </div>
            <div className={"bg-white rounded-full flex"}>
                <div className="flex-none w-10 h-10 rounded-full hover:bg-gray-400" onMouseOver={() => {
                    setOpenSearchTypeMenu(true)
                }
                } onMouseLeave={() => {
                    setOpenSearchTypeMenu(false)
                }}>
                    <Menu open={openSearchTypeMenu} handler={setOpenSearchTypeMenu}>
                        <MenuHandler>
                            <div className={"w-full h-full p-2"}>
                                {
                                    selectSearchType?.icon
                                }
                            </div>
                        </MenuHandler>
                        <MenuList>
                            {
                                searchType?.map(({name, icon, link}) => (
                                    <MenuItem key={name} onClick={() => {
                                        handleClickMenuItem({name, icon, link})
                                    }}>
                                        <div className={"flex"}>
                                            <div className={"flex-none w-6 h-6 p-0.5"}>
                                                {
                                                    icon
                                                }
                                            </div>
                                            <span
                                                className={"grow h-6 text-left pl-4 leading-relaxed"}>{name}</span>
                                        </div>
                                    </MenuItem>
                                ))
                            }
                        </MenuList>
                    </Menu>
                </div>
                <div className="grow h-10">
                    <input
                        ref={el => input = el}
                        value={content}
                        onChange={handleInputChange}
                        onKeyDown={handleInputKeyDown}
                        onBlur={handleInputBlur}
                        onFocus={handleInputFocus}
                        className="h-full p-2.5 w-full z-20 text-sm text-gray-900 focus:outline-0"
                        placeholder={placeholder} required/>
                </div>
                <div className="flex-none w-10 h-10 rounded-full hover:bg-gray-400" onClick={handleSearch}>
                    <Search className={"p-2 text-black"}/>
                </div>
            </div>
            <div className={"w-full"}>
                <Menu open={openSearchHistory} handler={setOpenSearchHistory} allowHover={true}>
                    <MenuHandler>
                        <div className={"w-full"}></div>
                    </MenuHandler>
                    <MenuList className={`${className}`}>
                        {
                            history.map(({name, link})=>(
                                <MenuItem key={name}>{name}</MenuItem>
                            ))
                        }
                        <hr className=""/>
                        <MenuItem>清理搜索记录</MenuItem>
                    </MenuList>
                </Menu>
            </div>
        </div>
    )
}

export default Index