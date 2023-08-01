import React from "react";

function Header (){
    return (
        <>
        <div className="header_section">
            <div className="header_heading">
                <h2>Captivating the power of <br></br> <span>Visual Storytelling</span></h2>
                <p>From weddings to corporate events, our professional videos capture the essence of life's special occasions, creating lasting memories.</p>
                <div className="header_btns">
                    <a href="" className="btn-t1">Start Filming</a>
                    <a href="" className="btn-t2">Watch Demo Video</a>
                </div>
            </div>            
        </div>
        <div className="YT_video">
            <iframe width="1060" height="615" src="https://www.youtube.com/embed/vf6d-QWyRto" title="YouTube video player" frameborder="200" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            <h2>Take a look at what we've done</h2>
            <p>Visually Captivating Moments: Embrace the Power of Our Videography!</p>
        </div>
        </>
    );
}
export default Header;