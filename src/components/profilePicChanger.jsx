import React, { useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import useLocalStorage from "../hooks/useLocalStorage"

const ProfilePicChanger = () => {
  const [counter, setCounter] = useLocalStorage("counter", 0)
  const totalPics = 5
  const profilePicsRef = useRef(null)
  const handleClick = () => {
    let newCounter = counter === totalPics - 1 ? 0 : counter + 1
    setCounter(newCounter)
  }
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
          className={counter === 0 && "active"}
        />
        <Img
          fixed={data.pic2.childImageSharp.fixed}
          alt="Profile Pic"
          className={counter === 1 && "active"}
        />
        <Img
          fixed={data.pic3.childImageSharp.fixed}
          alt="Profile Pic"
          className={counter === 2 && "active"}
        />
        <Img
          fixed={data.pic4.childImageSharp.fixed}
          alt="Profile Pic"
          className={counter === 3 && "active"}
        />
        <Img
          fixed={data.pic5.childImageSharp.fixed}
          alt="Profile Pic"
          className={counter === 4 && "active"}
        />
      </div>

      <button
        aria-label="Keep clicking here to change profile pictures"
        title="Keep clicking here to change profile pictures"
        onClick={handleClick}
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
