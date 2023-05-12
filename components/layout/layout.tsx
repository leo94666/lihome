import React, {ReactNode} from "react";
import Header from "./header";
import Footer from "./footer";
import Head from "next/head";

function layout({className, children}: { className: string, children: ReactNode }) {
    return (
        <div className={`${className}`}>
            <Head>
                <title>欢迎来到Bagutree起始页</title>
                <link rel="icon" href="../../public/favicon.ico"/>
            </Head>
            <main className="relative h-screen w-screen">
                {children}
                <Footer className={"absolute inset-x-0 bottom-0"}/>
            </main>
        </div>
    );
}

export default layout;
