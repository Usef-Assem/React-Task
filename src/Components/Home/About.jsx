import React from "react";
import './About.css'
export default function Home () {
    return <>
        <div className="First-section d-flex justify-content-center align-items-center flex-wrap">
            <div>
                <h2 className="Text text-center">ABOUT COMPONENT</h2>
                <div className="d-flex justify-content-center py-4 star-icon1">
                    <i className="fa-solid fa-star fa-lg" style={{color: "white"}}></i>
                </div>
                <div className="pargraphs">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <p className="text-white">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                    <div className="col-md-5">
                        <p className="text-white">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                </div>
            </div>
            </div>

        </div>
    </>;
}
