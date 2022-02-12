import logo from './logo.svg';
import './App.css';
// import img from "../images/aa.jpg";
import img from "../src/images/aa.jpg"
// import mount from "../images/mount.jpg"


function App() {
  return (
    <div className="App">
    <>
    <div className="container-fluid">
        <div className="row">
            <div className="col-12 p-0" id="navbar">
                <nav className="navbar navbar-expand-lg navbar-light bg-white">
                    <a className="navbar-brand" href="#" id="logo">THE PHOTOSHOP</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#"><span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" id="hide">.jhfdvfj</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link " href="#" id="hide">.fvdfvdf</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link " href="#" id="hide">.vdfvdfv</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link " href="#" id="hide">ffffff</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link " href="#" id="hide">.f</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="google">STORIES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#" id="hide">ksrgfsk</a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link " href="#">FEATURES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#" id="hide">fbhvksfj</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#">PRICING</a>
                            </li>
                        </ul>

                    </div>
                </nav>
            </div>
        </div>
        {/* <!-- here we create the second row --> */}
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 p-0" id="first">
                <div className="col-lg-5 col-md-5 col-xs-12 col-sm-12" id="left">
                    <div className=" col-10" id="l1">
                        <h1 id="create">CREATE AND</h1>
                        <h1 id="create">SHARE YOUR</h1>
                        <h1 id="create">PHOTO STORIES</h1>
                    </div>
                    <div className="col-10" id="l2">
                        <p id="pleft">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus obcaecati qui veritatis
                            atque laborum id nisi explicabo rem asper iores, porro, deleniti eveniet .</p>
                    </div>
                    <div className="col-10" id="l3">GET AN INVITE---------</div>
                </div>
                <div className="col-lg-7 col-md-7 col-xs-12 col-sm-12 p-0" id="right"><img id="img1"
                        src={img} alt="img1" /></div>
            </div>
        </div>

        {/* <!-- here we create third div --> */}
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 p-0" id="second">
                <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 p-0" id="s1"><img id="img1" alt="img" src={img} /></div>
                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12" id="s2">


                    <div className=" col-10" id="l1">
                        <h1 id="beauty">BEAUTIFUL</h1>
                        <h1 id="beauty">STORIES</h1>
                        <h1 id="beauty">EVERY TIME</h1>
                    </div>
                    <div className="col-10" id="l2">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus obcaecati qui veritatis
                            atque laborum id nisi explicabo rem asper iores, porro, deleniti eveniet velit impedit
                            facilis quia error. Labor, porro sequi.</p>
                    </div>
                    <div className="col-10" id="view">VIEW STORIES---------</div>
                </div>
            </div>
        </div>

        {/* <!-- here we create the third row  --> */}

        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 p-0" id="third">


                <div className="col-lg-5 col-md-5 col-xs-12 col-sm-12" id="left3">
                    <div className=" col-10" id="l1">
                        <h1 id="design">DESIGN FOR</h1>
                        <h1 id="design">EVERY ONE</h1>
                  
                    </div>
                    <div className="col-10" id="l2">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus obcaecati qui veritatis
                            atque laborum id nisi explicabo rem asperiores, porro, deleniti eveniet velit impedit
                            facilis quia error. Labore, porro sequi.</p>
                    </div>
                    <div className="col-10" id="view">GET AN INVITE---------</div>
                </div>
                <div className="col-lg-7 col-md-7 col-xs-12 col-sm-12 p-0" id="right"><img alt="img3" id="img1"
                        src={img}/></div>

            </div>
        </div>

        {/* <!-- here we create the fourth row --> */}
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 p-0" id="four">
                <div className="col-lg-3  col-md-3 col-sm-12 col-xs-12 " id="four1">
                    <div className="col-12" id="f11">
                        <h4 id="mountain">The Mountains</h4>
                        <h6 id="mountain">by john appreciated</h6>
                        <div className="col-12" id="line"></div>
                        <div className="col-12 mt-2" id="line2">
                            <h6 id="blok">READ STORY</h6>
                            <h6 id="blok1">---------</h6>
                        </div>

                    </div>
                </div>
                <div className="col-lg-3  col-md-3 col-sm-12 col-xs-12" id="four2">
                    <div className="col-12" id="f11">
                        <h4 id="mountain">The Mountains</h4>
                        <h6 id="mountain">by john appreciated</h6>
                        <div className="col-12" id="line"></div>
                        <div className="col-12 mt-2" id="line2">
                            <h6 id="blok">READ STORY</h6>
                            <h6 id="blok1">---------</h6>
                        </div>

                    </div>
                </div>
                <div className="col-lg-3  col-md-3 col-sm-12 col-xs-12" id="four3">
                    <div className="col-12" id="f11">
                        <h4 id="mountain">The Mountains</h4>
                        <h6 id="mountain">by john appreciated</h6>
                        <div className="col-12" id="line"></div>
                        <div className="col-12 mt-2" id="line2">
                            <h6 id="blok">READ STORY</h6>
                            <h6 id="blok1">---------</h6>
                        </div>

                    </div>
                </div>
                <div className="col-lg-3  col-md-3 col-sm-12 col-xs-12" id="four4">
                    <div className="col-12" id="f11">
                        <h4 id="mountain">The Mountains</h4>
                        <h6 id="mountain">by john appreciated</h6>
                        <div className="col-12" id="line"></div>
                        <div className="col-12 mt-2" id="line2">
                            <h6 id="blok">READ STORY</h6>
                            <h6 id="blok1">---------</h6>
                        </div>

                    </div>
                </div>
            </div>
        </div>


        {/* <!-- here we create fifth div --> */}
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="five">
                <div className="container mt-5 p-0" id="inner">
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12" id="inner1">
                        <div className="col-12" id="icon"><i className="fa fa-laptop" id="lap" aria-hidden="true"></i></div>
                        <div className="col-12" id="para">
                            <h2>100% responsive</h2>
                        </div>
                        <div className="col-12" id="para2">Lorem, ipsum dolor sit amet consectetur an adipisicing elit.
                            Mollitia ratione fugit beatae. 
                            <div id="para3"> <p id="screen">screen</p></div>
                       </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12" id="inner2">
                        <div className="col-12" id="icon"><i className="fa fa-life-ring" id="lap" aria-hidden="true"></i></div>
                        <div className="col-12" id="para">
                            <h4>No Photo Upload Limit </h4>
                        </div>
                        <div className="col-12" id="para2">Lorem, ipsum dolor sit amet consectetur an adipisicing elit.
                            Mollitia ratione fugit beatae.
                            <div id="para3"> <p id="screen">in one go</p></div> </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12" id="inner3">
                        <div className="col-12" id="icon"><i className="fa fa-volume-up" id="lap" aria-hidden="true"></i></div>
                        <div className="col-12" id="para">
                            <h4>Available To Embeded</h4>
                        </div>
                        <div className="col-12" id="para2">Lorem, ipsum dolor sit amet consectetur an adipisicing elit.
                            Mollitia ratione fugit beatae. 
                            <div id="para3"> <p id="screen">more</p></div></div>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- here we create footer --> */}
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 p-0" id="footer">
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 p-0" id="last1">
                    <div className="col-1" id="fot0"></div>
                    <div className="col-10" id="fot1"><h2>PHOTOSNAP</h2></div>
                    <div className="col-10" id="fot2">
                        <i id="face" className="fa fa-facebook" aria-hidden="true"></i>
                        <i id="face" className="fa fa-youtube-play" aria-hidden="true"></i>
                        <i id="face" className="fa fa-twitter" aria-hidden="true"></i>
                        <i id="face" className="fa fa-google-plus-official" aria-hidden="true"></i>
                        <i  id="face" className="fa fa-instagram" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 p-0" id="last2">
                 
                        <ol id="fot4">
                            <li><h5>HOME</h5></li>
                            <li><h5>STOREYS</h5></li>
                            <li><h5>FEATURES</h5></li>
                            <li><h5>PRICING</h5></li>
                        </ol>
                

                </div>
                <div className="col-lg-5 col-md-5 col-sm-6 col-xs-12" id="last3">
                    <div className="col-8 " id="lll"><h6>GET AN INVITE---------</h6></div>
                    <div className="col-8 mx-5 mt-5" id="lll2"><h6>Copyright 2019 All rights reserved</h6></div>
                </div>
            </div>
        </div>


    </div>
    </>
      
    </div>
  );
}

export default App;
