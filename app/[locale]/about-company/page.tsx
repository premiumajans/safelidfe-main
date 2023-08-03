import Link from "next/link";
import {useLocale, useTranslations} from "next-intl";
import parse from "html-react-parser";



const Page = async () => {
    const about = (await (await fetch(process.env["NEXT_MAIN_PATH"] + 'about',{cache:'no-store',})).json()).about
    return <PageContent about={about} />
}

const PageContent = ({about}:{about:any}) => {
    const t = useTranslations('Index')
    const locale = useLocale()
    return <>

        <div id="block-main">

            <div id="main" className="wrapper grid-block">

                <div id="maininner" className="grid-box" style={{minHeight: "426px"}}>


                    <section id="breadcrumbs">
                        <div className="breadcrumbs"><Link href="/">SafeLife.az</Link><Link
                            href="/about-company">{t('about')}</Link><strong>{t('about_company')}</strong></div>
                    </section>

                    <section id="content" className="grid-block">

                        <div id="system">


                            <article className="item">

                                <header>


                                    <h1 className="title">
                                        <a href="" title={t('about_company')}>{t('about_company')}</a>
                                    </h1>


                                </header>

                                <div className={'content clearfix'}>
                                    {about[0] && parse(about[0].translations.find((item:any) => item.locale === locale).description)}
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