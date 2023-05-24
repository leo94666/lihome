import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {ThemeProvider} from "@material-tailwind/react";
import {SessionProvider} from "next-auth/react";
import 'reflect-metadata';

export default function App({Component, pageProps: {session, ...pageProps}}: AppProps) {


    // @ts-ignore
    const customTheme = {
        comment: {
            theme:{},
            component:{},
            defaultProps: {},
            valid:{},
            styles:{
                backgroundImage:"/background.png"

            },
            style:{
                backgroundImage:"/background.png"
            }
        }
    }


    return (
        <SessionProvider session={session} refetchInterval={10}>
            <ThemeProvider value={customTheme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </SessionProvider>

    )


}
