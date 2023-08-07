import ScrollTop from "@/Components/ScrollTop";
import {useLocale, useTranslations} from "next-intl";
import React from "react";

const Footer = async () => {
    const settings = (await (await fetch(process.env["NEXT_MAIN_PATH"] + 'settings')).json())

    return <FooterContent settings={settings}/>
}

const FooterContent = ({settings}:{settings:any}) => {
    const locale = useLocale()
    const t = useTranslations('Index')

    return <>
        <div id="block-footer">

            <div className="wrapper">

                <footer id="footer" className="grid-block">

                   <ScrollTop/>

                    <div className="module   deepest">

                        <table style={{width: "100%"}} border={0}>
                            <tbody>
                            <tr>
                                <td><strong>{t('address')}:</strong> {settings.find((item: any) => item.name.indexOf(locale) >= 0).link}
                                </td>
                                <td><strong>{t('phone')}:</strong><br/>{settings.find((item: any) => item.name === 'phone').link}</td>
                                <td><strong>{t('email')}:</strong><br/>{settings.filter((item:any) => item.name.indexOf('email') >= 0).map((item:any) => {
                                    return <>
                                    {item.link}
                                        <br/>
                                    </>
                                })}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </footer>

            </div>

        </div>
    </>
};

export default Footer;