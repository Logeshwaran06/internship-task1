import { useState } from "react";
import { useLocation } from "react-router-dom";
import './details.css';

export default function Details() {
    const location = useLocation();
    const { image, allImages } = location.state;
    const initialIndex = allImages.findIndex(item => item.img === image.img);
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const currentImageData = allImages[currentIndex];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % allImages.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + allImages.length) % allImages.length);
    };

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = currentImageData.img;
        link.download = `image.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const sideTags = [
        "Futuristic Fashion",
        "Avant-Garde Style",
        "Surreal Photography",
        "Minimalist Aesthetic",
        "Digital Art",
        "Modern Architecture",
        "Abstract Clothing",
        "Fashion Editorial",
        "Muted Color Palette",
        "Experimental Design"
    ];

    const slideImage = [
        "/slide1.jpg",
        "/slide2.jpg",
        "/slide3.jpg",
        "/slide4.jpg"
    ]

    return (
        <div className="productContainer">
            <div className="productHeader">
                <div>
                    <p>{currentImageData.date}</p>
                    <h1 className="detailsTitle">{currentImageData.imgTitle}</h1>
                    <div className="downloadImageContainer" onClick={handleDownload}>
                        <p className="downloadImageText">Download The Image</p>
                        <img className="downloadImage" src="/downloadIcon.svg" alt="Download Icon" />
                    </div>
                </div>

                <div className="detailsRightHeader">
                    <p className='presentedHeading'>Presented By</p>
                    <h3><span>U</span>NIQUE <span>S</span>TYLE <span>P</span>LATFORM</h3>
                    <p className='detailsRightSideHeading'>ESSENTIAL INSPIRATION FOR CREATIVE MINDS</p>
                </div>
            </div>

            <div className="displayedImageContainer">
                <div className="displayedImages">
                    <img className="forward icon" src="/arrowBackIcon.svg" alt="Previous" onClick={handlePrev} />
                    <img className="displayedImage" src={currentImageData.img} alt={currentImageData.imgTitle} />
                    <img className="backward icon" src="/arrowForwardIcon.svg" alt="Next" onClick={handleNext} />
                </div>
                <div className="headingInsideImage">
                    <h3><span>U</span>NIQUE <span>S</span>TYLE <span>P</span>LATFORM</h3>
                    <p className='imageDetailsRightSideHeading'>ESSENTIAL INSPIRATION FOR CREATIVE MINDS</p>
                </div>
                <div className="titleInsideImage">
                    <p>{currentImageData.imgTitle}</p>
                </div>
            </div>

            <div className="slideContainer">
                {slideImage.map((image, index) => (
                    <img className="sideImage" key={index} src={image} alt="" />
                ))}
            </div>

            
                <hr />
                <div className="tagsContainer">
                    <img src="/tagIcon.svg" alt="Tag Icon" />
                    {sideTags.map((tag, index) => (
                        <p className="tags" key={index}>{tag}</p>
                    ))}
                </div>
                <hr />
            </div>
    );
}
