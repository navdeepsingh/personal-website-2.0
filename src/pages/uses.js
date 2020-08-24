import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

const Uses = () => {
  return (
    <Layout>
      <Helmet>
        <title>Navdeep Singh - Uses</title>
        <meta
          name="description"
          content="Information about gears I use regularly."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <section className="uses">
        <div className="uses-introduction">
          <h1>Uses</h1>
          <p>
            Perplexed to know about my gears I use on daily basis?
            <br />
            Will try to keep this information updated.
          </p>
        </div>
        <div className="uses-listing">
          <div>
            <h2>Titles</h2>
            <ul>
              <li>
                <span role="img" aria-label="Full Stack Developer">
                  💻
                </span>{" "}
                Full Stack Developer
              </li>
              <li>
                <span role="img" aria-label="Front End Developer">
                  🖥️
                </span>{" "}
                Front End Developer
              </li>
              <li>
                <span role="img" aria-label="Web Developer">
                  🕸
                </span>{" "}
                Web Developer
              </li>
            </ul>
          </div>
          <div>
            <h2>Hardware</h2>
            <ul>
              <li>
                <span role="img" aria-label="Macbook Pro 13">
                  💻
                </span>
                <div>
                  Macbook Pro 13"
                  <p>
                    I've used windows too for professional use but settled now
                    with Mac&#60;3
                  </p>
                </div>
              </li>
              <li>
                <span role="img" aria-label="mStand for Mac by raindesigninc">
                  💧
                </span>{" "}
                <span>
                  mStand for Mac by{" "}
                  <a
                    href="https://www.raindesigninc.com/mstand.html"
                    rel="noreferrer nopener"
                    target="_blank"
                  >
                    raindesign
                  </a>
                </span>
              </li>
              <li>
                <span role="img" aria-label="HP 24es LED Monitor">
                  🖥️
                </span>{" "}
                HP 24es LED Monitor
              </li>
              <li>
                <span role="img" aria-label="GoPro Black 7">
                  📷
                </span>{" "}
                GoPro Black 7
              </li>
              <li>
                <span role="img" aria-label="Xiomi Mi A2 Phone">
                  📱
                </span>{" "}
                Xiomi Mi A2 Phone
              </li>
            </ul>
          </div>
          <div>
            <h2>Dev Environment</h2>
            <ul>
              <li>
                <span role="img" aria-label="VS Code - Insiders">
                  ✏️
                </span>{" "}
                VS Code - Insiders
              </li>
              <li>
                <span role="img" aria-label="Cobalt Theme">
                  🎨
                </span>{" "}
                Cobalt Theme
              </li>
              <li>
                <span role="img" aria-label="iTerm 2">
                  ⌨️
                </span>{" "}
                iTerm 2
              </li>
              <li>
                <span role="img" aria-label="Oh My Zsh">
                  🕹️
                </span>{" "}
                Oh My Zsh
              </li>
              <li>
                <span role="img" aria-label="npm">
                  📦
                </span>{" "}
                npm
              </li>
            </ul>
          </div>
          <div>
            <h2>Browsers</h2>
            <ul>
              <li>
                <span role="img" aria-label="Google Chrome">
                  🤘
                </span>{" "}
                Google Chrome
              </li>
              <li>
                <span role="img" aria-label="Firefox Developer Edition">
                  🔥
                </span>{" "}
                Firefox Developer Edition
              </li>
            </ul>
          </div>
          <div>
            <h2>Softwares</h2>
            <ul>
              <li>
                <span role="img" aria-label="Postman">
                  📪
                </span>{" "}
                Postman
              </li>
              <li>
                <span role="img" aria-label="Evernote">
                  🐘
                </span>{" "}
                Evernote
              </li>
              <li>
                <span role="img" aria-label="Photoshop">
                  🖼️
                </span>{" "}
                Photoshop
              </li>
              <li>
                <span role="img" aria-label="Spectacle">
                  👓
                </span>{" "}
                <div>
                  Spectacle{" "}
                  <p>To resize &amp; rearrange my open windows easily</p>
                </div>
              </li>
              <li>
                <span role="img" aria-label="CloudApp">
                  ☁️
                </span>{" "}
                <div>
                  CloudApp <p>For screenshots and screencasting</p>
                </div>
              </li>
              <li>
                <span role="img" aria-label="f.lux">
                  🌚
                </span>{" "}
                <div>
                  f.lux <p>Caring for my eyes during night work</p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h2>Fixation</h2>
            <ul>
              <li>
                <span role="img" aria-label="Sleep">
                  💤
                </span>{" "}
                Sleep
              </li>
              <li>
                <span role="img" aria-label="Running &amp; Cycling">
                  🏃
                </span>{" "}
                <div>
                  Running &amp; Cycling{" "}
                  <p>
                    Follow me on{" "}
                    <a
                      href="https://www.strava.com/athletes/10591878"
                      target="_blank"
                      rel="noreferrer"
                      title="Open Strava in new window"
                    >
                      Strava
                    </a>
                  </p>
                </div>
              </li>
              <li>
                <span role="img" aria-label="Playing with my duo kidz">
                  👨‍👦‍👦
                </span>{" "}
                Playing with my duo kidz
              </li>
              <li>
                <span role="img" aria-label="Yogurt">
                  🥛
                </span>{" "}
                Yogurt
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Uses
