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
    "https://lh3.googleusercontent.com/fife/ALs6j_EC72KrPXRw7whjigEMcMzY0DJnEhOdj8uCPCo63Q00xPtA5ye5b0hsUVKrFDJ7ZequHjqvhwr-qJvImosqnu67J3cTYtEkgc7y1GEGwPdJPuGN_Xur3AA0_RBki8_9E8ep-urZMVY_QqXCP5HWCa8su1MkP8BaldQjM6ClGsio1fWGtJSMK-kYwbS0Vli1_QvratSOnT8MFur2LWtB4_zlHEPWVIaoEZdpJUxuo79_PNpmaZ6hVX-fEws1AvbXGUCsa9GonBNal2Ph_t29gD-ihIvCPbffN7E5wuxymflEUhZ19fsyT7D9QAPBUcyWD4ejRo55qd9Z3PXx3ks-9vQ78QfP8bYhAGLDmFefudaTa2ntkc-4GVY2xfzLXOSTX-jWtn_DcXdKrYi_En9N0AOJRuH0HHU3yFcoN-TZ5BzlmuR5c56kVQrod6FZEiqNv0T_OlbygBSMPi7O6zZSJeiHLqsGdjOnTf1X6FFwPTCb2JbO9lHFpD2ISaWQoa6XUak7MEj0cGKkVbl5EfiM2K2lcJ_idjVVXeLIVgdflpJnYJNsPtd4m_-oyZshjOQs6HYH-onLs0JMfIAx_GgPi9K67NsSzTc_7dzNqq8NNInOQvj0Hiil7fW_7zPiQKpEUmERppf5nJ1HQV5vyWaoebkBRWkC-OcE8iCDcnycqGwlTrM7sFKfWwS77L07e6XKC5HNaYPhaDMC9wLrXGshi2NRCn3dwRodbbS60zKNTFPKotyRaJWDIjq_w7pSNqBKAMamGYzStrlR_zd4FX6tuF2K1xkmt-bMCFyQBrZICPthJcpbb-Dr32mdvhZqHkyvj8qfVy6546E3aig2b9hj5Pz2tYj912WuoqY3efG5qYkWgqD6qbdsKz_bS247y5GDQNWrqYAFifHJyS7mtdY3BEaybU8-vvaGcrsUEQVWYpSDp1ch1A2sW1PWmydEnl2d7iVM4LJWBc-cSAzMQBcmd2B4XlutPATFY-ZNRpPWUQWZXPJKBOf4ogDFI0tUQcI-i2Q0AdjEt8GO3djxb0jazv0izNslK1BFOQGahMufPQ3zZwxUNqdVSGJGpgUdY2L61Ef88UdrgrXEzFX4BY_UlY88kVGRZmdop9eHAbEduC6zHC03_41j9-3cYA-O3T332RgCkWKMwbbFksP0IsRRbDwDNSoLVMFZ3KENkEkl0nKH549P8s3nrr6cU3gtQQlgESSWSgrkx00WoQ_YFCqDiQ3dZAamrDk2qzG8WtcO8j26gIdRGyQQ-Ruuyvm1hWAPaUvyxEKGUhZvbMg6DlPzB-Pb5u5j1uZlTQHPVeFipwYYjdt4OZtzezSwY2Qyqn6j3Rpewfu1mn8LtSt_j58Eei1PE2U9WhgrTKsmVsnWmFqT29QFLNqtXCcMt66z4Jgzz-ULNqZcvTfOhHwfJ2oDB35drpchAb4bC_T03XKhiie8m5ubT9pNBwcmMKT_1_6rfbwcvGUOooMJ0k33JN5dfo2rjfgm8fXu8At_FlgyivXG7_97oCWpYRElLMklvyadBu07gN6J0bFFMPnpvCxDp8NHwdgwC-YViuEOyfKshOvhMymEnGVSVzA92JrC9BxOku37cpOBTC7zLWBHD2Sgp0D1pGKW8h8lCrBk1a9sqWDyMPuHHUTaPQ=w1920-h480";

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
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  whileHover={{ scale: 1.01, skewY: -2 }}
                  className="music flex items-center rounded-full my-4 mx-auto max-w-sm shadow-sm hover:shadow-lg"
                >
                  <img className="p-3 img-fluid w-20" src={SpotifyLogo} />
                  <div className="flex flex-col">
                    <span className="bodyText">On repeat</span>
                    <span className="bodyText">Daylight by David kushner</span>
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
                    {items.map((link) => (
                      <li key={link}>
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
