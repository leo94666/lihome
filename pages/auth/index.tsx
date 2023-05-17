"use client";
import {SessionProvider} from "next-auth/react";
import {ReactNode} from "react";
import AppBar from "./AppBar";

interface IProps {
    children: ReactNode;
}

export default function RootLayout({children}: IProps) {
    // @ts-ignore
    return (

        <div>
            <SessionProvider>
                <AppBar/>
                <div className={"h-screen "}>{children}</div>
            </SessionProvider>
        </div>

    );
}
