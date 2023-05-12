import * as React from 'react';
import Head from "next/head";

type Props = {};
export const Index = (props: Props) => {
    return (
        <div>
            <Head>
                <title>欢迎来到太极起始页</title>
                <link rel="icon" href="favicon.ico" />
            </Head>

        </div>
    );
};