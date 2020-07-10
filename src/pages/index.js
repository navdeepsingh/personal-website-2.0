import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'

const Home = () => {    
    return (        
        <Layout>
            <Helmet>
                <title>Navdeep Singh - Full Stack Developer</title>
                <meta name="description" content="Welcome to my personal website." />
                <meta property="og:type" content="website" />
            </Helmet> 
            <section className="home">
                <div className="introduction">
                    <h1>Navdeep Singh</h1>
                    <p>I’m a full stack developer and a self-taught front end developer living in Amritsar, India. 
                        I am passionate about modern technologies, performance, accessibility and writing things down.</p>
                </div>
                <div>
                    <p>
                        My skillset and interests includes:
                    </p>
                    <ul className="skills">
                        <li><span>HTML5</span>,</li>
                        <li><span>CSS3</span>,</li>
                        <li><span>SASS</span>,</li>
                        <li><span>JavaScript</span>,</li>
                        <li><span>React</span>,</li>
                        <li><span>MongoDB</span>,</li>
                        <li><span>Mobile &amp; Responsive Design</span>,</li>
                        <li><span>Node.js</span>,</li>
                        <li><span>PHP</span>,</li>
                        <li><span>MySQL</span>,</li>
                        <li><span>Express</span>,</li>
                        <li><span>WordPress</span>,</li>
                        <li><span>Laravel</span>,</li>
                        <li><span>Gulp</span>,</li>
                        <li><span>jQuery</span>,</li>
                        <li><span>Boostrap</span>,</li>
                        <li><span>Running</span>,</li>
                        <li><span>Cycling</span>,</li>
                        <li><span>...</span></li>
                    </ul>
                </div>
                <div>
                    <p>Interested in relocating me abroad?<br />
                    Feel free to contact me!</p>
                    <button 
                        title=""                         
                        className="glow-on-hover"
                        onClick={e => {
                            e.preventDefault();
                            trackCustomEvent({
                                // string - required - The object that was interacted with (e.g.video)
                                category: "Resume Link",
                                // string - required - Type of interaction (e.g. 'play')
                                action: "Click",
                                // string - optional - Useful for categorizing events (e.g. 'Spring Campaign')
                                label: "Resume Click Tracking",
                                // number - optional - Numeric value associated with the event. (e.g. A product ID)
                                value: 43
                              })
                            window.open('https://drive.google.com/file/d/1HIIKPcry61fri8OjUPotTgVqAX_AJ_R-/view?usp=sharing')  
                        }}
                    >
                        View my resume
                    </button>

                </div>
            </section>
        </Layout> 
    )
}

export default Home;
