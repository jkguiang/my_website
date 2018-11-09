import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardFooter, Button } from 'reactstrap';
import './App.css';
import { Container } from 'reactstrap';
import { last_update } from './text.js';
import { Imagetron } from './Reactrons';
import { HashRouter as Router, Link } from 'react-router-dom';
// import { LinkContainer } from 'react-router-bootstrap';

const projects = {
    "AutoPlotter": {
        "title":"AutoPlotter",
        "desc_long":"AutoPlotter is a tool designed to expedite the analysis of plots made on a remote server. It has a dedicated shell script that takes a directory full of PDF (and optionally PNG and TXT) files and plots them on a public, PHP/jQuery web interface. On top of this, AutoPlotter creates a dedicated public directory for visually and internally organizing plot pages.",
        "desc_short":"AutoPlotter is a PHP/jQuery-based interface designed to expedite plot analysis on remote servers.",
        "repo":"https://github.com/jkguiang/AutoPlotter",
        "thumb":"https://lh3.googleusercontent.com/YbzMfQYfcIVK4p-Ycqsx4ZtgFIwx7j_DAJWdmAcF_oqGdPgL9HUVWPkqZzjlLjAwt1N5j5aB7L7fBgsIh22z_qkoVj6NGfQckeKUjvahdpoeL9W4wm91LxbYgi20cvcEpq0kbMHBRRxWz-7hhOfGPe6khsojbFMQLW_CPlkY7pBOlZHrlLve0YIeJlww4SXvdRJUyHFUZBPseMqt_vQYV6jClxDkx4FHdBGaNRcHMqoF4tRz_7rQVfDyqoiQK3jdbwH5B8GHgaS3Zr_70n4G97EBqC4dzgJXCafP0MukKtLRx1uYQz-r9CmCKYLfQ4qM8BecL12H_Pu5JvcHrlM-2ivEgrLI6fywDK7Moey_Fp0tt8dwWLgIgIjTbC9IYGbGhwKb56xWDok_DcSFm76ENbRzZ_SvhZaxasisPuVasHJszLonRn_73wrYccw2MW67zFthqDycuOpka79BSJIVBhVY8lkMJ1E-4Llva0e_WkOq2aCzGFyNk-7gZH1BaSDKRqXzajJzaHtDkcNtvCbskndyRdcZ6YP0kb7WtwSJjfjqh3lPcSLexSL_xqCGOpJ9VYtyz7mtiDIVXoM8uMqk7Y1kdszumAqs1DUa9nJ9Q2khkyF--wEBQWrgZBlNNJ9eYywVJknJpn1BMXu7lppyvppyF7-bldn7qOu9r5dx5K7l2Oha8Z49i2VX=w2558-h1380-no",
        "highlights":[
            {   "title":"Web Interface: Plot Page",
                "desc":"Because viewing PDF/PNG plots can prove to be a burdensome process on a remote server, I made a simple, web-based interface for viewing them.",
                "url":"https://github.com/jkguiang/AutoPlotter/blob/master/index.php"
            },
            {   "title":"Shell Script",
                "desc": "To further expedite my work, I wrote a shell script that plots all PDF files in a directory to a webpage.",
                "url":"https://github.com/jkguiang/AutoPlotter/blob/master/aplot"
            },
            {   "title":"Web Interface: Repository Page",
                "desc": "Because I make so many AutoPlotter pages, it made sense to consolidate them under a single directory and beautify the navigation between them.",
                "url":"https://github.com/jkguiang/AutoPlotter/blob/master/main.php"
            }
        ]
    },
    "Integratable": {
        "title":"Integratable",
        "desc_long":"Integratable provides useful integrals on an interactive, modern platform. There are many static, PDF integral tables out there, but Integratable uses a React-based front end to make integrals easier to find and more pleasing to look at. It also utilizes the Wolfram Alpha API to make every integral on the website evaluatable as a definite integral.",
        "desc_short":"A React-based integral table that provides interactivity using Wolfram Alpha's API.",
        "repo":"https://github.com/jkguiang/integratable",
        "thumb":"https://lh3.googleusercontent.com/LhlQV3xboAg8Jr8oU_p_RlEzE22SEtMAAzyFP5iUf68miySyTam1-wkig9Qi_lCy54DeA4dOoF6rfTANms6rU_LL9-dZzBC1mpTCP1nB0jQajH7GbbMERScRgbVvMCP2HIQ1V2NuKGa0q5YjCVog_NlzxzY66Jo7pHJQesV7pwH4HjgKgViAlh0S5MRqZT0oCLpIjH9EnBkwVrFlf88GjbJFLjFLvIBm6XD18AHw2-gB6xgD2S8aVQdrrO0Miefsizsjo6FwtSz-7U705611nAyVQDzj7cs8XbjRg-HEOWmwig9Bg3UWFmZRyn-o2UDK1sfdAHtNxAPgluy_r0RWLBGTMoRMEeJ7CoQS9Xtn-pmBXR2Y6dFJlDf1qkCQS_CWbOf9ddeP41IIIkqoR6gzYOos4AqCwlyFxVeCE0767GB1F3Jz-AVRBKhkby3keYhxbUl7G3lMHF-q-DxDBBo-UTtcwXvKcbM1N934eEH0pChxMYQDkQ2G9FjqGf4a0j-EoD0_pzHUD754ZCylb-l5K7e8blt44kT0FP1MiXpO2FP5CfcjUY8JGZuuEm_hBaylPjZ5jruY3Q0b6vMyjJYolNvzfSaNC-jt5Sbw5pFfNiJXtnDIJqQu9OmqmCdHUfBcPVQjCC7Szpr9DNONSZaRuhVJz4JpjwtakYfkicecH-vLhNpNgbI2vdJ7yx8VlXjHi1ZYGuyFu8rhPa3R0-btgDeIx5bqqVJEipfBkw=w2530-h1380-no",
        "highlights":[
            {   "title":"The Website",
                "desc":"Integratable is currently a static website hosted by Github Pages.",
                "url":"https://www.integratable.info/#/"
            },
            {   "title":"Interactivity",
                "desc": "All integrals on Integratable are handled by this set of React components.",
                "url":"https://github.com/jkguiang/integratable/blob/master/src/Integrals.js"
            }
        ]
    },
    "AutoDQM": {
        "title":"AutoDQM",
        "desc_long":"AutoDQM is a statistical tool for Data Quality Management (DQM) at the Large Hadron Particle Collider. Before AutoDQM, DQM shifters were tasked with looking at hundreds of DQM histograms, looking for hard-to-spot issues in data collection. To expedite this process, AutoDQM runs long established statistical tests on these graphs and outputs outliers on a simple, but effective, GUI that expedites the shifters' task.",
        "desc_short":"AutoDQM is a statistical tool for DQM shifters. It takes the guesswork out of CERN Data Quality Management and comes packaged with a simple, but effective GUI.",
        "repo":"https://github.com/jkguiang/AutoDQM",
        "thumb":"https://lh3.googleusercontent.com/6NTm68cjsnF_WuP624t3FqFwlm9hp24MErkVjy3TuEiZ9qBbkCpV3Ez4U_Y5mBDIblD7BbFa06xPzEsMBgbibzQJma3zfhTzg-KHc1kAK8RdTQpoaeqhD-Yk1zo9R25smWdzND6QkxoGeBQVLLOPZFd5SkVkfhUxBQQPAY63pcmW33V1yceUw7IhcSwcGQB3092cmPadFO2KHT9g6YxEZnMC4eScB1AGN2WVSMachiUotGk1AgwBRoVdPajYkjAeg02402Wlzm4G-cQ_n-1DPVsa0CCJqBjbPS9LVXLHA8FibtCpRoHoyElwrDQrTHbGPlCY2pjdTqnkUXC5M_FQYgiAVoTkUCRfY5dQOMwkYuQWd7f97sJKcm0dm5adnW1z2QTz13VucbUOnE8kIM3EWaxrJLENjPUwMJfGqvg2IF0DewnUeqauaTaw0ReEU6NnJRcPpJbcGkYk1X5LKpWPA5b7aWupE58Gb5RWZ1Vxc2CogRN8nu3bbwHVjV-3mJfQDoZ5Fkwu17hZnrUiwY_R6R0A9JR1DbkQ_GYmUpn5jOhksDpzeOgOqQPX2d2g852OiWhfZ8ggX7OmFD4ob190GHv-jzfj8RAmQaUe8wNgxjKan1sfqePkwRBVOHQjPktKEf_57acpEhZy6luL4AG_sXoLtd9KUMdyoxYI5BA9qVlvyKynLFa7ZWVt=w1306-h890-no",
        "highlights":[
            {   "title":"Frontend: React",
                "desc":"AutoDQM's frotend web GUI is written in React, with heavy use of Bootstrap assets. It has been specifically designed to be simple and intuitive, as previous tools became overcomplicated and confusing.",
                "url":"https://github.com/jkguiang/AutoDQM/tree/master/webapp"
            },
            {   "title":"Backend: Python",
                "desc": "AutoDQM's backend processing scripts are written in Python. PyROOT is used for calculation and plotting.",
                "url":"https://github.com/jkguiang/AutoDQM/tree/master/autodqm"
            }
        ]
    },
    "PhotonTemplateGenerator": {
        "title":"Photon Template Generator",
        "desc_long":"After performing studies of the SPE response of a few Hamamatsu photomultiplier tubes, I was asked to write a program that delivered simulated responses based on the real data we took. In collaboration with a graduate student, I wrote two programs to this end: one in C++ and another in Python. Both use the real distribution of SPE response to return a random signal.",
        "desc_short":"Generates simulated SPE responses for the Hamamatsu R878 and R7725 photomultiplier tubes for use in simulating the response of the proposed Milliqan detector.",
        "repo":"https://github.com/bjmarsh/pmt-calibration/tree/master/photon_template_generator",
        "thumb":"https://lh3.googleusercontent.com/7zNRDkRc3I-tjwkpXIaNtr83bl0d-RNagJoWbSxjwrEvO8EmUTECMXWWGEhxgKwY9_LC3TcA_Wdlq6uo2R7Df58_vQZRZLk1ois_wjS4alCuhWn8jOXYlX8_gmTXiZuLq6hePuvah_YmjIGu8xERvKaCQQsEBab35Zq1G91Wm_kvsyvU8PmA0hVocS5nFUOa0wedoMBXY1TmyK14eWzr4fuUAsbbUslpcEhpUI86o1S_XN3BPhYXRG56NHo07b7LtcIpGdkB58WFhTiuaZ6vuxURgytGaKvSZnSucrEqcILRB6joaiM9hHMCaX8hcxHGYc86OyYfKVM36QFPulXOJ2ZrTwCrLV7Or3HDZFbBNq2cAEQdeAW3q-3LT7E14W66YLOkQcssDAkZ1rMALFv0LajJ6IkMZr-r74rEr1Yjs2xZHkf-ky_etyywUmEE3dmaztTAOWasgmS5bDXKlAYcJMdI4_K5odnHlNB5DVinWKym8xFlgOJqLYHyGhTiIWmKi6eBIUFH5f_bpGyo2FVIRxzBcx4RWkqH0LSr4CHtCKcyg-UU6PZZHtQrpKsUqUDLT8laOqv2Obs6lkVagbZJ32eFe5dXUFsjFBD8u9GrSg2Ci0JC0nPNo07WM8F6649R8KHskJPDDg0hBS22DqGAHdQe3v1lQ6ARDkJMcCjF53Aisq7uGbLSzuJ-=w696-h472-no",
        "highlights":[
            {   "title":"Generator: C++",
                "desc":"This script defines an SPE response as a class, with methods for refining the exact specifications of the desired signal.",
                "url":"https://github.com/bjmarsh/pmt-calibration/blob/master/photon_template_generator/SPEGen.C"
            },
            {   "title":"Generator: Python",
                "desc": "This script more directly uses the SPE template we created for previous studies, but provides all of te same functionality.",
                "url":"https://github.com/bjmarsh/pmt-calibration/blob/master/photon_template_generator/ptgen.py"
            }
        ]
    },
    "ChronoSCAD": {
        "title":"ChronoSCAD",
        "desc_long":"ChronoSCAD renders different prototype configurations of the MIP Timing Detector's Endcap Layer for use in simulating the geometric dependence of the detector. It uses OpenSCAD, a modular, C-like language for rendering 3D objects. ChronoSCAD's output is also useful for various PR purposes, such as cost analysis or pictures and animations for proposals and conceptualization aids.",
        "desc_short":"OpenSCAD-based software used to programmatically render designs for the MIP Timing Detector. Generated models are also used to study the geometric dependence of the detector.",
        "repo":"https://github.com/jkguiang/ChronoSCAD",
        "thumb":"https://lh3.googleusercontent.com/wH8KE177262haauJlCqufXgtH3jk1Lk2ch0UL83_8aMQ8rs3sFsT5fGDNOMTBKMXSABpl4GOBHoIbGiBizJv0bWMXHhZq_a5KuDOp61BUj31T5n9kRGJ7K6fFmujHImVn26ODkampQve2dO3-dPZaE22kYH7r1NbtfjJApiXacIFcozw-zM0ZQdhqN5LIOZSmnLZo9fMmrGY63r075EhVSARFEwh9URCjxlictX1wd-9boX5XrfTpmi63adZCXdAFXcUukPkQ14jUKTkYUNjLinVi4If8q-zV418EyV0JHAgwd0eULA0ksJ2GBdEeXHUF6zTEI4j9uvWkJih2ZVnlXJrGYsV7-iHJonLAnO0zQT_evPLwezBL2kyK9Yi8CM8MbL-61Ihf0jD4zadfZdeAjaC5t6IAVHoF9HJiMX8FFadf8eLK9Gi8oXQymRwu5Tkcwmdfzh7O11GX3cHSh424-5z-_-04osAffnpBmqOhqtQp4FY1CqOGeiD2nJmzv-pI1YlFwVm-KZmMNgUFyBxQBNep0ryhLtnAlYiArSMYXvOjoLhzvtjtHd0GNpkb991O1TFaMaJO2zVFZulPSoVsi-LT73bPbIu7GpbMAgVq_nnaNAprfc215ES2vUXtwlZPhEemE3nZhIVD8ARJ1YionZr_hJVXQb4DJNVs1ZQeFY8QjCdxZrDyhH2vR8bcAgmZ2QTjD7EQ6SjmMC7ubhRCu1u2zHtvpU-WNxI=w1112-h787-no",
        "highlights":[
            {   "title":"Detector Components",
                "desc":"OpenSCAD is modular, making it easy to render arbitrarily complex detector components as defined in this script.",
                "url":"https://github.com/jkguiang/ChronoSCAD/blob/master/modules.scad"
            },
            {   "title":"Construction Logic",
                "desc": "This script contains the logic for fitting an optimized number of sensors inside of the circular detector for maximal coverage.",
                "url":"https://github.com/jkguiang/ChronoSCAD/blob/master/logic.scad"
            },
            {   "title":"Particle Trajectories",
                "desc": "ChronoSCAD can also draw the simulated trajectories of incoming particles to fully visualize the detector performance.",
                "url":"https://github.com/jkguiang/ChronoSCAD/blob/master/trajectories.scad"
            }
        ]
    }
};

