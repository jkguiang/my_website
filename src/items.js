import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import './App.css';
import { Container } from 'reactstrap';
import { last_update } from './text.js';
import { Imagetron } from './styles';

const projects = [
    {   "name":"AutoPlotter",
        "desc_long":"AutoPlotter makes various plots from real CMS3 data and Monte Carlo simulations. It exports these plots as .pdf files which are then displayed on an easily accessible webpage. The example page is hosted by UCSD. All of the plot-related code is written in C++, with some Python and JavaScript responsible for the functionality of the web interface.",
        "desc_short":"AutoPlotter is a jQuery-based interface for a program I made using C++ and ROOT that plots various information from CMS3 data.",
        "repo":"https://github.com/jkguiang/AutoDQM",
        "thumb":"https://lh3.googleusercontent.com/YbzMfQYfcIVK4p-Ycqsx4ZtgFIwx7j_DAJWdmAcF_oqGdPgL9HUVWPkqZzjlLjAwt1N5j5aB7L7fBgsIh22z_qkoVj6NGfQckeKUjvahdpoeL9W4wm91LxbYgi20cvcEpq0kbMHBRRxWz-7hhOfGPe6khsojbFMQLW_CPlkY7pBOlZHrlLve0YIeJlww4SXvdRJUyHFUZBPseMqt_vQYV6jClxDkx4FHdBGaNRcHMqoF4tRz_7rQVfDyqoiQK3jdbwH5B8GHgaS3Zr_70n4G97EBqC4dzgJXCafP0MukKtLRx1uYQz-r9CmCKYLfQ4qM8BecL12H_Pu5JvcHrlM-2ivEgrLI6fywDK7Moey_Fp0tt8dwWLgIgIjTbC9IYGbGhwKb56xWDok_DcSFm76ENbRzZ_SvhZaxasisPuVasHJszLonRn_73wrYccw2MW67zFthqDycuOpka79BSJIVBhVY8lkMJ1E-4Llva0e_WkOq2aCzGFyNk-7gZH1BaSDKRqXzajJzaHtDkcNtvCbskndyRdcZ6YP0kb7WtwSJjfjqh3lPcSLexSL_xqCGOpJ9VYtyz7mtiDIVXoM8uMqk7Y1kdszumAqs1DUa9nJ9Q2khkyF--wEBQWrgZBlNNJ9eYywVJknJpn1BMXu7lppyvppyF7-bldn7qOu9r5dx5K7l2Oha8Z49i2VX=w2558-h1380-no",
        "cover":"",
        "highlights":[
            {   "name":"Web Interface",
                "desc":"Rather than having to slowly parse through all of the graphs that AutoPlotter outputs, this web interface allows for simple and quick navigation.",
                "url":"https://github.com/jkguiang/AutoDQM/tree/master/webapp"
            },
            {   "name":"Plotter",
                "desc": "Instead of having to write all of the code to generate each plot, I consolidated the plots I need into member functions of one main 'plotter' class.",
                "url":"https://github.com/jkguiang/AutoDQM/tree/master/autodqm"
            }
        ]
    },
    {   "name":"AutoDQM",
        "desc_long":"AutoDQM is a statistical tool for Data Quality Management (DQM) at the Large Hadron Particle Collider. Before AutoDQM, DQM shifters were tasked with looking at hundreds of DQM histograms, looking for hard-to-spot issues in data collection. My tool runs long established statistical tests on these graphs and outputs outliers on a simple, but effective, GUI that expedites the shifters' task.",
        "desc_short":"AutoDQM is a statistical tool for DQM shifters. It takes the guesswork out of CERN Data Quality Management and comes packaged with a simple, but effective GUI.",
        "repo":"https://github.com/jkguiang/AutoDQM",
        "thumb":"https://lh3.googleusercontent.com/6NTm68cjsnF_WuP624t3FqFwlm9hp24MErkVjy3TuEiZ9qBbkCpV3Ez4U_Y5mBDIblD7BbFa06xPzEsMBgbibzQJma3zfhTzg-KHc1kAK8RdTQpoaeqhD-Yk1zo9R25smWdzND6QkxoGeBQVLLOPZFd5SkVkfhUxBQQPAY63pcmW33V1yceUw7IhcSwcGQB3092cmPadFO2KHT9g6YxEZnMC4eScB1AGN2WVSMachiUotGk1AgwBRoVdPajYkjAeg02402Wlzm4G-cQ_n-1DPVsa0CCJqBjbPS9LVXLHA8FibtCpRoHoyElwrDQrTHbGPlCY2pjdTqnkUXC5M_FQYgiAVoTkUCRfY5dQOMwkYuQWd7f97sJKcm0dm5adnW1z2QTz13VucbUOnE8kIM3EWaxrJLENjPUwMJfGqvg2IF0DewnUeqauaTaw0ReEU6NnJRcPpJbcGkYk1X5LKpWPA5b7aWupE58Gb5RWZ1Vxc2CogRN8nu3bbwHVjV-3mJfQDoZ5Fkwu17hZnrUiwY_R6R0A9JR1DbkQ_GYmUpn5jOhksDpzeOgOqQPX2d2g852OiWhfZ8ggX7OmFD4ob190GHv-jzfj8RAmQaUe8wNgxjKan1sfqePkwRBVOHQjPktKEf_57acpEhZy6luL4AG_sXoLtd9KUMdyoxYI5BA9qVlvyKynLFa7ZWVt=w1306-h890-no",
        "cover":"",
        "highlights":[
            {   "name":"Frontend: React",
                "desc":"AutoDQM's frotend web GUI is written in React, with heavy use of Bootstrap assets. It has been specifically designed to be simple and intuitive, as previous tools became overcomplicated and confusing.",
                "url":"https://github.com/jkguiang/AutoDQM/tree/master/webapp"
            },
            {   "name":"Backend: Python",
                "desc": "AutoDQM's backend processing scripts are written in Python. PyROOT is used for calculation and plotting.",
                "url":"https://github.com/jkguiang/AutoDQM/tree/master/autodqm"
            }
        ]
    },
    {   "name":"SPE Generator",
        "desc_long":"After performing studies of the SPE response of a few Hamamatsu photomultiplier tubes, I was asked to write a program that delivered simulated responses based on the real data we took. I wrote two programs to this end, one in C++ and another in Python. Both use the real distribution of SPE response to return a random signal.",
        "desc_short":"Generates simulated SPE responses for the Hamamatsu R878 and R7725 photomultiplier tubes for use in simulating the response of the proposed Milliqan detector.",
        "repo":"https://github.com/jkguiang/AutoDQM",
        "thumb":"https://lh3.googleusercontent.com/7zNRDkRc3I-tjwkpXIaNtr83bl0d-RNagJoWbSxjwrEvO8EmUTECMXWWGEhxgKwY9_LC3TcA_Wdlq6uo2R7Df58_vQZRZLk1ois_wjS4alCuhWn8jOXYlX8_gmTXiZuLq6hePuvah_YmjIGu8xERvKaCQQsEBab35Zq1G91Wm_kvsyvU8PmA0hVocS5nFUOa0wedoMBXY1TmyK14eWzr4fuUAsbbUslpcEhpUI86o1S_XN3BPhYXRG56NHo07b7LtcIpGdkB58WFhTiuaZ6vuxURgytGaKvSZnSucrEqcILRB6joaiM9hHMCaX8hcxHGYc86OyYfKVM36QFPulXOJ2ZrTwCrLV7Or3HDZFbBNq2cAEQdeAW3q-3LT7E14W66YLOkQcssDAkZ1rMALFv0LajJ6IkMZr-r74rEr1Yjs2xZHkf-ky_etyywUmEE3dmaztTAOWasgmS5bDXKlAYcJMdI4_K5odnHlNB5DVinWKym8xFlgOJqLYHyGhTiIWmKi6eBIUFH5f_bpGyo2FVIRxzBcx4RWkqH0LSr4CHtCKcyg-UU6PZZHtQrpKsUqUDLT8laOqv2Obs6lkVagbZJ32eFe5dXUFsjFBD8u9GrSg2Ci0JC0nPNo07WM8F6649R8KHskJPDDg0hBS22DqGAHdQe3v1lQ6ARDkJMcCjF53Aisq7uGbLSzuJ-=w696-h472-no",
        "cover":"",
        "highlights":[
            {   "name":"Generator: C++",
                "desc":"This script defines an SPE response as a class, with methods for refining the exact specifications of the desired signal.",
                "url":"https://github.com/jkguiang/AutoDQM/tree/master/webapp"
            },
            {   "name":"Generator: Python",
                "desc": "This script more directly uses the SPE template we created for previous studies, but provides all of te same functionality.",
                "url":"https://github.com/jkguiang/AutoDQM/tree/master/autodqm"
            }
        ]
    },
    {   "name":"AutoDQM",
        "desc_long":"AutoDQM is a statistical tool for Data Quality Management (DQM) at the Large Hadron Particle Collider. Before AutoDQM, DQM shifters were tasked with looking at hundreds of DQM histograms, looking for hard-to-spot issues in data collection. My tool runs long established statistical tests on these graphs and outputs outliers on a simple, but effective, GUI that expedites the shifters' task.",
        "desc_short":"AutoDQM is a statistical tool for DQM shifters. It takes the guesswork out of CERN Data Quality Management and comes packaged with a simple, but effective GUI.",
        "repo":"https://github.com/jkguiang/AutoDQM",
        "thumb":"",
        "cover":"",
        "highlights":[
            {   "name":"Frontend: React",
                "desc":"AutoDQM's frotend web GUI is written in React, with heavy use of Bootstrap assets. It has been specifically designed to be simple and intuitive, as previous tools became overcomplicated and confusing.",
                "url":"https://github.com/jkguiang/AutoDQM/tree/master/webapp"
            },
            {   "name":"Backend: Python",
                "desc": "AutoDQM's backend processing scripts are written in Python. PyROOT is used for calculation and plotting.",
                "url":"https://github.com/jkguiang/AutoDQM/tree/master/autodqm"
            }
        ]
    },
];

