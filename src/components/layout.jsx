import React from "react"
import Header from "./header"
import ProfilePicChanger from "./profilePicChanger"
import "../sass/styles.scss";

import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
deckDeckGoHighlightElement();


export default class Layout extends React.Component {

  render() {
    return (
      <>
        <main>
          <div className="body">{this.props.children}</div>
        </main>
        <Header />
        <aside>
          <ProfilePicChanger />
          <a href="mailto:navdeep.er@gmail.com" className="contact">
            navdeep.er@gmail.com
        </a>
        </aside>
      </>
    )
  }

}
