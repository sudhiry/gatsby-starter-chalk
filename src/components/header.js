import PropTypes from 'prop-types';
import React from 'react';
import About from '../assets/icons/about.svg';
import Twitter from '../assets/icons/twitter.svg';
import Facebook from '../assets/icons/facebook.svg';
import Linkedin from '../assets/icons/linkedin.svg';
import Github from '../assets/icons/github.svg';
import Stackoverflow from '../assets/icons/stackoverflow.svg';
import Dribbble from '../assets/icons/dribbble.svg';
import Flickr from '../assets/icons/flickr.svg';
import Email from '../assets/icons/email.svg';
import Bitcoin from '../assets/icons/bitcoin.svg';
import Ethereum from '../assets/icons/ethereum.svg';
import Gitlab from '../assets/icons/gitlab.svg';
import Youtube from '../assets/icons/youtube.svg';
import Twitch from '../assets/icons/twitter.svg';
import Discord from '../assets/icons/discord.svg';
import Tumblr from '../assets/icons/tumblr.svg';
import Bitbucket from '../assets/icons/bitbucket.svg';
import Docker from '../assets/icons/docker.svg';
import Instagram from '../assets/icons/instagram.svg';
import Keybase from '../assets/icons/keybase.svg';
import Medium from '../assets/icons/medium.svg';
import Spotify from '../assets/icons/spotify.svg';
import Steam from '../assets/icons/steam.svg';


const Header = ({ siteTitle, social }) => (
  <nav className="header-nav">
    <a href="/" className="header-logo" title="Test">{siteTitle}</a>
    <ul className="header-links">
      <li>
        <a href="/about" title="About me">
          <About />
        </a>
      </li>
      {social.twitter && <li>
        <a href={social.twitter} rel="noreferrer noopener" target="_blank" title="Twitter">
          <Twitter />
        </a>
      </li>}
      {social.facebook && <li>
        <a href={social.facebook} rel="noreferrer noopener" target="_blank" title="Facebook">
          <Facebook />
        </a>
      </li>}
      {social.linkedin && <li>
        <a href={social.linkedin} rel="noreferrer noopener" target="_blank" title="Linkedin">
          <Linkedin />
        </a>
      </li>}
      {social.github && <li>
        <a href={social.github} rel="noreferrer noopener" target="_blank" title="Github">
          <Github />
        </a>
      </li>}
      {social.stackoverflow && <li>
        <a href={social.stackoverflow} rel="noreferrer noopener" target="_blank" title="Stackoverflow">
          <Stackoverflow />
        </a>
      </li>}
      {social.dribbble && <li>
        <a href={social.dribbble} rel="noreferrer noopener" target="_blank" title="Dribbble">
          <Dribbble />
        </a>
      </li>}
      {social.flickr && <li>
        <a href={social.flickr} rel="noreferrer noopener" target="_blank" title="Flickr">
          <Flickr />
        </a>
      </li>}
      {social.email && <li>
        <a href={social.email} rel="noreferrer noopener" target="_blank" title="Email">
          <Email />
        </a>
      </li>}
      {social.bitcoin && <li>
        <a href={social.bitcoin} rel="noreferrer noopener" target="_blank" title="Bitcoin">
          <Bitcoin />
        </a>
      </li>}
      {social.ethereum && <li>
        <a href={social.ethereum} rel="noreferrer noopener" target="_blank" title="Ethereum">
          <Ethereum />
        </a>
      </li>}
      {social.gitlab && <li>
        <a href={social.gitlab} rel="noreferrer noopener" target="_blank" title="Gitlab">
          <Gitlab />
        </a>
      </li>}
      {social.youtube && <li>
        <a href={social.youtube} rel="noreferrer noopener" target="_blank" title="Youtube">
          <Youtube />
        </a>
      </li>}
      {social.twitch && <li>
        <a href={social.twitch} rel="noreferrer noopener" target="_blank" title="Twitch">
          <Twitch />
        </a>
      </li>}
      {social.discord && <li>
        <a href={social.discord} rel="noreferrer noopener" target="_blank" title="Discord">
          <Discord />
        </a>
      </li>}
      {social.tumblr && <li>
        <a href={social.tumblr} rel="noreferrer noopener" target="_blank" title="Tumblr">
          <Tumblr />
        </a>
      </li>}
      {social.bitbucket && <li>
        <a href={social.bitbucket} rel="noreferrer noopener" target="_blank" title="Bitbucket">
          <Bitbucket />
        </a>
      </li>}
      {social.docker && <li>
        <a href={social.docker} rel="noreferrer noopener" target="_blank" title="Docker">
          <Docker />
        </a>
      </li>}
      {social.instagram && <li>
        <a href={social.instagram} rel="noreferrer noopener" target="_blank" title="Instagram">
          <Instagram />
        </a>
      </li>}
      {social.keybase && <li>
        <a href={social.keybase} rel="noreferrer noopener" target="_blank" title="Keybase">
          <Keybase />
        </a>
      </li>}
      {social.medium && <li>
        <a href={social.medium} rel="noreferrer noopener" target="_blank" title="Medium">
          <Medium />
        </a>
      </li>}
      {social.spotify && <li>
        <a href={social.spotify} rel="noreferrer noopener" target="_blank" title="Spotify">
          <Spotify />
        </a>
      </li>}
      {social.steam && <li>
        <a href={social.steam} rel="noreferrer noopener" target="_blank" title="Steam">
          <Steam />
        </a>
      </li>}
    </ul>
  </nav>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
  social: PropTypes.object,
}

Header.defaultProps = {
  siteTitle: ``,
  social: {}
}

export default Header
