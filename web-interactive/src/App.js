import ParticlesBg from "particles-bg";
import './App.css';
import { BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSpotify } from "react-icons/fa";

function App() {
  return (
    <div >
      <div className="card">
        <div className="card_body">
          <div className="profile text-center">
            <img src="/logo.png" className="avatar"/>
            <div className="bg_content rd_12 p_8">
            <h1>@wijanay._</h1>
            <p>Hanya Manusia Biasa :)</p>
            <p>Penyuka Praktik Kegiatan Ada Unsur Komputer</p>
            <p></p>
            </div>
          </div>
          <div className="mt-16">
            <a className="btn_action bg_content" href="https://www.instagram.com/wijayagalif/">
              <BsInstagram />
              <span>Instagram (wijayagalif)</span>
            </a>
          </div>
          <div className="mt-16">
            <a className="btn_action bg_content" href="https://www.instagram.com/imissher672/">
              <BsInstagram />
              <span>Instagram (imissher672)</span>
            </a>
          </div>
          <div className="mt-16">
            <a className="btn_action bg_content" href="https://www.tiktok.com/@wijayagalif?_t=8jDBE41U6Hh&_r=1">
              <FaTiktok />
              <span>TikTok</span>
            </a>
          </div>
          <div className="mt-16">
            <a className="btn_action bg_content" href="https://www.youtube.com/@hekcodbro9113">
              <FiYoutube />
              <span>Youtube (lupa password🗿)</span>
            </a>
          </div>
          <div className="mt-16">
            <a className="btn_action bg_content" href="https://github.com/wijayagalif">
              <FaGithub />
              <span>Github</span>
            </a>
          </div>
          <div className="mt-16">
            <a className="btn_action bg_content" href="https://x.com/Wijanay?t=QEweWNewOnQ_W0eRNVipdw&s=08">
              <FaXTwitter />
              <span>x (Twitter)</span>
            </a>
          </div>
          <div className="mt-16">
            <a className="btn_action bg_content" href="https://open.spotify.com/user/31sxosiriv2j7rii7dscp5rtiweu?si=K-JS-ElFQWaMIjCMUj7WUA">
              <FaSpotify />
              <span>Spotify</span>
            </a>
          </div>
        </div>
      </div>
      <ParticlesBg type="thick" bg={true}/>
    </div>
  );
}

export default App;
