import "./global.css";
import arrow from "../images/logos/arrow.png";
import interior from "../images/interior.png";
export default function MainBody() {
  const windowWidth = window.innerWidth;
  return (
    <div className="main-body">
      <div className="home-section">
        <div className="bars">
          <div className="bar1"></div>
          <div className="bar2"></div>
        </div>

        <div className="image-home-holder">
          <div className="image-holder">
            <div className="transparent-box"> </div>
            <div className="image-textbox">
              <div className="tbox-row1">
                <div className="btnImagebox">Our Expertise</div>
                <div className="btnImagebox">Designs</div>

                <div className="last-btn-img">
                  <img className="arrow" src={arrow} />
                </div>
              </div>

              <div className="tbox-row2">
                <div className="text1-img">
                  OUR EXPERTISE IN ARCHITECTURE AND DESIGN FROM CONCEPT TO
                  CREATION
                </div>

                <div className="text2-img">
                  Design Your Idea Living Space: Contact Us to Discuss more
                </div>
              </div>
            </div>
          </div>
          {/* -------Home Section ------- */}
          <div className="home-holder">
            <div className="navbar">
              <div className="btn-home home">Home</div>

              <div className="btn-home About">About</div>

              <div className="btn-home Feature">Feature</div>

              <div className="btn-home FAQ">FAQ</div>

              <div className="leftbuthome">
                <div className="btnHome">CONTACT US</div>

                <div className="last-btn-home">
                  <img className="arrow2" src={arrow} />
                </div>
              </div>
            </div>

            <div className="home-heading">
            DESIGNING FOR THE MODERN LIVING
                </div>

                <div className="home-img">
                    <div className="home-circle">

                        2024
                        <p className="circle-bottom-text">
                            View More
                        </p>
                    </div>
                    <img className="imgholdhome" src={interior}/>
                </div>

                <div className="home-bottom-text">
                <img className="arrow2" src={arrow} />
                    <p className="head">
                    Home with the best price and quality:
                    </p>
                    <p className="sub-text">
                    Designing Your Dream Home with Our Expertise 
                    in Architecture and Designs. Our Expertise in Modern, 
                    Contemporary, and Traditional Architecture Styles. 
                    Unmatched Attention to Detail and Quality 
                    Craftsmanship.
                    </p>
                </div>

                <div className="last-section-home">


               <div className="btnDis">
                Discover More
               </div>
               <div className="last-btn-home">
                  <img className="arrow2" src={arrow} />
                </div>
                </div>






          </div>
        </div>
      </div>
    </div>
  );
}
