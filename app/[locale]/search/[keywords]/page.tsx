import {useLocale, useTranslations} from "next-intl";
import Link from "next/link";
import Image from "next/image";
import SearchForm from "@/Components/SearchForm";

const Page = async ({params:{keywords}}:{params: { keywords:string }}) => {
    const search = (await (await fetch(process.env['NEXT_MAIN_PATH'] + `search/${keywords}`, {cache: 'no-store'})).json())?.results
    return <PageContent results={search}  keywords={keywords}/>
}

const PageContent = ({results,keywords}:{results:any,keywords:string}) => {
    const t = useTranslations("Index")
    const locale = useLocale()


    console.log(keywords, 'test')

    const entriedData = Object.entries(results)


    return <>
        <div id="block-main">

            <div id="main" className="wrapper grid-block">

                <div id="maininner" className="grid-box">


                    <section id="content" className="grid-block">

                        <div id="system">

                            <h1 className="title">{t("search_dotless")}</h1>

                            <SearchForm search={t('search')} keywords={keywords} search_params={t('search_params')} search_words={t('search_words')}/>
                            <p>{t('total', {count: entriedData.map(item => item[1]).reduce((a, b) => {
                                    return +a + +b.length
                                },0) })}</p>

                            <div>
                                <section  id="content" className="grid-block">
                                    {entriedData.map(item => {
                                        return <div key={Math.random()} id="system my-3">
                                            <article className="item">

                                                <header>


                                                    <h1 className="title">
                                                        <a style={{fontWeight:'bold'}}
                                                           title="Xidmətlər">{t(item[0])}</a>
                                                    </h1>


                                                </header>


                                                <div className="content clearfix" style={{display:"flex", flexWrap:"wrap", gap:20}}>
                                                    {typeof  item[1] !== 'string' && item[1].map((internalItem:any) => {
                                                        const translatedItem = internalItem.translations.find((item:any) => item.locale === locale)
                                                        return  <Link style={{width:150}} key={internalItem.id} href={`/${item[0]}/${internalItem.id}`}>
                                                            <h5  style={{marginTop: "0px", textAlign:"center"}}><Link
                                                                href={`/${item[0]}/${internalItem.id}`}>
                                                                {internalItem?.photo?.length ? <Image
                                                                    src={process.env["NEXT_MAIN_PATH_WITHOUT_API"] + internalItem.photo}
                                                                    alt="avtomatik-siqnal" style={{width:150, height:119, objectFit:'contain'}} width="150" height="119"/> : ''}
                                                            </Link><br/><Link
                                                                href={`/${item[0]}/${internalItem.id}`} style={{fontWeight:'bold'}}>{translatedItem.name}</Link></h5>
                                                        </Link>
                                                    })}

                                                </div>


                                            </article>

                                        </div>
                                    })}
                                </section>

                            </div>

                        </div>

                    </section>

                </div>


            </div>
        </div>

    </>
};

export default Page;