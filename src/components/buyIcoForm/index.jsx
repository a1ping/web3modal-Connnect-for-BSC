import React from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Button from 'react-bootstrap/Button'
import "./custom.css"
function BuyIcoForm () {
    return (
        <>
                    <Row>
                        <Form className="heroForm">
                            <Row>
                                <Col sm={5}>
                                    <img className="img-coin" src="./images/coin_bnb.png" alt="bnb" />
                                    <FloatingLabel label="Qty. of BNB" className="mb-3">
                                    <Form.Control id="inp_bnb" placeholder="Enter BNB amount" /></FloatingLabel>
                                    {/* <input className="input-bordered" id="inp_bnb" type="text" placeholder="Enter HUG Amount" /> */}
                                </Col>
                                
                                <Col sm={5}>
                                    <img className="img-coin" src="./images/coin_iii.png" alt="token" />
                                    <FloatingLabel label="Qty. of TOKENS" className="mb-3">
                                    <Form.Control id="inp_iii" placeholder="Enter TOKEN amount" /></FloatingLabel>
                                   {/*  <input className="input-bordered" id="inp_iii" type="text" placeholder="Enter HUG Amount" /> */}
                                </Col>
                             </Row>
                            <Form.Group as={Row} className="mb-5">
                                <Col sm={{ span: 10, offset: 0}}>
                                <Button id="btn_swap" className="buytokens">Buy tokens</Button>
                                </Col>  
                            </Form.Group>
                        </Form>                    
                    </Row>
                    <Row className="mt-2 icoInfo">
                        <Col sm={6} className="firstInfoCol">
                            <span className="mb-4 spanInfo">TOKEN RATIO</span>  
                            <h5>1 BNB = <span id="tokenRate"></span> HUG</h5>        
                        </Col>
                        <Col sm={6}>
                            <span className="mb-4 spanInfo">YOUR BALANCE</span> 
                            <h5><span id="wallet_balance"></span></h5>                                
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <div className="progress-wrap progress-wrap-point  prog" data-animate="fadeInUp" data-delay="0.8">
                            <ul className="progress-info progress-info-s2">
                                <li>Raised - <span id="contract_balance_pre"> </span></li>
                                <li>Target - <span id = "max-mintable"></span> TOKENS</li>
                            </ul>
                            <div className="progress-bar2">
                                <div id = "percent" className="progress-percent2 progress-percent-s" style = {{width:"0%"}}/>
                            </div>
                        </div>
                    </Row>
        </>            
    )
}

export default BuyIcoForm
