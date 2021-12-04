import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroBuySection from '../components/HeroBuySection';
import Web3ModalComponent from "../contract/Web3Modal";

const Home = () => {
        const [isOpen, setIsOpen] = useState(false);
          
        const toggle = () => {
          setIsOpen(!isOpen);
        };

        return(
          <>          
                  <Sidebar isOpen={isOpen} toggle={toggle} Web3ModalComp={Web3ModalComponent}/>
                  <Navbar toggle={toggle}  Web3ModalComp={Web3ModalComponent}/>
                  <HeroBuySection/>
                  <div className="nk-wrap">
                    <header className="nk-header page-header is-transparent is-sticky is-dark" id="header">
                      <div className="banner banner-fs tc-light">
                        <div className="nk-block nk-block-status">
                          <div className="container container-xxl">
                            <div className="row gutter-vr-40px justify-content-between">
                              <div className="col-xxl-5 col-xl-6 col-lg-7 text-center text-sm-left">
    
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Place Particle Js */}
                        <div id="particles-bg" className="particles-container is-fixed particles-bg op-20" />
                      </div>
                    </header>
                    <main className="nk-pages tc-light">
                      <section className="section" id="about">
                        <div className="container">
                          <div className="row justify-content-center text-center">
                            <div className="col-lg-6">
                              <div className="section-head section-head-s2">
                                <h2 className="title title-xl animated" data-animate="fadeInUp" data-delay="0.1" title="ABOUT">ABOUT</h2>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="container container-xxl">
                          <div className="nk-block">
                            <div className="row text-center align-items-lg-start gutter-vr-40px">
                              <div className="col-lg-3 col-sm-6">
                                <div className="feature feature-s6 feature-s6-1 animated" data-animate="fadeInUp" data-delay="0.3">
                                  <div className="feature-text">
                                    <h5 className="title title-sm ttu">ONE MARKETPLACE</h5>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-3 col-sm-6">
                                <div className="feature feature-s6 feature-s6-2 animated" data-animate="fadeInUp" data-delay="0.4">
                                  <div className="feature-text">
                                    <h5 className="title title-sm ttu">Transparency and Trust</h5>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-3 col-sm-6">
                                <div className="feature feature-s6 feature-s6-3 animated" data-animate="fadeInUp" data-delay="0.5">
                                  <div className="feature-text">
                                    <h5 className="title title-sm ttu">Blockchain Based Profiles</h5>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-3 col-sm-6">
                                <div className="feature feature-s6 feature-s6-4 animated" data-animate="fadeInUp" data-delay="0.6">
                                  <div className="feature-text">
                                    <h5 className="title title-sm ttu">PAYMENT FLEXIBILITY</h5>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-image bg-contain bg-bottom-center bg-ecosystems animated d-none d-sm-block" data-animate="fadeInUp" data-delay="0.2">
                              <img src="./images/globe-particle.png" alt="globe" />
                            </div>
                          </div>
                        </div>
                      </section>
                      <section className="section" id="platform">
                        <div className="container">
                          <div className="row justify-content-center text-center">
                            <div className="col-lg-6">
                              <div className="section-head section-head-s2">
                                <h2 className="title title-xl animated" data-animate="fadeInUp" data-delay="0.1" title="INTRODUCTION">INTRODUCTION</h2>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="container container-xxl">
                          <div className="nk-block">
                            <div className="tab-content">
                              <div className="tab-pane fade show active" id="tab-1-1">
                                <div className="row align-items-center justify-content-between gutter-vr-40px">
                                  <div className="col-lg-6 order-lg-last">
                                    <div className="nk-block-img nk-block-ca animated" data-animate="fadeInUp" data-delay="0.2">
                                      <div className="nk-circle-animation nk-df-center fast" />
                                      {/* .circle-animation */}
                                      <img className="shadow rounded" src="./images/sc-medium-a.png" alt="" />
                                    </div>
                                  </div>
                                  <div className="col-lg-5">
                                    <div className="nk-block-text mgb-m30">
                                      <h2 className="title title-md animated" data-animate="fadeInUp" data-delay="0.2">HUGO token is a BEP20 token, which will run on the Binance Smart Chain, a platform for smart contract which facilitates fast transactions.</h2>
                                      <p className="animated" data-animate="fadeInUp" data-delay="0.2">This token hopes to address certain problems such as distribution of wealth, ownership of businesses, funding to start-ups and loans to existing SMEs, and the actualisation of potential project for individuals</p>
                                      <div className="feature feature-inline feature-middle animated" data-animate="fadeInUp" data-delay="0.3">
                                        <div className="feature-icon feature-icon-md">
                                          <em className="icon icon-md icon-grd ikon ikon-bulb" />
                                        </div>
                                        <div className="feature-text">
                                          <p>HUGO token is a community token for communal investment. Our solutions are to establish sustainable businesses, fund start-ups, and invest in financial instruments. Unlike other assets which are backed by nothing more than a hope that their prices would rise or that some celebrity’s action would help boost its price. HUGO is not only backed by our investment into other assets, businesses or instrument but also by hodling it.</p>
                                        </div>
                                      </div>
                                      <div className="feature feature-inline feature-middle animated" data-animate="fadeInUp" data-delay="0.4">
                                        <div className="feature-icon feature-icon-md">
                                          <em className="icon icon-md icon-grd ikon ikon-paricle" />
                                        </div>
                                        <div className="feature-text">
                                          <p>The absolute and limited quantity of the token and its mode of distribution will add in ensuring that it does not lose its value. This is further enforced by the investments that will be made using funds generated in distributions.</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* .container */}
                      </section>
                      <section className="section" id="tokensale">
                        <div className="container">
                          <div className="row justify-content-center text-center">
                            <div className="col-lg-6">
                              <div className="section-head section-head-s2">
                                <h2 className="title title-xl animated" data-animate="fadeInUp" data-delay="0.1" title="Token Details">TOKENS</h2>
                                <p className="animated" data-animate="fadeInUp" data-delay="0.2">Breakdown of our Token Recipients.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="container container-xxl">
                          <div className="nk-block">
                            <div className="row align-items-center gutter-vr-50px">
                              <div className="col-xxl-4 col-lg-6 px-xl-5 order-xl-1">
                                <div className="animated" data-animate="fadeInUp" data-delay="0.3">
                                  <canvas className="chart-canvas" id="token-distribution" />
                                </div>
                              </div>
                              <div className="col-xxl col-lg-6">
                                <ul className="chart-data-s2 row" data-canvas="token-distribution" data-canvas-type="pie" data-border-color="#0f1932">
                                  <li className="col-sm-8" data-color="#1f2e4d" data-color-hover="#f42f54" data-label="Presale" data-title="Presale" data-subtitle="(5,000,000)" data-amount={20} />
                                  <li className="col-sm-8" data-color="#1f2e4d" data-color-hover="#f42f54" data-label="IDO" data-title="Initial Digital Offer" data-subtitle="(7,000,000)" data-amount={28} />
                                  <li className="col-sm-6" data-color="#1f2e4d" data-color-hover="#f42f54" data-label="Liquidity" data-title="Liquidity" data-subtitle="(5,000,000)" data-amount={20} />
                                  <li className="col-sm-6" data-color="#1f2e4d" data-color-hover="#f42f54" data-label="Owners/Dev/Mngt" data-title="Owners/Dev/Mngt" data-subtitle="(2,500,000)" data-amount={10} />
                                  <li className="col-sm-6" data-color="#1f2e4d" data-color-hover="#f42f54" data-label="Miniting/Mining" data-title="Miniting/Mining" data-subtitle="(5,500,000)" data-amount={22} />
                                </ul>
                              </div>
                              <div className="col-xxl col-xl-12 order-last">
                                <div className="token-info-s2">
                                  <div className="row gutter-vr-50px">
                                    <div className="col-12 col-xxl-12 col-lg-6">
                                      <div className="token-info-item color-1 animated" data-animate="fadeInUp" data-delay="0.7">
                                        <div className="token-info-title">Presale</div>
                                        <h4 className="token-info-des">29 Sep, 2021</h4>
                                      </div>
                                    </div>
                                    <div className="col-12 col-xxl-12 col-lg-6">
                                      <div className="token-info-item color-1 animated" data-animate="fadeInUp" data-delay="0.7">
                                        <div className="token-info-title">Initial Digital Offer</div>
                                        <h4 className="token-info-des">3 Oct, 2021</h4>
                                      </div>
                                    </div>
                                    <div className="col-12 col-xxl-12 col-lg-6">
                                      <div className="token-info-item color-2 animated" data-animate="fadeInUp" data-delay="0.75">
                                        <div className="token-info-title">Liquidity</div>
                                        <h4 className="token-info-des">17 Oct, 2021</h4>
                                      </div>
                                    </div>
                                    <div className="col-12 col-xxl-12 col-lg-6">
                                      <div className="token-info-item color-2 animated" data-animate="fadeInUp" data-delay="0.75">
                                        <div className="token-info-title">Owners/Dev/Mngt</div>
                                        <h4 className="token-info-des">13 Nov, 2021</h4>
                                      </div>
                                    </div>
                                    <div className="col-6 col-xxl-6 col-lg-3">
                                      <div className="token-info-item color-3 animated" data-animate="fadeInUp" data-delay="0.8">
                                        <div className="token-info-title">Miniting/Mining</div>
                                        <h4 className="token-info-des">31 Nov, 2021</h4>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section className="section" id="roadmap">
                        <div className="container">
                          <div className="row justify-content-center text-center">
                            <div className="col-lg-6">
                              <div className="section-head section-head-s2">
                                <h2 className="title title-xl animated" data-animate="fadeInUp" data-delay="0.1" title="Timeline">ROADMAP</h2>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="container container-xxl">
                          <div className="nk-block">
                            <div className="roadmap-wrap roadmap-wrap-ovl-right text-center animated" data-animate="fadeInUp" data-delay="0.3">
                              <div className="roadmap-line-s2" />
                              <div className="roadmap-slider has-carousel carousel-nav-center" data-blank="true" data-items={5} data-items-tab-l={4} data-items-tab-p={3} data-items-mobile={2} data-margin={-1} data-navs="true">
                                <div className="roadmap roadmap-s2 roadmap-i1 roadmap-finished">
                                  <h6 className="roadmap-year-s2">Q1 APRIL</h6>
                                  <h5 className="title title-sm roadmap-date">Token Presale</h5>
                                </div>
                                <div className="roadmap roadmap-s2 roadmap-i2 roadmap-running">
                                  <h6 className="roadmap-year-s2">Q2 MAY</h6>
                                  <h5 className="title title-sm roadmap-date">Website Development</h5>
                                </div>
                                <div className="roadmap roadmap-s2 roadmap-i3">
                                  <h6 className="roadmap-year-s2">Q3 MAY</h6>
                                  <h5 className="title title-sm roadmap-date">Audit of Smart Contract</h5>
                                </div>
                                <div className="roadmap roadmap-s2 roadmap-i4">
                                  <h6 className="roadmap-year-s2">Q4 MAY</h6>
                                  <h5 className="title title-sm roadmap-date">The Community Trust Establishment</h5>
                                </div>
                                <div className="roadmap roadmap-s2 roadmap-i5">
                                  <h6 className="roadmap-year-s2">Q1 JUNE</h6>
                                  <h5 className="title title-sm roadmap-date">Initial Digital Offer</h5>
                                </div>
                                <div className="roadmap roadmap-s2 roadmap-i6">
                                  <h6 className="roadmap-year-s2">Q4 JUNE</h6>
                                  <h5 className="title title-sm roadmap-date">Voting System Development &amp; Integration</h5>
                                </div>
                                <div className="roadmap roadmap-s2 roadmap-i7">
                                  <h6 className="roadmap-year-s2">Q2 JULY</h6>
                                  <h5 className="title title-sm roadmap-date">Voting System Testing &amp; Token Liquidity</h5>
                                </div>
                                <div className="roadmap roadmap-s2 roadmap-i7">
                                  <h6 className="roadmap-year-s2">Q4 JULY</h6>
                                  <h5 className="title title-sm roadmap-date">Establishment of Governance</h5>
                                </div>
                                <div className="roadmap roadmap-s2 roadmap-i7">
                                  <h6 className="roadmap-year-s2">Q2 AUGUST</h6>
                                  <h5 className="title title-sm roadmap-date">Elections of The Community Trust Officers</h5>
                                </div>
                                <div className="roadmap roadmap-s2 roadmap-i7">
                                  <h6 className="roadmap-year-s2">Q4 AUGUST</h6>
                                  <h5 className="title title-sm roadmap-date">Brainstorming of Business Ideas &amp; Investments</h5>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                      <section className="section" id="team">
                        <div className="container">
                          <div className="row justify-content-center text-center">
                            <div className="col-lg-6">
                              <div className="section-head section-head-s2">
                                <h2 className="title title-xl animated" data-animate="fadeInUp" data-delay="0.1" title="Core Team">OUR TEAM</h2>
                                <p className="animated" data-animate="fadeInUp" data-delay="0.2">With help from our teams, contributors and investors these are the milestones we are looking forward to achieve.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </main>
                    <footer className="nk-footer-bar section section-s tc-light">
                      <div className="container container-xxl">
                        <div className="row gutter-vr-10px">
                          <div className="col-lg-6 order-lg-last text-lg-right">
                            <ul className="social-links social-links-s2 justify-content-center justify-content-sm-end animated" data-animate="fadeInUp" data-delay="0.4">
                              <li>
                                <a href="https://twitter.com/in2invest1"><em className="fab fa-twitter" /></a>
                              </li>
                              <li>
                                <a href="https://t.me/in2invest"><em className="fas fa-paper-plane" /></a>
                              </li>
                            </ul>
                          </div>
                          <div className="col-lg-6">
                            <div className="copyright-text copyright-text-s2">Copyright © 2021 HUGO Token Presale.</div>
                          </div>
                        </div>
                      </div>
                    </footer>
                    <div className="nk-ovm nk-ovm-repeat nk-ovm-fixed shape-i">
                      <div className="ovm-line" />
                    </div>
                  </div>
                  <div className="preloader preloader-alt no-split">
                    <span className="spinner spinner-alt"><img className="spinner-brand" src="./images/logo_mobile.png" alt="" /></span>
                  </div>
                
                

                  <div className="alert_list" />		
       
                
                </>
        )
    }
    
        
export default Home;