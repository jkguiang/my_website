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
        "cover":"https://lh3.googleusercontent.com/agM7xtkvugr9JHURBEjlm3vPjV_wZmM1OQfl0xjMd5qv23e8wwvwPtjcfMuI3x8E8wznlsFUuKnVteWFKgHlaqpLQyw5FWY2Qjixwj5nH6vN0j1ITrucnjpCbnx6Kf_CUAapoTMnQg_aC-ZiA3zCazu8Co9roIJRKX1F4V8lKI7639bZeGvDkapBLEfwO1RseBdXHRZXTDr2vl3l-P2ZL4ZaZORF9lJXYeFjB9eg8dPrusbc9CIIDniYU5PhCXOLVTZEVeILisiggZpzbR_j2mQ4XpoCzSYy6KvBN162EsOmUvZL_tA5u0NHnCe0wbk9zNJZYabzBaPAiZ3NLftXL7Y5mF_cj2mjDPCyVFqA_wFzZpV9jXLKx7_OKrAWBvVU4YFlAMVUe1t9KhGe9KZZ4fj4diAsZE8U-urggXcoPxJL5aLz8OqWtYB_pv_ZmgHtSgR64aOqfp3_yXfso4HeTechywtGC7z40sWyfgqpx-BAX_yYxi4xxKoik1i0pp7fvfKbMBePz96IRCzzP4UYgZgVEQOQa1IO8RXhBemNL6rYhq-V4BTxtI1YXsf7ILIdtCiDNm67Sw_zf5xX0IPubkR9qkIhGBS-JAB_re7kaksPWsomUhtIbnvtWM4gvmGvE8kb1Z7iDPY7dhvu3LBKOT7IuFTVzvh4frWbUfH1vFlSN1o40mJSRhJEHlxLeka1ASyUrcU3zPf3VPkkWg=w2454-h1380-no",
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
        "desc_long":"Integratable provides useful integrals on an interactive, modern platform. There are many static, PDF integral tables out there, but Integratable uses a React-based front end to make integrals easier to find and more pleasing to look at. Because all of the integrals on an integral table have known solutions, their definite forms can easily by evaluated using basic mathematics.",
        "desc_short":"A React-based, interactive integral table hosted on Github Pages.",
        "repo":"https://github.com/jkguiang/integratable",
        "thumb":"https://lh3.googleusercontent.com/LhlQV3xboAg8Jr8oU_p_RlEzE22SEtMAAzyFP5iUf68miySyTam1-wkig9Qi_lCy54DeA4dOoF6rfTANms6rU_LL9-dZzBC1mpTCP1nB0jQajH7GbbMERScRgbVvMCP2HIQ1V2NuKGa0q5YjCVog_NlzxzY66Jo7pHJQesV7pwH4HjgKgViAlh0S5MRqZT0oCLpIjH9EnBkwVrFlf88GjbJFLjFLvIBm6XD18AHw2-gB6xgD2S8aVQdrrO0Miefsizsjo6FwtSz-7U705611nAyVQDzj7cs8XbjRg-HEOWmwig9Bg3UWFmZRyn-o2UDK1sfdAHtNxAPgluy_r0RWLBGTMoRMEeJ7CoQS9Xtn-pmBXR2Y6dFJlDf1qkCQS_CWbOf9ddeP41IIIkqoR6gzYOos4AqCwlyFxVeCE0767GB1F3Jz-AVRBKhkby3keYhxbUl7G3lMHF-q-DxDBBo-UTtcwXvKcbM1N934eEH0pChxMYQDkQ2G9FjqGf4a0j-EoD0_pzHUD754ZCylb-l5K7e8blt44kT0FP1MiXpO2FP5CfcjUY8JGZuuEm_hBaylPjZ5jruY3Q0b6vMyjJYolNvzfSaNC-jt5Sbw5pFfNiJXtnDIJqQu9OmqmCdHUfBcPVQjCC7Szpr9DNONSZaRuhVJz4JpjwtakYfkicecH-vLhNpNgbI2vdJ7yx8VlXjHi1ZYGuyFu8rhPa3R0-btgDeIx5bqqVJEipfBkw=w2530-h1380-no",
        "cover":"https://lh3.googleusercontent.com/J7Ug9mFeEnuGTAIyZkEZhwb4WFhFNHj70IWh9E5DiIIBSbhN8U4YjTwpmoX6H6H4PMkOzZk8paJdYyzztWQKuf5oTpHhwys_6jzz3MNg-ansjT3fCY84YKcdNE7D-8gSh0i1hmWU3Vh_aLw4dgfkMyRapFsDQOgQHOysmaVFv2wbfbeiTPj6qN3k3d9Ec4NhU8D5fVDccOW0ukuqlgY56DEGV5DEP8maUPorbgAuIb6zLI_or-QZEAmhFaVrL1lvdYOYKZFyBYk9wSiGtGl0t9M1y1giKnRRvvq6hTSDUdRdTXlkVOlrUjoLz0FurOVsL-gOIqtyVhpYFABDk6pEP2rxpN2CmEUZ33uDa2F-P4VcQ8qKscJ75BI36Qlza0vqbwCFRAF55x25jyxYqqNt-l8qQl151k1pBZeNwz_Sg4EF9Z51u7-MvLHbxMC6tj0V24QGFWL6Bi1hSecY1SpnwqDUM9vtJBgKIgLuRkaC1cPIwz4QuXx2CCoJd-SjI86VJQ1okTScnqfNNn_hHsIBw9_4u6z_vDvcyRJNAi9MWq_PF7fK9ZUkf_xRpRliNaIp0BrziUfB2bB4C0Nnbsgutpk_10kYGr2JQxOkqYG3UKAW_u8qANf8i7Gpa_pm1nk1u50173BQWfs7ftAtdmRNTNa7b3ixpjTdj5LHVpfrO2eWdXuIDrJs-bYc0yiQHGTW7DEQGbCpFM086MnK8Q=w2560-h1346-no",
        "highlights":[
            {   "title":"The Website",
                "desc":"Integratable is a static website hosted by Github Pages.",
                "url":"https://www.integratable.info/#/"
            },
            {   "title":"Interactivity",
                "desc": "All integrals on Integratable are handled by this set of React components.",
                "url":"https://github.com/jkguiang/integratable/blob/master/src/Integrals.js"
            },
            {   "title":"Evaluation",
                "desc": "This script provides the final displayed solution as well as points for the plot.",
                "url":"https://github.com/jkguiang/integratable/blob/master/src/Evaluate.js"
            }
        ]
    },
    "AutoDQM": {
        "title":"AutoDQM",
        "desc_long":"AutoDQM is a statistical tool for Data Quality Management (DQM) at the Large Hadron Particle Collider. Before AutoDQM, DQM shifters were tasked with looking at hundreds of DQM histograms, looking for hard-to-spot issues in data collection. To expedite this process, AutoDQM runs long established statistical tests on these graphs and outputs outliers on a simple, but effective, GUI that expedites the shifters' task.",
        "desc_short":"AutoDQM is a statistical tool for DQM shifters. It takes the guesswork out of CERN Data Quality Management and comes packaged with a simple, but effective GUI.",
        "repo":"https://github.com/jkguiang/AutoDQM",
        "thumb":"https://lh3.googleusercontent.com/6NTm68cjsnF_WuP624t3FqFwlm9hp24MErkVjy3TuEiZ9qBbkCpV3Ez4U_Y5mBDIblD7BbFa06xPzEsMBgbibzQJma3zfhTzg-KHc1kAK8RdTQpoaeqhD-Yk1zo9R25smWdzND6QkxoGeBQVLLOPZFd5SkVkfhUxBQQPAY63pcmW33V1yceUw7IhcSwcGQB3092cmPadFO2KHT9g6YxEZnMC4eScB1AGN2WVSMachiUotGk1AgwBRoVdPajYkjAeg02402Wlzm4G-cQ_n-1DPVsa0CCJqBjbPS9LVXLHA8FibtCpRoHoyElwrDQrTHbGPlCY2pjdTqnkUXC5M_FQYgiAVoTkUCRfY5dQOMwkYuQWd7f97sJKcm0dm5adnW1z2QTz13VucbUOnE8kIM3EWaxrJLENjPUwMJfGqvg2IF0DewnUeqauaTaw0ReEU6NnJRcPpJbcGkYk1X5LKpWPA5b7aWupE58Gb5RWZ1Vxc2CogRN8nu3bbwHVjV-3mJfQDoZ5Fkwu17hZnrUiwY_R6R0A9JR1DbkQ_GYmUpn5jOhksDpzeOgOqQPX2d2g852OiWhfZ8ggX7OmFD4ob190GHv-jzfj8RAmQaUe8wNgxjKan1sfqePkwRBVOHQjPktKEf_57acpEhZy6luL4AG_sXoLtd9KUMdyoxYI5BA9qVlvyKynLFa7ZWVt=w1306-h890-no",
        "cover":"https://lh3.googleusercontent.com/i0DolC8dw_tOA-GFUdQBr5kXwj-Swd5BqYZgjvcUkHtaVvphMPEvlsVvYDgivHRmc7q6f5qPC0zvbNfu-izESYcq-G3-2iWjf4YwhxGpu6IC14YRVor8K-YhrsjFrG177FoHI-icCSsgWA6dfiZfuhQxXzY1KowSIhYrMFCNBYiJr8TWrDEzcVAGHraUXL_1ptKA9t8p35zhOqN67RCnpk12ZddE_4mqlwZErQWddgs4C9LEYFsq2p65zgY7DyPKAyrv2uOJlFFOLtT5EOAy9tG7IVlS3mt2pssNAx7oFgwSB2TWnWH2cq2RIHarWGXlFqIrLbeNudl9GlIb8cus3mnsEcTbEXeEZlx8RbgqTxBXBHs6RAzMgw-Tze6TywoPhzI6khL4Jdl6582Daowv7hmNH27KonP2_kzoCJ7gF4ZgQFdnrIiboPSgqHy4BYEm9JZUtoeUuxdV53I0be5slbZKyYfaC4F_Ns4LSgo-bGPvIBwQpcZ-akNKi-q0o07-ikfgltQcygOD8ToL0XvWUGxjpDxGtS2YkvmiwZqcW_i-Tyc2nfuX0mA-haOU8DTQnAFd2teSYNyIIW68BDJxqAvOiXYkmsFTiqZV8IQTuBL02EsyMZdW0cgLtGNQl7gISB7hiaj9a2DkKfjZN28izAdLwsrqPr1kxKMcQQxnv8SKIedMjsUsHCSkEHhmybgTk93G5WR5VjVb2n5VjQ=w1440-h964-no",
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
        "cover":"https://lh3.googleusercontent.com/iIojJb3ij-_64pB-nSr8e11_EVcBEg7mUI8vdt-0JsMZitGJtC4LYQM-4DdsXS2bWQKUN-JqtE2ObYLe_8iay0LN6Z204uGurM3s17wer8-Hif-o0WWsdTfbEchJtnieHmS6Qax6iOXejP-AxYUNSLNIeM9k_aAUlC-NlwbnzQhtPSqGzEMSvyNMQ11osPiX3js1z1s9Q5CJI9Z7eyfOhe_1dML-foNAafTmGrdwvadl4droVyownLizoUgtbej33vwA6RxFcKrQJwsvXEXpkaCjohhnPINENVvEpOeS00Qn6vNANO6-HUUIt3yGwBxai4VewTKTiIP4prmNzuROT-_rx1KnTF4gJhrEOxRgblsSYeLkUCutBA-4DOz-MLkLSiKUNPy7AssndrOEvfc9AW-VqHq46a-lJWDZRHdhm60eIRRAu3P7n3mbW6uukNPYzaCnkpUUfYSvPKq5K0BRCQFmTZC3GSwIWU4Ap9un__cjDp51xS83aRxjOJFIiwKd-2yDl0bVc1QAl1SudBGD_uqEfOxyY_BFYoF8FNCzc2OracAs8lt_uVPJOfLRCy-___FBo69qaNYK0eWHmKA_jrvejNwqQTwCoxXKr762OJ59mDZI_yyZYJxZPGk4sHK9OOzlAuYCJeR3x0qU4Yns7aorFy3LM9iEINHHZIT_fTeI6g05LLV3KNJFoNDcra4HgJf9Gxh0Gfgw8T3lQA=w2404-h1380-no",
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
        "cover":"https://lh3.googleusercontent.com/5yT5h_QxkMwt48heKvSXldbs3A4N2rkz8JlmzEFp6wjMglYothlvdUrJKSHXBS0sKti6Wi_YTbQ4qWvJGboI_WIVEeSi51LBJsnO9neS4OxAyjarFDKISqLcnkqD8woMFyB2MbWgk7tj3KuvoHcVYdqhh2Fp8LBFnHLqKIc4ZmupwZs8oksnpR4WoIA30bjRbjTxoie8VVJTzQ9YP1C2VoDqby5lqY9F44MseetSf3mZIfXfMdorJ_he40NDYZU72zZphKRVGD6P1dlp6WN8M57A91_J-ODUAHWVvLeGyaMyZgNpCydL_9SeEkFJY2B0zeApR_aw01rTjAJQ5Lb0sOtEqTbx-hm04MveTjQgmyTLVXckCRJAPvXf96FHK4nFBiJjLQIrxysQYVq3tQuqtcOuFxbZgSlr8LAXabdp5t7wI5zL4lq0X0f83sorvSmJcAmq5baA8TqWKLOvmJOtMG2I2dMwkYjVNJhoB4BNGl0HrGQgGQFOEvsbl1fAWj0nE2Y6mzGkgM5qy9y_0upfSiqwbqhZZfXkpgQHBamkQ_XdPpkmgnVUvZEmgm0ZOjtsrmWn48eHZhNo6pxIWIq1MfQwNiISodSoTQvmGRczFokprWoUl3eSrvHrGZkmwez7ozIK1Invf0zAG3vjhXtHDMw0OLPw5AOug142BEeB4lFkqoy0a915MySw4cPjQ0JtoV8qz4VcojToqeGb4A=w2404-h1380-no",
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
              <Imagetron title={projects[name].title} text={projects[name].desc_long} buttonText="GitHub" buttonURL={projects[name].repo} imgURL={projects[name].cover} />
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
