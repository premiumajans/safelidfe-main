import Link from "next/link";
import {useLocale, useTranslations} from "next-intl";




const Page = ({about}: { about: any }) => {
    const t = useTranslations('Index')
    const locale = useLocale()
    return <>
        <div id="block-main">

            <div id="main" className="wrapper grid-block">

                <div id="maininner" className="grid-box" style={{minHeight: "198px"}}>


                    <section id="breadcrumbs">
                        <div className="breadcrumbs"><a
                            href="/">SafeLife.az</a><strong>{t('gallery')}</strong>
                        </div>
                    </section>

                    <section id="content" className="grid-block">

                        <div id="system">


                            <article className="item">

                                <header>


                                    <h1 className="title">
                                        <a href=""
                                           title="Qalereya">{t('gallery')}</a>
                                    </h1>


                                </header>


                                <div className="content clearfix">
                                    <table style={{width: "80%"}} align="center" border={0}>
                                        <tbody>
                                        <tr>
                                            <td>
                                                <h2><Link
                                                    href={`/${locale}/photo-gallery`}>{t('photo_gallery')}</Link></h2>
                                            </td>
                                            <td>
                                                <h2><Link
                                                    href={`/${locale}/video-gallery`}>{t('video_gallery')}</Link></h2>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>

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