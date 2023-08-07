import Image from "next/image";
import parse from "html-react-parser";
import {useLocale, useTranslations} from "next-intl";
import Link from "next/link";


const Page = async ({params: {projectId}}: { params: { projectId: any } }) => {
    const project = (await (await fetch(process.env["NEXT_MAIN_PATH"] + `project/${projectId}`, {cache: 'no-store',})).json()).project

    return <PageContent project={project}/>
}


const PageContent = ({project}: { project: any }) => {


    const t = useTranslations('Index')
    const locale = useLocale()

    const translatedItem = project.translations.find((item: any) => item.locale === locale)

    return <>
        <div id="block-main">

            <div id="main" className="wrapper grid-block">

                <div id="maininner" className="grid-box" style={{minHeight: "250px"}}>


                    <section id="breadcrumbs">
                        <div className="breadcrumbs"><Link href="/">SafeLife.az</Link><Link
                            href="/projects?page=1">{t('projects')}</Link><strong>{translatedItem?.name}</strong></div>
                    </section>

                    <section id="content" className="grid-block">

                        <div id="system">


                            <article className="item">

                                <header>


                                    <h1 className="title">
                                        <a href=""
                                           title="Gilan yaşayış Park Akademiya">{translatedItem?.name}</a>
                                    </h1>


                                </header>


                                <div className="content clearfix">
                                    <p style={{
                                        textAlign: "justify",
                                        backgroundImage: "initial",
                                        backgroundAttachment: "initial",
                                        backgroundPosition: "initial",
                                        backgroundRepeat: "initial"
                                    }}>
                                        <span><br/></span><Image width={500} height={500} style={{
                                        marginRight: "10px",
                                        float: "left",
                                        width: 200,
                                        height: 100
                                    }}
                                                                 src={process.env['NEXT_MAIN_PATH_WITHOUT_API'] + project.photo}
                                                                 alt="5"/>
                                        {parse(translatedItem?.description || '')}</p>
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