const projectNames = Object.keys(projects);

class Highlight extends Component {
    // Card, Short description, no thumbnail
    render() {
        return (
          <Card>
            <CardBody>
              <CardTitle>{this.props.highlight.title}</CardTitle>
              <CardText className="text-muted">{this.props.highlight.desc}</CardText>
            </CardBody>
            <CardFooter><Button outline color="primary" href={this.props.highlight.url}>Learn More &raquo;</Button></CardFooter>
          </Card>
        );
    }
}

class ProjectBlurb extends Component {
    // Card, Short description, no thumbnail
    render() {
        var thisURL = "/projects/"+this.props.name;
        return (
          <Card>
            <CardBody>
              <CardTitle>{projects[this.props.name].title}</CardTitle>
              <CardText className="text-muted">{projects[this.props.name].desc_short}</CardText>
            </CardBody>
            <CardFooter><Router><Link to={`${thisURL}`}><Button outline>Learn More &raquo;</Button></Link></Router></CardFooter>
          </Card>
        );
    }
}

class ProjectCard extends Component {
    // Card, Short description, thumbnail
    render() {
        var cardStyle = {
            height: "100%"
        };
        var thisURL = "/projects/"+this.props.name;
        return (
          <Card>
            <CardImg top src={projects[this.props.name].thumb} alt="Card image cap" />
            <CardBody style={cardStyle}>
              <CardTitle>{projects[this.props.name].title}</CardTitle>
              <CardText>{projects[this.props.name].desc_short}</CardText>
            </CardBody>
            <CardFooter><Router><Link to={`${thisURL}`}><Button outline>Learn More &raquo;</Button></Link></Router></CardFooter>
          </Card>
        );
    }
}

