import React from 'react';
import Link from "next/link";
import {useLocale, useTranslations} from "next-intl";

const Page = async () => {
    const product = (await (await fetch(process.env["NEXT_MAIN_PATH"] + 'product',{cache:'no-store',})).json()).product
    return <PageContent product={product} />
}

const PageContent = ({product}:{product:any}) => {

    const t = useTranslations('Index')
    const locale = useLocale()

    return <>
        <div id="block-main">

            <div id="main" className="wrapper grid-block">

                <div id="maininner" className="grid-box" >


                    <section id="breadcrumbs">
                        <div className="breadcrumbs"><Link
                            href="/">Safelife.az</Link><strong>{t('products')}</strong>
                        </div>
                    </section>

                    <section id="content" className="grid-block">

                        <div id="system">


                            <article className="item">

                                <header>


                                    <h1 className="title">
                                        <a href=""
                                           title="Məhsullar">{t('products')}</a>
                                    </h1>


                                </header>


                                <div className="content clearfix" style={{display:"flex", gap:20,flexWrap:"wrap"}}>
                                    {typeof product !== 'string' && product.map((item:any) => {
                                        const translatedItem = item.translations.find((item:any) => item.locale === locale)
                                        return <Link  key={item.id} href={`/${locale}/products/${item.id}`}>
                                            <h5 style={{marginTop: "0px", fontWeight:'bold'}}><a
                                                href="">{translatedItem.name}</a></h5>
                                        </Link>
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