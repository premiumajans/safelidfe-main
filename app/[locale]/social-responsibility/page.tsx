import {useLocale, useTranslations} from "next-intl";
import Link from "next/link";
import React from "react";
import parse from "html-react-parser";


export  async  function generateMetadata({params:{locale}}) {

    const about = (await (await fetch(process.env["NEXT_MAIN_PATH"] + 'about',{cache:'no-store',})).json()).about

    const translatedItem = about[2] ? about[2].translations.find((item: any) => item.locale === locale) : ''

    return {
        title: translatedItem?.title,

    }
}



const Page = async () => {
    const about = (await (await fetch(process.env["NEXT_MAIN_PATH"] + 'about',{cache:'no-store',})).json()).about
    return <PageContent about={about} />
}
const PageContent = ({about}:{about:any}) => {
    const locale = useLocale()
    const t = useTranslations('Index')
    return <>
        <div id="block-main">

            <div id="main" className="wrapper grid-block">

                <div id="maininner" className="grid-box" style={{minHeight: "360px"}}>


                    <section id="breadcrumbs">
                        <div className="breadcrumbs"><Link href={`/${locale}`}>SafeLife.az</Link><Link
                            href={`/${locale}/about-company`}>{t('about')}</Link><strong>{t('sosial_response')}</strong></div>
                    </section>

                    <section id="content" className="grid-block">

                        <div id="system">


                            <article className="item">

                                <header>


                                    <h1 className="title">
                                        <a href=""
                                           title="Korporativ Sosial Məsuliyyət">{t('sosial_response')}</a>
                                    </h1>


                                </header>


                                <div className="content clearfix">
                                    {about[2] && parse(about[2].translations.find((item:any) => item.locale === locale).description)}
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