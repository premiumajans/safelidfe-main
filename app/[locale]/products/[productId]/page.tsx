import Link from "next/link";
import parse from "html-react-parser";
import Gallery from "@/Components/Gallery";
import {useLocale, useTranslations} from "next-intl";
import React from "react";


export async function generateMetadata(
    {params: {productId,locale}}: { params: { productId: any, locale:string } },
) {

    // fetch data
    const product = (await (await fetch(process.env["NEXT_MAIN_PATH"] + `product/${productId}`,{cache:'no-store',})).json()).product

    const translatedItem = product.translations.find((item: any) => item.locale === locale)

    return {
        title: translatedItem.name,
    }
}

const Page = async ({params:{productId}}:{params:{productId:string}}) => {
    const product = (await (await fetch(process.env["NEXT_MAIN_PATH"] + `product/${productId}`,{cache:'no-store',})).json()).product
    return <PageContent product={product} />
}

const PageContent = ({product}:{product:any}) => {

    const locale = useLocale()
    const t = useTranslations('Index')

    const translatedItem = product.translations.find((item: any) => item.locale === locale)
    return <>
        <div id="block-main">

            <div id="main" className="wrapper grid-block">



                <div id="maininner" className="grid-box" style={{minHeight: "960px"}}>


                    <section id="breadcrumbs">
                        <div className="breadcrumbs"><Link href="/">SafeLife.az</Link><Link
                            href="/products">{t('products')}</Link><strong>{translatedItem.name}</strong></div>
                    </section>

                    <section id="content" className="grid-block">

                        <div id="system">


                            <article className="item">

                                <header>


                                    <h1 className="title">
                                        <a href=""
                                           title="Yanğın təhlükəsizliyi sistemləri (Yanğın siqnalizasiyası)">{translatedItem.name}</a>
                                    </h1>


                                </header>


                                <div className="content clearfix">
                                    {translatedItem.description ? parse(translatedItem.description) : ''}
                                    <Gallery imgs={product.photos.map((item:any) => [{...item, photo:process.env["NEXT_MAIN_PATH_WITHOUT_API"] + item.photo}])}/>
                                </div>
                                <em>{t('guarantee')}</em>
                            </article>

                        </div>
                    </section>


                </div>


            </div>

        </div>
    </>
};

export default Page;