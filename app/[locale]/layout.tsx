import './globals.scss'
import {Inter} from 'next/font/google'
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import {useLocale} from "next-intl";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'SAFE LIFE',
}

export default function RootLayout({
                                       children, params
                                   }: {
    children: React.ReactNode,
    params: any,
}) {

    const locale = useLocale();


    return <>
        <html lang={locale}>
        <head>
            <meta charSet="utf-8"/>
            <meta name="authors" content="Taleh Maharramov, Elgiz Ismayilov"/>
            <meta name="keywords" content="Safe Life"/>
            <meta name="description" content="Safe Life"/>
            <meta name="viewport" content="width=1200; initial-scale=1.0"/>

            <meta property="og:site_name" content="SAFE LIFE"/>
            <meta property="og:locale" content="az_AZE"/>
            <link href="/SL.png" rel="shortcut icon" type="image/x-icon"/>
            <link rel="stylesheet" href="https://arsenalfire.az/templates/safelife/css/base.css"/>
            <link rel="stylesheet" href="https://arsenalfire.az/templates/safelife/css/layout.css"/>
            <link rel="stylesheet" href="https://arsenalfire.az/templates/safelife/css/menus.css"/>
            <link rel="stylesheet" href="https://arsenalfire.az/templates/safelife/css/modules.css"/>
            <link rel="stylesheet" href="https://arsenalfire.az/templates/safelife/css/tools.css"/>
            <link rel="stylesheet" href="https://arsenalfire.az/templates/safelife/styles/light/css/system.css"/>
            <link rel="stylesheet" href="https://arsenalfire.az/templates/safelife/styles/light/css/extensions.css"/>
            <link rel="stylesheet" href="https://arsenalfire.az/templates/safelife/css/custom.css"/>
            <link rel="stylesheet" href="https://arsenalfire.az/templates/safelife/styles/light/css/color/red.css"/>
            <link rel="stylesheet" href="https://arsenalfire.az/templates/safelife/css/font2/metrophobic.css"/>
            <link rel="stylesheet" href="https://arsenalfire.az/templates/safelife/css/font3/ubuntu.css"/>
            <link rel="stylesheet" href="https://arsenalfire.az/templates/safelife/styles/light/css/style.css"/>
            <link rel="stylesheet" href="https://arsenalfire.az/templates/safelife/css/print.css"/>
            <link rel="stylesheet" href="https://arsenalfire.az/templates/safelife/fonts/metrophobic.css"/>
            <link rel="stylesheet" href="https://arsenalfire.az/templates/safelife/fonts/ubuntu.css"/>

        </head>
        <body className={'page sidebar-a-right sidebar-b-right isblog hassearch page-wrap '}>
        <Header/>
        {children}
        <Footer/>
        </body>
        </html>
    </>
}
