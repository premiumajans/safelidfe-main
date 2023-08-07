'use client'

import {useRef} from "react";
import {useRouter} from "next/navigation";

const HeaderSearch = () => {
    const {push} = useRouter()
    const searchRef = useRef()


    return <>
        <div id="search">
            <form onSubmit={(e) => {
                e.preventDefault()
                push(`/search/${searchRef.current!.value}`)
            }} id="searchbox" action="/search" method="get"
                  role="search">
                <input ref={searchRef} type="text" name="keywords"/>
                <button type="reset" value="Reset"></button>
            </form>
        </div>
    </>
};

export default HeaderSearch;