import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

let counter = 0

const handleClick = () => {
  const profilePics = document.querySelectorAll(
    ".profile-pics .gatsby-image-wrapper"
  )
  counter = profilePics.length - 1 === counter ? 0 : counter + 1
  profilePics.forEach((profilePic, index) => {
    if (counter === index) {
      console.log(counter, index)
      profilePic.classList.add("active")
    } else {
      profilePic.classList.remove("active")
    }
  })
}

const ProfilePicChanger = () => (
  <StaticQuery
    query={graphql`
      query {
        pic1: file(relativePath: { eq: "pic1.jpg" }) {
          childImageSharp {
            fixed(width: 200, height: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        pic2: file(relativePath: { eq: "pic2.jpg" }) {
          childImageSharp {
            fixed(width: 200, height: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        pic3: file(relativePath: { eq: "pic3.jpg" }) {
          childImageSharp {
            fixed(width: 200, height: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        pic4: file(relativePath: { eq: "pic4.jpg" }) {
          childImageSharp {
            fixed(width: 200, height: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        pic5: file(relativePath: { eq: "pic5.jpg" }) {
          childImageSharp {
            fixed(width: 200, height: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <div className="display-profile">
        <div className="profile-pics">
          <Img
            fixed={data.pic1.childImageSharp.fixed}
            alt="Profile Pic"
            className="active"
          />
          <Img fixed={data.pic2.childImageSharp.fixed} alt="Profile Pic" />
          <Img fixed={data.pic3.childImageSharp.fixed} alt="Profile Pic" />
          <Img fixed={data.pic4.childImageSharp.fixed} alt="Profile Pic" />
          <Img fixed={data.pic5.childImageSharp.fixed} alt="Profile Pic" />
        </div>

        <button
          aria-label="Keep clicking here to change profile pictures"
          title="Keep clicking here to change profile pictures"
          onClick={handleClick}
        >
          <img
            src="https://img.icons8.com/android/15/000000/camera.png"
            alt="Camera"
          />
        </button>
      </div>
    )}
  />
)

export default ProfilePicChanger
