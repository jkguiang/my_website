import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import './App.css';

const images = [
    {
        src: 'https://lh3.googleusercontent.com/P4zAPc80RBFlGwhjGCbKe-64qxjrrEFzZhNRmXm-URBzy_GvozJk9XCRrPGllWcEmkowtUXqDCNs5IZBPuaI6cGFhBLWWNKMhl0Dv4U_fufSyQaU0vKdFmjzXs41zq79DdkWvTAUtUb5pQpviET1z7o4KcPvAeHpe4yQ_gA7mddRmKUGZOyka6EDlh_4ltHIv1kv7qyyOrpTrWyRLobmbfPYlzQPbGOjQbCmBEC_0-6WgMuumrt66ozv8nqMKacwOiH1ZwjWDyRscn-aMslXT6sovahNN0VZ1IHajG4Ehp9cBkQBRmkzmONJ_ovKISjEXD0IfR-yZ55bq_jYBPop4vS79xJOHOJImAqbTcvzT6_vYAgacJAnM2iWggzu5MweKNY5LJo7JJuYwWDdeLH9dw4pirjHoEUlwQI1aQsOw2AiFlB2nhSZ9-3DDtx8hwXnGVeTrOTr6EdifNYJR8OUsi7SlEdP-fbN7x5AAAkSLYhm1ilGx8nTgTo-vstBp9UlEytrbFlxZFy--j9du33lV8WkZJHVU37hm1EuRKHYm1DSTl5rs-AZpGzI8wZWbCsB7SEdH-u1oA91gS_lKSkzaWnzd51VzIxVxP-BnwhXOQ2Ww9M5c-uUdSUagdNRr-T_UhRzMNCCbcRqTTqg0qu7qCoMB-T0YLKqzgR26c22SEOUpQUx0A8Gh8tp=w2454-h1380-no',
        altText: 'Slide 1',
        header: 'Venice, Italy',
        caption: 'July, 2015'
    },
    {
        src: 'https://lh3.googleusercontent.com/bZ3T6I3QfTBZyoFhKVO5rdm0FwWLuV1Cgz8ZqsxLFZKWtNYW6ChbafLhzyi59IArh6F1wsdzjYOAnZTo7w56FTAcMnIPgoIIVxLrTTih0sMQaI3vGDzxEQCkq98ILzmQLcaDfPqo_PcrTP_v8Kib4_BmBF2FEU94XAmW5gFtaoZoYpW0YEv9A19fP6H5vbvFJ3N9CkAUmN7M-aiXkmNH0VubvH14dSBiMMcvMxhNkW5tjvXKy5Qknsqi2CCwzV-s87AYvuBZK2vvotHVQLbZFNTo0NxUlC0BrGWNPQQzLCWvzeQA5_JC0ZD7iwANs6fFXa06v8k8unyGy4_z76wsPch4kcdGWVhXFuREQYTRazLuclZjv1pynurCisgwdxW-VBrQ2rWhIC2V3fjdbSS-3mqeL0ZjHLOdpEdWCDyVvD3Lsw5IYS6C6esyW2Ygd_uTAwNRiRGEVrJSJ6eRwMj_HPju3duGT7cfHn1Q56uT1G1D0JsxqsyFZJiXEWd9n7YNBJxVV1EDPtBRUu1xxuL2zckhLFGVwx_v1uDrRbYcH1mMzo_xDekN8b1uFyU-Y4_TlI8Ko2UI9nog9AT7jUIstxGEten_OPvBhEQFk0qbFksJarOI7Za6MrS0ncEhOdY2CEPHdCvk_G_zsZyLaVXJoQiuwSg6Zm8LMf3PNWhihhRznKVfztEeQ6JI=w2454-h1380-no',
        altText: 'Slide 2',
        header: 'Unknown, CA',
        caption: '2017'
    },
    {
        src: 'https://lh3.googleusercontent.com/sL60OPpSm4H32pdUHTpyjI4AvId8fnicHmW3kuB_TvSUB84WnhDjsezUEcYsfTVI2oWkkKTU9jsEqSj4ERvdMjuCBx9GTtfhC0vsc69caKqFeitjb7e9EQiWDvguAEDVoNWuAvKWL2zBAQi7wS4BteNFhVUBAktHB_8kgScNhz8Ad0mqICGnQcUIaG5B9-kJHZ2dkA7ZJ76ldtNb4bkHe0qHBqWdxvVKAzg_2DHt8qoizv4bOdITEUv4ELRt3PeLU4QbMTRUIFEjMC3k8g_4wEKooumOpofaXSYk1VvXzWWlkDiePfjYd3LHBYXwLHM0X0ky_SzTyryC8L-aQDWg44DOf4BEojHJkpnPVrkKAbcz_R8gSWslc9Kj8dkHduiFuqZ9GRJz5rtYPpSVQVF9iMjxVxTF0PbsrfAomHZ4uESgrGNZBgTR32uexpsSlfxohNB68rL9xDgTRjg7yXxzasrBDJ6kIyzxq5oh1G8ldYTEuwNgBDclFkKMT1LXeQu6k_mANeL-sM3WWEX_KXNoLROOCGg2Y-dF6D-JhcuOapwgiYLXBb8KEDeJY1jG8PlnkHL4-uqELM7gYpfowxsy1M4uu1TabitJsyrktOZnJX_Slof8_6q4XbVC1uhtVCvdV8gz4ll_2dvnsJ1wgx2onQNr2z1TFBrHYYp9mo-Pg3VJlmEz8OTSwavX=s1380-no',
        header: 'Murano, Italy',
        caption: 'July, 2015'
    },
    {
        src: 'https://lh3.googleusercontent.com/ycNrIsqW-KtVmMRHLNy2qIEYqkYxrIJftM6x8b5uYzY-9PnURd6IFo9RaN5IfasGgukCnw_xF0osbPft97a3-n3QYOitniqYBSI9oBC-z_WyUTffQHC6PELUTYpTtrlwWnXgnlsn74HEFrVISYTuQ_VYNNyJEY24fpqEBi2WvrxNqV4GrLeTFwRhpjzv_WVedQcjchYthm9IfgfTIKn8gJjGYsxchLEqOnUh0mn9EnMNZcoWVV7R3QCmq-QqXp7BMs2MN86XQ9jefo1uacAtsgkSEFnKwNVaQoCbpibD4uDfyjiAM1uSfUUQFxMdWJAA7kK3omuwpjzJraQp-knQvfKpGnXfxez8bn-0LMsStmLEGqjn8Oi9X_HcrUPAWZrsu-0i-D2Q5767dhSo6KfYPKt5EcRPZ5f-AXln-kBWpa1qmrptPHos7jECtO2A7vQgGOVjo_chniHg6Jn5x6QZ7n7LamL0-IUZ6oU61mhhx_IN7Nxr08udXBoHv3CDcVPPkSx1fGPFayH6vwA94o0auzESY0NK1WqD-urRNm2PT4NJAuLFbAEg14PU9heC-ysxXRbWIHgXjcMqgjGLL6WEwfK7PA9TCeVfJLEfhGv6yUPvNFlkS4cm7RdzkZlig_N87_e_LXhV6GSF-Fa7ktuaKFRpplYNYKYKe7pD2meKQMbJCrI_5FBtfgNl=w1840-h1036-no',
        altText: 'Slide 2',
        header: 'Cabo, Mexico',
        caption: 'December, 2015'
    },
    {
        src: 'https://lh3.googleusercontent.com/wT83MdWPofTh6Gma9uJptOhxCI4DDpABaWWZNmMb90l_osnxdSbqLCFbSA4x_1nNiotxA526i9BVsmxvnyYlWL3dIN3_F4M5a02TSAkLC1YtAjBDLSlG1ZRVMArSHTh8ap-tYOXkS5UNEdrP5ergtkDJRm5AGNbhOo8j5-W9MWF0zlTcWt8HJNUsCnUWbgpOtotz4kY0yC_ufDL-kUqLacjaStPjNQVIGD6qcvwQu_PLTnKcgs-KeCx88VLa-I4cmRaV0gpwd5fF-fyQzc8nreWE_v8mOZZGAaKk2odsTOw5S_DT8VPRKbA0pqwPcuoeYLqE4XjMAKjszvNzrRUIy65NlU07iAOpPYdjBpJDAmKRVAvFUMSfB4pOzuIvcl_z7g61SUHhyzSsIr01bzwmCu99sRhuchtALiYs8DKkbnSBzpjLqLWZ5NxOStLvmL3dgA-xeHNHyNBBgF7JwZnANt6S8FYBOl_6CGnYcjxuzRtGUvFquxNU74RozO_MfSEds6GSmNTZGAbFQ7VQp6dGrkwbgkIaDM1YsvZLrNO7_FUlt_IonMsaQleg3l-he_bqCODvbtN2zUE2-a_LPmB_ICAKFS7aaKgx2qItDg0mVdg_75Jn8e_Q7lqa3f2P6CdVUtI7UZo1E99c0s8GHCaDjnH9aQFL-yH1rdnOr0XGdqxVpV3XAfoCrHKC=w1840-h1036-no',
        altText: 'Slide 2',
        header: 'UC Santa Barbara, CA',
        caption: 'May, 2018'
    },
    {
        src: 'https://lh3.googleusercontent.com/mGFzqDCA_DLBhbpzVxBrKN6TxsFXmEeONOh9JJPYl1nTeKnMaXFwlRkkzIxQEGC4va1Zs5RvzHxhf52mnbWVcPNQfGHoMy9YxFwRLuILoiz6A0ITA1xeOTSRMXi4Sy3_J286cNxb2uNiNGfRqDLiJ6AKCIzgHQwjMMYhc_FlAG6UreBy24u1NT1_YWQTPydMI11aWcV4bbNs-_FxA9RLhjSddGfSJe3bTz1BBwOPK-rChlJpIyC6up5NopqDz5YG91wSstD_5ZgffOnGbU8TyDNZ07MqRfMrjR0-Tstf-gcKhJMI_CvRHPRAAc43RVNd5DBJWgY8l23RDgWx72oRAxS3HQE8UErCBtQHO0WB8WSkX6z_OmZ_3JXgYNmst2C2OJpl5WyhkqM0t_QEWt76nNZ8JVFlAOFdKcjvNVQTjJnr5F4LSS6iuhDQ9whixelFdxV_ROGR9H-DTa_sCeoj6axh8Nc0N8cy6txjnuuKoRfj27MfO2OtELbkx4BVqqn8pckTBLaePm_43JTAE15zaT0ATK4V9-hZGt22l5wI06pNaoOQ3nj1uzqipQlQ54KYAJ1132368ndv1M1VKdFgjUXPVMIoVnvSct4BGl5CZE9YxtN8Jnsg-3Ecq-KjG_sUFWyMcWA291gJIA0p8fPp15OoCvIXOTSd5K_B3s8RLv0ZxJ9aRmLnA5is=w778-h1380-no',
        altText: 'Slide 2',
        header: 'Santa Barbara Botanical Gardens, CA',
        caption: 'May, 2018'
    },
];

class ImageCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === images.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? images.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;
        var imageStyle = {
            width: "75%"
        }
        var textStyle = {
            textAlign: "left"
        }
        const slides = images.map((image) => {
            return (
                <CarouselItem onExiting={this.onExiting} onExited={this.onExited} key={image.src}>
                  <img src={image.src} alt={image.altText} style={imageStyle}/>
                  <CarouselCaption captionText={image.caption} captionHeader={image.header} style={textStyle}/>
                </CarouselItem>
            );
        });

        return (
            <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous} interval={false}>
              <CarouselIndicators items={images} activeIndex={activeIndex} onClickHandler={this.goToIndex}/>
              {slides}
              <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous}/>
              <CarouselControl direction="next" directionText="Next" onClickHandler={this.next}/>
            </Carousel>
        );
    }
}


export default ImageCarousel;
