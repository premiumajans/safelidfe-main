import React from 'react';
import {useLocale, useTranslations} from "next-intl";
import parse from "html-react-parser";
import Link from "next/link";

export  async  function generateMetadata({params:{locale}}) {

    const about = (await (await fetch(process.env["NEXT_MAIN_PATH"] + 'about',{cache:'no-store',})).json()).about

    const translatedItem = about[1] ? about[1].translations.find((item: any) => item.locale === locale) : ''

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

                <div id="maininner" className="grid-box" style={{minHeight: "564"}}>

                    <section id="breadcrumbs">
                        <div className="breadcrumbs"><Link href={`/${locale}`}>SafeLife.az</Link><Link
                            href={`/${locale}/about-company`}>{t('about')}</Link><strong>{t('our_missions')}</strong>
                        </div>
                    </section>






                    <section id="content" className="grid-block">

                        <div id="system">


                            <article className="item">

                                <header>


                                    <h1 className="title">
                                        <a href=""
                                           title="Məqsəd və missiya">{t('our_missions')}</a>
                                    </h1>


                                </header>


                                <div className="content clearfix">
                                    {about[1] && parse(about[1].translations.find((item:any) => item.locale === locale).description)}
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