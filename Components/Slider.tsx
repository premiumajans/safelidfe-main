'use client'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {PropsWithChildren} from "react";
import Slider from "react-slick";

const SliderComponent = ({settings,children}:PropsWithChildren<{settings:any}>) => {
    return <Slider {...settings}>
        {children}
    </Slider>
};

export default SliderComponent;