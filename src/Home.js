import React, { Component } from 'react';
import './App.css';
import { Container } from 'reactstrap';
import { ProjectBlurb } from './ProjectComponents.js';
import { home_text, last_update } from './text.js';
import { Imagetron } from './Reactrons.js';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
              <Imagetron title="Hello." text={home_text} toggleClock={true} buttonText="GitHub" buttonURL="https://github.com/jkguiang/my_website" imgURL="https://lh3.googleusercontent.com/wqhRLXY9R3TPnSzBC26sqGOKKz4VzOpOHmAFHpLqFPQWEKdUy-_ZvyReO6vz96YproINiZLvEeBWYLV6Qr8MxJPVw0ObLIBpAJOWr2IZThbMnc-y2jfllDy1YUOhkkKNNIUW5g1z7cMeKlHPjrj3nxH2zMbIeEaI1Y0opTyMRQTyyXxe7ZwbkQE-4oB4xcnv2dHMAtmhHMYCb4_mPnrVDiFNE7aRi52_IoVYhWLdNHQGUhteO4TFPRXJoEVn5lbUIjZtp3vGM1Og8-7no-eVejKAXAOSJNAvJBgU_Jcb_nQBfGjJ-TRgSm5baSlMkpTsI_wVrNQafkz6OCo0EpOWmn_4HBpby9gI-VDNtgJvv8biYmkmMUmyLw1RSuBh1lcY8JJJ0-KzWFYrNOZk3wtOJvubD5cdBK7mn5WhjIuan-CLR_DBAeghWcu5cGC28SL01sHf7q4fSF7aYD8QXtN1dk9Qr_yLUHFORxD5cp4u3PZWFbNT7ZsZ1yuXObpfKaMeFnb3GamusNa9anTI1jP2l8mbxbZMn-0s1bx6pV8zT3iqG6oicbYcFfO-QGApXiuXOcN0VmbEvOrEZxXmHepImZCvbeOCZO1O7EDZ8hMhDhEHXcwZXxyzojanbdS0Wobc4T-RdSDBALeXP-Z5ZzvEapOjmKkEsWrX-JTG2ngD75YEMEVrbSk5GPRD=w2454-h1380-no"/>
              <Container>
                <h2>Featured Content</h2>
                <hr />
                <div className="row">
                  <div className="col-md-4 d-flex align-items-stretch">
                    <ProjectBlurb index={1} />
                  </div>
                  <div className="col-md-4 d-flex align-items-stretch">
                    <ProjectBlurb index={2} />
                  </div>
                  <div className="col-md-4 d-flex align-items-stretch">
                    <ProjectBlurb index={0} />
                  </div>
                </div>
                <hr />
                {last_update}
              </Container>
            </React.Fragment>
        );
    }
}

export default Home;
