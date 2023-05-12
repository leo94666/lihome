import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {ThemeProvider} from "@material-tailwind/react";

export default function App({Component, pageProps}: AppProps) {

    const customTheme = {
        comment:{
            defaultProps:{}
        }
    }


    return (
        <ThemeProvider value={customTheme}>
            <Component {...pageProps} />
        </ThemeProvider>
    )


}
