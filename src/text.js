import React from 'react';

// Home Page
const react_link = <a href='https://github.com/facebook/create-react-app'>create-react-app</a>;
const fa_link = <a href='https://fontawesome.com/'>Font Awesome</a>;
const bstrap_link = <a href='https://getbootstrap.com/'>Bootstrap 4</a>;
const repo_link = <a href='https://github.com/jkguiang/my_website'>Github</a>;
const home_text = <span>Welcome to my personal website, which I developed using {react_link}, with assets from {fa_link} and {bstrap_link}. Here you will find my various digital work, from graphic design to programming projects. The source code for this website is available on {repo_link}.</span>;

// About Page
const about_text = <span>I am currently studying Physics at the University of California Santa Barbara. While working for the Campagnari High Energy Physics group at UCSB, I have gained a greater interest in and appreciation for coding. I am most comfortable in Python, but I have a working knowledge of C++ and Javascript. My work for the Campagnari group is mainly computational. We use ROOT, a C++ framework designed by and for physicists to parse and interpret data gathered by the CMS detector at the LHC. However, as one of my web-based projects grew in popularity, I was led to a focus in web-development alongside my continuing work in data analysis. Outside of my academic interests, I am an amateur graphic artist and play the piano and guitar (poorly). I also love doing anything active; whether it&apos;s running, lifting weights, or hiking, indoors or outdoors, I love to exercise. Examples of all of my work can be found on this website.</span>;

// Last Updated
const last_update = <p className="text-muted">Last Updated October 6<sup>th</sup>, 2018</p>;

export {
  home_text,
  about_text,
  last_update  };
