
import React from "react";
import Link from "next/link";
import {useLocale, useTranslations} from "next-intl";
import parse from "html-react-parser";
import Gallery from "@/Components/Gallery";

const Page = async ({params:{photoId}}:{params: { photoId: any }}) => {
    const photo = (await (await fetch(process.env["NEXT_MAIN_PATH"] + `photo/${photoId}`,{cache:'no-store',})).json()).photo
    return <PageContent photo={photo} />
}

const PageContent = ({photo}:{photo:any}) => {
    const locale = useLocale()
    const t = useTranslations('Index')

    const translatedItem = photo.translations.find((item:any) => item.locale === locale)

    return <>
        <div id="block-main">

            <div id="main" className="wrapper grid-block">

                <div id="maininner" className="grid-box" style={{minHeight: "362px"}}>


                    <section id="breadcrumbs">
                        <div className="breadcrumbs"><Link href="/">SafeLife.az</Link><Link
                            href="/gallery">{t('gallery')}</Link><strong>{translatedItem.name}</strong>
                        </div>
                    </section>

                    <div className="content clearfix">
                        {translatedItem.description ? parse(translatedItem.description) : ''}
                        <Gallery imgs={photo.photos.map((item:any) => [{...item, photo:process.env["NEXT_MAIN_PATH_WITHOUT_API"] + item.photo}])}/>
                    </div>

                </div>


            </div>

        </div>
    </>
};

export default Page;