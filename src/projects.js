import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import './App.css';

const projects = [
    {   "name":"AutoDQM",
        "desc_long":"AutoDQM is a statistical tool for Data Quality Management (DQM) at the Large Hadron Particle Collider. Before AutoDQM, DQM shifters were tasked with looking at hundreds of DQM histograms, looking for hard-to-spot issues in data collection. My tool runs long established statistical tests on these graphs and outputs outliers on a simple, but effective, GUI that expedites the shifters' task.",
        "desc_short":"AutoDQM is a statistical tool for DQM shifters. It takes the guesswork out of CERN Data Quality Management and comes packaged with a simple, but effective GUI.",
        "repo":"https://github.com/jkguiang/AutoDQM",
        "icon":"",
        "cover":"",
        "highlights":[
            {   "name":"Frontend: React",
                "desc":"AutoDQM's frotend web GUI is written in React, with heavy use of Bootstrap assets. It has been specifically designed to be simple and intuitive, as previous tools became overcomplicated and confusing.",
                "link":"https://github.com/jkguiang/AutoDQM/tree/master/webapp"
            },
            {   "name":"Backend: Python",
                "desc": "AutoDQM's backend processing scripts are written in Python. PyROOT is used for calculation and plotting.",
                "link":"https://github.com/jkguiang/AutoDQM/tree/master/autodqm"
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
                "link":"https://github.com/jkguiang/AutoDQM/tree/master/webapp"
            },
            {   "name":"Backend: Python",
                "desc": "AutoDQM's backend processing scripts are written in Python. PyROOT is used for calculation and plotting.",
                "link":"https://github.com/jkguiang/AutoDQM/tree/master/autodqm"
            }
        ]
    },
];

// class projectBlurb extends React.Component {
//     // Card, Short description, no thumbnail
// }

class ProjectCard extends Component {
    // Card, Short description, thumbnail
    render() {
        console.log("rendering card");
        console.log(projects[this.props.index]);
        return (
          <Card>
            <CardImg top src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>
              <CardTitle>{projects[this.props.index].name}</CardTitle>
              <CardText>{projects[this.props.index].desc_short}</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        );
    }
}

// class projectPage extends React.Component {
//     // Full page, long description, cover, highlights
// }

// export default {projectBlurb, projectCard, projectPage};
export default ProjectCard;
