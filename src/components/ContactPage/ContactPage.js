import React from "react";

import "./ContactPage.scss";
import { FaEnvelope, FaPhone } from "react-icons/fa";

function ContactPage() {
  return (
    <div className="contact-page">
      <section className="contact-info">
        <h1 className="title">Contact me</h1>

        <div className="email">
          <FaEnvelope className="icon" />
          <p>maciej.zarzeczny1@gmail.com</p>
        </div>
        <div className="phone">
          <FaPhone className="icon" />
          <p>+48 728 368 865</p>
        </div>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />

          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" required />

          <button className="submit button">Send</button>
        </form>
      </section>
      <svg
        id="contact-illustration"
        xmlns="http://www.w3.org/2000/svg"
        width="356.038"
        height="295.293"
        viewBox="0 0 356.038 295.293"
      >
        <g id="contact_illustration" transform="translate(0.004 1)">
          <circle
            id="Ellipse_24"
            data-name="Ellipse 24"
            cx="140.5"
            cy="140.5"
            r="140.5"
            transform="translate(75.034 -1)"
            fill="#f2f2f2"
          />
          <path
            id="Path_170"
            data-name="Path 170"
            d="M473.6,785.9c0,5.835-77.029,18.11-172.048,18.11S129.5,791.732,129.5,785.9s77.029-3.018,172.048-3.018S473.6,780.063,473.6,785.9Z"
            transform="translate(-129.504 -509.715)"
            fill="#3f3d56"
          />
          <path
            id="Path_171"
            data-name="Path 171"
            d="M473.6,785.9c0,5.835-77.029,18.11-172.048,18.11S129.5,791.732,129.5,785.9s77.029-3.018,172.048-3.018S473.6,780.063,473.6,785.9Z"
            transform="translate(-129.504 -509.715)"
            opacity="0.1"
          />
          <ellipse
            id="Ellipse_25"
            data-name="Ellipse 25"
            cx="172"
            cy="10.5"
            rx="172"
            ry="10.5"
            transform="translate(0.034 266)"
            fill="#3f3d56"
          />
          <g id="leaf">
            <g id="left-leafs">
              <path
                id="Path_172"
                data-name="Path 172"
                d="M851.689,659.413c0,23.847,14.96,43.143,33.448,43.143"
                transform="translate(-579.212 -433.255)"
                fill="#3f3d56"
              />
              <path
                id="Path_174"
                data-name="Path 174"
                d="M883.809,665.142c0,22.652,9.54,40.982,21.329,40.982"
                transform="translate(-599.213 -436.823)"
                fill="#97dffc"
              />
            </g>
            <g id="right-leafs">
              <path
                id="Path_173"
                data-name="Path 173"
                d="M940.34,701.756c0-24.115,16.695-43.628,37.326-43.628"
                transform="translate(-634.416 -432.455)"
                fill="#97dffc"
              />
              <path
                id="Path_175"
                data-name="Path 175"
                d="M940.34,681.755c0-30.813,19.3-55.747,43.143-55.747"
                transform="translate(-634.416 -412.454)"
                fill="#3f3d56"
              />
            </g>
            <path
              id="Path_176"
              data-name="Path 176"
              d="M921.69,770.337s4.743-.146,6.173-1.164,7.3-2.234,7.651-.6,7.129,8.12,1.773,8.163-12.444-.834-13.87-1.7S921.69,770.337,921.69,770.337Z"
              transform="translate(-622.802 -500.732)"
              fill="#a8a8a8"
            />
          </g>
          <path
            id="Path_177"
            data-name="Path 177"
            d="M937.384,780.387c-5.355.043-12.443-.834-13.87-1.7-1.087-.662-1.52-3.037-1.664-4.133l-.158.006s.3,3.826,1.727,4.695,8.515,1.747,13.87,1.7c1.546-.012,2.08-.562,2.051-1.377C939.124,780.07,938.534,780.377,937.384,780.387Z"
            transform="translate(-622.802 -504.952)"
            opacity="0.2"
          />
          <path
            id="Path_178"
            data-name="Path 178"
            d="M702.135,283.161s4.827,10.136,2.9,14.962,7.24,10.136,7.24,10.136l12.066-6.757v-8.688l-1.931-3.861s-7.722-4.344-6.757-11.1S702.135,283.161,702.135,283.161Z"
            transform="translate(-486.085 -194.377)"
            fill="#ffb9b9"
          />
          <path
            id="Path_179"
            data-name="Path 179"
            d="M702.135,283.161s4.827,10.136,2.9,14.962,7.24,10.136,7.24,10.136l12.066-6.757v-8.688l-1.931-3.861s-7.722-4.344-6.757-11.1S702.135,283.161,702.135,283.161Z"
            transform="translate(-486.085 -194.377)"
            opacity="0.1"
          />
          <path
            id="Path_180"
            data-name="Path 180"
            d="M654.067,407.888s-.965,10.618-.965,12.066a41.368,41.368,0,0,1-1.448,6.274s-5.309,24.615-8.688,27.029-5.309,17.375,0,16.41,6.757-14,6.757-14l10.989-20.75,1.56-25.1Z"
            transform="translate(-447.187 -276.63)"
            fill="#ffb9b9"
          />
          <path
            id="Path_181"
            data-name="Path 181"
            d="M678.859,351.6H675s-3.861,23.167,0,24.133,11.1.965,11.1.965Z"
            transform="translate(-468.117 -241.581)"
            fill="#575a89"
          />
          <path
            id="Path_182"
            data-name="Path 182"
            d="M616.129,683.7l1.931,9.17,3.861-2.9-1.931-8.205-3.861,1.448Z"
            transform="translate(-383.668 -424.538)"
            fill="#ffb9b9"
          />
          <path
            id="Path_183"
            data-name="Path 183"
            d="M694.288,487.2l-2.9,1.931s-1.448,16.893,1.931,29.924,5.792,28.476,5.792,28.476,5.792,38.612,7.24,39.577,10.618,1.448,11.1-.483-3.379-38.13-3.379-38.13-2.9-30.407-.483-34.268c0,0,7.722,33.3,10.136,36.682,0,0,3.379,36.681,5.309,37.647s11.1,1.448,11.584-.483-2.9-43.439-4.344-46.817-1.931-53.574-5.309-53.092S694.288,487.2,694.288,487.2Z"
            transform="translate(-479.203 -326.018)"
            fill="#2f2e41"
          />
          <circle
            id="Ellipse_26"
            data-name="Ellipse 26"
            cx="11.101"
            cy="11.101"
            r="11.101"
            transform="translate(209.776 70.926)"
            fill="#ffb9b9"
          />
          <path
            id="Path_184"
            data-name="Path 184"
            d="M696.072,320.343,693.659,316s-2.9-3.861-4.344-2.9-1.448,4.344-1.448,4.344-11.1,3.861-10.136,9.17,7.24,14.48,7.24,14.48.965,7.722,0,9.653-2.9,3.379-1.448,5.309,1.931,2.413,1.448,4.827-1.448,3.379-.483,4.344-.483,11.1-1.448,11.584,30.89,5.309,33.3,3.861,9.17-1.448,8.688-2.9a98.863,98.863,0,0,1-2.413-11.584c0-1.448,0-7.722-.483-8.205s.483-7.722.483-7.722L720.2,330l7.722-12.066s-1.931-6.757-11.1-7.722-11.707-3.379-11.707-3.379-.842,4.344-2.772,5.309S696.072,320.343,696.072,320.343Z"
            transform="translate(-470.851 -213.701)"
            fill="#575a89"
          />
          <path
            id="Path_185"
            data-name="Path 185"
            d="M798.759,377.187l2.9,21.719-6.274,31.372s-2.413,17.858-7.24,17.375,0-19.306,0-19.306L792,398.906s-6.274-14.962-4.827-16.893S798.759,377.187,798.759,377.187Z"
            transform="translate(-538.305 -257.513)"
            fill="#ffb9b9"
          />
          <path
            id="Path_186"
            data-name="Path 186"
            d="M729.2,754.82s-6.274-3.379-7.722-2.9-2.9,7.24-2.9,7.24-11.1,8.205-3.861,10.136,10.136-2.413,10.136-2.413,7.24-3.861,7.24-4.827-.965-7.24-.965-7.24Z"
            transform="translate(-492.394 -490.833)"
            fill="#2f2e41"
          />
          <path
            id="Path_187"
            data-name="Path 187"
            d="M792.831,753.281s-2.9,15.928-.965,16.893,10.136,2.413,11.1,0,.965-8.205.483-10.136-1.931-6.757-1.931-6.757Z"
            transform="translate(-541.547 -491.707)"
            fill="#2f2e41"
          />
          <path
            id="Path_188"
            data-name="Path 188"
            d="M690.618,230.689a2.575,2.575,0,0,0-1.33-.04,3.98,3.98,0,0,0-1.34,1.094c-1.107,1.051-2.688,1.38-4.131,1.878s-2.961,1.379-3.322,2.862a15.585,15.585,0,0,0-.157,1.8c-.215,1.749-1.549,3.325-1.311,5.071.156,1.141.969,2.109,1.136,3.248.186,1.27-.456,2.592-.1,3.825.351,1.208,1.538,1.945,2.631,2.567q.7-4.465,1.69-8.879a3.208,3.208,0,0,1,.6-1.467c.97-1.1,2.874-.473,4.133-1.224.478-.285.833-.756,1.336-1,1.455-.7,3.029.845,4.641.86.712.006,1.492-.276,2.093.1a1.913,1.913,0,0,1,.612.753c.575,1.079.891,2.29,1.561,3.312a3.074,3.074,0,0,0,3.058,1.569c-.182-.921.54-1.75.829-2.644.5-1.537-.315-3.206-.12-4.81.184-1.506,1.165-3.274.089-4.343a3.051,3.051,0,0,0-1.273-.639C698.138,233.382,694.619,231.356,690.618,230.689Z"
            transform="translate(-471.677 -166.221)"
            fill="#2f2e41"
          />
          <path
            id="Path_189"
            data-name="Path 189"
            d="M790.112,331.134l4.826,1.931s6.275,20.271,4.827,20.271-14.479,3.379-14.479,1.931S786.251,331.134,790.112,331.134Z"
            transform="translate(-537.862 -228.836)"
            fill="#575a89"
          />
          <g id="third-chat">
            <path
              id="Path_191"
              data-name="Path 191"
              d="M219.41,512H70v49.049h5.659v12.828l12.828-12.828H219.41Z"
              transform="translate(-43.593 -318.823)"
              fill="#3f3d56"
            />
            <g id="content">
              <rect
                id="Rectangle_118"
                data-name="Rectangle 118"
                width="114.699"
                height="4.528"
                transform="translate(43.763 201.289)"
                fill="#97dffc"
                opacity="0.3"
              />
              <rect
                id="Rectangle_119"
                data-name="Rectangle 119"
                width="57.349"
                height="4.528"
                transform="translate(43.763 209.967)"
                fill="#97dffc"
                opacity="0.3"
              />
              <circle
                id="Ellipse_29"
                data-name="Ellipse 29"
                cx="6.414"
                cy="6.414"
                r="6.414"
                transform="translate(43.763 221.286)"
                fill="#97dffc"
                opacity="0.3"
              />
            </g>
          </g>
          <g id="second-chat">
            <path
              id="Path_192"
              data-name="Path 192"
              d="M140,338H289.41v49.049h-5.659v12.828l-12.828-12.828H140Z"
              transform="translate(-87.182 -210.473)"
              fill="#3f3d56"
            />
            <g id="content-2" data-name="content">
              <rect
                id="Rectangle_116"
                data-name="Rectangle 116"
                width="114.699"
                height="4.528"
                transform="translate(66.401 134.884)"
                fill="#97dffc"
              />
              <rect
                id="Rectangle_117"
                data-name="Rectangle 117"
                width="57.349"
                height="4.528"
                transform="translate(66.401 143.562)"
                fill="#97dffc"
              />
              <circle
                id="Ellipse_28"
                data-name="Ellipse 28"
                cx="6.414"
                cy="6.414"
                r="6.414"
                transform="translate(66.401 154.881)"
                fill="#97dffc"
              />
            </g>
          </g>
          <g id="first-chat">
            <path
              id="Path_190"
              data-name="Path 190"
              d="M219.41,162H70v49.049h5.659v12.828l12.828-12.828H219.41Z"
              transform="translate(-43.593 -100.878)"
              fill="#3f3d56"
            />
            <g id="content-3" data-name="content">
              <rect
                id="Rectangle_114"
                data-name="Rectangle 114"
                width="114.699"
                height="4.528"
                transform="translate(43.763 69.234)"
                fill="#97dffc"
                opacity="0.3"
              />
              <rect
                id="Rectangle_115"
                data-name="Rectangle 115"
                width="57.349"
                height="4.528"
                transform="translate(43.763 77.912)"
                fill="#97dffc"
                opacity="0.3"
              />
              <circle
                id="Ellipse_27"
                data-name="Ellipse 27"
                cx="6.414"
                cy="6.414"
                r="6.414"
                transform="translate(43.763 89.231)"
                fill="#97dffc"
                opacity="0.3"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

export default ContactPage;
