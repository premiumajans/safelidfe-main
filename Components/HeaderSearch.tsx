
import {useTranslations} from "next-intl";

const HeaderSearch = () => {


    const t = useTranslations("Index")

    return <>
        <div id="search">
            <form id="searchbox" action="/search" method="get"
                  role="search">
                <input type="text"  name="keywords" placeholder={t('search')}/>
                <button type="reset" value="Reset"></button>
            </form>
        </div>
    </>
};

export default HeaderSearch;