'use client'
import {useRef} from "react";
import {useRouter} from "next/navigation";

const SearchForm = ({search_params, keywords,search,search_words}) => {
    const inputRef = useRef()
    const {push} = useRouter()
    return <>
        <form onSubmit={(e) => {
            e.preventDefault()
            push(`/search/${inputRef.current!.value}`)
        }}  className="box style" id="searchForm" method="get"
               name="searchForm">

            <fieldset>
                <legend>{search_params}</legend>

                <div style={{textAlign: 'center'}}>
                    <label htmlFor="search_searchword"> {search_words} </label>
                    <input ref={inputRef} defaultValue={keywords} type="text" name="searchword" id="search_searchword" size={30}
                           maxLength={20} className="inputbox"/>
                    <button name="Search"
                            className="button"> {search}
                    </button>
                </div>


            </fieldset>

        </form>
    </>
};

export default SearchForm;