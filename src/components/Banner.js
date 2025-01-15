import { useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { gsap } from "gsap";
import SplitTextJS from 'split-text-js';

export const Banner = () => {
  useEffect(() => {
    const titles = document.querySelectorAll(".title"); // Select all spans with class "title"
    
    // Create an intersection observer
    const observerOne = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // If the title is in the viewport, start the animation
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 }); // Repeat indefinitely with a delay between repeats
  
            titles.forEach((title) => {
                const splitTitle = new SplitTextJS(title, { type: "chars" }); // Split into characters
    
                tl.from(splitTitle.chars, {
                    opacity: 0, // Fade in characters
                    y: 40, // Slight upward motion for effect
                    rotateX: -90,
                    stagger: 0.02, // Animate each character one after another
                }, "<")
                .to(splitTitle.chars, {
                    opacity: 0, // Fade out characters
                    y: -40, // Move slightly upward while fading out
                    rotateX: 90,
                    stagger: 0.02,
                }, "<1");
            });
          }
        });
      },
      {
        threshold: 0.5,
      }
    );
  
    // Observe each title element
    titles.forEach((title) => {
      observerOne.observe(title);
    });
  
    // Cleanup on component unmount
    return () => {
      observerOne.disconnect();
    };
  }, []);

  useEffect(() => {
    const svgs = document.querySelectorAll(".svg-icon"); // Select all svg elements
  
    // Create an intersection observer
    const svgObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Create a timeline for each SVG to animate them sequentially
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 1});
  
            svgs.forEach((svg, index) => {
  
              // Animate each svg individually with stagger
              tl.fromTo(svg, 
                { opacity: 0 }, // Initial opacity for fade-in
                {
                  opacity: 1, 
                  duration: 2, 
                  delay: 3, // Delay to stagger
                  onComplete: () => {
                    // Add a scaling effect before the fade-out
                    gsap.to(svg, {
                      scale: 1.2, // Scale up to 120%
                      duration: 1, // Duration of the scaling
                      yoyo: true, // Enable yoyo effect (animation will reverse)
                      repeat: 1, // Repeat the yoyo animation once
                    });
                    
                    // Fade out after the scaling animation
                    gsap.to(svg, {
                      opacity: 0, 
                      duration: 1 // Fade out after scaling
                    });
                  }
                  
                });
              
            });
          }
        });
      },
      {
        threshold: 0.5, // Start animation when 50% of the element is in view
      }
    );
  
    // Observe each svg element
    svgs.forEach((svg) => {
      svgObserver.observe(svg);
    });
  
    // Cleanup observer on component unmount
    return () => {
      svgObserver.disconnect();
    };
  }, []);
  
    return (
        <section className="banner" id='home'>
            <Container id='body-container'>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Sam `}<br/></h1>
                        <div className="txt-animation-container">
                                <div className="txt-animation-wrapper">
                                    <span className="title">Mathematical Modeler</span>
                                    <span className="title">Dynamic Programmer</span>
                                    <span className="title">Analytical Innovator</span>
                                </div>
                            </div>
                        <p> 
                            I'm a student at <i>The College of Wooster</i>, pursuing a double major in <i>Computer Science</i> and <i>Mathematics</i>.
                        </p>
                        <p>
                            I'm interested in applying mathematical principles to real-world problems, and I love exploring new programming languages and frameworks. 
                            Coding challenges and hands-on projects help me improve my problem-solving skills.
                        </p>
                        <p>
                            In my free time, I'm an avid <i>guitar player</i>, specializing in progressive rock and new metal. I enjoy learning new techniques to enhance my playing.
                        </p>
                        <p>
                            I stay active by going to the gym and playing sports with friends and family. <i>Health</i> is important to me, and I prioritize making healthy choices.
                        </p>
                        <p>
                        I'm passionate about<i> personal growth</i> and enjoy reading, especially books on astrophysics, space exploration, cosmology, biographies, and new technologies. My curiosity extends to experimenting with new technologies and side projects
                        </p>
                    </Col>
                    <Col xs={12} md={6} xl={5} style={{marginTop: 400, paddingLeft: 200 }}>
                      <div class="container_mouse">
                          <span class="mouse-btn">
                              <span class="mouse-scroll"></span>
                          </span>
                          <span>Scroll Down</span>
                      </div>
                    </Col>
                
                </Row>
            </Container>
        </section>
    )

}