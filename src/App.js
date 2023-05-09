import React, { Component } from 'react';
import ParticlesBg from 'particles-bg';
import { FiInstagram, FiYoutube} from 'react-icons/fi';
import {FaTiktok} from 'react-icons/fa';
import {CgWebsite} from 'react-icons/cg';
import './App.css';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div >
      <div className='card'>
        <div className='card-body'>
          <div className='profile'>
            <div>
              <img className="card-avatar" src="/logo192.png" alt="avatar"/>
            </div>
          </div>
          <br/>
          <div className='card-title'>
            <h1>@bima_ryan23</h1>
            <span className='subtitle'>Programmer | Content Creator.</span><br/>
            <span className='subtitle'>Web & Developer Game</span>
          </div>
          <div>
            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCai-4PijNwR1vr_ZRqK9mVg">
							<div className="btn-action">
								<FiYoutube className='icon' />
								<span>Youtube</span>
								<span></span>
							</div>
						</a>
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/bima_ryan23/">
							<div className="btn-action">
								<FiInstagram className='icon' />
								<span>Instagram</span>
							</div>
						</a>
            <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@ryazel_">
							<div className="btn-action">
								<FaTiktok className='icon' />
								<span>Tiktok</span>
							</div>
						</a>
            <a target="_blank" rel="noreferrer" href="https://crazygamedev.netlify.app/">
							<div className="btn-action">
								<CgWebsite className='icon' />
								<span>My Website</span>
							</div>
						</a>
          </div>
        </div>
      </div>
      <ParticlesBg type="thick" bg={true} />
    </div>
  );
}

export default App;
