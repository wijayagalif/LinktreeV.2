import ParticlesBg from "particles-bg";
import './App.css';
import { BsInstagram } from "react-icons/bs";
import { FaTiktok, FaGithub, FaXTwitter, FaSpotify } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";

function App() {
  return (
    <div>
      <div className="card">
        <div className="card_body">
          <div className="profile text-center">
            <img src="/logo.png" className="avatar" alt="Profile Avatar"/>
            <div className="bg_content rd_12 p_8">
              <h1>@wijanay._</h1>
              <p>Hanya Manusia Biasa :)</p>
              <p>Penyuka Praktik Kegiatan Ada Unsur Komputer</p>
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
              <span>Instagram (wijanay._1)</span>
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
              <span>Youtube (Inactive)</span>
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
            <div className="btn_action bg_content">
              <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/playlist/28e8hd8exI15lWrBbt1faA?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
              <FaSpotify />
              <span>Spotify</span>
            </div>
          </div>
        </div>
      </div>
      <ParticlesBg type="thick" bg={true}/>
    </div>
  );
}

export default App;
