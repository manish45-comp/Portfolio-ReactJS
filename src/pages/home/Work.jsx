import MotionWrapper from "../../Components/common/MotionWrapper";
import CardComponent from "../../Components/common/CardComponent";
import PageTitle from "../../Components/common/PageTitle";
import "./style.css";
import { technologies } from "../../Data/Data";

// const data = [
//   {
//     id: 1,
//     text: "Discover",
//     title: "React JS",
//     link: "/react",
//     imgLink:
//       "https://lh3.googleusercontent.com/fife/ALs6j_EdM609yT6jz0TK9d-JHF1R5URWU8_w9UY3fkWfbZzusR8QSFzOurlFIpQQrHkW7CSRs2ddtElku5cevl4JB8W8f3aiwSLrDZMcovnyBFFCHoVpOHTX9evrWNUcGRlYZPd6paV4qinR5-XiLi05h7ufGpffzyTbq-wNgKxiR-s0CwkNDOfZMydM4ooApg3XN-6LyefI9-fsioNLZC9ypCNI4NB-ZXGvyIukD5zJe16Sf4rTyuHoMarCgVufr3THRL6aT10a54GilbdTnYldgmJpxHC7WyTy-h9IuUM-HAzdJ0LBjb92xgj7C9DNuZd34-CRWskspL4oJCtUAXw-s75rry3n9AQcPvRO6trAgYtpp4OD8hcuaYNHOj2zrWA3u4lrJDnUMjh_N8W4RoFhhvWQURgWyKjq5PUWyAArifYYJePH305SY5sdnBknZ31J0_OlXlKE1sGnjPMWB19P5ewpipomVsQUrekn2b8hsxAOJ1pjC8lE5lU2NFb2X2d8ddOKtVn4sKa4RhB3Q8RkQmrNcxjbnO1oeI7Wu7TooeO57w7T-QmeVhhD3ek74qTEyams5CLSoDNcnKrwXfu5bbSABdLmZBG56xeJhvAYzXVRIusCi9FlTIoYxgzE3wXmVAR5TrCNMkHa9kJsBQAlJKx4sNwbdkO8qVpCyZBPHOP2c-EzJxbskmxdgf6KHgAjyvubqC6ATMn4kfeo4ck8RwGVCIrL5gzP5EBlUb0uXSuBtMQW64tMiJ8elzSpOTCdib4wtday28ocPIXndA3v-A5taY0LhmPbdciRHQB28Pn6qLUGkn31HH6tpszIjyOXNnPyoIKJgsBgrAvrwOwHyh0STeBu5d_5A1_WM0zHvkrEtGcUBdUlbcX0P15rfPwJIjs1v1X0LAVy1bmciRlq6oObOIwGk6AYk5w8KKpomCHZvoLogGMTbkuSfPsxQF9cTsquCj0nZJgN3H5Vk6cva-ozxlnKxxqWde_vgUJgRHEfx8JTCWvoqZVZ0F6em4ZGEegYWqIJW4o2ynDR9i5J71xsCvPFY3zfHuKzXm_vGeQ-glhoxvwSYtkHDd4c-Layv-WkSddNPOxXtvkiODP57OGGuiybjs4MkUhhWNFZzbMkA1TINIXBptkXfjsV0wjbp4q2vDCqPrs0A51vwoOXRA0Ft6IgTlf7ceKHXuRQ-fReGYtRoPObQzg5eA9i-o49JnyKa-RPVXIMdRLLF2Cooa8W7CuqlX-McBwcliPOb9PVuP-hN_w4SfMLGHIqbJ2g_cDQDWxjyK2N5htaps2uD1eCCwpxsPrMMlju-qsN014HtiyiCYRGCrQlAkUHycYV2XMG4Q0a_BQB8aAqYoBHImagRlGdym77g7rsKo_v4Ixr7OZKa2Cjpin10nxPryqpp6Mw29aSzV2Yv4vlAHdW1hdGvD14nXm55hrTKYZCufwjqTvaRgAWFNulC9rhBG9Nt-bVkrShHh4Su4dVR-zd78C-Aq3_gaQvjhL8FnSoL91soBILs1aqrpYL6-OMYTR4b3yuA06zVNZHm2eLLZ98gV1Ue4oPrXtbA8U4TDsBE_psZvzL9vjq3q-OLsjfIrHQpwWabTjMrPcnZCXnPnBdaVhwRyx41jyWaxF0Y5abmDW91ephqIhOwzg=w1920-h957",
//     colWidth: "1",
//     order: "1",
//   },
//   {
//     id: 2,
//     text: "Explore",
//     title: "HTML CSS JavaScript",
//     link: "/html",
//     imgLink:
//       "https://lh3.googleusercontent.com/fife/ALs6j_F5mXuK0lbfQwMt4mr4-yodgmI69vAtK4V0UGOojpoZaxiDxySKCUjzuO67S4kVPFVxAK74vYjENjCWMHOTJ8y0CyS__yY-eDuWtECRpaHmaXRUsI9v083NVbeRFhb7e95z0hdvM-jZX8kvHGIkvkWawKyGA-1V5q2wNYPSNqvRIuuzkyynQk0EfuRyHR_UUrl-V3ElXz0Pf6hJAqbSSNdl8qYuRRpJb8cPk8YUoh3oHd5yGtAKglZo3bK1xWhXcOZiFtAkv9ZV62bVhaNW6PLr1Ke6UIWwHWnc8UlXRrVWIOtppBmG87s-IBgbC5hGxDi7azb1moC4W4eAJyQqXlJRiPsGSn5Bm0gLiC82AyGj7Ow-grv74VNeQlVQ3dB4q5datkgaDOqf6n6gYTs0HCVf7Gm4UamOA0mLWs0AcVw6c5mSflnOufQifCg5zH4LsOqO5KJai11LU5-U_7o0F-_uPn1uuZM0wsuga-QIyqWBWikvbaFC9S44sVCjBOth_wc5sqpUEPXdrSPpiPSbgQDPEgtr7Ha0mOIqYbJJqgSPNEKmEB5XVhEsi0J4-FiMBy9i-oY4Oojjofnfe9pNNwmTk9vP3EY5WVapXokFgYF7RiXS2t1R5TrRgBMh1mH5f8lf4IEzi8y5TxDiV3aLH8KgA5vIgs2JINzEf0q2Q6bJmeCGaGxROHeOPFGYyP7FbGgxihwtG_DgMvLHXXOl3nFlXlrHjq5NchbqMHFF9nshfAO6A4ElyxG1qlZlmNFnVwflXEsfRpLquLTn_UfUd6iXZe_O9tRcfWvk_0oO9253_eg_rshpjzIsPTUf9xbkOgkDSZkISICMAPunim-AjyjMdGJW4QFja71mEJJChc5kXuxEtpSsIxe9Fo6BHsL7GIRuJbHcxTptsvw2EcaxD0Uw2nLv1hLW_KESpH6pifpifrqMAGrn6FjjrYPS_qRe52BUBNOa8fUmEQbEtRcXO1zRs36YaqghmPnPh74vay6H3mnyN07l1NIZkJVGrWXP_GDTzKhgsWy2d3-VISa71O7wpnxSO9NMaodOtnystkRwyEd65D3p57plfanGF1IKAGYG6nRClmfGlilUZMEZc0V7UZ_PR5J0RP2v-3UXxvDQffgyyKZUifLFU3aINKYIDl1n6ilxGvd1HdsIMRwPtXSN6Edx8YWuY9Wu0Z4lYmOSdU_IAFFfNCbNj8uLm9ltn6dLGLZJcfjmNdQsoB-m9wKB2itrguWAJFJtBd0GAWF1GA4_SdQjoQZLmJT-7iAll3B4IeG3gIIlQX4hpX-ZJD8YCt1SmhyhbXPIVgNPmlY--yUpnJr65kCcPm73Z2zxXpIdrpGUoAmLlHORSlvQi7RxzdyPZzuW111lNHutUmwrTgArv1bdnDEYUBzBXtCu1BTBWcd0H4nmZqC6UKsOPUQ6jVI3oOQrZGqXTmb_oKdZrRSo4W8LJ-rgZ9U2mCQJ7z0YSjsflF6a9Lq2U4UiReLE5RGfFSrxOi45I2K4hOjFa_QmV7G2l_PqFXwJu1x1LMlV5gh4Pq0mQb_4ynlopHL7YdQBUVqZWL6TbYRTQXm7aq-T04L0carJO0Osb4QNynEdMiX9ziT4UJxqoYiumrErMGUmfPvzQs79O_bXkkttNtsLWKJJ-vA=w1920-h991",

