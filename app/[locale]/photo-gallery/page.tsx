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

                            {typeof  photo !== "string" && photo.map((item:any) => {
                                const translatedItem = item.translations.find((item:any) => item.locale === locale)
                                return <Link key={item.id} href={`/photo-gallery/${item.id}`}>

                                    <div  className="items items-col-3 grid-block">
                                        <div className="grid-box width33">
                                            <article className="item">

                                                <header>


                                                    <h1 className="title">
                                                        <a href=""
                                                           title="Baku Build 2012">{translatedItem.name}</a>
                                                    </h1>


                                                </header>


                                                <div className="content clearfix"><p><a
                                                    href=""><Image width={200} height={100}
                                                                   src={process.env["NEXT_MAIN_PATH_WITHOUT_API"] + item.photo}
                                                                   alt="bakubuild12"/></a></p>
                                                </div>


                                            </article>
                                        </div>
                                    </div>
                                </Link>

                            })}

                        </div>
                    </section>


                </div>


            </div>

        </div>
    </>
};

export default Page;