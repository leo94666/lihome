import Image from 'next/image'
import {Inter} from 'next/font/google'
import {useEffect} from "react";

import Layout from "@/components/layout/layout";

import Home from "@/pages/home";
import * as React from "react";
import {useSession} from "next-auth/react";
import { Axios } from 'axios';


const axios = Axios.create({
    baseURL: 'http://localhost:3000/api'
})



const inter = Inter({subsets: ['latin']})

export default function App() {

    return (
        <>
            <Layout className=" h-screen">
                 <Home className={"h-screen"}/>
                
            </Layout>
        </>

    )
}