//     colWidth: "2",
//     order: "2",
//   },
//   {
//     id: 4,
//     text: "Reveal",
//     title: "Spring Boot",
//     link: "/spring",
//     imgLink:
//       "https://lh3.googleusercontent.com/fife/ALs6j_FgP9gcOBpEHhdzi0CZ5ui8dKOxHoFeJG42bKC56eF7Gu1U8knE90fp-jiPwEBIN7V66ikX94xW_N_jctgdNs2Eg-xDqpao8UwNNzCFrf8h2TcnDc7Q0AhR95-j1JSaNX0DSr-Fu2D_mDo6wtSjyKn7PMAprFlh7U_eCAqhii6MkQTOfeT3YuClFZGqXjO8SEFtq3rr_3OFpqOGXSFKvNKSQSRwns8IBDpx6UUapAXsY2iuJvttxLjwBEmLnOQ_JGp6o5KNUsTfkRvmbvYtKDAoMqJyhUjyUos_gvoiCgpghxyfjyALtR0jWKVMw2FwF65Zm18p-c6SjpCpj0TsLY585vfbdKMunVmm_VggfvgL8toJfr5BpLQ08Awh_0h52X_b4E8KbsQkaDsxjoB1Gd2Vavt8CMvBiJiVEIEZx2Mtw8QR-VYMeO_qWA7kQWY0jVCSLJnikD1iaJbn2MtUXYrbRMfZ2AdGH3oEdUt_RiR2OQhiJdipwJVhTWBORsF61VcbqMXWA7nEKidtwsNcJT3Wfbu3DScv2cs81RrLg7MlPZEFIlzLNH3XklRvV31ISgI1Xppfd6YwwQkklNiBwGRqYchRupUBr-_1DSF2bl_MWE3NbYJDDZXzKMCpeScHhJ4MppnCb5BZM7MYWddWgH4JqmBa2GVfGz0kMgTsGZO5nsUJe9k1U1XTqEAzFfF9-yeAVcaNIFAd5Tw71L5ayH0MByX2bb35FWl_U3R2PKVGQUxFiJIMI9b5xFDDhspinPYSpNjfiwEIyc0tVxIpOdPKBT8ce1VBph3O86rme6fjt1F5LjrMuOwz_em6WXH6jDxhHs8oXDpUNok0wMgLQ7ALJ0fxXH05WeFvRCiZlYULtpogkUh791iDEbqH7AML5vCaWtnQhIP47gA57qjLOy9kf0QyiT58XpPbwhPNIHfh8htQBL9iGOP7MFjVb9RpzPZ7IXk1E2C620HW5dHdY6T72Hnb-uvygVzLmXFVcwxoSCSq_HKf3haYw3AvwP9taUKBRsCvjgD6dkaqdei6lr5VUTk90x8rYnh57YlK-Ln2riI4yc3im7clJFks7V8PfbPCVf-GqBlXN82hDlSxPd2G7LWZgMFEzcB2WCZCv0ILfViWZL0c03CQCfGlDY-PNSQBc99Jsx9USp2JPU0eDyxc0CxkSiGKlOEbjwIHdBS8KdfQf2-hFEKF2JgCZPqNKXRdEWiapKx5z6joXoZHOYcOdkp9yImsX2YMzVEPL-6VMdy_XPWerye65UhAz79lu3YLZDIjuHZqy2XSG8pU31oTO9wWCDEOS9zRrm17rSLEwyseJV2qtufHN3AusKfbcECLrLERMYcrzgkQN0ijDRcemnGP4-6edflG5pL03e38Bh5IKUuW7kFWn8_P1hO4T0M19PQw_FCU8Xh_zNpAA5ld02WzklUwnEHBpTgLlCAnoCeg9Nq5QGKsOc1byaMWBaxHmnDoxnwQLXopGy4NxUUc7WM6aldoZAietRw2mvWYN9MiEi09NO70msrviYmBi2dypmygmMFBssrA70lzVVJo4VvMg5sGwcAb8DpJaKzaQ_wPzrbS4XxyKFRm8oBhdgBzi76M1ArgOFFDTepARBg2H6XjMY5mLs9hTn7ly3rTh0KMEoZy_lc=w1920-h480",
//     colWidth: "2",
//     order: "4",
//   },
//   {
//     id: 3,
//     text: "Uncover",
//     title: "React Native",
//     link: "/react-native",
//     imgLink:
//       "https://lh3.googleusercontent.com/fife/ALs6j_GWJfESgikV8Vu37Z-USnLj0arKAw325PbG88-2Q_s50gBdVH0QqS5TogKz67DlsBL1RWcp1Q_o3zre7u3GBfxoCjEIbPdy21qDB4jntiDWSrCWKpNOKzmH41EjKBYCE2hCkotP8pZLVjGGJTbGNH4TBntL9XwdIUBenXRyDtX9f6BCKexBqIndCjLDqPdD36eO3gsc40VRZ7Mb6gv446kye0fzQmZGdbY3hcdUFwx3C5G5f6SKuAtqtq1QigBKEJ5vaZKKXrsVI2x0pw1tO5ixMTvpSzV2wHfHxwx-Hej_6PwXmuhQBOziFa89R3LssjV0NxI8PG6kZFo1n3dGdgg14nYwfSeUG_pWClxhiWBFMDBZbwVyW1q21JQooTZhD_Pftkk3i35w9rJhbxVrF1jlibr0riOAH0W5GPfky6UAycPbi_l4x4-szfZewEB2VzweclBtPFuTSAKKqTBIc1-Ge7FEKpabOtc6T9y0ddn5XXUa5V1iiSl-IhYoYtcFyQ-bcTNljULrseEOtLsFPcKSM1ojIeyieKCgSxVtzvdqBpigl3eHMJz7VPHLzsr9GdUoF27uoD8dNKCowiiW0bRw4TWQB0Rsg0KluDZ5KNOluQta1wg6lPcuzPPRXavj6nuIzALkOVbnSQqwlFROpusovV5C4TUVGr36sQIUZ6EDk8OXgHiaSYO4DDZmyIbA5kvrNLuQFfo4pGJWOx5vDUMioV1oQ3SleGA4DSvLj2GM5KaeqBLE0VeDHFqtpklmPpTgVnXlsW2DFhY_NDNRXrT3-D6xA6NbKD2hhR2oOarTrcef-0hJy5-bfrsLWuxxtPtn2aHFpgCoDvEtFUlBTWgdCq-3iK4AXGRVKk2QBlO62kWKFsppj5DXca2zCbvcFt_MK6kNyzIxXgUwIlvZPWPH8WnHTyYiB1hbbNsdlfKOhjayLOTu6VdeRTrpbND5h_VhnCvKkRtbdsxf1OHfrRLReIv6ULIyXu7T6H7tiz7POWLDQMJ5qb7qB5XxCcHlLPRY7SGev1keanoxs-GLhcfxnKUAdONXAHIjlopMgGWJVtvh7buVAmWrpoHFZGAm-t7kWqmbCCK6BwB7Nnh4f4iEerJ7eUYZM9W_4JQAN6dz0dZUompLrYwAemS59TmIqJfQmvpjFfV2sO0x2aeAHn3boRZTz31TPckTI8_69xOaxm1HsqYx0bSnxEc9BA-rJidRI853PSNVuJ3a54D_eGrB_6iA2-7cOKQUI8cHVAqovCsN2-Gz0b7b61RWHk0fhyTbSysEmTPMUpuPp8C6nK_liN_QwJPJpjO1VzZ-ztaz-OCjy8ZMwGyhXPtHYhL2ZPAmUnNcD0N8KUfSq9OgOKBXf3kAvU4HdK98dpF4J6tCbj3DWDkEx2cwP0MwLnI0o-XnnNVHWxOX76alYEjzvT_sp4mpNxaYBBtya77ST1Y4pe1akgoJCuNsEuXisneZS58YDUj0zq8SGvBazP0ArqH1V5vZf_Ib63XCGEqZ0-8c8HSV36cXiNnOorNStaaBSQBu7kH5UBV3Q8RPTC_TE5N2FUSPe5_fDQ1cT97Y1EvKHPRLWmicV8PC5OY66PpDOEf3WAc8iQX8eMUrtyvK3YX3U0hXvvfWPVKHIl-Dsa61E63WgjqDvtE=w1920-h480",
//     colWidth: "1",
//     order: "3",
//   },

