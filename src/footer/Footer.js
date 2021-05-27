import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-content-1">
          <div className="footer-socials-container">
            <div className="footer-socials footer-socials-spotify">
              <a href="https://open.spotify.com/show/3s4gxp3CKEi7TDAd0w21S6?si=4iwwjQSkSHuP5RIXN-teLw">
                <img src="../images/social-media/Spotify.svg" alt="spotify" />
                {/* <span>Spotify</span> */}
              </a>
            </div>
            <div className="footer-socials footer-socials-youtube">
              <a href="https://www.youtube.com/channel/UChbZGaABq4zFFgiFSQAAaXA">
                <img src="../images/social-media/youtube.svg" alt="youtube" />
                {/* <span>Youtube</span> */}
              </a>
            </div>

            <div className="footer-socials footer-socials-instagram">
              <a href="https://www.instagram.com/podkaststornis/">
                <img
                  src="../images/social-media/instagram.svg"
                  alt="instagram"
                />
                {/* <span>Instagram</span> */}
              </a>
            </div>
            <div className="footer-socials footer-socials-facebook">
              <a href="https://www.facebook.com/podkaststornis">
                <img src="../images/social-media/facebook.svg" alt="facebook" />
                {/* <span>Facebook</span> */}
              </a>
            </div>
            <div className="footer-socials footer-socials-gmail">
              <a href="mailto:podkaststornis@gmail.com?subject=Tornis">
                <img src="../images/social-media/gmail.svg" alt="gmail" />
                {/* <span>Gmail</span> */}
              </a>
            </div>
          </div>
        </div>
        <div className="footer-1">{/* <span>© Renāte Spirga</span> */}</div>
      </div>
      <img className="footer-wave" src="../images/footer.svg" />
    </div>
  );
};
