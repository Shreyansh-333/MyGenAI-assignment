import React from "react";
import "./footerStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-below">
            <div className="sb_footer-copyright">
                <p>
                    @{new Date().getFullYear()} Shreyansh. All rights reserved.
                </p>
            </div>
            <div className="sb_footer-below-links">
            <a href="/resource">
              <p>Terms & Conditions</p>
            </a>
            <a href="/resource">
              <p>Privacy</p>
            </a>
            <a href="/resource">
              <p>Security</p>
            </a>
            <a href="/resource">
              <p>Cookies</p>
            </a>
            </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
