import React from 'react'
import dynamic from "next/dynamic";
import dateFormat from "dateformat";
import {NextPageContext} from "next";
import { i18n } from "dateformat";

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

type State = {
    date?:Date,
    format?: string
}



class Clock extends React.Component<Props,State> {
    private timerID: NodeJS.Timer;

    state:State={
        date:new Date(),
        format: this.props.format
    }

    static async getInitialProps({ req }: NextPageContext) {

        return {

        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }


    render() {

        return (
            <div className={`${this.props.className} w-max`}>
                <h1>{dateFormat(new Date(), this.state.format)}</h1>
            </div>
        );
    }
}

export default Clock