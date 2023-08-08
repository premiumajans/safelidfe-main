import Link from "next/link";
import Image from "next/image";
import React from "react";
import {useLocale, useTranslations} from "next-intl";


const Page = async () => {
    const partners = (await (await fetch(process.env['NEXT_MAIN_PATH'] + 'partner', {cache: 'no-store'})).json()).partner
    return <PageContent partners={partners}/>
}

const PageContent = ({partners}: { partners: any }) => {

    const locale = useLocale()
    const t = useTranslations('Index')


    return <>
        <div id="block-main">

            <div id="main" className="wrapper grid-block">

                <div id="maininner" className="grid-box" >


                    <section id="breadcrumbs">
                        <div className="breadcrumbs"><Link href={`/${locale}`}>SafeLife.az</Link><Link
                            href={`/${locale}/partners`}>{t('partners')}</Link>
                        </div>
                    </section>




                    <section id="content" className="grid-block">

                        <div id="system">

                            <h1 className="title">{t('partners')}</h1>


                            <div className="items grid-block">

                                {typeof partners !== 'string' ? partners.map((item: any) => {
                                    return <Link className={'grid-box width33'} key={item.id}
                                                 href={`partners/${item.id}`}>
                                        <article className="item">


                                            <div className="content clearfix"><p><Link href={`partners/${item.id}`}
                                            ><Image
                                                style={{objectFit: 'fill', width: 230, height: 70}}
                                                src={process.env["NEXT_MAIN_PATH_WITHOUT_API"] + item.photo} width="230"
                                                height="70"
                                                alt="aes-intel"/></Link></p>
                                            </div>


                                        </article>
                                    </Link>
                                }) : ''}

                            </div>


                        </div>
                    </section>


                </div>


            </div>

        </div>
    </>
};

export default Page;