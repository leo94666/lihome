import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {ThemeProvider} from "@material-tailwind/react";
import {SessionProvider} from "next-auth/react";

export default function App({Component, pageProps: {session, ...pageProps}}: AppProps) {


    const customTheme = {
        comment: {
            theme:{},
            component:{},
            defaultProps: {},
            valid:{},
            styles:{},
            style:{}
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
