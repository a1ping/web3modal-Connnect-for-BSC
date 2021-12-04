import React from 'react';
// import Video from '../../videos/video.mp4';
import { HeroBuyContainer, HeroContent, HeroH1, HeroP } from './HeroElements'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import BuyIcoForm from '../buyIcoForm';


function HeroBuySection () {
    return (
        <HeroBuyContainer id="home">
            <HeroContent>
                <Row className="mt-5 rowcont">
                    <Col sm={12}>
                         <HeroH1>THE FUEL RACE GAME</HeroH1>
                        <HeroP className="mb-5">Run! Get your tokens at a special price before they fly!</HeroP>
                        <BuyIcoForm />
                    </Col>
                </Row>
            </HeroContent>
        </HeroBuyContainer>
    )
}

export default HeroBuySection
