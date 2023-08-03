import {useLocale, useTranslations} from "next-intl";

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


                            <form  className="box style" id="searchForm" method="get"
                                  name="searchForm">

                                <fieldset>
                                    <legend>{t('search_params')}</legend>

                                    <div style={{textAlign: 'center'}}>
                                        <label htmlFor="search_searchword"> {t('search_words')} </label>
                                        <input defaultValue={keywords} type="text" name="searchword" id="search_searchword" size={30}
                                               maxLength={20} className="inputbox"/>
                                        <button name="Search"
                                                className="button"> {t('search')}
                                        </button>
                                    </div>


                                </fieldset>

                                <p>{t('total', {count: entriedData.map(item => item[1]).reduce((a, b) => {
                                    return +a + +b.length
                                    },0) })}</p>

                                <input type="hidden" name="task" value="search"/>
                            </form>

                        </div>

                    </section>

                </div>


            </div>
        </div>

    </>
};

export default Page;