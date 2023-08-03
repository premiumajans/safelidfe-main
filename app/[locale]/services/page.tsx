import Link from "next/link";
import Image from "next/image";
import {useLocale, useTranslations} from "next-intl";


const Page = async () => {
    const service = (await (await fetch(process.env["NEXT_MAIN_PATH"] + 'service',{cache:'no-store',})).json()).service

    return <PageContent service={service} />
}

const PageContent =  ({service}:{service:any}) => {

    const t = useTranslations('Index')
    const locale = useLocale()

    return <>
        <div id="block-main">

            <div id="main" className="wrapper grid-block">

                <div id="maininner" className="grid-box" >


                    <section id="breadcrumbs">
                        <div className="breadcrumbs"><Link href="/">SafeLife.az</Link><Link
                            href="/services">{t('services')}</Link></div>
                    </section>

                    <section id="content" className="grid-block">

                        <div id="system">


                            <article className="item">

                                <header>


                                    <h1 className="title">
                                        <a href=""
                                           title="Xidmətlər">{t('services')}</a>
                                    </h1>


                                </header>


                                <div className="content clearfix" style={{display:"flex", flexWrap:"wrap", gap:20}}>
                                    {typeof  service !== 'string' && service.map((item:any) => {
                                        const translatedItem = item.translations.find((item:any) => item.locale === locale)
                                        return  <h5 key={item.id} style={{marginTop: "0px", textAlign:"center"}}><Link
                                            href={`/services/${item.id}`}><Image
                                            src={process.env["NEXT_MAIN_PATH_WITHOUT_API"] + item.photo}
                                            alt="avtomatik-siqnal" style={{width:150, height:119}} width="150" height="119"/></Link><br/><Link
                                            href={`/services/${item.id}`} style={{fontWeight:'bold'}}>{translatedItem.name}</Link></h5>
                                    })}

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