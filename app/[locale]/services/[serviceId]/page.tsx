import Image from "next/image";
import parse from "html-react-parser";
import {useLocale, useTranslations} from "next-intl";
import Link from "next/link";

export async function generateMetadata(
    {params: {serviceId,locale}}: { params: { serviceId: any, locale:string } },
) {

    // fetch data
    const service = (await (await fetch(process.env["NEXT_MAIN_PATH"] + `service/${serviceId}`,{cache:'no-store',})).json()).service

    const translatedItem = service.translations.find((item: any) => item.locale === locale)

    return {
        title: translatedItem.name,
        openGraph: {
            images: [service.photo],
        },
    }
}


const Page = async ({params:{serviceId}}:{params:{serviceId:any}}) => {
    const service = (await (await fetch(process.env["NEXT_MAIN_PATH"] + `service/${serviceId}`,{cache:'no-store',})).json()).service

    return <PageContent service={service} />
}


const PageContent =  ({service}:{service:any}) => {

    const t = useTranslations('Index')
    const locale = useLocale()

    const translatedItem = service.translations.find((item: any) => item.locale === locale)

    return <>
        <div id="block-main">

            <div id="main" className="wrapper grid-block">

                <div id="maininner" className="grid-box" style={{minHeight: "549"}}>


                    <section id="breadcrumbs">
                        <div className="breadcrumbs"><Link href="/">SafeLife.az</Link><Link
                            href="/services">{t('services')}</Link><strong>{translatedItem.name}</strong></div>
                    </section>

                    <section id="content" className="grid-block">

                        <div id="system">


                            <article className="item">

                                <header>


                                    <h1 className="title">
                                        <a href=""
                                           title={service.name}>{translatedItem.name}</a>
                                    </h1>


                                </header>


                                <div className="content clearfix">
                                    <p style={{textAlign: "justify"}}>
                                    <Image
                                    style={{float: "left", marginRight:20}} alt="layihe" height="119" width="150"
                                    src={process.env["NEXT_MAIN_PATH_WITHOUT_API"] + service.photo}/>{translatedItem.description ? parse(translatedItem.description) : ''}</p>

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