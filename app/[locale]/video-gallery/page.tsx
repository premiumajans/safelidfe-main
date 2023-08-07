import Link from "next/link";
import Image from "next/image";
import React from "react";
import {useLocale, useTranslations} from "next-intl";

const Page = async () => {
    const video = (await (await fetch(process.env["NEXT_MAIN_PATH"] + 'video',{cache:'no-store',})).json()).video
    return <PageContent video={video} />
}


const PageContent = ({video}:{video:any}) => {

    const locale = useLocale()
    const t = useTranslations('Index')

    return <>
        <div id="block-main">

            <div id="main" className="wrapper grid-block">

                <div id="maininner" className="grid-box" style={{minHeight: "362px"}}>


                    <section id="breadcrumbs">
                        <div className="breadcrumbs"><Link href="/">SafeLife.az</Link><Link
                            href="/gallery">{t('gallery')}</Link><strong>{t('video_gallery')}</strong>
                        </div>
                    </section>
                    <section id="content" className="grid-block">

                        <div id="system">


                            <div className="items items-col-2 grid-block">
                                {typeof video !== "string" && video.map((item:any) => {
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


                                                <div className="content clearfix"><p><a
                                                    href={item.link}><img width={200} height={100}
                                                                          src={`https://img.youtube.com/vi/${item.link.split('/')[item.link.split('/').length - 1 ].toString()}/maxresdefault.jpg`}
                                                                          alt="bakubuild12"/></a></p>
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