'use client'
import React, {useState} from 'react';
import FsLightbox from "fslightbox-react";
import Image from "next/image";

const Gallery = ({imgs}) => {
    const [toggler, setToggler] = useState(false);
    const [slideIndex, setSlideIndex] = useState(0);


    return <>
        <FsLightbox
            toggler={toggler}
            sources={imgs?.map((el, index) => {
                return <Image style={{objectFit: 'contain'}} width={1000} height={1000}
                              key={Math.random()} src={el[0].photo}
                              alt={}/>
            })}
            sourceIndex={slideIndex}/>

        <div style={{
            display:'flex',
            gap:10,
            flexWrap:"wrap",
            margin:15
        }} className="wk-gallery wk-gallery-wall clearfix round margin" >
            {imgs.map((item:any) => {
                return <a key={item.id} className="spotlight"
                          onClick={(item, index) => {
                              setSlideIndex(index);
                              setToggler(!toggler);
                          }}
                          data-lightbox="group:9-64c75ce4b6917" data-spotlight="on"
                          style={{position: "relative", overflow: "hidden", cursor:"pointer"}}><Image  style={{width:180, height:100,objectFit:"contain"}}
                    src={item[0].photo} width="180" height="100"
                    alt="1"/>
                    <div className="overlay-default"
                         style={{position: "absolute", visibility: "hidden", display: "block"}}>
                        <div></div>
                    </div></a>
            })}

        </div>
    </>
};

export default Gallery;