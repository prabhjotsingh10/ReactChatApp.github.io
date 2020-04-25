import React from "react";
import ReactDOM from "react-dom";
import Greeting from "./js/components/Greeting";
import pete from "./img/img.jpg";
import jess from "./img/Jess.jpg"
import './css/index.css';

//Array for users
const users = ["Pete","Jess","Kevin","Neil"]
//Array for personal messages
const messages = ["Heyy","Movie Night Tonight?","Laundry day today?","Got work today fam?"];
//Array for group messages
const grp_msgs = ["What's Up Everybody?","Wanna catch a movie tonight?","Our assignment is due fellas! Let's get to it!"];


let chatDisplay = (event) =>{
	// document.querySelector("#details").addEventListener("click", ()=>{
		document.getElementById("stay_cntd").innerHTML = `<h3 class="pete_msg"> ${messages[0]} </h3>
		<p class="strt_cnvo"> Start a conversation with pete! </p>
		<div class="msg_div">
		<button class="snd_msg"> <i class="far fa-grin"></i> </button>
		<textarea class="msgbox" placeholder ="Say Hi..."></textarea>
		<button class="snd_msg"> <i class="fas fa-paper-plane"></i> </button>
		</div>`
	  
	}

let chatDisplay1 = (event) =>{

  document.getElementById("stay_cntd").innerHTML = `<h3 class="jess_msg"> ${messages[1]} </h3>
  <div class="msg_div">
  <button class="snd_msg"> <i class="far fa-grin"></i> </button>
  <textarea class="msgbox" placeholder ="Say Hi..."></textarea>
  <button class="snd_msg"> <i class="fas fa-paper-plane"></i> </button>
  </div>`

} 

let chatDisplay2 = (event) =>{

  document.getElementById("stay_cntd").innerHTML = `<h3 class="pete_msg"> ${messages[2]} </h3>
  <div class="msg_div">
  <button class="snd_msg"> <i class="far fa-grin"></i> </button>
  <textarea class="msgbox" placeholder ="Say Hi..."></textarea>
  <button class="snd_msg"> <i class="fas fa-paper-plane"></i> </button>
  </div>`

} 
let chatDisplay3 = (event) =>{

  document.getElementById("stay_cntd").innerHTML = `<h3 class="jess_msg"> ${messages[3]} Or <br> ${messages[2]} </h3>
  <div class="msg_div">
  <button class="snd_msg"> <i class="far fa-grin"></i> </button>
  <textarea class="msgbox" placeholder ="Say Hi..."></textarea>
  <button class="snd_msg"> <i class="fas fa-paper-plane"></i> </button>
  </div>`

} 

let grpChat = (event) =>{
  document.getElementById("stay_cntd").innerHTML = `<h3 class="pete_msg"><span class="usr_nme">${users[0]}</span>: ${grp_msgs[0]} </h3>
  <p class="strt_cnvo"> You, Pete, Nick and Jess </p>
  <div class="msg_div">
  <button class="snd_msg"> <i class="far fa-grin"></i> </button>
  <textarea class="msgbox" placeholder ="Say Hi..."></textarea>
  <button class="snd_msg"> <i class="fas fa-paper-plane"></i> </button>
  </div>`

}

let grpChat1 = (event) =>{
  document.getElementById("stay_cntd").innerHTML = `<h3 class="jess_msg"> ${grp_msgs[1]} </h3>
  <p class="strt_cnvo"> You, Kevin, Nick and Neil </p>
  <div class="msg_div">
  <button class="snd_msg"> <i class="far fa-grin"></i> </button>
  <textarea class="msgbox" placeholder ="Say Hi..."></textarea>
  <button class="snd_msg"> <i class="fas fa-paper-plane"></i> </button>
  </div>`

}

let grpChat2 = (event) =>{
  document.getElementById("stay_cntd").innerHTML = `<h3 class="jess_msg"> ${grp_msgs[2]} </h3>
  <p class="strt_cnvo"> You, Kevin, Nick and Neil </p>
  <div class="msg_div">
  <button class="snd_msg"> <i class="far fa-grin"></i> </button>
  <textarea class="msgbox" placeholder ="Say Hi..."></textarea>
  <button class="snd_msg"> <i class="fas fa-paper-plane"></i> </button>
  </div>`

}

