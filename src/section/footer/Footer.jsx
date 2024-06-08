import { Tooltip as ReactTooltip } from "react-tooltip";
import { Typography } from "@mui/material";
import "./style.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FooterLink = [
  {
    title: "Elsewhere",
    items: [
      { name: "GitHub", link: "https://github.com/manish45-comp" },
      {
        name: "Linkedin",
        link: "https://www.linkedin.com/in/manish-bagal-5b2887135/",
      },
      {
        name: "Download Cv",
        link: "https://drive.google.com/file/d/1Sayq2Rp1CU25j7AJY_fVrDAzeUb3fw1e/view?usp=sharing",
      },
    ],
  },
  {
    title: "Contact",
    items: [
      {
        name: "Message",
        link: "",
      },
      { name: "instagram", link: "https://www.instagram.com/m_k_bagal/" },
    ],
  },
];

const Footer = () => {
  const SpotifyLogo =
    "https://github.com/manish45-comp/image-storege/blob/main/images/spotify-png.png?raw=true";
  return (
    <>
      <main className="footer">
        <footer className="relative w-full">
          <div className="mx-auto w-full max-w-7xl px-8">
            <div className="grid grid-cols-1 justify-between gap-20 md:grid-cols-2">
              <Link
                target="{_blank}"
                to="https://youtu.be/mNEUkkoUoIA?si=VvWJlyNihQAmYo0P"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  whileHover={{ scale: 1.01, skewY: -2 }}
                  className="music flex items-center rounded-full my-4 mx-auto max-w-sm"
                >
                  <img className="p-3 img-fluid w-20" src={SpotifyLogo} />
                  <div className="flex flex-col">
                    <span className="bodyText">On repeat</span>
                    <span className="bodyText">
                      OneRepublic - I Ain’t Worried
                    </span>
                  </div>
                </motion.div>
              </Link>

              <div className="grid grid-cols-2 justify-stretch gap-10">
                {FooterLink.map(({ title, items }) => (
                  <ul key={title}>
                    <Typography
                      sx={{ mb: 1 }}
                      variant="small"
                      className="navText"
                    >
                      {title}
                    </Typography>
                    {items.map((link, i) => (
                      <li key={i}>
                        <Typography sx={{ py: 1 }} as="a" href={link.link}>
                          <span
                            data-tooltip-id={link.name}
                            data-tooltip-class-name="navText"
                            className="py-3 navText hover:text-blue-500"
                          >
                            {link.name}
                          </span>
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
      <ReactTooltip
        id="instagram"
        place="left-start"
        content="Instagram Profile"
      />
      <ReactTooltip id="GitHub" place="left-start" content="GitHub Profile" />
      <ReactTooltip
        id="Linkedin"
        place="left-start"
        content="LinkedIn Profile"
      />
      <ReactTooltip
        id="Download Cv"
        place="left-start"
        content="Manish Bagal Resume"
      />
      <ReactTooltip id="Message" place="left-start" content="Contact" />
    </>
  );
};
export default Footer;
