import React from "react";
import Link from "next/link";
import {useLocale, useTranslations} from "next-intl";
import Image from "next/image";

const Page = async () => {
    const settings = (await (await fetch(process.env["NEXT_MAIN_PATH"] + 'settings', {cache: 'reload',})).json())
    return <PageContent settings={settings}/>
}
const PageContent = ({settings}: { settings: any }) => {


    const t = useTranslations('Index')
    const locale = useLocale()

    return <>
        <div id="block-main">

            <div id="main" className="wrapper grid-block">

                <div id="maininner" className="grid-box" style={{minHeight: "782px"}}>

                    <section id="breadcrumbs">
                        <div className="breadcrumbs"><Link href={`/${locale}`}>SafeLife.az</Link><strong>{t('contact')}</strong>
                        </div>
                    </section>



                    <section id="content" className="grid-block">

                        <div id="system">


                            <article className="item">

                                <header>


                                    <h1 className="title">
                                        <a title="Əlaqə">{t('contact')}</a>
                                    </h1>


                                </header>


                                <div className="content clearfix">


                                    <p>&nbsp;</p>

                                    <div style={{
                                        display: 'flex',
                                        flexWrap: "wrap",
                                        gap: 20,
                                        justifyContent: "space-between"
                                    }}>
                                        <div>
                                            <strong><span style={{fontSize: "12pt"}}><Image alt="address-icon"
                                                                                            height="80" width="100"
                                                                                            src="/home.png"/></span></strong>
                                            <br/>
                                            <div className={'contact_text'}><span
                                                style={{fontSize: "12pt"}}>{settings.find((item: any) => item.name.indexOf(locale) >= 0).link}</span>
                                            </div>
                                        </div>


                                        <div>
                                            <strong><span style={{fontSize: "12pt"}}><Image src="/phone.png" width="100"
                                                                                            height="80"
                                                                                            alt="phone-icon"/></span></strong>
                                            <br/>
                                            <div className={'contact_text'}><span
                                                style={{fontSize: "12pt"}}>{settings.find((item: any) => item.name === 'phone').link}</span>
                                            </div>
                                        </div>


                                        <div>
                                            <strong><strong><span style={{fontSize: "12pt"}}><Image src="/fax.png"
                                                                                                    width="100"
                                                                                                    height="80"
                                                                                                    alt="fax-icon"/></span></strong></strong>
                                            <br/>
                                            <div className={'contact_text'}><span
                                                style={{fontSize: "12pt"}}>{settings.find((item: any) => item.name === 'fax').link}</span>
                                            </div>
                                        </div>


                                        <div>
                                            <strong><strong><span style={{fontSize: "12pt"}}><img src="/email.png"
                                                                                                  width="100"
                                                                                                  height="80"
                                                                                                  alt="email-icon-2"/></span></strong></strong>
                                            <br/>

                                            {settings.filter((item:any) => item.name.indexOf('email') >= 0).map((item:any) => {
                                                return <div key={item.id} className={'contact_text'}><span
                                                    style={{fontSize: "12pt"}}>{item.link}</span>
                                                </div>
                                            })}

                                        </div>
                                    </div>


                                </div>


                            </article>

                            <div style={{display:'flex', gap:20}} className={'map_with_photo mt-3'}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.6730708494747!2d49.855391376080966!3d40.41609275567791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403087fe7f624381%3A0x1e0ad269f8b43d3!2s43%20Ziya%20B%C3%BCnyadov%2C%20Baku%201000!5e0!3m2!1sru!2saz!4v1690892980790!5m2!1sru!2saz"
                                    width="600" height="450" style={{border: 0}}  loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"></iframe>

                                <Image src={'/office.jpeg'} alt={'office'} width={600} height={600}/>
                            </div>.
                        </div>
                    </section>


                </div>
            </div>
        </div>

    </>
}

export default Page;