import React from "react";
import Link from "next/link";
import {useLocale, useTranslations} from "next-intl";
import Image from "next/image";


const Page = async () => {
    const photo = (await (await fetch(process.env["NEXT_MAIN_PATH"] + 'photo',{cache:'no-store',})).json()).photo
    return <PageContent photo={photo} />
}

const PageContent = ({photo}:{photo:any}) => {

    const locale = useLocale()
    const t = useTranslations('Index')

    return <>
        <div id="block-main">

            <div id="main" className="wrapper grid-block">

                <div id="maininner" className="grid-box" style={{minHeight: "362px"}}>


                    <section id="breadcrumbs">
                        <div className="breadcrumbs"><Link href="/">SafeLife.az</Link><Link
                            href="/gallery">{t('gallery')}</Link><strong>{t('photo_gallery')}</strong>
                        </div>
                    </section>

                    <section id="content" className="grid-block">

                        <div id="system">


                            <div className="items items-col-2 grid-block">
                                {typeof photo !== "string" && photo.map((item:any) => {
                                    const translatedItem = item.translations.find((item:any) => item.locale === locale)
                                    return <Link  key={item.id} href={`/photo-gallery/${item.id}`}>
                                        <div style={{marginTop:10}}  className="grid-box width25">
                                            <article className="item"
                                            >

                                                <header>


                                                    <h1 className="title">
                                                        <Link href={`/photo-gallery/${item.id}`}
                                                              title={translatedItem.name}>{translatedItem.name}</Link>
                                                    </h1>


                                                </header>


                                                <div className="content clearfix"><p>
                                                    <Image
                                                        style={{border: "1px solid #ff0000",width:300, height:225}} src={process.env['NEXT_MAIN_PATH_WITHOUT_API'] + item.photo}
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