const project_count = projects.length;

class Highlight extends Component {
    // Card, Short description, no thumbnail
    render() {
        return (
          <Card>
            <CardBody>
              <CardTitle>{this.props.highlight.name}</CardTitle>
              <CardText className="text-muted">{this.props.highlight.desc}</CardText>
              <Button href={this.props.highlight.url}>Learn More &raquo;</Button>
            </CardBody>
          </Card>
        );
    }
}

class ProjectBlurb extends Component {
    // Card, Short description, no thumbnail
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.state = {
            isPage: false
        };
    }
    handleClick(evt, value) {
        this.props.onNav(value);
    }
    render() {
        return (
          <Card>
            <CardBody>
              <CardTitle>{projects[this.props.index].name}</CardTitle>
              <CardText className="text-muted">{projects[this.props.index].desc_short}</CardText>
              <Button onClick={evt => this.handleClick(evt, this.props.index)}>Learn More &raquo;</Button>
            </CardBody>
          </Card>
        );
    }
}

class ProjectCard extends Component {
    // Card, Short description, thumbnail
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.state = {
            isPage: false
        };
    }
    handleClick(evt, value) {
        this.props.onNav(value);
    }
    //"https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
    render() {
        var cardStyle = {
            height: "100%"
        };
        return (
          <Card>
            <CardImg top src={projects[this.props.index].thumb} alt="Card image cap" />
            <CardBody style={cardStyle}>
              <CardTitle>{projects[this.props.index].name}</CardTitle>
              <CardText>{projects[this.props.index].desc_short}</CardText>
              <Button onClick={evt => this.handleClick(evt, this.props.index)}>Learn More &raquo;</Button>
            </CardBody>
          </Card>
        );
    }
}

