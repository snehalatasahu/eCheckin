import React from 'react';
import OwlCarousel from 'react-owl-carousel';  
import { Container, Row, Col } from "react-bootstrap";
import '../../../node_modules/owl.carousel/dist/assets/owl.carousel.css';  
import '../../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';  
import strategy_1 from "../../Assets/strategy-1.png";
import strategy_2 from "../../Assets/strategy-2.png";
import strategy_3 from "../../Assets/strategy-3.png";
import strategy_4 from "../../Assets/strategy-4.png";
import logo from "../../Assets/logo3.png";

const options = {
    responsiveClass: true,
    responsive: {
        
        400: {
            items: 1,
        },
        500: {
            items: 1,
        },
        600: {
            items: 1,
        },
        700: {
            items: 1,
        },
        800: {
            items: 1,
        },
        900: {
            items: 2,
        },
        1000: {
            items: 3,

        },
        1100: {
            items: 4,

        }
    },
};

const Carasoul = () => {
    return (
        <Container style={{padding:'30px'}}>
            <div style={{textAlign:'center'}}className="clients-title-section">
						<p className="subtitle">Our clients</p>
						<h2 className="title">Client Showcase</h2>
					</div>
        <OwlCarousel className="owl-theme"
         {...options}
         margin={8} 
         autoplay ={true}
         loop={true}>
             
            <div className='owl-obj'><img src={logo}/></div>
            <div className='owl-obj'><img src={logo}/></div>
            <div className='owl-obj'><img src={logo}/></div>
            <div className='owl-obj'><img src={logo}/></div>
            <div className='owl-obj'><img src={logo}/></div>
            <div className='owl-obj'><img src={logo}/></div>
            <div className='owl-obj'><img src={logo}/></div>
            <div className='owl-obj'><img src={logo}/></div>
            <div className='owl-obj'><img src={logo}/></div>
        </OwlCarousel>
        </Container>
    );
};

export default Carasoul;