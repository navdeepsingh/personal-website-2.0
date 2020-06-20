import React from "react"
import Layout from "../components/layout"

const Uses = () => {
    return (        
        <Layout>
            <section>
                <div className="introduction">
                    <h1>Uses</h1>
                    <p>Perplexed to know about my gears I use on daily basis?<br />
                    Will try to keep this information updated.</p>
                </div>
                <div className="uses">
                    <div>
                        <h2>Titles</h2>
                        <ul>
                            <li>💻 Full Stack Developer</li>
                            <li>🖥️ Front End Developer</li>
                            <li>🕸 Web Developer</li>                        
                        </ul>
                    </div>
                    <div>
                        <h2>Hardware</h2>
                        <ul>
                            <li>
                            💻 Macbook Pro 13"
                                <p>I've used windows too for professional use but settled now with Mac&#60;3</p>
                            </li>
                            <li>mStand for Mac by <a href="https://www.raindesigninc.com/mstand.html" rel="noreferrer nopener" target="_blank">raindesign</a></li>
                            <li>🖥️ HP 24es LED Monitor</li>
                            <li>📷 GoPro Black 7</li>
                            <li>📱Xiomi Mi A2 Phone</li>
                        </ul>
                    </div> 
                    <div>
                        <h2>Dev Environment</h2>
                        <ul>
                            <li>✏️ VS Code - Insiders</li>
                            <li>🎨 Cobalt Theme</li>
                            <li>⌨️ iTerm 2</li>
                            <li>🕹️ Oh My Zsh</li>
                            <li>📦 npm</li>
                        </ul>
                    </div> 
                    <div>
                        <h2>Browsers</h2>
                        <ul>
                            <li>🤘 Google Chrome</li>
                            <li>🔥 Firefox Developer Edition</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Softwares</h2>
                        <ul>
                            <li>📪 Postman</li>
                            <li>🐘 Evernote</li>
                            <li>🖼️ Photoshop</li>
                            <li>👓 Spectacle <p>To resize &amp; rearrange my open windows easily</p></li>
                            <li>☁️ CloudApp <p>For screenshots and screencasting</p></li>
                            <li>🌚 f.lux <p>Caring for my eyes during night work.=</p></li>
                        </ul>
                    </div> 
                    <div>
                        <h2>Fixation</h2>
                        <ul>
                            <li>💤 Sleep</li>
                            <li>🏃 Running &amp; Cycling <p>Follow me on <a href="https://www.strava.com/athletes/10591878" target="_blank">Strava</a></p></li>
                            <li>👨‍👦‍👦 Playing with my duo kidz.</li>
                            <li>🥛 Yogurt</li>
                        </ul>
                    </div>
                </div>                
            </section>
        </Layout> 
    )
}

export default Uses;
