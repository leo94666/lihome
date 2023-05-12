import Image from 'next/image'
import {Content, Inter} from 'next/font/google'
import {useEffect} from "react";

import LiFooter from '@/components/layout/footer'
import Head from "next/head";
import Layout from "@/components/layout/layout";
import {Avatar} from "@material-tailwind/react";
import Footer from "@/components/layout/footer";

const inter = Inter({subsets: ['latin']})

export default function Home() {
    useEffect(() => {
        console.log("================================")
    }, [])
    return (
        <>
            <Layout className="h-screen">
                <div className={"h-full"}>
                    <span>TTTT</span>
                </div>
            </Layout>
        </>

    )
}
