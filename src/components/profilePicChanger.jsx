import React, { useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useCounterContext } from "../context/CounterContext"

const ProfilePicChanger = () => {
  const { count, increment } = useCounterContext()
  const profilePicsRef = useRef(null)

  const data = useStaticQuery(graphql`
    query {
      pic1: file(relativePath: { eq: "pic1.jpg" }) {
        childImageSharp {
          fixed(width: 300, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      pic2: file(relativePath: { eq: "pic2.jpg" }) {
        childImageSharp {
          fixed(width: 300, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      pic3: file(relativePath: { eq: "pic3.jpg" }) {
        childImageSharp {
          fixed(width: 300, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      pic4: file(relativePath: { eq: "pic4.jpg" }) {
        childImageSharp {
          fixed(width: 300, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      pic5: file(relativePath: { eq: "pic5.jpg" }) {
        childImageSharp {
          fixed(width: 300, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      camera: file(relativePath: { eq: "camera.png" }) {
        childImageSharp {
          fixed(width: 15, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div className="display-profile">
      <div className="profile-pics" ref={profilePicsRef}>
        <Img
          fixed={data.pic1.childImageSharp.fixed}
          alt="Profile Pic"
          className={count === 0 && "active"}
        />
        <Img
          fixed={data.pic2.childImageSharp.fixed}
          alt="Profile Pic"
          className={count === 1 && "active"}
        />
        <Img
          fixed={data.pic3.childImageSharp.fixed}
          alt="Profile Pic"
          className={count === 2 && "active"}
        />
        <Img
          fixed={data.pic4.childImageSharp.fixed}
          alt="Profile Pic"
          className={count === 3 && "active"}
        />
        <Img
          fixed={data.pic5.childImageSharp.fixed}
          alt="Profile Pic"
          className={count === 4 && "active"}
        />
      </div>

      <button
        aria-label="Keep clicking here to change profile pictures"
        title="Keep clicking here to change profile pictures"
        onClick={increment}
      >
        <Img
          fixed={data.camera.childImageSharp.fixed}
          alt="Change Profile Pic"
        />
      </button>
    </div>
  )
}

export default ProfilePicChanger
