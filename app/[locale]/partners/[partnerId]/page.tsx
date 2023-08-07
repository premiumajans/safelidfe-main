import Image from "next/image";
import parse from "html-react-parser";
import Link from "next/link";
import React from "react";
import {useLocale, useTranslations} from "next-intl";



export async function generateMetadata(
    {params: {partnerId,locale}}: { params: { partnerId: any, locale:string } },
) {

    // fetch data
    const partner = (await (await fetch(process.env["NEXT_MAIN_PATH"] + `partner/${partnerId}`, {cache: 'no-store',})).json()).partner

    const translatedItem = partner.translations.find((item: any) => item.locale === locale)

    return {
        title: translatedItem.name,
    }
}



const Page = async ({params: {partnerId}}: { params: { partnerId: string } }) => {
    const partner = (await (await fetch(process.env["NEXT_MAIN_PATH"] + `partner/${partnerId}`, {cache: 'no-store',})).json()).partner
    return <PageContent partner={partner}/>
}

const PageContent = ({partner}: { partner: any }) => {

    const locale = useLocale()
    const t = useTranslations('Index')

    const translatedItem = partner.translations.find((item: any) => item.locale === locale)

    return <>
        <div id="block-main">

            <div id="main" className="wrapper grid-block">

                <div id="maininner" className="grid-box" style={{minHeight: "549"}}>


                    <section id="breadcrumbs">
                        <div className="breadcrumbs"><Link href="/">SafeLife.az</Link><Link
                            href="/partners">{t('partners')}</Link><strong>{translatedItem.name}</strong></div>
                    </section>

                    <section id="content" className="grid-block">

                        <div id="system">


                            <article className="item">

                                <header>


                                    <h1 className="title">
                                        <a href=""
                                           title={translatedItem.name}>{translatedItem.name}</a>
                                    </h1>


                                </header>


                                <div className="content clearfix">
                                    <p style={{textAlign: "justify"}}>
                                        <Image
                                            style={{float: "left", marginRight: 20}} alt="layihe" height="119"
                                            width="150"
                                            src={process.env["NEXT_MAIN_PATH_WITHOUT_API"] + partner.photo}/>
                                        <div>
                                            {translatedItem.description ? parse(translatedItem.description) : ''}
                                        </div>
                                    </p>

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