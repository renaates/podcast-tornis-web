import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-content-1">
          <div className="footer-socials-container">
            <div className="footer-socials-container-1">
              <div className="footer-socials footer-socials-spotify">
                <a href="https://open.spotify.com/show/3s4gxp3CKEi7TDAd0w21S6?si=4iwwjQSkSHuP5RIXN-teLw">
                  <img src="../images/social-media/Spotify.svg" />
                  <span>Spotify</span>
                </a>
              </div>
              <div className="footer-socials footer-socials-youtube">
                <a href="https://www.youtube.com/channel/UChbZGaABq4zFFgiFSQAAaXA">
                  <img src="../images/social-media/youtube.svg" />
                  <span>Youtube</span>
                </a>
              </div>
            </div>
            <div className="footer-socials-container-1">
              <div className="footer-socials footer-socials-instagram">
                <a href="https://www.instagram.com/podkaststornis/">
                  <img src="../images/social-media/instagram.svg" />
                  <span>Instagram</span>
                </a>
              </div>
              <div className="footer-socials footer-socials-facebook">
                <a href="https://www.facebook.com/podkaststornis">
                  <img src="../images/social-media/facebook.svg" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-email">
            <span>podkaststornis@gmail.com</span>
          </div>
          <div className="footer-contact">Seit bus contact form</div>
        </div>
        <div className="footer2">
          <p>© 2021 Renāte Spirga</p>
        </div>
      </div>
      <img className="footer-wave" src="../images/footer.svg" />
    </div>
  );
};
