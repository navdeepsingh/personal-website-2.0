import React from "react"
import Layout from "../components/layout"

const Home = () => {
    return (        
        <Layout>
            <section>
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
                        <li><span>Wordpress</span>,</li>
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
                </div>
            </section>
        </Layout> 
    )
}

export default Home;
