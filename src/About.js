import React, { Component } from 'react';
import './App.css';
import { Container } from 'reactstrap';
import { about_text, last_update } from './text.js';
import { Profiletron } from './Reactrons.js';

class About extends Component {
  render() {
    return (
    <React.Fragment>
      <Profiletron imgURL="https://lh3.googleusercontent.com/eXtJM8QbwAQA2TTO6qA9FyuPdyYZEjjAHfvhMv_VmcqIxq2berUdYITyBXvWa8RxUCXRR2tprRKRn79MSjwEW71cpo4q0Fjfqk9JJaYioKbzjmMhJvo3zQHOesGKRJc3VosopHdRR6bscsUSf_p1KV9DOs9ftna47iOA0OhILrS--GfeOUms439xM4oGQTnm18BEIqZQWQstng_wnoK4l8gOIcvBjRl2ZO7tLlK4vxB4wJpULOYi_popvQb5CbY1KUUq-oPJkd4RkxT6Es6R27H7Aw1TqgRGHyfT2JXoHhtQwknqSn1fruyDk6pWGA2CjghmOp5SvKZbO3zpZyKmu8CLSz8DQLqd3HC_dvL-DQXjKzypkDaOBeQN2uK3quIp2ZpWmI7PM86y_TlM7bsM1vCotUFakPjGyFsA8blm0-2jlcnZxKAIgbg7jdrTbf7lWILYvX06U9TOcT7auWaKNyBDQDskLIbWtSPu05PH-Ij3cmS-nlzBk33dNB3ex7ZqHLrAiXn20CH3Q8XIqR27S-yLvy3jyGQ-qDTaQldResdxBh7-5G2QA4BHdAEJfgM0CBIm4WXHqt0tOXS-FuLTebN09FPJkCFUa8R-3RfTX40-CZ9460kktpZeumQX_WnBg6gOdpDja168OykkUVYpXvBkPIMKe3ng54MoPPI7kBGmBHEe36an6xo6=w2454-h1380-no" profPic="https://lh3.googleusercontent.com/uAWN3aHsUJDMa0pooxx3C9Oo5rpUHYOsFzq-MUgkvgQ4ACsBmk341x87aa53Oau8pTtlzrV4aJn_IIhRF9JdhC1qF7-dmljyLOUIcXYekq3P9XAPtT1yj7z6TTPP2W5PqNn6hF724NyOnkrn3C416xiQ4YvZWRK3CqCW1Iy-930nPET8NrrAw1fWW5c66EHuOoRHdTv96VUZHAJa9SL3aJi6v0OptKZgy5VF9iimSWQM8-9W8vFUOSqwAtuoAAM1NCYnE_qkbk81jHPGSAhXQXa1IT_HH09MTdPDro1j9yUKKLu0GQn4wROMUBj76qg5jgTNxd6ddOGyUCCL7s6ZvnJhY3dEtQ-oJznEdSPHR_bLRK_6WZMMcSPw5E9o514scONf-YQieAhOIWCnc011wlKRcoh-d3yFDj46QMTQObRoS6D8PfpsEzqeQraecxKAM_-v-Am8tdYcorPcreYZfe7XRJt118PMgawXi9t30YctOHQgJGhSLfuFUwvbDCbh1dPMUFYFoojJhMvU5voqHU85VZTjZMiBe7_kgVkhlLKiwJuLlhSWty9Mfw-D0FflmRzYt2RCakSZjwb0vlAUIsvTLuxZs4RUDL8jjFgCmx3m9SC7vBmGiaBnE8Pzb36AnPG0d7zKEsh43QNjX-KVm8_IAHjvljoTuGFZq2ojWGAdeM99CV-Fm1-Y=s269-no" />
      <Container>
        <h2>About Me</h2>
        <hr />
        {about_text}
        <hr />
        {last_update}
      </Container>
    </React.Fragment>
    );
  }
}

export default About;
