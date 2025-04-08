import './App.css'
import { useNavigate } from 'react-router-dom'

export default function App() {

    const navigate = useNavigate();


    const Images = [
        {id: "1", img: "/img1.jpg", imgTitle: "USP Inspire: Inked Up", date: "January 03, 2025"},
        {id: "2", img: "/img2.jpg", imgTitle: "USP Loves Issue 37: Has The Algorithm Killed Personal Style?", date: "January 07, 2025"},
        {id: "3", img: "/img3.jpg", imgTitle: "USP Inspire: Space Style", date: "January 12, 2025"},
        {id: "4", img: "/img4.jpg", imgTitle: "USP Inspire: Showgirl", date: "January 19, 2025"},
        {id: "5", img: "/img5.jpg", imgTitle: "USP Loves Issue 36: Be More Creative, Be More Leigh", date: "January 25, 2025"},
        {id: "6", img: "/img6.jpg", imgTitle: "USP Inspire: Victorian Gothic", date: "February 02, 2025"},
        {id: "7", img: "/img7.jpg", imgTitle: "USP Inspire: Sea Witchery", date: "February 08, 2025"},
        {id: "8", img: "/img8.jpg", imgTitle: "USP Inspire: Country Couture", date: "February 14, 2025"},
        {id: "9", img: "/img9.jpg", imgTitle: "USP Inspire: Minimal Merriment", date: "February 17, 2025"},
        {id: "10", img: "/img10.jpg", imgTitle: "USP Inspire: First-Aid Chic", date: "February 21, 2025"},
        {id: "11", img: "/img11.jpg", imgTitle: "USP Inspire: Fashion Meets Footwear", date: "February 26, 2025"},
        {id: "12", img: "/img12.jpg", imgTitle: "USP Loves Issue 35: Silver Shopper", date: "March 05, 2025"},
        {id: "13", img: "/img13.jpg", imgTitle: "USP Inspire: Fisherman", date: "March 10, 2025"},
        {id: "14", img: "/img14.jpg", imgTitle: "USP Loves Issue 34: Spooky Season & Subculture", date: "March 13, 2025"},
        {id: "15", img: "/img15.jpg", imgTitle: "USP Inspire: Black Dandyism", date: "March 18, 2025"},
        {id: "16", img: "/img16.jpg", imgTitle: "USP Inspire: Marie Antoinette", date: "March 25, 2025"},
        {id: "17", img: "/img17.jpg", imgTitle: "USP Inspire: Frazzled English Woman", date: "March 29, 2025"},
        {id: "18", img: "/img18.jpg", imgTitle: "USP Inspire: Y3K", date: "March 31, 2025"},
    ]

    const handleClickImage = (image) => {
        navigate(`/image-details/${image.id}`, { state: { image, allImages: Images} });
    }

    

    
    return (
        <>
            <div className="container">
                <div className="headers">
                    <div className="headerLeft">
                        <h1>USP Inspire</h1>
                        <h4>Regular Bursts Of Trend And Color Inspiration To Drive Creativity And Innovation</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem saepe cumque 
                            error quis aut repudiandae eos? Suscipit debitis minima tempora consequuntur
                            ex facere officiis iste reiciendis, excepturi impedit beatae fuga. Lorem ipsum
                            dolor sit, amet consectetur adipisicing elit. Rem saepe cumque error quis aut
                            repudiandae eos? Suscipit debitis minima tempora consequuntur ex facere officiis
                            iste reiciendis, excepturi impedit beatae fuga
                        </p>
                    </div>

                    <div className="headerRight">
                        <p className='presentedHeading'>Presented By</p>
                        <h3><span>U</span>NIQUE <span>S</span>TYLE <span>P</span>LATFORM</h3>
                        <p className='rightSideHeading'>ESSENTIAL INSPIRATION FOR CREATIVE MINDS</p>
                    </div>
                </div>

                <div className="imgContainer">
                    {Images.map((image, index) => (
                        <div className="img" key={index}>
                            <img className='images' onClick={() => {handleClickImage(image)}} key={image.id} src={image.img} alt="" />
                            <p>{image.date}</p>
                            <h4 className='imageTitle'>{image.imgTitle}</h4>
                            
                        </div>
                    )) }
                </div>

            </div>
        </>
    )
}
