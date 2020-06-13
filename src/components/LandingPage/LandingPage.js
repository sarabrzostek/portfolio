import React from "react";

import { Link } from "react-scroll";
import { FaGithub, FaLinkedinIn, FaFile } from "react-icons/fa";
import ReactTooltip from "react-tooltip";
import "./LandingPage.scss";
import Navbar from "../Navbar/Navbar";
import cv from "../../assets/zarzeczny_maciej_cv_eng.pdf";

class LandingPage extends React.Component {
  render() {
    const { handleThemeChange, darkTheme } = this.props;

    return (
      <div className="landing-page" name="about-section">
        <section className="navbar">
          <Navbar handleThemeChange={handleThemeChange} darkTheme={darkTheme} />
        </section>

        <header>
          <h3>Maciej Zarzeczny</h3>
          <h1>Fullstack web developer</h1>
          <h1>Mobile developer</h1>
          <Link to="skills-section" smooth={true} duration={500}>
            <div className="button">Learn more</div>
          </Link>
        </header>

        <svg
          id="landing-illustration"
          xmlns="http://www.w3.org/2000/svg"
          width="498.856"
          height="430.518"
          viewBox="0 0 498.856 430.518"
        >
          <g id="landing_illustration" transform="translate(0 0)">
            <path
              id="Path_277"
              data-name="Path 277"
              d="M667.018,717.174s-2.973,1.018-7.808,2.461c-10.688,3.2-30.464,8.52-47.223,9.582-14.429.924-26.622-1.3-28.852-10.713-.956-4.048.4-7.377,3.354-10.113,8.82-8.177,31.857-11.106,50.128-12.112,5.16-.281,9.932-.412,13.9-.462,6.746-.087,11.169.05,11.169.05l.106.412Z"
              transform="translate(-344.127 -326.999)"
              fill="#a0616a"
            />
            <g id="body">
              <path
                id="neck"
                d="M578.135,260.562s8.654,65.239-4.66,72.562,79.219,7.988,79.219,7.988-20.637-56.585-11.317-73.893Z"
                transform="translate(-340.123 -163.634)"
                fill="#f5bbba"
              />
              <g id="torso">
                <path
                  id="Path_276"
                  data-name="Path 276"
                  d="M683.245,369.4l-7.7,35.042-16.272,74.139-.487,4.06-5.616,47-3.735,31.226-2.5,20.976c-15.229,7.827-26.266,13.23-26.266,13.23s-.949-4.76-2.48-10.85c-10.688,3.2-30.464,8.52-47.223,9.582,6.1,6.8,8.907,13.192,5.1,17.909-11.481,14.217-58.879-15.566-75.457-26.672a44.878,44.878,0,0,0-.437,8.033l-12.687-9.757,1.255-22.45,2.118-37.984,2.661-47.635a50.009,50.009,0,0,1-2.105-6.265c-3.885-13.817-8.6-41.408-12.218-64.544-2.911-18.621-5.1-34.355-5.559-37.7-.062-.437-.094-.662-.094-.662l70.229-31.032c4.991,11.575,28.3,15.054,28.3,15.054,19.308-1.331,34.443-11.512,34.443-11.512Z"
                  transform="translate(-303.107 -191.592)"
                  fill="#d0cde1"
                />
                <g id="right-arm">
                  <path
                    id="Path_279"
                    data-name="Path 279"
                    d="M812.856,521.641c-4.667,4.143-16.23,10.383-30.249,17.139-5.215,2.51-10.766,5.1-16.43,7.669-13.514,6.138-27.663,12.22-39.339,17.134-15.19,6.393-26.2,10.807-26.2,10.807s-.947-3.888-2.473-8.863c-2.044-6.659-5.121-15.266-8.33-19.078-.112-.133-.224-.255-.336-.378a4.091,4.091,0,0,0-2.8-1.592l46.367-23.537L753.1,510.767l-14.436-28.221-18.106-35.4,10.928-28.476,10.984-28.624s11.556-7.294,20.585,0,6.816,12.185,15.532,29.176c1.3,2.541,2.648,5.189,4.019,7.924C800.539,462.861,822.894,512.737,812.856,521.641Z"
                    transform="translate(-383.114 -212.237)"
                    fill="#d0cde1"
                  />
                </g>
                <g id="left-arm">
                  <path
                    id="Path_281"
                    data-name="Path 281"
                    d="M490.808,579.505a29.854,29.854,0,0,0-5.06.412c-14.361,2.467-18.6,15.466-19.8,24.174a44.875,44.875,0,0,0-.437,8.033l-12.686-9.757-4.622-3.554c-11.125-3.879-21.038-10.769-29.633-18.9a148.966,148.966,0,0,1-19.957-23.668,208.71,208.71,0,0,1-15.441-26.485,19.479,19.479,0,0,1-.269-16.522l15.71-35.011,22.962-51.171q.253-1.827.556-3.573c4.554-26.11,16.753-37.7,16.753-37.7h9.32l6.234,37.7,7.746,46.842-5.428,17.7L444.21,528.915,456.2,541.933Z"
                    transform="translate(-268.441 -210.637)"
                    fill="#d0cde1"
                  />
                </g>
              </g>
              <g id="head">
                <circle
                  id="Ellipse_37"
                  data-name="Ellipse 37"
                  cx="45.934"
                  cy="45.934"
                  r="45.934"
                  transform="translate(226.361 28.027)"
                  fill="#f5bbba"
                />
                <path
                  id="Path_278"
                  data-name="Path 278"
                  d="M568.126,135.9l-8.589-3.438s17.958-19.77,42.943-18.051l-7.027-7.736s17.177-6.877,32.792,11.175c8.209,9.489,17.706,20.643,23.627,33.208h9.2l-3.839,8.453,13.436,8.453-13.79-1.518a47.232,47.232,0,0,1,.374,14.02,18.14,18.14,0,0,1-6.643,11.867h0s-10.651-22.047-10.651-25.486v8.6s-8.589-7.736-8.589-12.894l-4.685,6.017-2.342-9.455-28.888,9.455,4.685-7.736-17.958,2.579,7.027-9.455s-20.3,11.175-21.081,20.63S561.4,193,561.4,193,545.483,148.794,568.126,135.9Z"
                  transform="translate(-334.043 -105.389)"
                  fill="#2f2e41"
                />
                <path
                  id="Path_272"
                  data-name="Path 272"
                  d="M581.511,307.6h-1.155L557.88,327.334c-21.654-10-37.552,0-37.552,0l-23.573-18.921-2.377.295c.3,23.73,20.063,42.72,44.127,42.414s43.321-19.79,43.011-43.52ZM537.87,334.9c-8.477,0-15.35-1.694-15.35-3.784s6.872-3.784,15.35-3.784,15.35,1.694,15.35,3.784S546.347,334.9,537.87,334.9Z"
                  transform="translate(-264.618 -219.055)"
                  fill="#2f2d41"
                />
                <ellipse
                  id="Ellipse_34"
                  data-name="Ellipse 34"
                  cx="4.105"
                  cy="7.759"
                  rx="4.105"
                  ry="7.759"
                  transform="translate(225.156 76.941)"
                  fill="#f5bbba"
                />
                <ellipse
                  id="Ellipse_42"
                  data-name="Ellipse 42"
                  cx="4.105"
                  cy="7.759"
                  rx="4.105"
                  ry="7.759"
                  transform="translate(312.156 76.941)"
                  fill="#f5bbba"
                />
              </g>
            </g>
            <path
              id="Path_280"
              data-name="Path 280"
              d="M588.873,743.573c-11.481,14.217-58.879-15.566-75.457-26.672-3.61-2.417-5.759-3.948-5.759-3.948l15.166-20.226,4.8-6.4s4.3,2.28,10.65,5.99c.231.137.462.275.7.412,5.478,3.217,12.355,7.421,19.3,12.112,9.576,6.478,19.258,13.867,25.5,20.826C589.872,732.467,592.677,738.857,588.873,743.573Z"
              transform="translate(-315.91 -323.447)"
              fill="#a0616a"
            />
            <path
              id="Path_282"
              data-name="Path 282"
              d="M560.913,507.546l7.967,9.3c2.96-.564,6.051-1.228,9.235-1.972l-2.288-7.323,5.6,6.528c33.729-8.3,75.536-24.424,75.536-24.424s-45.135,3.309-78.835-4.053c-14.911-3.258-30.252,4.134-36.371,18.116-3.557,8.127-3,15.168,9.616,15.168a83.306,83.306,0,0,0,12.713-1.2Z"
              transform="translate(-327.998 -247.816)"
              fill="#97dffc"
            />
            <path
              id="Path_283"
              data-name="Path 283"
              d="M686.639,759.461v3.792a8.332,8.332,0,0,1-.568,3.042,8.558,8.558,0,0,1-.606,1.249,8.394,8.394,0,0,1-7.215,4.1H399.316a8.394,8.394,0,0,1-7.215-4.1,8.546,8.546,0,0,1-.606-1.249,8.333,8.333,0,0,1-.568-3.042v-3.792a8.387,8.387,0,0,1,8.389-8.389h16.078V749.3a.349.349,0,0,1,.35-.35h8.389a.349.349,0,0,1,.35.35v1.768h5.241V749.3a.349.349,0,0,1,.35-.35h8.389a.349.349,0,0,1,.35.35v1.768h5.247V749.3a.349.349,0,0,1,.35-.35H452.8a.349.349,0,0,1,.35.35v1.768h5.241V749.3a.349.349,0,0,1,.35-.35h8.389a.349.349,0,0,1,.35.35v1.768h5.241V749.3a.349.349,0,0,1,.35-.35h8.389a.349.349,0,0,1,.35.35v1.768h5.247V749.3a.349.349,0,0,1,.35-.35h8.389a.349.349,0,0,1,.35.35v1.768h5.241V749.3a.349.349,0,0,1,.35-.35h65.712a.349.349,0,0,1,.35.35v1.768h5.247V749.3a.349.349,0,0,1,.35-.35h8.389a.353.353,0,0,1,.35.35v1.768h5.241V749.3a.349.349,0,0,1,.35-.35h8.389a.349.349,0,0,1,.35.35v1.768H601.7V749.3a.349.349,0,0,1,.35-.35h8.389a.349.349,0,0,1,.35.35v1.768h5.247V749.3a.349.349,0,0,1,.35-.35h8.389a.348.348,0,0,1,.344.35v1.768h5.247V749.3a.349.349,0,0,1,.35-.35H639.1a.349.349,0,0,1,.35.35v1.768h5.241V749.3a.349.349,0,0,1,.35-.35h8.389a.349.349,0,0,1,.35.35v1.768H678.25A8.387,8.387,0,0,1,686.639,759.461Z"
              transform="translate(-272.095 -346.956)"
              fill="#3f3d56"
            />
            <rect
              id="Rectangle_147"
              data-name="Rectangle 147"
              width="457.863"
              height="1.249"
              transform="translate(37.791 419.339)"
              fill="#3f3d56"
            />
            <path
              id="Path_284"
              data-name="Path 284"
              d="M670.617,508.858H566.65v-2.143H519.507v2.143h-104.4a7.033,7.033,0,0,0-7.033,7.033V658.253a7.033,7.033,0,0,0,7.033,7.033H670.617a7.033,7.033,0,0,0,7.033-7.033V515.89A7.033,7.033,0,0,0,670.617,508.858Z"
              transform="translate(-278.533 -256.029)"
              fill="#3f3d56"
            />
            <circle
              id="Ellipse_38"
              data-name="Ellipse 38"
              cx="15.616"
              cy="15.616"
              r="15.616"
              transform="translate(248.92 286.915)"
              fill="none"
              stroke="#d0cde1"
              strokeMiterlimit="10"
              strokeWidth="2"
            />
            <circle
              id="Ellipse_39"
              data-name="Ellipse 39"
              cx="15.616"
              cy="15.616"
              r="15.616"
              transform="translate(243.923 292.536)"
              fill="#d0cde1"
            />
            <rect
              id="Rectangle_148"
              data-name="Rectangle 148"
              width="17.49"
              height="17.49"
              transform="translate(50.25 413.028)"
              fill="#d0cde1"
            />
            <path
              id="Path_285"
              data-name="Path 285"
              d="M292.136,744.612V765.85h21.238V744.612Zm20.313,20.313h-19.4V745.536h19.4Z"
              transform="translate(-235.013 -345.326)"
              fill="#3f3d56"
            />
            <rect
              id="Rectangle_149"
              data-name="Rectangle 149"
              width="17.49"
              height="17.49"
              transform="translate(455.018 413.028)"
              fill="#d0cde1"
            />
            <path
              id="Path_286"
              data-name="Path 286"
              d="M940.136,744.612V765.85h21.238V744.612Zm20.313,20.313h-19.4V745.536h19.4Z"
              transform="translate(-478.245 -345.326)"
              fill="#3f3d56"
            />
            <circle
              id="clock-bg"
              cx="49.559"
              cy="49.559"
              r="49.559"
              transform="translate(9.519 44.62)"
              fill="#97dffc"
            />
            <g id="tip" transform="translate(1.164 1.113)">
              <rect
                id="rect234"
                width="4.505"
                height="25.531"
                transform="translate(67.339 58.887)"
                fill="#3f3d56"
              />
              <path
                id="Path_288"
                data-name="Path 288"
                d="M312.092,240.083a3.755,3.755,0,0,0-4.505,0,3.864,3.864,0,0,0-1.074,1.262,3.755,3.755,0,1,0,5.579-1.262Zm-2.253,5.256a2.259,2.259,0,0,1-2.253-2.253,2.293,2.293,0,0,1,.4-1.277,2.251,2.251,0,1,1,1.855,3.529Z"
                transform="translate(-240.248 -155.665)"
                fill="#3f3d56"
              />
            </g>
            <g id="clock" transform="translate(0 0.42)">
              <path
                id="Path_287"
                data-name="Path 287"
                d="M287.268,161.622a53.567,53.567,0,0,0-13.516,0A52.7,52.7,0,0,0,230.268,198.3a51.983,51.983,0,0,0-2.283,13.531c-.022.638-.038,1.284-.038,1.93a52.616,52.616,0,0,0,52.563,52.563c1.119,0,2.238-.038,3.342-.105a51.989,51.989,0,0,0,7.7-1.066,52.569,52.569,0,0,0-4.288-103.527ZM296.963,262.1h-.008a50.538,50.538,0,0,1-13.1,2.606c-1.1.075-2.223.113-3.342.113a51.124,51.124,0,0,1-51.061-51.061c0-.646.015-1.292.038-1.93A51.061,51.061,0,1,1,296.963,262.1Z"
                transform="translate(-210.919 -126.335)"
                fill="#3f3d56"
              />
              <rect
                id="Rectangle_150"
                data-name="Rectangle 150"
                width="1.502"
                height="10.513"
                transform="translate(68.84 39.363)"
                fill="#3f3d56"
              />
              <rect
                id="Rectangle_151"
                data-name="Rectangle 151"
                width="1.502"
                height="10.513"
                transform="translate(35.079 53.97) rotate(-45)"
                fill="#3f3d56"
              />
              <rect
                id="Rectangle_152"
                data-name="Rectangle 152"
                width="1.502"
                height="10.513"
                transform="translate(21.534 88.172) rotate(-90)"
                fill="#3f3d56"
              />
              <rect
                id="Rectangle_153"
                data-name="Rectangle 153"
                width="1.502"
                height="10.513"
                transform="translate(36.141 121.933) rotate(-135)"
                fill="#3f3d56"
              />
              <rect
                id="Rectangle_154"
                data-name="Rectangle 154"
                width="1.502"
                height="10.513"
                transform="translate(96.67 61.403) rotate(-135)"
                fill="#3f3d56"
              />
              <rect
                id="Rectangle_155"
                data-name="Rectangle 155"
                width="1.502"
                height="10.513"
                transform="translate(107.136 88.172) rotate(-90)"
                fill="#3f3d56"
              />
              <rect
                id="Rectangle_156"
                data-name="Rectangle 156"
                width="1.502"
                height="10.513"
                transform="translate(95.61 114.5) rotate(-45)"
                fill="#3f3d56"
              />
              <rect
                id="Rectangle_157"
                data-name="Rectangle 157"
                width="1.502"
                height="10.513"
                transform="translate(68.84 124.966)"
                fill="#3f3d56"
              />
              <rect
                id="Rectangle_158"
                data-name="Rectangle 158"
                width="13.516"
                height="13.516"
                transform="translate(62.833 22.093)"
                fill="#3f3d56"
              />
              <ellipse
                id="Ellipse_41"
                data-name="Ellipse 41"
                cx="18.022"
                cy="6.383"
                rx="18.022"
                ry="6.383"
                transform="translate(51.57 11.58)"
                fill="#3f3d56"
              />
              <rect
                id="Rectangle_160"
                data-name="Rectangle 160"
                width="141.169"
                height="1.502"
                transform="translate(0 138.696)"
                fill="#3f3d56"
              />
            </g>
            <g id="left-leaf">
              <path
                id="Path_289"
                data-name="Path 289"
                d="M319.427,678.36c.583,19.957-11.078,27.271-25.712,27.7q-.51.015-1.015.018-1.018.008-2.016-.034c-13.235-.549-23.712-7.575-24.254-26.135-.561-19.208,23.28-44.164,25.068-46.01l0,0,.1-.106S318.845,658.4,319.427,678.36Z"
                transform="translate(-225.36 -303.728)"
                fill="#d0cde1"
              />
              <path
                id="Path_290"
                data-name="Path 290"
                d="M301.43,703.036l9.3-13.824-9.277,15.312.019,1.556q-1.018.008-2.016-.034l.461-20-.013-.154.017-.03.044-1.889-10.18-14.781,10.168,13.367.036.4.348-15.108-8.793-15.324,8.818,12.67-.092-31.3v-.1l0,.1.584,24.668,8.014-10.02-7.988,12.145.175,13.514,7.374-13.189-7.347,15.175.1,7.514L311.9,665.334l-10.692,20.993Z"
                transform="translate(-234.129 -303.73)"
                fill="#3f3d56"
              />
            </g>
            <g id="right-leaf">
              <path
                id="Path_291"
                data-name="Path 291"
                d="M967.427,678.36c.583,19.957-11.078,27.271-25.712,27.7q-.51.015-1.015.018-1.018.008-2.016-.034c-13.235-.549-23.712-7.575-24.254-26.135-.561-19.208,23.28-44.164,25.068-46.01l0,0,.1-.106S966.845,658.4,967.427,678.36Z"
                transform="translate(-468.592 -303.728)"
                fill="#d0cde1"
              />
              <path
                id="Path_292"
                data-name="Path 292"
                d="M949.43,703.036l9.3-13.824-9.277,15.312.019,1.556q-1.018.008-2.016-.034l.461-20-.013-.154.017-.03.044-1.889-10.18-14.781,10.168,13.367.036.4.348-15.108-8.793-15.324,8.818,12.67-.092-31.3v-.1l0,.1.584,24.668,8.014-10.02-7.988,12.145.175,13.514,7.374-13.189-7.347,15.175.1,7.514L959.9,665.334l-10.692,20.993Z"
                transform="translate(-477.361 -303.73)"
                fill="#3f3d56"
              />
            </g>
          </g>
        </svg>

        <section className="links">
          <a href="https://github.com/maciekz1996" target="_blank" rel="noopener noreferrer">
            <FaGithub className="link" data-for="link-tooltip" data-tip="GitHub page" />
          </a>
          <a
            href="https://www.linkedin.com/in/maciej-zarzeczny-03636918b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="link" data-for="link-tooltip" data-tip="Linkedin account" />
          </a>
          <a href={cv} download>
            <FaFile className="link" data-for="link-tooltip" data-tip="Download resume" />
          </a>

          <ReactTooltip id="link-tooltip" place="top" effect="solid" />
        </section>
      </div>
    );
  }
}

export default LandingPage;
