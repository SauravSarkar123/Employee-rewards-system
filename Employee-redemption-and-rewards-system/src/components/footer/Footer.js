import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import '../../App.css'

function Footer() {
  return (
    <div className="container my-5" style={{width:"100% !important"}}>
      {/* Footer */}
      <footer className="text-center text-lg-start text-white" style={{ backgroundColor: "#1c2331" }}>
        {/* Section: Social media */}
        <section className="d-flex justify-content-between p-4" style={{ backgroundColor: "#6351ce" }}>
          {/* Left */}
          <div className="me-5">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* Left */}

          {/* Right */}
          <div className="icons">
                   
            <a href="/" className="text-white me-4">
              <FontAwesomeIcon icon={faFacebookF} />
            </a></div>
            <div className="icons">
            <a href="/" className="text-white me-4">
              <FontAwesomeIcon icon={faTwitter} />
            </a></div>
            <div className="icons">
            <a href="/" className="text-white me-4">
              <FontAwesomeIcon icon={faGoogle} />
            </a></div>
            <div className="icons">
            <a href="/" className="text-white me-4">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
          
          {/* Right */}
        </section>
        {/* Section: Social media */}

        {/* Section: Links  */}
        <section>
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold">Company name</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                <p>SecureKloud is an industry-recognized global leader in the Cloud services arena. Our experience in cloud consulting and servicing for highly regulated industries extends more than a decade.</p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold">Platforms</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                <p>
                  <a href="#!" className="text-white">CloudEdge</a>
                </p>
                <p>
                  <a href="#!" className="text-white">DataEdge</a>
                </p>
                <p>
                  <a href="#!" className="text-white">Neutralzone</a>
                </p>
                <p>
                  <a href="#!" className="text-white">Blockedge</a>
                </p>
              </div>
              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl 3 mx-auto mb-4">
{/* Links */}
<h6 className="text-uppercase fw-bold">Cloud Transformations</h6>
<hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
<p>
<a href="#!" className="text-white">Cloud Foundation Accelerators</a>
</p>
<p>
<a href="#!" className="text-white">Managed Services</a>
</p>
</div>
{/* Grid column */}
<div className="col-md-3 col-lg-2 col-xl 3 mx-auto mb-4">
{/* Links */}
<h6 className="text-uppercase fw-bold">Cybersecurity</h6>
<hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
<p>
<a href="#!" className="text-white">Security and Compliances</a>
</p>
</div>
          {/* Grid column */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            {/* Contact */}
            <h6 className="text-uppercase fw-bold">Contact</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
            <p>
              <FontAwesomeIcon icon={faHome} /> 1234 Street Name, City Name, India 1234
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} /> info@example.com
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} /> + 01 234 567 88
            </p>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row */}
      </div>
    </section>
    <div className="text-center p-3" style={{ backgroundColor: 'greyish black' }}>
            © All Rights Reserved | 2023 SecurekloudTechnologies.
          </div>
    {/* Section: Links  */}
  </footer>
  {/* Footer */}
</div>
);
}

export default Footer;