class ProjectPage extends React.Component {
    // Full page, long description, cover, highlights
    render() {
        var divStyle = {
            paddingBottom: '25px'
        }
        var highlights = [];
        for (var i = 0; i < projects[this.props.index].highlights.length; i++) {
            highlights.push(
                <div className="col-md-4 d-flex align-items-stretch" style={divStyle}>
                  <Highlight highlight={projects[this.props.index].highlights[i]} />
                </div>
            );
        }
        return (
            <React.Fragment>
              <Imagetron title={projects[this.props.index].name} text={projects[this.props.index].desc_long} buttonText="GitHub" buttonURL={projects[this.props.index].repo} imgURL="https://lh3.googleusercontent.com/OgrIEw0mB8chOpHx-ElmrVVmNnURzFYtJf2bOr5wBzp9aj1scjjbK4xMzamaa6y27xPf4niElTrVan-0D0GaJiKoeErRxRkWOaZrDKSIPIaj-jSNXrM4q1Eln6YIJXNYzEubZQM5biqSPZiUEcUeTMmqCRVYm7ZjXmT3vDsUksYnjuyws4MpcRcPIa7PW6lbVlY4Y9TO_ElawDvbXHPLaHBOaVWdPrCz3ECeguKwu93GkYxFo_kpHz64RaK0hZp5F-iljLO9gzuAPlexcr5fURBzz08Z3l08VXDkdkFjTrA3Z5a63S01nwCHgYPrQxi5Nut50VCIF9n0kUynakQZcOo-skZGflbzCEn9G7W5o54tpY65HhoqmQA-NCRWW739y86BRQMkbAXu9Y4dNTw14XIN15WFIJ4HUNN168oObetHr_QgHde54iUQacqPwnFuiuE5b_BWFazmeDRVJvHdCNGRY7G4O3oiTZIO0KRdqmLq2ZukBzroPv7vHC5TCQ5G-D8b818RQcL4sPcvEBNxYLF28ALwFwjlQ8UhevUhFH7GpbvxnnWLqpSY_ZPmLZjkre3iGVEtesFQ2zq2SV6AgUUV7HBw-PhrmhdYW3oH7e4Io8hDk7mEcHraslbOYnHFptlbzDrHpvic2P7z2OjsHIexHiWCdkbLxxavpL__61mHyN4xYEMxHTKg=w2454-h1380-no" />
              <Container>
                <h2>Featured Content</h2>
                <hr />
                <div className="row">
                    {highlights}
                </div>
                <hr />
                {last_update}
              </Container>
            </React.Fragment>
        );
    }
}

export {
  ProjectBlurb,
  ProjectCard,
  ProjectPage,
  project_count  };
