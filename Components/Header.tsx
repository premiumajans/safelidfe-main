import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {useLocale, useTranslations} from "next-intl";
import HeaderSearch from "@/Components/HeaderSearch";


const Header = async () => {
    const service = (await (await fetch(process.env["NEXT_MAIN_PATH"] + 'service')).json()).service
    const product = (await (await fetch(process.env["NEXT_MAIN_PATH"] + 'product')).json()).product
    const settings = (await (await fetch(process.env["NEXT_MAIN_PATH"] + 'settings')).json())

    return <HeaderContent service={service} product={product} settings={settings}/>
}

const HeaderContent = ({product, service, settings}: { product: any, service: any, settings: any }) => {

    const t = useTranslations("Index")
    const locale = useLocale()


    return <>


        <div id="block-header">

            <div className="wrapper">

                <header id="header">

                    <div id="headerbar" className="grid-block">


                        <Link id="logo" href="/"><p style={{margin: 0}}><Image width={300} height={300} style={{
                            width: 150,
                            height: 'max-content',
                            objectFit: 'cover'
                        }}
                                                                               src="/SL.png" alt="arsenal logo"/></p>
                        </Link>

                        <div className="left">
                            <div className="module deepest">

                                <table style={{width: "250px"}} border={0}>
                                    <tbody>
                                    <tr>
                                        <td style={{display: 'flex'}} align="right" valign="top">
                                            <Link locale={'az'}
                                                  href="/az">
                                                <Image
                                                    src="https://arsenalfire.az/images/stories/head/lang/az.png"
                                                    alt="az"
                                                    width="16" height="11"/></Link>
                                            &nbsp;&nbsp;<Link locale={'en'} href="/en">
                                            <Image
                                                src="https://arsenalfire.az/images/stories/head/lang/gb.png" alt="en"
                                                width="16" height="11"/></Link>
                                            &nbsp;&nbsp;
                                            <Link locale={'ru'} href="/ru">
                                                <Image
                                                    src="https://arsenalfire.az/images/stories/head/lang/ru.png"
                                                    alt="ru"
                                                    width="16" height="11"/></Link>
                                        </td>
                                        <td align="right" valign="top">
                                            <strong>{t('phone')}:</strong><a
                                            href={`tel:${settings.find((item: any) => item.name === 'phone').link}`}>{settings.find((item: any) => item.name === 'phone').link}</a>
                                            <br/>
                                            <strong>{t('email')}:</strong><a
                                            href={`tel:${settings.find((item: any) => item.name.indexOf('email') >= 0).link}`}>{settings.find((item: any) => item.name.indexOf('email') >= 0).link}</a>

                                        </td>
                                        <td align="right" valign="top">&nbsp;</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>

                    <div id="menubar">
                        <div>
                            <div className="grid-block">

                                <nav id="menu">
                                    <ul className="menu menu-dropdown">
                                        <li className="level1 item94 parent "><Link href="/about-company"
                                                                                    className="level1 parent"><span>{t('about')}</span></Link>
                                            <div className="dropdown columns1" style={{width: "190px"}}>
                                                <div className="dropdown-bg">
                                                    <div>
                                                        <div className="width100 column">
                                                            <ul className="level2">
                                                                <li className="level2 item95"><Link
                                                                    href="/about-company"
                                                                    className="level2"><span>{t('about_company')}</span></Link>
                                                                </li>
                                                                <li className="level2 item96"><Link
                                                                    href="/mission"
                                                                    className="level2"><span>{t('our_missions')}</span></Link>
                                                                </li>
                                                                <li className="level2 item97"><Link
                                                                    href="/social-responsibility"
                                                                    className="level2"><span>{t('sosial_response')}</span></Link>
                                                                </li>
                                                                <li className="level2 item98"><Link
                                                                    href="/sertificates"
                                                                    className="level2"><span>{t('sertificates_licences')}</span></Link>
                                                                </li>
                                                                <li className="level2 item100"><Link
                                                                    href="/career-and-vacancy"
                                                                    className="level2"><span>{t('careers')}</span></Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="level1 item101 parent"><Link href="/services"
                                                                                    className="level1 parent"><span>{t('services')}</span></Link>
                                            <div className="dropdown columns3" style={{width: 'max-content'}}>
                                                <div className="dropdown-bg">
                                                    <div>
                                                        <div className="width33 column">
                                                            <ul style={{width: 'max-content'}} className="level2">
                                                                {typeof service !== 'string' ? service.map((item: any) => {
                                                                    const translatedItem = item.translations.find((item: any) => item.locale === locale)
                                                                    return <Link key={item.id}
                                                                                 href={`/services/${item.id}`}>
                                                                        <li className="level2 item118"><Link
                                                                            href={`/services/${item.id}`}
                                                                            className="level2"><span>{translatedItem.name}</span></Link>
                                                                        </li>
                                                                    </Link>
                                                                }) : ''}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="level1 item117 parent"><Link href="/products"
                                                                                    className="level1 parent"><span>{t('products')}</span></Link>
                                            <div className="dropdown columns2" style={{width: 'max-content'}}>
                                                <div className="dropdown-bg">
                                                    <div>
                                                        <div className="column">
                                                            <ul style={{width: 'max-content'}} className="level2">
                                                                {typeof product !== 'string' ? product.map((item: any) => {
                                                                    const translatedItem = item.translations.find((item: any) => item.locale === locale)
                                                                    return <Link key={item.id}
                                                                                 href={`/products/${item.id}`}>
                                                                        <li className="level2 item118"><Link
                                                                            href={`/products/${item.id}`}
                                                                            className="level2"><span>{translatedItem.name}</span></Link>
                                                                        </li>
                                                                    </Link>
                                                                }) : ''}

                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="level1 item131"><Link href="/projects?page=1"
                                                                             className="level1"><span>{t('projects')}</span></Link>
                                        </li>

                                        <li className="level1 item117 parent"><Link href="/gallery"
                                                                                    className="level1 parent"><span>{t('gallery')}</span></Link>
                                            <div className="dropdown columns2" style={{width: 'max-content'}}>
                                                <div className="dropdown-bg">
                                                    <div>
                                                        <div className="column">
                                                            <ul style={{width: 'max-content'}} className="level2">
                                                                <li className="level2 item118"><Link
                                                                    href={`/photo-gallery`}
                                                                    className="level2"><span>{t('photo_gallery')}</span></Link>
                                                                </li>

                                                                <li className="level2 item118"><Link
                                                                    href={`/video-gallery`}
                                                                    className="level2"><span>{t('video_gallery')}</span></Link>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li className="level1 item99"><Link href="/partners"
                                                                            className="level1"><span>{t('partners')}</span></Link>
                                        </li>
                                        <li className="level1 item136"><Link href="/contact"
                                                                             className="level1"><span>{t('contact')}</span></Link>
                                        </li>
                                    </ul>
                                </nav>

                                <HeaderSearch/>

                            </div>
                        </div>
                    </div>


                </header>

            </div>

        </div>

        <div id="block-top-a">
            <div>
                <div>



                </div>
            </div>
        </div>

    </>
};

export default Header;