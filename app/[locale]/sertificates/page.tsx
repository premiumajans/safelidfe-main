import Image from "next/image";
import Link from "next/link";
import {useLocale, useTranslations} from "next-intl";
import parse from "html-react-parser";

const Page = async () => {
    const sertificate = (await (await fetch(process.env["NEXT_MAIN_PATH"] + 'sertificate',{cache:'no-store',})).json()).sertificate

    return <PageContent sertificate={sertificate} />
}

const PageContent =  ({sertificate}:{sertificate:any}) => {

    const t = useTranslations('Index')
    const locale = useLocale()

    return <>
        <div id="block-main">

            <div id="main" className="wrapper grid-block">

                <div id="maininner" className="grid-box" style={{minHeight: "407px"}}>


                    <section id="breadcrumbs">
                        <div className="breadcrumbs"><Link href="/">SafeLife.az</Link><Link
                            href="/about-company">{t('about')}</Link><strong>{t('sertificates_licences')}</strong></div>
                    </section>

                    <section id="content" className="grid-block">

                        <div id="system">

                            <h1 className="title">{t('sertificates_licences')}</h1>


                            <div className="items items-col-2 grid-block">
                                {typeof sertificate !== "string" && sertificate.map((item:any) => {
                                    const translatedItem = item.translations.find((item:any) => item.locale === locale)
                                    return <Link key={item.id} href={`/sertificates/${item.id}`}>
                                        <div  className="grid-box width50">
                                            <article className="item"
                                            >

                                                <header>


                                                    <h1 className="title">
                                                        <Link href={`/sertificates/${item.id}`}
                                                           title={translatedItem.name}>{translatedItem.name}</Link>
                                                    </h1>


                                                </header>


                                                <div className="content clearfix"><p>
                                                    <Image
                                                        style={{border: "1px solid #ff0000",width:152, height:218}} src={process.env['NEXT_MAIN_PATH_WITHOUT_API'] + item.photo}
                                                        alt="14-s" width="150" height="216"/></p>
                                                </div>


                                            </article>
                                        </div>
                                    </Link>
                                })}

                            </div>
                        </div>
                    </section>


                </div>


            </div>

        </div>
    </>
};

export default Page;