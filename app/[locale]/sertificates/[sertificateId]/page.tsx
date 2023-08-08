import Image from "next/image";
import parse from 'html-react-parser'
import {useLocale, useTranslations} from "next-intl";
import Link from "next/link";
import React from "react";



export async function generateMetadata(
    {params: {sertificateId,locale}}: { params: { sertificateId: any, locale:string } },
) {

    // fetch data
    const sertificate = (await (await fetch(process.env["NEXT_MAIN_PATH"] + `sertificate/${sertificateId}`, {cache: 'no-store',})).json()).sertificate

    const translatedItem = sertificate.translations.find((item: any) => item.locale === locale)

    return {
        title: translatedItem.name,
        openGraph: {
            images: [sertificate.photo],
        },
    }
}


const Page = async ({params: {sertificateId}}: { params: { sertificateId: any } }) => {
    const sertificate = (await (await fetch(process.env["NEXT_MAIN_PATH"] + `sertificate/${sertificateId}`, {cache: 'no-store',})).json()).sertificate

    return <PageContent sertificate={sertificate}/>
}

const PageContent = ({sertificate}: { sertificate: any }) => {

    const t = useTranslations('Index')
    const locale = useLocale()

    const translatedItem = sertificate.translations.find((item: any) => item.locale === locale)


    return <>


        <div id="block-main">

            <div id="main" className="wrapper grid-block">

                <div id="maininner" className="grid-box" style={{minHeight: "752px"}}>




                    <section id="breadcrumbs">
                        <div className="breadcrumbs"><Link href={`/${locale}`}>SafeLife.az</Link><Link
                            href={`/${locale}/sertificates`}>{t('sertificates_licences')}</Link><strong>{translatedItem.name}</strong></div>
                    </section>

                    <section id="content" className="grid-block">

                        <div id="system">


                            <article className="item"
                            >

                                <header>


                                    <h1 className="title">
                                        <a href=""
                                           title="FHN - Lisenziya">{translatedItem.name}</a>
                                    </h1>


                                </header>


                                <div className="content clearfix">
                                    <p><br/><Image
                                        style={{margin: "0px 10px 0px 0px", border: "1px solid #ff0000", float: "left"}}
                                        src={process.env["NEXT_MAIN_PATH_WITHOUT_API"] + sertificate.photo} alt="14"
                                        width="417" height="600"/></p>
                                    {translatedItem.description ? parse(translatedItem.description.toString()) : null}
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