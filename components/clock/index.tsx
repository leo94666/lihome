import React, {useEffect, useState} from 'react'
import dynamic from "next/dynamic";
import dateFormat from "dateformat";
import {NextPageContext} from "next";
import {i18n} from "dateformat";
import {clearInterval} from "timers";

i18n.dayNames = [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六",
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六",
];


type Props = {
    className?: string
    format?: string
}


const Clock = (props: Props) => {

    const {className, format = "yyyy年mm月dd日 HH:MM:ss dddd"} = props

    const [date, setDate] = useState(new Date())


    useEffect( () => {
        const timer = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => {
                clearInterval(timer)
        };
    }, []);


    return (
        <div className={`${className} w-max`}>
            <span>{date ? dateFormat(date, format) : ""}</span>
        </div>
    )

}

export default Clock