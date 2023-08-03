'use client'

const ScrollTop = () => {
    return <>
        <a id="totop-scroller" onClick={() => {
            window.scrollTo(0, 0)
        }}></a>
    </>
};

export default ScrollTop;