//   {
//     id: 5,
//     text: "Uncover",
//     title: "White",
//     link: "/react-native",
//     imgLink:
//       "https://lh3.googleusercontent.com/fife/ALs6j_Gzh5ClZEdqJwbkAo5i6NSBp7xWstTy9Dlb4EXIwsxtIygNXFylpU3uj4FBiT1zvZm-_qpLyEGRclXSuZJBJYOVLuLYWUT3VNPumXHepdpzqIY8peD0NwxeMeOrZrcXbG186KYr_wMzjVTUudh_0wPUC4Eb5d14EYkf3T-9rbjjMpYJo4zsP5WC5Z4AF7ZzFI1aDCmXSQDTmwdJ5OdrB5OvuEwoRYMu4gBUKDz0TZUW4RsHqZfduNMOrs-fOCQyS5dzm2ccUhacpZKvbAna90Dr2FyVpBvZ6vhqU1Sdzm7NwhAh5RRRuBx56xaZxox_ym0d7JYguVUcOZlsUkOc0ftPugaFsYcfAnPlvGTGl5yUv7G6yZeJ0C-Cr2fWYM3qadFpd-a5Eqn_aPushPYk1s7fGXeru7lLbMUJHVSlUEGCyhzluZgvbis2tQvP-qm6prXGrWYZuriaTTsMB4_-NmvFwwdbXX2fQ42VdS4qw88MQokm-kygpTZ3qTxiuFnoT17rPBIQP1oIwRPwr7QoDCVlWQ_UYq1xzaISRiWF9fH8BQUvdFcY79dsgJH7cz2Z5nymVfQXHzPef3f6ZXa9E5ggMcgRYEAzHkcmK0teCJ5eqYjHDQ_oOijDbS8MYlfN1PhEDYNceDhoRsRmdf-h327_dvvlDjJqng_syCK_Yz3cG3z9xPhuwjoGl2HGGIjHbrbA5TjRMqb87gBD4__F12cqyZHi04IWp0W6eiZpURcxpdTNNaiPpqcu7OdLCZeKatFMAx9pkGt6TaWWmCAg3n4-Pb9IEkS7jiuXYXsMepk9mjDL4jBQ9vk7n7xKIxFVyoBWRzR2YLxiezSQg3JZxLwu4ooonSO40aoqSyCpvRjV1fmZ7I-a2nlLh8DMWfbBwElH58Fx2DHZUby3ky-gY3Zg6WwvgmI5biflKtuA_PB9Ve8Vo4HFvUr03XxaM5tuvCXNO14guIHjSM6DUt7aXUy8wwWTR_gPREgxmBQq-98veTtmXIoja2qYfoMfWDZDxkM8yP-0TfuzAEXpNYcHXIO-FwwkmRC1h7LhVPSZP43vrgK-RcMQ7LCdU2YoYgK96itPm_YElHUCqHeWZ0loK3vKSqUUSko2Ffzevdt-rHpLscBfeFHCTU7ZxhLDasZYJrdn4TArT8TM-Id34_ZoKgHmpxSIeWOLnoV7zwNPLZwLB98T4_eq3H0rKeR3lvbN7fyNYIoWfDi37-EBrPqx1ELZAAIj4fjSzypLsNGWo07gw3ODfzEHYWmuxv7jwgS2wEkujjKM-NTqQ3U_7AorjLLY3rGuSV_BzHuNJLyoD_od8c_Y83BEzz1kE1VhjpFW-sT8UYIdqJ8poVdmb227Vf3hYg_ZZiUVNWunntURHX-5GIPP0Jm7Ug_SIMVSGI5Fra4FMN14Ni2EsbQyj2s5zkJ8cDGobWxs--V300mkL_hlGgWBIB-WR6ISAyU16IKguAoosn_7D4atXnuakzjPCo62i2Cbvc3gZFAGTQyEEG-OCfcCP9Ie1nSzreS4U8tITraUcSqCQZfMuOJasW4FEoALi9_5vppCWkJkUIKRNqUZAOjzFGjhhiXCb7RRqiA3Fh3K2stir6-OPXxCcYvl8hpc83fRJzREOqJt-j4KpeYxWHbqAJIfejQ=w1920-h489",
//     colWidth: "1",
//     order: "1",
//   },
//   {
//     id: 6,
//     text: "Reveal",
//     title: "Black",
//     link: "/html-css",
//     imgLink:
//       "https://lh3.google.com/u/0/d/1pgRPwRvb3I_6IiU1pambrYp9B-Hsgd2y=w1920-h489-iv1",
//     colWidth: "2",
//     order: "2",
//   },
// ];
const Work = () => {
  return (
    <>
      <MotionWrapper>
        <PageTitle
          title="Hi. i'am Manish."
          title2="A Engineer."
          work={true}
          workSecond={false}
        />
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
          <CardComponent data={technologies.slice(0, 4)} />
        </div>
        <PageTitle
          title="In progress."
          title2=""
          work={false}
          inProgress={true}
        />
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
          <CardComponent data={technologies.slice(4, 6)} />
        </div>
      </MotionWrapper>
    </>
  );
};

export default Work;