class ProjectPage extends React.Component {
    // Full page, long description, cover, highlights
    render() {
        var divStyle = {
            textAlign: "right"
        }
        var highlightStyle = {
            paddingBottom: '25px'
        }
        var name = this.props.match.params.name;
        var counter = 0;
        const highlights = (projects[name].highlights).map((highlight) =>
            <div className="col-md-4 d-flex align-items-stretch" style={highlightStyle} key={counter++}>
              <Highlight highlight={highlight}/>
            </div>
        );
        return (
            <React.Fragment>
              <Imagetron title={projects[name].title} text={projects[name].desc_long} buttonText="GitHub" buttonURL={projects[name].repo} imgURL="https://lh3.googleusercontent.com/OgrIEw0mB8chOpHx-ElmrVVmNnURzFYtJf2bOr5wBzp9aj1scjjbK4xMzamaa6y27xPf4niElTrVan-0D0GaJiKoeErRxRkWOaZrDKSIPIaj-jSNXrM4q1Eln6YIJXNYzEubZQM5biqSPZiUEcUeTMmqCRVYm7ZjXmT3vDsUksYnjuyws4MpcRcPIa7PW6lbVlY4Y9TO_ElawDvbXHPLaHBOaVWdPrCz3ECeguKwu93GkYxFo_kpHz64RaK0hZp5F-iljLO9gzuAPlexcr5fURBzz08Z3l08VXDkdkFjTrA3Z5a63S01nwCHgYPrQxi5Nut50VCIF9n0kUynakQZcOo-skZGflbzCEn9G7W5o54tpY65HhoqmQA-NCRWW739y86BRQMkbAXu9Y4dNTw14XIN15WFIJ4HUNN168oObetHr_QgHde54iUQacqPwnFuiuE5b_BWFazmeDRVJvHdCNGRY7G4O3oiTZIO0KRdqmLq2ZukBzroPv7vHC5TCQ5G-D8b818RQcL4sPcvEBNxYLF28ALwFwjlQ8UhevUhFH7GpbvxnnWLqpSY_ZPmLZjkre3iGVEtesFQ2zq2SV6AgUUV7HBw-PhrmhdYW3oH7e4Io8hDk7mEcHraslbOYnHFptlbzDrHpvic2P7z2OjsHIexHiWCdkbLxxavpL__61mHyN4xYEMxHTKg=w2454-h1380-no" />
              <Container>
                <h2>Highlights</h2>
                <hr />
                <div className="row">
                    {highlights}
                </div>
                <div style={divStyle}><Router><Link to="/projects"><Button>&laquo; Back</Button></Link></Router></div>
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
  projectNames  };
