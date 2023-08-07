import React from 'react';
import {useLocale, useTranslations} from "next-intl";
import Link from "next/link";
import parse from "html-react-parser";


export  async  function generateMetadata({params:{locale}}) {

    const about = (await (await fetch(process.env["NEXT_MAIN_PATH"] + 'about',{cache:'no-store',})).json()).about

    const translatedItem = about[3] ? about[3].translations.find((item: any) => item.locale === locale) : ''

    return {
        title: translatedItem?.title,

    }
}


const Page = async () => {
    const about = (await (await fetch(process.env["NEXT_MAIN_PATH"] + 'about', {cache: 'no-store',})).json()).about
    return <PageContent about={about}/>
}

const PageContent = ({about}: { about: any }) => {
    const t = useTranslations('Index')
    const locale = useLocale()
    return <>
        <div id="block-main">

            <div id="main" className="wrapper grid-block">

                <div id="maininner" className="grid-box" style={{minHeight: "285px"}}>

                    <section id="breadcrumbs">
                        <div className="breadcrumbs"><Link href="/">SafeLife.az</Link><Link
                            href="/about-company">{t('about')}</Link><strong>{t('careers')}</strong></div>
                    </section>

                    <section id="content" className="grid-block">

                        <div id="system">


                            <article className="item">

                                <header>


                                    <h1 className="title">
                                        <a href=""
                                           title="Karyera">{t('careers')}</a>
                                    </h1>


                                </header>


                                <div className="content clearfix">
                                    {about[3] && parse(about[3].translations.find((item: any) => item.locale === locale).description)}
                                </div>


                            </article>

                        </div>
                    </section>


                </div>


            </div>

        </div>
    </>
};

export default Page;