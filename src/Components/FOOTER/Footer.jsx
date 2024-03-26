import "./Footer.css";
import { Link } from "react-router-dom";
import SpotifyLogo from "../../../src/images/spotify-png.png";

import { Typography } from "@material-tailwind/react";

import { FooterLink } from "../../Data/Data";

const Footer = () => {
  const downloadCv = () => {
    const cvLink =
      "https://drive.google.com/file/d/17AXxu3R_neQ0etS1H5C4KCBxSh7fckax/view?usp=sharing";
    const link = document.createElement("a");
    link.href = cvLink;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <main className="footer">
        <footer className="relative w-full">
          <div className="mx-auto w-full max-w-7xl px-8">
            <div className="grid grid-cols-1 justify-between gap-20 md:grid-cols-2">
              <Link
                target="{_blank}"
                to="https://open.spotify.com/track/1odExI7RdWc4BT515LTAwj?si=b2eb4ac67f9e4b9f"
              >
                <div className="music flex items-center rounded-full my-4 mx-auto max-w-sm shadow-sm hover:shadow-lg">
                  <img className="p-3 img-fluid w-20" src={SpotifyLogo} />
                  <div className="flex flex-col">
                    <span className="bodyText">On repeat</span>
                    <span className="bodyText">Daylight by David kushner</span>
                  </div>
                </div>
              </Link>

              <div className="grid grid-cols-2 justify-stretch gap-10">
                {FooterLink.map(({ title, items }) => (
                  <ul key={title}>
                    <Typography
                      variant="small"
                      className="mb-3 font-medium navText"
                    >
                      {title}
                    </Typography>
                    {items.map((link) => (
                      <li key={link}>
                        <Typography
                          as="a"
                          href="#"
                          className="navText py-2 font-normal transition-colors"
                        >
                          {link}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};
export default Footer;
