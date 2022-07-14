import { useState, useEffect } from 'react'
import Slider from 'react-slick'
import PhotoSwipeWrapper from '../PhotoSwipe'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'



export default function ProductSlider({ images }) {
    let slider1 = null;
    let slider2 = null;

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [index, setIndex] = useState();

    useEffect(() => {
        setNav1(slider1);
        setNav2(slider2)
    }, []);

    const settings = {
        className: 'p-thumb jas-carousel text-align-center',
        rtl: false,
        fade: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: nav2,
        ref: slider => (slider1 = slider)
    };

    const settings2 = {
        className: 'p-nav jas-carousel overflow-hidden',
        slidesToShow: 5,
        infinite: ((images.length > 5) ? true : false),
        slidesToScroll: 1,
        focusOnSelect: true,
        vertical: true,
        asNavFor: nav1,
        arrows: false,
        draggable: true,
        ref: slider => (slider2 = slider),
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 736,
                settings: {
                    slidesToShow: 4,
                    vertical: false,
                    rtl: false
                }
            },
        ]
    }

    return (
        <>
            <Slider
                {...settings}
            >
                {images.map((item, index) => (
                    <img key={index} src={item.node.transformedSrc} onClick={() => setIsOpen(true)} alt={item.node.altText} />
                ))}
            </Slider>
            {images.length > 1 &&
                <Slider
                    {...settings2}
                >
                    {images.map((item, index) => (
                        <img key={index} src={item.node.transformedSrc} alt={item.node.altText} onClick={() => setIndex(index)} />
                    ))}
                </Slider>
            }
            <PhotoSwipeWrapper isOpen={isOpen} index={index} items={images} onClose={() => setIsOpen(false)} />
        </>
    )
}
