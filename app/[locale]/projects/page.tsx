import Image from "next/image";
import Link from "next/link";
import {useLocale, useTranslations} from "next-intl";
import Pagination from "@/Components/Pagination/Pagination";

const Page = async ({params:{page}}:{params:{page:number}}) => {
    const project = (await (await fetch(process.env["NEXT_MAIN_PATH"] + 'project', {cache: 'no-store',})).json()).project

    return <PageContent project={project} page={page}/>
}


const PageContent = ({project,page }: { project: any, page:number }) => {

    const t = useTranslations('Index')
    const locale = useLocale()

    return <>
        <div id="block-main">

            <div id="main" className="wrapper grid-block">

                <div id="maininner" className="grid-box">


                    <section id="breadcrumbs">
                        <div className="breadcrumbs"><a
                            href="/">Safelife.az</a><strong>{t('projects')}</strong>
                        </div>
                    </section>

                    <section id="content" className="grid-block">
                        <div id="system">

                            <h1 className="title">{t('projects')}</h1>


                            <div className="items items-col-12 grid-block">

                                {typeof project !== 'string' ? project.map((item: any) => {
                                    const translatedItem = item.translations.find((item: any) => item.locale === locale)
                                    return <Link key={item.id} href={`/projects/${item.id}`}>
                                        <div className="grid-box width33">
                                            <article className="item">

                                                <header>
                                                    <h1 className="title">
                                                        <a href="/web/20171027175121/http://safelife.az/index.php/layihlr/141-gilan-yaay-park-akademiya.html"
                                                           title={item.id}>{translatedItem.name}</a>
                                                    </h1>
                                                </header>


                                                <div className="content clearfix"><p
                                                    style={{
                                                        textAlign: "justify",
                                                        backgroundImage: "initial",
                                                        backgroundAttachment: "initial",
                                                        backgroundPosition: "initial",
                                                        backgroundRepeat: "initial"
                                                    }}>
                                            <span
                                                style={{
                                                    fontSize: "8.5pt",
                                                    fontFamily: "Verdana, sans-serif",
                                                    backgroundImage: "initial",
                                                    backgroundAttachment: "initial",
                                                    backgroundPosition: "initial",
                                                    backgroundRepeat: "initial"
                                                }}
                                                lang="RU"><a
                                                href="/web/20171027175121/http://safelife.az/index.php/layihlr/141-gilan-yaay-park-akademiya.html"><Image
                                                width={500} height={500} style={{width: 200, height: 100}}
                                                src={process.env["NEXT_MAIN_PATH_WITHOUT_API"] + item.photo}
                                                alt="5"/></a>&nbsp; &nbsp; &nbsp;</span></p>
                                                </div>


                                            </article>
                                        </div>
                                    </Link>
                                }) : ''}

                            </div>

                            <Pagination data={project} pagination={page || 1}/>
                        </div>
                    </section>


                </div>


            </div>

        </div>
    </>
};

export default Page;