//Contacts Container
const Contact = () => {
  
    return (
      <div className="contacts">
        <div>
          <ul>
            <li className="logo_and_usrnme">
              <div className="chatmate">
                <h3 className="logo">ChatMate</h3> <h4 className="username">Prabhjot Singh</h4> <a href="#" className="sgn_out">Sign Out <i className="fas fa-sign-out-alt"></i></a>
              </div>
            </li>
            <li>
              <div className="user_profile">
                <h3>Direct Messages <i className="fas fa-sort-down"></i></h3>
              </div>
            </li>
            <li className="dm" onClick = {chatDisplay}>
              <div className="cntc_1" >
                <img src={pete} alt="Pete" width="55em" height="55em" className="img1" />
                <div className="details" id="details">
                  <h3>{users[0]}</h3>
                  <p className="pete">{messages[0]}</p>
                </div>
              </div>
              <hr />
            </li>
            <li className="dm" onClick={chatDisplay1}>
              <div className="cntc_1" >
			         <img src={jess} alt="Pete" width="55em" height="55em" className="img1" />
                <div className="details" id="details1">
                    <h3>{users[1]}</h3>
                  <p>{messages[1]}</p>
                </div>
              </div>
              <hr />
            </li>
  
            <li className="dm" onClick={chatDisplay2}>
              <div className="cntc_1" >
			        <img src={pete} alt="Pete" width="55em" height="55em" className="img1" />
                <div className="details" id="details2">
                  <h3>{users[2]}</h3>
                  <p>{messages[2]}</p>
                </div>
              </div>
              <hr />
            </li>
  
            <li className="dm" onClick={chatDisplay3}>
              <div className="cntc_1" >
			          <img src={pete} alt="Pete" width="55em" height="55em" className="img1" />
                <div className="details" id="details3">
                  <h3>{users[3]}</h3>
                  <p>{messages[3]}</p>
                </div>
              </div>
              <hr />
            </li>
          </ul>
  
          <div className="user_profile" id="grp_cnvo">
            <h3>Group Conversations <i className="fas fa-sort-down"></i></h3>
          </div>
  
          <ul className="grp_chat">
            <li className="dm" onClick={grpChat}>
              <div className="cntc_1">
			            <img src={pete} alt="Pete" width="55em" height="55em" className="img1" />
                <div className="details">
                  <h3>Coders United</h3>
                  <p>{users[0]}: {grp_msgs[0]} </p>
                </div>
              </div>
              <hr />
            </li>
  
            <li className="dm" onClick={grpChat1}>
              <div className="cntc_1">
			          <img src={pete} alt="Pete" width="55em" height="55em" className="img1" />
                <div className="details">
                  <h3>F.R.I.E.N.D.S</h3>
                  <p>Me: {grp_msgs[1]} </p>
                </div>
              </div>
              <hr />
            </li>
  
            <li className="dm" onClick={grpChat2}>
              <div className="cntc_1">
			           <img src={pete} alt="Pete" width="55em" height="55em" className="img1" />
                <div className="details">
                  <h3>Humber Media Pros</h3>
                    <p>Me: {grp_msgs[2]}</p>
                </div>
              </div>
              <hr />
            </li>
          </ul>
  
        </div>
      </div>
    )
  }
  
  //Stay Connected Message and welcome greeting
  const StayConnected = () => {
    return (
      <div className="stay_connected" id="stay_cntd"> 
        <div className="sty_cnntd_dtls"> 
          <h1 className="sty_cntd">Stay Connected for more messages</h1>
          <p>The app connects to your phone to sync messages. To reduce data usage, connect your phone to WiFi.</p>
          <p>Click on a chat to get started.</p>
        </div>
      </div>
    )
  }
  
  const App = () => {
  
    return (
      <div className="app">
        <Contact />
        <StayConnected />
      </div>
    )
  
  }
  
  ReactDOM.render(<App />, document.getElementById('root'));