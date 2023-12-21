import aboutImg from "../images/about.jpeg"
import Title from "./Title"

const About = () => {
  return (
    <>
      <section className="section" id="about">
        <Title title="about" subTitle="us" />

        <div className="section-center about-center">
          <div className="about-img">
            <img
              src={aboutImg}
              className="about-photo"
              alt="awesome beach"
            />
          </div>
          <article className="about-info">
            <h3>explore the difference</h3>
            <p>
            Backroads tend to have narrow lanes, limited or non-existent shoulders, inconsistent pavement with gravel patches, sharp curves, steep slopes, and poor visibility. 
            </p>
            <p>
            Backroads tend to have narrow lanes, limited or non-existent shoulders, inconsistent pavement with gravel patches, sharp curves, steep slopes, and poor visibility. 
            </p>
            <a href="#home" rel="noreferrer" className="btn">
              read more
            </a>
          </article>
        </div>
      </section>
    </>
  )
}
export default About
