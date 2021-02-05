import React from "react";
import "../../styles/style.css";
import Bio from "../../assets/IMG_6497.JPG";

const About = () => {
  return (
    <>
      <main className="container cont">
        {/* <!-- This is the main header for the article. (About Me) --> */}
        <header className="row">
          <section className="col">
            <h1>About Me</h1>
          </section>
        </header>
        {/* <!-- The article contains an image and short bio. --> */}
        <article className="row">
          <figure className="col">
            <img className="img" src={Bio} alt="me" />
            <p>
              I'm a full stack web developer based in Atlanta, GA. I gathered my
              skills by attending Georgia Tech's Coding Bootcamp. Here I was
              provided with exceptional professors and a rigorous curriculum
              that challenged me in all areas of code. Please check out the
              following links to find out more about me!
            </p>
          </figure>
        </article>
        {/* <!-- This article contains links to email and social media. --> */}
        <article className="row">
          <section className="" class="col">
            <p>
              Please browse the following links to find out more about me! Or
              just shoot me an email if you have any questions!
            </p>
            <ul>
              <li>
                <a href="https://github.com/martintara117">GitHub</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/tara-martin-2881001b3/">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:martin.tara117@gmail.com">
                  martin.tara117@gmail.com
                </a>
              </li>
              <li>Mobile:(601)-447-8421</li>
            </ul>
          </section>
        </article>
      </main>
    </>
  );
};
export default About;
