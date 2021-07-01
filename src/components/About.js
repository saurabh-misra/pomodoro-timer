import React from 'react';

export default function About(){
  return (
    <div class="container">
      <div className="row">
        <div className="col text-left">    
          <h1>About</h1>
          <hr className="bg-light"/>

          <p>A minimalistic and easy-to-use pomodoro timer web app that helps you focus on your work.</p>

          <p>No authentication is required for using this app. It uses your local browser storage for recording your pomodoro session history and settings.</p>

          <p>For receiving Notifications when a work session ends, you'll need to enable notifications from this app in your browser.</p>

          <br />

          <h2>👨‍💻 About the Developer</h2>
          <p>Hi👋! I'm <strong>Saurabh Misra</strong>. A full-stack software developer from Mumbai, India. I built this app as a side project for my own personal use as well as getting some hands-on experience with some new and awesome web technologies. Want to know what this app is made up of? <a href="https://github.com/saurabh-misra/pomodoro-timer#readme" target="_blank">Read it on Github</a>.</p>

          <p>For any feedback or for reporting issues or bugs, please feel free to let me know.<br />
            <a href="https://saurabhmisra.dev" target="_blank">Website</a><br />
            <a href="mailto:hello@saurabhmisra.dev">Email</a><br />
            <a href="https://twitter.com/saurabh__misra" target="_blank">Twitter</a><br />
            <a href="https://github.com/saurabh-misra" target="_blank">Github</a>
          </p>

          <h2><span style={{"color": "red"}}>❤</span> Spread the word</h2>
          <p>If you got some value out of using this app, it would mean the world to me if you would spread the word and share this app with your friends.</p>
            
          <p>Thank you so much and keep on rockin'!🤘</p>

          <br />

          <h2>Attributions</h2>
          <ul>
            <li>Icons from <a href="https://material.io/tools/icons" rel="nofollow">Google Material Icons</a>.</li>
            <li>Notification Sound(to-the-point.mp3) from <a href="https://notificationsounds.com/message-tones/to-the-point-568" rel="nofollow">https://notificationsounds.com/message-tones/to-the-point-568</a></li>
            <li>Clock icon in Notifications from <a href="https://www.iconfinder.com/icons/1055090/clock_time_timer_icon" rel="nofollow">https://www.iconfinder.com/icons/1055090/clock_time_timer_icon</a></li>
          </ul>

          <br />
        </div>
      </div>
    </div>
  );
}