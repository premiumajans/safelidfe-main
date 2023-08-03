import Marquee from "react-fast-marquee";
import SliderComponent from "@/Components/Slider";
import Image from "next/image";
import Link from "next/link";
import parse from 'html-react-parser'
import {useLocale, useTranslations} from "next-intl";

const settings = {
    fade: true,
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1
};

export default async function Home() {
    const slider = (await (await fetch(process.env['NEXT_MAIN_PATH'] + 'slider', {cache: 'no-store'})).json())?.slider
    const partners = (await (await fetch(process.env['NEXT_MAIN_PATH'] + 'partner', {cache: 'no-store'})).json()).partner
    const about = (await (await fetch(process.env["NEXT_MAIN_PATH"] + 'about', {cache: 'no-store',})).json()).about
    const sertificate = (await (await fetch(process.env["NEXT_MAIN_PATH"] + 'sertificate', {cache: 'no-store',})).json()).sertificate

    return <HomeContent slider={slider} partners={partners} about={about} sertificate={sertificate}/>
}

function HomeContent({slider, partners, about, sertificate}: {
    slider: any,
    partners: any,
    about: any,
    sertificate: any
}) {
    const locale = useLocale()
    const t = useTranslations('Index')

    return <>
        <div id="block-main">
            <div id="main" className="wrapper grid-block">

                <div style={{marginBottom: 40}} className="slider-wrapper">
                    {typeof slider != 'string' ? <SliderComponent settings={settings}>
                        {slider.map((item: any) => <Image width={900} height={900} key={item.id}
                                                          src={process.env["NEXT_MAIN_PATH_WITHOUT_API"] + item.photo}
                                                          alt={item.alt}/>)}
                    </SliderComponent> : ''}

                </div>
                <div id="maininner" className="grid-box">


                    <section id="content" className="grid-block">

                        <div id="system">


                            <div className="items items-col-1 grid-block">
                                <div className="grid-box width100">
                                    <article className="item">
                                        <header>
                                            <h1 style={{fontWeight: 'bold'}} className="title">
                                                Safe Life </h1>
                                        </header>

                                        <div className="content clearfix">
                                            {about[0] && parse(about[0].translations.find((item: any) => item.locale === locale).description)}
                                        </div>

                                    </article>
                                </div>
                            </div>


                        </div>
                    </section>


                </div>


            </div>

        </div>
        <div id="block-bottom">
            <div>


                <section id="bottom-b" className="wrapper grid-block">
                    <div className="grid-box width100 grid-v">
                        <div className="module mod-line  deepest">


                        </div>
                    </div>
                    <div className="grid-box width100 grid-v">

                        <div className="module mod-line  deepest">

                            <Marquee pauseOnHover={true} direction={'right'}>
                                {typeof sertificate !== 'string' ? sertificate.map((item: any) => {
                                    return <Link key={item.id} href={`/sertificates/${item.id}`}>
                                        <Image width={400}
                                               height={400}
                                               src={process.env["NEXT_MAIN_PATH_WITHOUT_API"] + item.photo}
                                               alt={item.alt}
                                               style={{
                                                   marginRight: 10,
                                                   width: 150,
                                                   height: 211,
                                                   objectFit: 'fill'
                                               }}/>
                                    </Link>
                                }) : ''}
                            </Marquee>
                        </div>


                        <div className="module mod-line  deepest">

                            <Marquee pauseOnHover={true}>
                                {typeof partners !== 'string' ? partners.map((item: any) => {
                                    return <Link key={item.id} href={`/partners/${item.id}`}>
                                        <Image width={400}
                                               height={400}
                                               src={process.env["NEXT_MAIN_PATH_WITHOUT_API"] + item.photo}
                                               alt={item.alt}
                                               style={{
                                                   marginRight: 10,
                                                   width: 130,
                                                   height: 60,
                                                   objectFit: 'fill'
                                               }}/>
                                    </Link>
                                }) : ''}
                            </Marquee>
                        </div>

                    </div>
                </section>

            </div>
        </div>
    </>
}
