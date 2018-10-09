import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
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
        caption: 'December, 2015'
    },
    {
        src: 'https://lh3.googleusercontent.com/ID8T_IpbTA43plZZIQ75O1OQxzTgU1Pl4WjfOgQhJMD0bGqEeWAwHSFFFDXPoCupDB3rmd-19PGP7o5dEKRs0dkKUDsn2ICeZQN9kPkLTOqF-HLPCPyXtBZDx0_qAfzGnKA5pQCJ0bG4IxyIJU4hcqBTZ9x954dJRX2uZ82VxZhhiI7l45mnSo-qIHDQOMvOcNnm40rhu6imECCQ-Bfh-25Pw2STxmCl1GdzFXr_hRncirN5PgNecu9ieb2vMFn4_vo93uZkON52SB5M10t46NJjCh9Bbk65RXQVUUHYtkhKvvTpd-asN1O0eEhW783AgGNLmYR5DfN8raK2SGbnl8aktgYMLBsb2Wyx9Y4QjmONjrGTNSZueM8PX3_nJoSy3Ay8US-82AyyE86SuODtWsUCAKrTx_6Ur9IEtfx8dfAw0Hd9Xy-cweu_-RRoceCqOOHAGjYrpVbaIA-TSCTck5ogDs00SqRE805FTooKezczEUh7H7CTlE1A5MSv9FCl1wy__lnRtkzNWUg0elWMR5yGi4dMHxJ-tkoQtNBOr7lv5lLUPRvImsQFlFdGb0RgOnqWM-s-0R8nohxh-JiHJscz2fiEdKKZMAxkFdXDPcwdzszQi1H8ccbgEG9nAK_kWCxR_umj8daNrnpGLqvcSOc2HG8dMU96S7znLSKmEG-UfbekOwqU7PF5=w600-h900-no',
        altText: 'Slide 2',
        header: 'Promotional Poster',
        caption: ''
    },
    {
        src: 'https://lh3.googleusercontent.com/sL60OPpSm4H32pdUHTpyjI4AvId8fnicHmW3kuB_TvSUB84WnhDjsezUEcYsfTVI2oWkkKTU9jsEqSj4ERvdMjuCBx9GTtfhC0vsc69caKqFeitjb7e9EQiWDvguAEDVoNWuAvKWL2zBAQi7wS4BteNFhVUBAktHB_8kgScNhz8Ad0mqICGnQcUIaG5B9-kJHZ2dkA7ZJ76ldtNb4bkHe0qHBqWdxvVKAzg_2DHt8qoizv4bOdITEUv4ELRt3PeLU4QbMTRUIFEjMC3k8g_4wEKooumOpofaXSYk1VvXzWWlkDiePfjYd3LHBYXwLHM0X0ky_SzTyryC8L-aQDWg44DOf4BEojHJkpnPVrkKAbcz_R8gSWslc9Kj8dkHduiFuqZ9GRJz5rtYPpSVQVF9iMjxVxTF0PbsrfAomHZ4uESgrGNZBgTR32uexpsSlfxohNB68rL9xDgTRjg7yXxzasrBDJ6kIyzxq5oh1G8ldYTEuwNgBDclFkKMT1LXeQu6k_mANeL-sM3WWEX_KXNoLROOCGg2Y-dF6D-JhcuOapwgiYLXBb8KEDeJY1jG8PlnkHL4-uqELM7gYpfowxsy1M4uu1TabitJsyrktOZnJX_Slof8_6q4XbVC1uhtVCvdV8gz4ll_2dvnsJ1wgx2onQNr2z1TFBrHYYp9mo-Pg3VJlmEz8OTSwavX=s1380-no',
        altText: 'Slide 2',
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
        src: 'https://lh3.googleusercontent.com/ai_gl4geJyhlnHwqLKCXGALG3pBB7jKQWsurylnFjrW8pv82dTXkLAUVelhJ-D1Gkg-l3XnelV454Iurb8ogkNcFt_0XiE-Fc-s63KVmHY9bBLLLNanXcw50Nn7Qoh1vEblzpbnx9k3ooL8AxGCJ8_x-WGB8D9O-9DOVxhrXuAVcafZaPWRACYEY1SyY_vPpMIU9Z5j3jqQZvNXkcLpEwdK4UN7JXqIdKIhtB8skqaciuNY8AXot9DEohI85JuZeO7MvlVJezFJlXZ4DxFCb5uQmiVE9RnpWDOGTyNi42Q8D0jpBxSzXEC_c5p25TJgT9CcLaldA_KIWdiFXjOMwaNAymgnmQMv4F1ENoeDkpVsghhcKSLXBja4WPCYiU5e9q0JixLv5Gz77ZB_-o7XpnwstVi9tDRfVESjfUF6sZpxk2yXzm2sw4AW0isLkClxQzDiCXzlFNkzOKJqJBGhP7ttCXP_6DtJBkT2PgcxBZTrusTaHhyOLb1aSftyNVLqXUe_HYJv-dCeIfeGdwZAyS7x1o2dPiiNgpGrCaEik5L-7AdJfEoCjw6CZlo-QU69qWZi65_GH3zir2204JkB6bXQQJw7qX6kryb9uOSLtQxKfDzCyZhDPyr2rpi5m8Ox7cKS9WNOGZ92QxQejXno3dQ23Ex0qqUyqoU7w0uwc3kVosD7f_oTn0qbh=s1380-no',
        altText: 'Slide 2',
        header: 'Promotional Image',
        caption: ''
    },
    {
        src: 'https://lh3.googleusercontent.com/mGFzqDCA_DLBhbpzVxBrKN6TxsFXmEeONOh9JJPYl1nTeKnMaXFwlRkkzIxQEGC4va1Zs5RvzHxhf52mnbWVcPNQfGHoMy9YxFwRLuILoiz6A0ITA1xeOTSRMXi4Sy3_J286cNxb2uNiNGfRqDLiJ6AKCIzgHQwjMMYhc_FlAG6UreBy24u1NT1_YWQTPydMI11aWcV4bbNs-_FxA9RLhjSddGfSJe3bTz1BBwOPK-rChlJpIyC6up5NopqDz5YG91wSstD_5ZgffOnGbU8TyDNZ07MqRfMrjR0-Tstf-gcKhJMI_CvRHPRAAc43RVNd5DBJWgY8l23RDgWx72oRAxS3HQE8UErCBtQHO0WB8WSkX6z_OmZ_3JXgYNmst2C2OJpl5WyhkqM0t_QEWt76nNZ8JVFlAOFdKcjvNVQTjJnr5F4LSS6iuhDQ9whixelFdxV_ROGR9H-DTa_sCeoj6axh8Nc0N8cy6txjnuuKoRfj27MfO2OtELbkx4BVqqn8pckTBLaePm_43JTAE15zaT0ATK4V9-hZGt22l5wI06pNaoOQ3nj1uzqipQlQ54KYAJ1132368ndv1M1VKdFgjUXPVMIoVnvSct4BGl5CZE9YxtN8Jnsg-3Ecq-KjG_sUFWyMcWA291gJIA0p8fPp15OoCvIXOTSd5K_B3s8RLv0ZxJ9aRmLnA5is=w778-h1380-no',
        altText: 'Slide 2',
        header: 'Santa Barbara Botanical Gardens, CA',
        caption: 'May, 2018'
    },
    {
        src: 'https://lh3.googleusercontent.com/2Xoh4D82t66klCjWH8LRHNRozAQe3gaOhpnBkophv5H9HSzqza-dhWRty9zxJa-L8Ze5QkoL4hsD88dVootHuZUNzrNDtAAaetYJDRPzOlWsuBuZu58h_k67Thxam71nDFf9_JDZ4xIwwFmoWidmgwoAniFqjO31WkUNVeUhLmMbZ2BC_-cbZH6yzpt17uYM8N86XJpSbM6jZ7nu3fuu-6-tHijVp7VEWKjikLgezp66sWMsCn0iJbBQhXLiFDj-7UGpKpmar1vnac23do9HGhH_q_biXCtoafo6vO3IOCMt3WPwvbp6RCoDwttB3ztERugQkyrGR2DLaksJNEH3obCdRNqFNqNfd3HUdMPgOdE9hLbZMf7vwS9YV6MdteiPtoS0g5IqQks4yXMHTHayqTqQbVCbZWCbBEmyskhbLcV3qKynBdk6yVbjlA2ED0QmpIkksP-4uWlQtf3aqO4f363nDhjlMrf88QUURqbxuEq7dmcVnUIg2P66SHvG0EIiOs0Tr7OSih-r9V6W13isuI7KjwCaZAIgTGo3Ol9ysN3qunJZU0yUx972MzDg5kE0ETX_ag8qamDoZffyfZznd6sgv32-C9vopYbw7e1nXD6MR3sStANqwQ7qXYN0eIoTbIjVQ3kiG9c9cHrgQMlHfxH8navkoeQweBrWbLHl0791wfhT7PSRl00u=w1840-h1036-no',
        altText: 'Slide 2',
        header: "St. Peter's Basilica, Vatican",
        caption: 'July, 2015'
    },
    {
        src: 'https://lh3.googleusercontent.com/j3FlgMbA6pWW2yfYqNK8I8L4PjPdb4gCKemi94PU_vbDx83nBtCFqAVPg-Q7LmXIZwPP_K7Yrp14ngImyf6OV70qqfCAj_kZFcTV-7ozCYbNXrWuZIa5IWcqvCFYxLZ8o2RgUzbKdDulIe99UV_LkwWU3qKm0non5kRKXTdbP8rLhBlwjL2Vs7o8rh8nUJZUPpQQNNv0EEto1ZDiL0_AnpBbSjCbuaDMC5Wvp3rWyoQ7r3398JxbDv8Di73oi5D4r8t_lmuuWr6OLUGzqfe1Y2Y82VzKMq1pLDMEzO1x5Ry-wQfOdiRfdMJDWzDLa4WseBev_x8ICf-w8P_iC-ZLBij8oh4P0QnwMK-tajJtJL1sket4_UPFhexFnsQU7ifnojtc3KSt8FkkvtL0lcJJmN-AdVPKvFPRNIisod4BoPvNn06htjlh_dcC8mUGPICdB5_LmvD-5e-AboHZNvhYM7iAYghuvkZAaIcm7GaY04tQO5C2fg-WD329Yt5lz7OZb0QvELGd-qMayV0wZMTIyZZE9DS9I_9RtbEl1bekQI51Jhcvqgr62pGtkPwocKFOtE0GqD4ggCNLH7xnZzpW1bF6be_oGIEqrUEJVK1T7FLJVycUAdKPJ_0_m55lHbOQlMz5yclLamjr0_R3Ap7qDcKd8CwOh6i2TCcj8rm55GOF2z-nUmfrmkwY=w1840-h1036-no',
        altText: 'Slide 2',
        header: 'Cabo, Mexico',
        caption: 'December, 2015'
    },
    {
        src: 'https://lh3.googleusercontent.com/iObw3SDECBfr2WzVE-ek0vY6O7UemHKmTXTAhlGmRpqK2l5VvlXibSrX5v6EiuDC2jcN_sKKKXU0PN9UHVrNBCxQMMi2Y9MvyE_zVLmJ7EO3z2asKNwqAKqO8WbnoGtrnLRWkx_KTcNIKJ2awsK8t7JOfLJMxWmMip852-v-eCtf5oKp6U_Nt_RRGXXhXKc16dh2utFB39Dimo_r6P7ZzoJAQYe7VwgmIvs17dkcQUqvm1wiJIu-MxoXryIqWRzTgPQn-cxgy8ml6AcvEZS_GlSYE4yM3qP-3TbyH0aDdR6p2g6cIaQ2kT0yV5Ryf7Gi3uRKKAyxo84d-ydOQkGpt1nfrtbfFxoIN-SkV3pq7fbvejLhdthjgQEi0jUPoPEEs_qWwZTQ4TzDgQqdkMXbIfhNPVeE80OEK9OXGdUpuRseSqauDSV5zIh_BmMxFmv19BAncIQfGXu0PCPhpqwDP_5yHUkw86yd_CnaZmMr3mULi0Gh5K4YbbyvGEqfS-p3XgOgFzpWj5Pab1uV0D3HaCHZpEK2FqQMqF2tfLbuLsJ44Zrd4MysZVcSRlZHaEwup9vLC2GUBKChEu4hPX7F_x8j2w-2Fdl5unqqO1Dm4WSoPbrTd3IQfBqhLmKAztpRv4zb4AM0PgQaaCIPeFp4h2BEjFTEtzb96cGPhe3MD_b1H6yXYt35P6Yw=w722-h1282-no',
        altText: 'Slide 2',
        header: 'The Dark Knight'
    },
    {
        src: 'https://lh3.googleusercontent.com/OhHhxF1RDAmOQa98u6nS0Y7q_4GcUoyH3UprwCWbaaHFUnYqEWruPKCDHLbyhII3215FYvRKImDUfdIR222HWgipyEMuJhylIWs_liFcZbWB9m0XDDM4ppkvq2W3W1Zs2k_eL7ajhcWqr9NmxVunGjnEc8l65HZlZT8nyByg-JHx_1MS2i_CG1DuK71zV0IDr3Y6sVrcdBweZ6N3oFmTvfcM7-KrDup-uDVeYiI7szSvMzCuo-wjgX5sVwXbdo5pE4dAwF77LGSEcrNyotEv9gqJ3JPn-1u03fGHDartbRICSwuELpHoy5OJDpX9C9jaXkZajsOiCJkZVq3r44obk9lQHnN6rMpCtqayfyo515e_yKpVyrSDIHtDjcN8hIllKaVpqBbGIV4kX3mfO96wh83I-qhsZ7W_vrj3IGdI148UkYs56x9T6t-zHlJWLvQbdnBzqx9kJ6X8nGVmslMrhcAfWJizjwF_ovNLL09llxafwPU6XLIEhAq3yyrcRLpUvSS7CkajaTTpZJwkNu2qgoKqyuw-m1_X9Ikvwq7veK3qGSpknJw6kYTUV7Bgdc0xVpHtt_bOUZxD6nVliE0YWevmWmS6h-BacpdsAqBPf2FBTGHrta5m3t4gPKI0h414AgPNPBly4uXUeVJhTHVn3RH6ms4-6tKhLdy7slE6yO7m3v4Nn_hR1D7d=w1840-h1036-no',
        altText: 'Slide 2',
        header: 'Isla Vista, CA',
        caption: 'December, 2015'
    },
    {
        src: 'https://lh3.googleusercontent.com/n7zTmSSWrnjTvJDnwH57ydCt4zBmQIY9OY958Nub2Czcmng6ryKk3sUwCA1q2LHzOP-587hK-qE4-T1rOYqE069aOX8SVoZb3UjmlPJcO0BpqmBnzC_nztk8kGt_OBCabNcWAn5eIu7UaGrt8ecS6RsynNFXem5BrQe7hJqTrEzKXvbN5wcD-Plc2f8xalLL1gsxvXC_9TI4_Tr7gFkykHITNp2kp3UJ9erb-orjtvSjoqwy1gXzy-6VYKgU9xyZdAdl2Zi76R3q_fciza8zw1RKdnMtCUzcdF9YoM-JEBAQizTnHfvF9hb_xdbCqwiW2SoNz5KqsuRNYa_HIn1McgYncnpfWr4JzqKqg04dKRfaBMdNYgvhlqL3vg6mtRP_95uEXIQqR-4rfeTAAcpfydWfR1Xqywk6PBTk_HJz8g3PnjPziTqHpg4FWjXo31qcUdHzhSOG_DJvMpaHYI_XD93JGxAxOjoVKtCOKG-SHV1LR9MTRYJW0tW7-6sFwxx7ngcjoaYlrZNcgfy8fT9nfKHOSZCsNiarLrpL9wIETD0pIwEduCt9nYyO1APapGhXDjOZNySL-gHxnRkolGlI1PVEoorkryCRwfODQu4lLC9m7P-Hth-AAQDaWdDr0wcAu9hg9vjZNA5DWxtCOIUvxI4ZcLld0gfLBbNFmAoXXIP1PHxZ3mUAs0i5=w1840-h1036-no',
        altText: 'Slide 2',
        header: 'Florence, Italy',
        caption: 'July, 2015'
    },
    {
        src: 'https://lh3.googleusercontent.com/V4Tc8yo-IKJh4Djl7Z3GuUWl3DKsAaz8DmJzFaXvPk9HZLixe3E7ho_Qwma_Q-EUILHrA7c12qQuX_L064r97lKaO-0MqACQmaOSHIHpj_p-Hh53HadFi8rqGcpII6J38xmAPrfGWQffdeRdSB4Og7X6S7b4vVJdp6lTimAJJYQk1KgEsejhxPHWn18luBruqbGtyoof1v6hFjEeg_sfBcAlQXnsAw-BjmqI97efbZYf4362R2R2v2dwzbz_doue89pEV7H9dbqxpgNMU5p-YGEg1ZdcyRhOZWZL-JFy_tXamYA8xk1n8LRLlCLL_0jX_SpYg5W5HaAN0J_JbZr-kAeu6gEWyRiA0qJgthUWVi0WsMFMrdvygIubYezhZbMEbQEvZvN23VUegow3j7RbM9d93ua1aakY5opBe805IVXB1iNwOvjTDCgdo5Po0ekqRYF01ItYjIxBiFy76p__DTteTiIKn69rAuL506ZlbfFM_akIBZvxJTnZXONZw1jc1TmUTubEs9h4hdU_XdQVI2G2zuPIWoPvmhXCt2aH5L7m8Ui5okXTrr5E1KCQVyOAdMJsHWdmdqSefOaLgi2Qkx1Mipszl1Oqc0D-jdTnv8iF8-VsnAjxT4OEgNWOTRIUbkPfBUyWLiT6vKuwEtk1ekUa_JGABZE-hFUri9Rjh0U0xk6usQWkSF6X=w1840-h1036-no',
        altText: 'Slide 2',
        header: 'Lebanon, OR',
        caption: 'August, 2017'
    },
    {
        src: 'https://lh3.googleusercontent.com/IdFJuHWUTrj_LX2cktNLdHnx9zd3ueuVyC2ScfCCIIzj2_pepcTU65uJQ7RGJTVruhkYeT2zSUZ4_k09w61LavT3gAEEkABMGBjEdY3enC4V0FI0_PO2FxGpqqtI-sqNAi41-MoSoLvfF9fWhS7HkpVK92sV4oVa7r1kIQzEvBStpB7F6OIsm6MoZsd-yShuVKUNSVq9mC-83Vpst5zFWgyiE0CxvFddAS2qjKDcfN5RUzZzJ6xi7k_uXTDjQUKQt2X2yQP5w-LkindYZ_YUOomgFIfGxfVbAOIbhesMlUoXM5kcBH6-WsTvbYG-5T9ntnwHAn5o5WW4eAzk6relqKeGEkf89EZBmPbZTLL3Qy9pKLJUmUoY8xKKOn3VXlqhy2DZW77TqCr9BkF48GTyJ4ohUzOfTQgoOYikPI-uGVJYaEr2WVo-oxCefjgqzs25liU9Fi-j2qHK_JXg024C1OdvEZB-7cYEHObH8pK54mVK_S-7ExxN5dn9xLK2yM6pAqwcQI8cPUNwM4x6bYmYHPyIUCeCElZQl4VkP_XULB7XYxcLKZm_XiyArhOMEJ25-HaR4DZzcdg2t-7zccdiZVCMZK7Pj8FxMoSZjmvyJU7ipApO6NDpFU7a2eUS64BbplRDx66VqyVXLsTTz9LylynI3ffkAvIpwpvuDvZrqhLbmh0LA6aWngK2=w1036-h1380-no',
        altText: 'Slide 2',
        header: 'Boldy Go',
        caption: ''
    },
    {
        src: 'https://lh3.googleusercontent.com/byApEi3vYEvK_ynAGxEveVQiL8qX27FHIKcoWjJ8TE_XOA-40nbsA7OIb_SxZsMXQgZojlITXUVuy6okDolokCkIj8uFP3dRG3R0ihHeXFmOeAIuIaaeWuRByx6IX9SnJBq4sAJZkhsqbj4SbRPio15l3oBcauu9Yjk-YQD2dog3wWKabiPn4Ck-AoSILeDNcmscErmnLVuHE-bRKddqizT0yzFaDt1x6YuPKMQSC6hJYN84Y3njPwwRZKOav6G0MEMwUnpmnI08dwyj2SKsRtRaju8FlfYa0NwWyV5p0F1wrxESEnboNLJIvjq64giQz6qsYZYXfYGvFpmehjDY8DQ0jCex2X73Ghh-oEqVTjP2yOjX0SS20j-MpaRy7Zv47WLyIFfkNOM-LS2u2Mji0bBrH4bEPgZHU70OFCI87_d1HcOWqsCaJUiuPzSoEYGWZm9_7WJJfEEMf0_Y8XqKmxSQJ4bc31TkK5yHjb6DaeIPaAYZxIbsrcBfJX-OnEVXyWlgcrTNFKA9wCUMfivJl7KW-wiD4ZCKrvk39gHCv_NpM840Q-MzzYUZhtqecW1YhQPTjEY-Qp3EkZcp_Cjo_qn4sZqaFhpR6dJNm5TI2pRkwVY3SWaUYwzZytTbAOwD3_IxvRZBmW7dDfEHpRrCnbxXAik7kT18_l7Hy7vrSaxBpY_HyVbpeY8Y=w1840-h1036-no',
        altText: 'Slide 2',
        header: 'Cabo, Mexico',
        caption: 'December, 2015'
    },
    {
        src: 'https://lh3.googleusercontent.com/WSsJNhH8KhkVoQ4PtdAjRjUgRVBzYirzm8xdR6KX9jLxxkSSbL9cPmTC1cFZtBVKrUI7ML3NIPt7b6TGmBiblfN5WhlONBCRpqOEvbsxu3BRlZRzTEvxf-4rmoOzrBoJCDcEDepj4nWIkCP3kpXonwHxWR3T-RR4YrJiZl7kHdwvgOn67gsnQKOxNXSYYEIzQ_8UPGPJd4QHUcSjDtek0M78V8C8UWSZOJkHTqWz8MpbH2zU56PnIbR05IXkijhPCLaEicHmdpRzazLBeRiuO4pgM3nRBtEudHun195KCYoU8JInqfMfziHEyeOJ3qEnuldNJRjPEia1WhJ6rWxQx0-rMm1Cd5SI4s7oSlJCq4xPAKiWoXpn6NIoIyK0j85U8dfyBtH-W3hE8_tlEsC5srQpScExyC19zWiOz4tY6QbgQ9Ae36yhrYOnuLwNVo2CJB3q7X3GaEj6cAvQ5RBWose_4BSjjafQH90uSU7HVOUnKoPgKWUHGV7ltdRWbG_PJFplhyvO1u6-oOfKl1MlhiEqfezbTSYcmEeOhPkZcmAYcGXGKvdFtooaYOQBFx3JG0T0Up5oWFhkMmd693hakefuNQ-C9w6_tO7aszekG3ZLAZQ8hGv9l5pSAmA3X2JlWFl0xZ_yzaL69goW0SChSOP1Af-2g5yegaFKdoiLg1tQINSmMQNdXDMG=w1840-h1036-no',
        altText: 'Slide 2',
        header: 'Rome, Italy',
        caption: 'July, 2015'
    },
    {
        src: 'https://lh3.googleusercontent.com/sLuYYozHlnMMvl67nNxDK2OuXfQ0DohD9lsvGvd5ru4sL5M2HuxKFJh-c-g9L0giqN6_ia6iyT_LBThP_dzK-uuK7jaJyccJDaZ3DvReQGZw8wMWLc8Emr6mk4m32EITfMv2NuwqAZU5OdbLjBVmqRvY-8La56RMvN0pdYP7JgeYNjM3NyX47OpHvwblSoxAk1GPVwt2Jmy8LgOJ-_Jpmyi1GIY17cjM3isLaOybVczVYViVQ_OSJ9Q1mlvLCvqDanV-YA3qPWAg3MzSgbBEdhwetewqUricK0N_h9sH7EiN0EPuQHInZLmg6kRlpPSZNCeK8xNnAp9FSjugQtsIrsX4Bv4QOyLNQAXvAIEu4ChMOcXP8sqMKWaU0MUwopBd5E95Qq-XTv5lI1t46ple8hzvIYPV7mUWhXnMa1KPIqoUA6iWRkA7ioasOqSfuxYL89MNcmnTUNsX7Bo8v94w2CSHU14lO4hyAn7pt6Jf0xpplNFIDw8DZarLlieL78OA0RIQzKQOHG-5Tv8Pq6W-sDE4QDGy3qYjLWaSXkZ33c3S9PX-zjsBICIcFoKNIa4sBrjM38tqyR2PKiLpIxvoYmLz1Hr_11mtePU7IdCgYzZNxkLAN-6XKwRADM3wfQgQ7zzz-aZEUEeXn4rPnnJq5nolX9UJHQMeUPDE1TUV6JjCtQc422dd0719=s1250-no',
        altText: 'Slide 2',
        header: "Hydrogen",
        caption: ''
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
            width: "auto",
            maxWidth: "100%",
            maxHeight: "50vh"
        }
        var textStyle = {
            textAlign: "left"
        }
        const slides = images.map((image) => {
            return (
                <CarouselItem onExiting={this.onExiting} onExited={this.onExited} key={image.src}>
                  <img src={image.src} alt={image.altText} style={imageStyle}/>
                  {(image.caption) ? <CarouselCaption captionText={image.caption} style={textStyle}/> : ""}
                </CarouselItem>
            );
        });

        return (
            <React.Fragment>
              <p className="text-center text-muted">{images[this.state.activeIndex].header}</p>
              <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous} interval={false}>
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous}/>
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next}/>
              </Carousel>
            </React.Fragment>
        );
    }
}


export default ImageCarousel;
