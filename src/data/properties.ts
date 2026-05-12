export interface Property {
  id: string;
  title: string;
  status: "Concluído" | "Em andamento";
  category: "Residencial" | "Interiores";
  cover: string;
  images: string[];
}

// Helper to generate Google Drive direct image URL from file ID
const gd = (id: string) => `https://lh3.googleusercontent.com/d/${id}=w1200`;

export const properties: Property[] = [  {
    id: "obra-1",
    title: "Residencial",
    status: "Concluído",
    category: "Residencial",
    cover: gd("1wJrOWrZJrz4kt8EEJS44N70jNfnlrQ95"),
    images: [
      gd("1wJrOWrZJrz4kt8EEJS44N70jNfnlrQ95"),
      gd("1Xal3SUE8q2kN8ZGuc8RbkNJmmclyRUu_"),
      gd("12Hk2fQW3Q0LgajXIfc-j33GrE2zMllm_"),
      gd("1oauEN3Jsus7N0eCftuDnYFdtMsOw8nPb"),
      gd("1tP29qeCFe1u_2-U5WUS1qgVuHBIFOXaV"),
      gd("1cTwF7nuQ8SbAZhylXWup-ud6i_Qzyoou"),
      gd("1wZNmnntibiZV5zSRGBPugEwkoHfv7XWi"),
      gd("1Ew7cebe4PnuZma3AdA6u0oaK7g2D2aDn"),
      gd("1mpZ4gBAdQ_h6yxeyVBAsNmQQv2dVYubG"),
      gd("1c8BPi9DTSE37kIaKqcuXAsksnb-NvsqE"),
      gd("1LzQ4xgvjrbo892edNWqseUcsFcEbnP1X"),
      gd("1Opk17PEAXFMkDzaMMYkJ1gzugAOkPH9v"),
      gd("14-t5s1-1XgC4qcRBeKGdR3YESP-VD_FP"),
      gd("1ysVHSVC8BhhjMDYM0W1MVY6uGPOeTyPQ"),
      gd("1AzyVmBdqHpktoQuU4shvofPza7zDYhlU"),
      gd("1E79HZJdknfw93uJvnU3e_ro3KE6KGh1M"),
      gd("1oXv2OvapvlYzgUWGoTuV5NF7q__SF-x1"),
      gd("1XG2EBt2Zt2ZvhtaxRB2Im-NMnmQuzSF2"),
      gd("1m6R4fKomIyFASuwLkOGj4jofuON8MwQr"),
      gd("17X3dZ9-4jEDbR2x8m_VIFzvy8JH_bvGf"),
      gd("1upKHPfH1zZNU9pcZFs7Ep__qz8cCgao1"),
      gd("1p3P28Rz1QOtCJXVuIk1F26jtIiGyf1tY"),
      gd("1cxuHSwJVLWTnDYyApajf5K_oBL1UgJlH"),
      gd("18k_vJJEG5pWBUkLBIyfh0e6DSxbkAkkj"),
      gd("12cK1292PRDRmXV0qO_VSCo5ZEfvImyIg"),
      gd("19_NeI1TIZo92JVN2g4rTMt0Mvf1auITe"),
      gd("1z7Md24yE_gMR8nhuOXaE9egZVKM_4c7Y")
    ]
  },
  {
    id: "obra-2",
    title: "Residencial",
    status: "Concluído",
    category: "Residencial",
    cover: gd("1Wuvo-ECuJOJpWn7Hqe8bbVj4YIYQD9mB"),
    images: [
      gd("1Wuvo-ECuJOJpWn7Hqe8bbVj4YIYQD9mB"),
      gd("1zdNaCYFIu_SPjLG5mGzUcyUTbhv3qeAR"),
      gd("18CDbE2CAtyR3XEFZsL_X_FG9_kXayd9N"),
      gd("1yWJeYdDw6eX-6iq_ncmIylEKaW0kJjtG"),
      gd("1ialDj5-09qYJJ24L5GLeKUYS0lCB-RuW"),
      gd("1ytFjYI_XConIEbqStlbbwzUvEyuRHuOc"),
      gd("1b-ipo9fNrknPYzGGPLLOCwWg2PZmokL-"),
      gd("1HPe7wdZY2VAA7gHvJzXPrVpSCp7pkvJh"),
      gd("1TYL_PujnQ-lMlybujV1s9yFX5_-7IgbA"),
      gd("1QsZbG_CQnwH-FjCngE6OWzcjuvk-IyP3"),
      gd("1JVs6_P5dwG0nPTIY8Lr5hzPmD8R9e1w1"),
      gd("1DvA-pgmuHYJU72gsL9qUpK7BUHAu0PUQ"),
      gd("1DuWc_3AUKZJSEhvs-idhBVB8Tcql7hUi"),
      gd("1h42-rzITrtr0NZj78x2CJ_WRH4G-Z_Ew"),
      gd("1v66Q2iXWtDw7wkh6jT_oERjnznFP-vOq"),
      gd("1bQmxGTsDT9Sg0eYGOtbc5SvkJ3pyryZv"),
      gd("13ZNuBHNNIfrqjgUpEUzTK1_VCgaosc2A"),
      gd("1EdnD-_EV9ZJrYzQ8-1kWyWDtFF_8pTgk"),
      gd("14Xy2a_y1JmkSr0O0KHLTx5GhJ1L5Ai2r"),
      gd("11dQEYZhzYT9Oo6khErhQBsh-Zi173OwF"),
      gd("1i67QzWgEyLxbcDYAdKKvj_cFd-F_QWWz"),
      gd("1h6tElMqT_3DHfgW4XkMTcawdlRI5hhwm"),
      gd("1Q83SAcJXIwLml2StUnRn6JjtYf4_D11g"),
      gd("1PIjRM-tysVjDJRmP9kswQlu1iYD8Vxpy"),
      gd("1KVv6qUQ9q6BMuQZWObWzA7c4LcczSa1w"),
      gd("11txq0mJdGDm1zPLIn3pdOZkI-1V4V-lT"),
      gd("1i-VPzi9kcLu0OrIp3A_mguBfFEae2Sbq"),
      gd("138dUYkOhu2TcZvuVhSF86DNYSAUsGlOd"),
      gd("1WrOnfm9mOp-sJjHv3bTNB-V_HTXmhZga"),
      gd("15DYUbXoSYWKQ0w-J0qpIWIZmEwqzx_bP"),
      gd("1DgXt38Rd3ZWaYaTP1-aUgBxyw4s0HQAj"),
      gd("1CIVgXt9K2IhVC0KnGZ0lIMn4gR3VY7Kc"),
      gd("1Yzh4DvjF1BzOK_bhyG6ASjG95E6ttSJF"),
      gd("17NuW-zppYXOGSmJff6f8B9f_2Rq3iVDs"),
      gd("1tFa9ses_8mabjeqqctckQujR0eY2JIv-"),
      gd("1fU4SJQkvgusUFWBeo3XlzwWd_7JvQg4Y"),
      gd("1XahjLxO5HotT99qgKgAEsrK6fO5oKSqc"),
      gd("1Pu7U-xEswJPlFtfGC0KEcz7iRnWiz4U8")
    ]
  },
  {
    id: "obra-7",
    title: "Residencial",
    status: "Em andamento",
    category: "Residencial",
    cover: gd("1JOvfX-eO1Re5glPBdpsd473rn91wG_FO"),
    images: [
      gd("1JOvfX-eO1Re5glPBdpsd473rn91wG_FO"),
      gd("13yC1jGqZRe3dwMzxlEH_oL9E2Dr66Pd0"),
      gd("1B4dtBrGGQ7rfIA8W0qCFYobNw5jBwxB1"),
      gd("1EgQlQ-NnbXZ0cdQiSOYe6r3Ecz45uKrI"),
      gd("1ljm_ypFwY95g1eviuRSErpbUso8gBBgL")
    ]
  },
  {
    id: "obra-8",
    title: "Residencial",
    status: "Concluído",
    category: "Residencial",
    cover: gd("1LpexBtGzJPEo4siCxXzBUNChTgFFHGao"),
    images: [
      gd("1LpexBtGzJPEo4siCxXzBUNChTgFFHGao"),
      gd("1mzlor5Y3lkmvyi0kw11CFa4KMUSfCd0S"),
      gd("15h-fm0EvFAS_SnVwbMkOqFkHYyzsS9Xm"),
      gd("1zcdumgcSmLzlDY--hNsbAREXlpmqAqwL"),
      gd("1WnJKAdmTvAFHM0vWvbNf6_GOHY1T8sXV"),
      gd("1z1A49y9VuNwJ7Y4TudVQvMpMKw6lAPwN"),
      gd("1uN1N1bVWzTRB5juQ-EplkIkguaJbxthH"),
      gd("1ZNaVrKW2Zjm3FAzPYp_neBGrhKl8Qv0Y"),
      gd("184v5ufEdOglJH-xmMMU9BQMlmQ1eflBg"),
      gd("1MASd9Ktz_P1F0n5dL33bZk9sSWcEy6Sx"),
      gd("1f-Ui33hRCCnFoca1oS6_pkyiKik8JVYr"),
      gd("1TgoTwH0Qi1Ys8odbWIcKLdgzTFatwZLU"),
      gd("1jCLobHQcHjltjnT1n0jAMCYS6rAkd89D"),
      gd("1h1E_9Nfu4UmzkU4CYgdHI47QwofNlyOi"),
      gd("1FI1qK_WbxYRpNHY-BJ07om7YMKvJ6tzW"),
      gd("11avP4REvlcdeUiZbz4uZ3F8_kH7dX2hR"),
      gd("1HyPyDnquEuTeUz7InD2SwNdczEp4WCsf"),
      gd("1a6LFD5vsvSmzQWAndvxdQdVF64h6Q-u5"),
      gd("1X_u_uGLdkjJGLzWSwvx39yEen3iDywBJ"),
      gd("1QVuNULrDCYZI2aOgkK03oL-mDTaN87qM"),
      gd("14z9bKvAKlsN2J7CtshpdbCzOTJT4JGQI"),
      gd("1bb_A4OKumLnBkl_w5hKhQWg_VZoF95k-"),
      gd("1jsoxhGnkvwnZ4gtMixjppEmmORwEeXWu"),
      gd("1CeSzWfAHJprzbNkaByEXj2bBJVsAzueX"),
      gd("1l6vQ17WIkDG-x3tN08HE-1mWkllP6rgn"),
      gd("1zHWM3LGmDtYjAmRnDoY5mH7BnwP7agsK"),
      gd("19-wl-t5gTpuCiRbOAzthtuEEAvf_y7h8"),
      gd("1n1YgEX0wccpJ2JLhWLvg2OLGyeG_kcKr"),
      gd("1pJe_NNwu8Of2RElyFxulGFm4PJ-1hW7p"),
      gd("1tdtCirgVy7EmOE0by2MMa2bwC8RDFURN"),
      gd("1sSfAqkthlEIKW6kzNc77ReCUjGmDrYGl"),
      gd("17FhJ72TTvZ23HU3s8o7mAqtbTMZJT4Hy"),
      gd("15-f00P9Bx4crzWIGjSoSq1pLMA4pdjtZ"),
      gd("1E10Ivf6EULrAu51shiOcacaAcZ6qzGO_"),
      gd("1pQmViu73zdz0f7ZZ96jnsITv42P7kymM"),
      gd("1PM8MVaC9WHJGrlj--DHyFaBjLZXfCZPG"),
      gd("1w67oAOCw6O9DbXbuwzFF-bC2QpS2lul-"),
      gd("1kZqy9eq1FgRKpylwhf7h06V_QlSeMleN"),
      gd("1kS-8DE5qGRAQRsWAQ2Z38Alp_tNr6739")
    ]
  },
  {
    id: "obra-11",
    title: "Residencial",
    status: "Em andamento",
    category: "Residencial",
    cover: gd("1l7hzYjJXmCp7A22kA3xH2m08YG2g-ZN_"),
    images: [
      gd("1l7hzYjJXmCp7A22kA3xH2m08YG2g-ZN_"),
      gd("1zz_bGNNBMoG1EtF_F9Ru1t10I4iq-0x0"),
      gd("1kpe1Mq_fvvzlIUnbWp0bSQSr9VgbWmT2"),
      gd("1fLb5rr_r4nDOJXZbNusQfqvJ-b77wEk3"),
      gd("1LXynyzXRay3GMnTFCuBK3SQMpHsvBuQS"),
      gd("1UzCkD7hkPue0aCcJmf0TYEF8DRFfwO9i")
    ]
  }
];

export const heroImages = [
  gd("1wJrOWrZJrz4kt8EEJS44N70jNfnlrQ95"),
  gd("1Wuvo-ECuJOJpWn7Hqe8bbVj4YIYQD9mB"),
  gd("1JOvfX-eO1Re5glPBdpsd473rn91wG_FO")
];
