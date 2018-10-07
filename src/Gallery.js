import React, { Component } from 'react';
import './App.css';
import { Container } from 'reactstrap';
import { last_update } from './text.js';
import { Imagetron, Centertron } from './styles.js'


class Gallery extends Component {
    render() {
        var bodyStyle = {
          paddingTop: '25px',
          backgroundColor: '#F8F9FA'
        };
        return (
            <React.Fragment>
              <Centertron title="Gallery" text="Portfolio of graphic design and photography." />
              <div style={bodyStyle}>
                <Container>
                  <Imagetron title="Graphic Design" text="Collection of design projects I&apos;ve worked on." />
                  <Imagetron title="Photography" text="Various photographs I have taken in places I&apos;ve lived in and traveled to." imgURL="https://lh3.googleusercontent.com/E8ia7O1hZsmPJVCF6HtC1FYHi6Bp8xQuIH0sPfm4rv23EhSdyWqQOQJVE_YdGOPJ_c17tFsv1xPKkDCOMAnQTwVZNTy1U0PWxHcKqIl8wEcum6-Qp2uQh6x89mNsv6c1fxaHv2E9uKJv3FrzXa16ZoGqBLMHuC6zgTICV30hYEN22UyaaYPavDgcoEzCkRUVRzBbemOqq_bJAPnHhr34Vd4yEPupLm1mHKf0B48qT6KZcAUKk4yBTuJmGwIfWhz7D0-0A8CjI797gFlfR5HX5V_UjeR0d7YMWl69SsSNIZeWbeaKx2Cgelfv-igv95JLcXu_KutvSwtn_QWTzmrWNTKzdmm9n4hUtmstoZbM-WHsnaxw_CzD2qdL7PMf7v_VFgsV3nWNq5YF_6AWnAbTXp07plZZ9jM95ZLL6-WH7atjQfI1jN-aAt7NtupwoyNE9dsSdUYq9zh4xOb9lE0_A9ScBT6Xrlp3PHSK8EiY8gC70NpuZZXnukLV4HYSecou58idqIUaWEeNoTRmU1wu5pZnNJl46U5g2w17Ne7iKnPKHZygEk7EDgfYYNffIeyy-9ReHZUD71PHSwUZYuhn86VONT0rgRJRk5CDqdYanck4Q64X52mUS-AS61Mzyqc_OdhqbZVPWKyjN-9oJFsXKBa3a6Trw8Mi6T1gk_ZKFO6KfqdUPudO4dXC=w2454-h1380-no" />
                  <hr />
                  {last_update}
                </Container>
              </div>
            </React.Fragment>
        );
  }
}

export default Gallery;
