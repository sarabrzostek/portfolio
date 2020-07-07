import React from "react";

import { Link } from "react-scroll";
import { FaGithub, FaLinkedinIn, FaFile } from "react-icons/fa";
import ReactTooltip from "react-tooltip";
import "./LandingPage.scss";
import Navbar from "../Navbar/Navbar";
import cv from "../../assets/zarzeczny_maciej_cv_eng.pdf";
import video from "../../assets/images/landing-video.mp4";

class LandingPage extends React.Component {
  render() {
    const { handleThemeChange, darkTheme } = this.props;

    return (
      <div className="landing-page" name="about-section">
        <section className="navbar">
          <Navbar handleThemeChange={handleThemeChange} darkTheme={darkTheme} />
        </section>

        <header>
          <h3>Sara Brzostek</h3>
          <h1>I apply to Academy of Art</h1>
          <h1>Visual Communication</h1>
          <Link to="skills-section" smooth={true} duration={500}>
            <div className="button">Learn more</div>
          </Link>
        </header>

        <svg
          id="landing-illustration"
          xmlns="http://www.w3.org/2000/svg"
          width="433.183"
          height="572.709"
          viewBox="0 0 433.183 572.709"
        >
          <g id="Me" transform="translate(0.04 -0.009)">
            <g id="Layer_1" data-name="Layer 1" transform="translate(0.46 0.46)">
              <g id="Me-2" data-name="Me">
                <path
                  id="Path_329"
                  data-name="Path 329"
                  d="M599.383,454.448v169.2c0,77.747-52.606,141.336-116.9,141.336H284.12c-64.3,0-116.92-63.588-116.92-141.336v-169.2c0-104.486,51.445-195.135,125.225-236.806a187.958,187.958,0,0,1,56.17-20.965,179.007,179.007,0,0,1,58.75-1.758h0a180.941,180.941,0,0,1,40.14,10.208,193.2,193.2,0,0,1,27.3,12.9h.081a222.84,222.84,0,0,1,61.04,51.928q6.564,7.934,12.531,16.5C580.192,331.965,599.383,390.618,599.383,454.448Z"
                  transform="translate(-167.2 -193.226)"
                  fill="#3a2719"
                  stroke="#a57e6e"
                  stroke-miterlimit="10"
                  stroke-width="1"
                />
                <rect
                  id="Rectangle_240"
                  data-name="Rectangle 240"
                  width="48.251"
                  height="98.793"
                  rx="12"
                  transform="translate(194.344 407.122)"
                  fill="#f4b486"
                  stroke="#f4b486"
                  stroke-miterlimit="10"
                  stroke-width="10"
                />
                <path
                  id="Path_330"
                  data-name="Path 330"
                  d="M151.717,53.12h88.311A113.017,113.017,0,0,1,353.044,166.136v74.539A157.172,157.172,0,0,1,195.872,397.847h0A157.172,157.172,0,0,1,38.7,240.675V166.137A113.017,113.017,0,0,1,151.717,53.12Z"
                  transform="translate(22.969 31.804)"
                  fill="#fac696"
                />
                <path
                  id="Path_331"
                  data-name="Path 331"
                  d="M240.86,345.132a28.432,28.432,0,1,1,56.864,0"
                  transform="translate(-122.07 -117.614)"
                  fill="#fac696"
                  stroke="#885543"
                  stroke-miterlimit="10"
                  stroke-width="10"
                />
                <path
                  id="Path_332"
                  data-name="Path 332"
                  d="M329.22,344.592a28.432,28.432,0,1,1,56.863,0"
                  transform="translate(-67.933 -117.945)"
                  fill="#fac696"
                  stroke="#885543"
                  stroke-miterlimit="10"
                  stroke-width="10"
                />
                <circle
                  id="Ellipse_54"
                  data-name="Ellipse 54"
                  cx="14.724"
                  cy="14.724"
                  r="14.724"
                  transform="translate(85.569 257.287)"
                  fill="#e8a17b"
                  stroke="#e8a17b"
                  stroke-miterlimit="10"
                  stroke-width="10"
                />
                <circle
                  id="Ellipse_55"
                  data-name="Ellipse 55"
                  cx="14.724"
                  cy="14.724"
                  r="14.724"
                  transform="translate(322.343 257.287)"
                  fill="#e8a17b"
                  stroke="#e8a17b"
                  stroke-miterlimit="10"
                  stroke-width="10"
                />
                <path
                  id="Path_333"
                  data-name="Path 333"
                  d="M360.13,202.564a212.875,212.875,0,0,0-40.075-8.434h0a16.369,16.369,0,0,0-4.838,3.371c-12.3,12.3-3.1,43.349,21.158,81.07,16.046,25,38.7,52.912,66.039,80.263,38.7,38.7,78.618,68.039,109.662,82.553v-32.56a214.979,214.979,0,0,0-50.953-138.978c-25.553-23.726-51-43.11-73.578-56.576h-.081Z"
                  transform="translate(-79.846 -192.711)"
                  fill="#3a2718"
                />
                <path
                  id="Path_334"
                  data-name="Path 334"
                  d="M421.524,234.777c0,18.643-16.965,35.011-42.478,44.268a149.093,149.093,0,0,1-98.567-.726C256.127,269.014,240,253,240,234.777a34.576,34.576,0,0,1,7.918-21.384A214.874,214.874,0,0,1,362.838,194.6h0a212.872,212.872,0,0,1,40.043,8.5C414.589,211.909,421.524,222.907,421.524,234.777Z"
                  transform="translate(-122.597 -193.25)"
                  fill="#3a2718"
                />
                <path
                  id="Path_335"
                  data-name="Path 335"
                  d="M325.057,277.247a510.078,510.078,0,0,1-56.605,78.344c-34.947,40.317-71.635,71.748-101.212,88.7v-36c0-86.44,51.445-161.43,125.225-195.909A213.939,213.939,0,0,1,348.635,195C355.1,210.611,345.861,241.091,325.057,277.247Z"
                  transform="translate(-167.176 -192.178)"
                  fill="#3a2718"
                />
                <rect
                  id="Rectangle_241"
                  data-name="Rectangle 241"
                  width="6.999"
                  height="29.496"
                  rx="2.17"
                  transform="translate(218.519 277.881)"
                  fill="#f4b486"
                  stroke="#f4b486"
                  stroke-miterlimit="10"
                  stroke-width="10"
                />
                <path
                  id="Path_336"
                  data-name="Path 336"
                  d="M285.908,479.289l58.266,15.25-.062-36.25s-28.039,6.089-58.2-.141"
                  transform="translate(-96.564 -31.251)"
                  fill="#d69b73"
                />
              </g>
            </g>
            <g
              id="C_D_G_K_N_S_T_X_Z_Y"
              data-name="C,D,G,K,N,S,T,X,Z,Y"
              transform="translate(176.113 340.43)"
            >
              <g id="C_D_G_K_N_S_T_X_Z_Y-2" data-name="C,D,G,K,N,S,T,X,Z,Y">
                <path
                  id="Path_337"
                  data-name="Path 337"
                  d="M367.511,404.06a35.3,35.3,0,0,1-13.385,27.061,42.814,42.814,0,0,1-5.822,4.1,52.993,52.993,0,0,1-53.638-.387c-11.289-6.967-18.546-18.143-18.546-30.77Z"
                  transform="translate(-276.12 -404.06)"
                  fill="#961b1e"
                />
                <path
                  id="Path_338"
                  data-name="Path 338"
                  d="M366.471,404.19c0,9.466-20.126,17.127-44.945,17.127s-44.945-7.66-44.945-17.127"
                  transform="translate(-275.838 -403.98)"
                  fill="#fff"
                />
                <path
                  id="Path_339"
                  data-name="Path 339"
                  d="M341.258,424.893a52.993,52.993,0,0,1-53.638-.387c4.467-2.129,14.627-3.6,26.464-3.6C326.6,420.91,337.275,422.571,341.258,424.893Z"
                  transform="translate(-269.074 -393.736)"
                  fill="#fff"
                />
              </g>
            </g>
          </g>
        </svg>

        {/* <section className="links">
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
        </section> */}
      </div>
    );
  }
}

export default LandingPage;
