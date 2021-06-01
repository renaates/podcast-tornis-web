import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-1-container">
        <div className="footer-1">
          <div className="footer-socials footer-socials-spotify">
            <a
              href="https://open.spotify.com/show/3s4gxp3CKEi7TDAd0w21S6?si=4iwwjQSkSHuP5RIXN-teLw"
              target="#"
            >
              <img src="../images/social-media/spotify.svg" alt="spotify" />
            </a>
          </div>
          <div className="footer-socials footer-socials-youtube">
            <a
              href="https://www.youtube.com/channel/UChbZGaABq4zFFgiFSQAAaXA"
              target="#"
            >
              <img src="../images/social-media/youtube.svg" alt="youtube" />
            </a>
          </div>

          <div className="footer-socials footer-socials-instagram">
            <a href="https://www.instagram.com/podkaststornis/" target="#">
              <img src="../images/social-media/instagram.svg" alt="instagram" />
            </a>
          </div>
          <div className="footer-socials footer-socials-facebook">
            <a href="https://www.facebook.com/podkaststornis" target="#">
              <img src="../images/social-media/facebook.svg" alt="facebook" />
            </a>
          </div>
          <div className="footer-socials footer-socials-gmail">
            <a href="mailto:podkaststornis@gmail.com?subject=Tornis" target="#">
              <img src="../images/social-media/gmail.svg" alt="gmail" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-2">
        <a
          className="renate"
          href="https://www.linkedin.com/in/renate-spirga/"
          target="#"
        >
          2021 © Renāte Spirga
        </a>
      </div>
      {/* <img className="footer-wave" src="../images/footer.svg" /> */}
    </div>
  );
};
