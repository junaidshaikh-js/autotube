import { v4 as uuid } from "uuid";

/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */

function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

export const videos = [
  {
    _id: uuid(),
    title: "$50 Million Hypercar Gathering In The Netherlands!",
    description:
      "This video features a truly hypercar madness with some amazing cars on track, with a value of more than US $50 Million dollar!",
    thumbnail:
      "https://res.cloudinary.com/junaidshaikh/image/upload/v1649746765/AutoTube/mqdefault_pg9f2f.jpg",
    channelName: "Gumbal",
    channelImage:
      "https://res.cloudinary.com/junaidshaikh/image/upload/v1649689404/unnamed_i3taq2.jpg",
    views: 71_174_869,
    createdAt: randomDate(new Date(2010, 1, 1), new Date()),
    categoryName: "Sports Car",
  },
  {
    _id: uuid(),
    title: "Bugatti Vision GT vs Super Cars at Highlands",
    thumbnail:
      "https://res.cloudinary.com/junaidshaikh/image/upload/v1649747078/AutoTube/mqdefault_xw3mpm.jpg",
    description: "",
    channelName: "VirtuaSportsCars",
    channelImage:
      "https://res.cloudinary.com/junaidshaikh/image/upload/v1649746997/AutoTube/AKedOLSX_V_y3U5ybovUvfrbOnbk2r5b9FaGwO5acBHu_w_s88-c-k-c0x00ffffff-no-rj_pab5y6.jpg",
    views: 35_415_603,
    createdAt: randomDate(new Date(2010, 1, 1), new Date()),
    categoryName: "Sports Car",
  },
  {
    _id: uuid(),
    title: "WRC Rally Finland 2019 - Motorsportfilmer.net",
    description:
      "Rally Finland in cold and dusty condtitions this year! Struggling with the dust again this year so just imagine how good some of these places could have been with some damp gravel.",
    thumbnail:
      "https://res.cloudinary.com/junaidshaikh/image/upload/v1649747419/AutoTube/mqdefault_jmd5pv.jpg",
    channelName: "Tor Andre Børresen",
    channelImage:
      "https://res.cloudinary.com/junaidshaikh/image/upload/v1649747472/AutoTube/AKedOLSx5rmHkAF7mtoEdG2yp8Km8BeTsPrmYrVHg6u2_s88-c-k-c0x00ffffff-no-rj_f7friu.jpg",
    views: 9_267_829,
    createdAt: randomDate(new Date(2010, 1, 1), new Date()),
    categoryName: "Sports Car",
  },
  {
    _id: uuid(),
    title: "BEST OF SUPERCAR SOUNDS 2019",
    description:
      "So here it is guys! The final compilation of the best supercars I filmed this year! It was absolutely an astonishing year!",
    thumbnail:
      "https://res.cloudinary.com/junaidshaikh/image/upload/v1649747627/AutoTube/mqdefault_zkqp70.jpg",
    channelName: "Gumbal",
    channelImage:
      "https://res.cloudinary.com/junaidshaikh/image/upload/v1649689404/unnamed_i3taq2.jpg",
    views: 5_282_663,
    createdAt: randomDate(new Date(2010, 1, 1), new Date()),
    categoryName: "Sports Car",
  },
  {
    _id: uuid(),
    title:
      "2021 Tata Punch review - Tata's junior SUV is here! | First Drive | Autocar India",
    description:
      "The 3.8m long Tata Punch promises SUV traits in a small footprint. Nikhil Bhatia tells you if the Punch makes good on that promise. ",
    thumbnail:
      "https://res.cloudinary.com/junaidshaikh/image/upload/v1649747824/AutoTube/mqdefault_lwuwhd.jpg",
    channelName: "Autocar India",
    channelImage:
      "https://res.cloudinary.com/junaidshaikh/image/upload/v1649747900/AutoTube/AKedOLRbI-xI_kQi685P7v3pfPbsAQ3qQ9JMakERpbzDgQ_s88-c-k-c0x00ffffff-no-rj_znqx6m.jpg",
    views: 2_481_815,
    createdAt: randomDate(new Date(2010, 1, 1), new Date()),
    categoryName: "Car Reviews",
  },
  {
    _id: uuid(),
    title: "Kia Seltos X Line 2021- ₹18 lakh | Real-life review",
    description: "",
    thumbnail:
      "https://res.cloudinary.com/junaidshaikh/image/upload/v1649747994/AutoTube/mqdefault_v1unex.jpg",
    channelName: "Namaste Car",
    channelImage:
      "https://res.cloudinary.com/junaidshaikh/image/upload/v1649748040/AutoTube/AKedOLR3QTywZZwdzu7mHgV9uZUkkzNTYcHsz6vepMQn_s88-c-k-c0x00ffffff-no-rj_ijynds.jpg",
    views: 1_380_153,
    createdAt: randomDate(new Date(2010, 1, 1), new Date()),
    categoryName: "Car Reviews",
  },
  {
    _id: uuid(),
    title: "2022 Maruti Baleno First Drive Review - Better Than Tata Altroz ??",
    description:
      "MS has given the Baleno a facelift and more features, will these changes be enough to make it a segment leader, also how it compares to Tata Altroz and Hyundai i20, Find out in this video.",
    thumbnail:
      "https://res.cloudinary.com/junaidshaikh/image/upload/v1649748375/AutoTube/mqdefault_uejr7h.jpg",
    channelName: "Fuel Injected",
    channelImage:
      "https://res.cloudinary.com/junaidshaikh/image/upload/v1649748432/AutoTube/AKedOLQHjeIxLhS99NEyNHzoZz5-C1L_p5CSp7sj9d1p3A_s88-c-k-c0x00ffffff-no-rj_aabvoj.jpg",
    views: 372_678,
    createdAt: randomDate(new Date(2010, 1, 1), new Date()),
    categoryName: "Car Reviews",
  },
  {
    _id: uuid(),
    title: "2021 MG Astor review – Hello Astor! | First Drive | Autocar India",
    description:
      "The MG Astor is the petrol version of the ZS EV we’re familiar with, and it’s here to rival the Hyundai Creta, Kia Seltos, Volkswagen Taigun, Skoda Kushaq and Nissan Kicks.",
    thumbnail:
      "https://res.cloudinary.com/junaidshaikh/image/upload/v1649748506/AutoTube/mqdefault_s6e1hw.jpg",
    channelName: "Autocar India",
    channelImage:
      "https://res.cloudinary.com/junaidshaikh/image/upload/v1649747900/AutoTube/AKedOLRbI-xI_kQi685P7v3pfPbsAQ3qQ9JMakERpbzDgQ_s88-c-k-c0x00ffffff-no-rj_znqx6m.jpg",
    views: 974_088,
    createdAt: randomDate(new Date(2010, 1, 1), new Date()),
    categoryName: "Car Reviews",
  },
  {
    _id: uuid(),
    title: "How a Car Engine Works",
    description:
      "An inside look at the basic systems that make up a standard car engine.",
    thumbnail:
      "https://res.cloudinary.com/junaidshaikh/image/upload/v1649748729/AutoTube/mqdefault_nyq1qs.jpg",
    channelName: "Animagraffs",
    channelImage:
      "https://res.cloudinary.com/junaidshaikh/image/upload/v1649748786/AutoTube/AKedOLQIDHVPkw5AHoCYqBgRrDufr5CdnLAKMSTpsPNg_s88-c-k-c0x00ffffff-no-rj_p7hozs.jpg",
    views: 8_454_163,
    createdAt: randomDate(new Date(2010, 1, 1), new Date()),
    categoryName: "Car Tech",
  },
  {
    _id: uuid(),
    title: "Clutch, How does it work?",
    description: "Learn the working of clutch",
    thumbnail:
      "https://res.cloudinary.com/junaidshaikh/image/upload/v1649748786/AutoTube/AKedOLQIDHVPkw5AHoCYqBgRrDufr5CdnLAKMSTpsPNg_s88-c-k-c0x00ffffff-no-rj_p7hozs.jpg",
    channelName: "Lesics",
    channelImage:
      "https://res.cloudinary.com/junaidshaikh/image/upload/v1649749512/AutoTube/AKedOLQk4PZeCBWsaycyvlMGC7g9t165mvYnvjkeNUMqKA_s88-c-k-c0x00ffffff-no-rj_lmqajb.jpg",
    views: 36_650_925,
    createdAt: randomDate(new Date(2010, 1, 1), new Date()),
    categoryName: "Car Tech",
  },
  {
    _id: uuid(),
    title: "How an Electric Car Works? Its Parts & Functions [Explained]",
    description:
      "How does an Electric Car Works? Its Parts & Functions Explained",
    thumbnail:
      "https://res.cloudinary.com/junaidshaikh/image/upload/v1649749706/AutoTube/mqdefault_jddkzv.jpg",
    channelName: "The Engineers Post",
    channelImage:
      "https://res.cloudinary.com/junaidshaikh/image/upload/v1649749759/AutoTube/AKedOLSMaZqiaGcG0EC8RaXNwNqPTxl9mdZ3CUv4Mcx49g_s88-c-k-c0x00ffffff-no-rj_pfht93.jpg",
    views: 645_259,
    createdAt: randomDate(new Date(2010, 1, 1), new Date()),
    categoryName: "Car Tech",
  },
  {
    _id: uuid(),
    title: "What happens when you turn the ignition key in your car?",
    description:
      "Have you ever wondered what happens when you turn the key inside your car ignition? In this simple video we will explain all the steps involved in this process, from the ignition to the operation of the internal combustion engine.",
    thumbnail:
      "https://res.cloudinary.com/junaidshaikh/image/upload/v1649749759/AutoTube/AKedOLSMaZqiaGcG0EC8RaXNwNqPTxl9mdZ3CUv4Mcx49g_s88-c-k-c0x00ffffff-no-rj_pfht93.jpg",
    channelName: "JAES Company",
    channelImage:
      "https://res.cloudinary.com/junaidshaikh/image/upload/v1649749992/AutoTube/AKedOLTscLQaLXNBiWHchxxu1wOcLPiFjeLf-mLHcHPiCA_s88-c-k-c0x00ffffff-no-rj_yrddbp.jpg",
    views: 2_087_216,
    createdAt: randomDate(new Date(2010, 1, 1), new Date()),
    categoryName: "Car Tech",
  },
  {
    _id: uuid(),
    title: "World’s Greatest Drag Race 9!!!",
    description:
      "World’s Greatest Drag Race is back for the ninth time, bigger and better than ever! Once again, the MotorTrend team descends upon the runway at Vandenberg Air Force Base with a dozen of the hottest, quickest, and most powerful new cars on the market for one reason—a big, fat, crazy drag race!! ",
    thumbnail:
      "https://res.cloudinary.com/junaidshaikh/image/upload/v1649750678/AutoTube/mqdefault_z8sy4a.jpg",
    channelName: "MotorTrend Channel",
    channelImage:
      "https://res.cloudinary.com/junaidshaikh/image/upload/v1649750705/AutoTube/AKedOLToqTpU28e86K3L2vF1M3siUKh2GIWxGf2JQ2Hvzw_s88-c-k-c0x00ffffff-no-rj_ah1ykq.jpg",
    views: 7_980_360,
    createdAt: randomDate(new Date(2010, 1, 1), new Date()),
    categoryName: "Drag Race",
  },
  {
    _id: uuid(),
    title: "Built vs bought - drag racing",
    description:
      "Hellcat, Honda Civic, Tesla, Porsche, Shelby GT500, Corvette ZR1, Chevy Nova, Nissan GT-R and more - the best of Built vs bought - drag racing",
    thumbnail:
      "https://res.cloudinary.com/junaidshaikh/image/upload/v1649750791/AutoTube/mqdefault_qussxx.jpg",
    channelName: "Wheels",
    channelImage:
      "https://res.cloudinary.com/junaidshaikh/image/upload/v1649750823/AutoTube/AKedOLQoLFrGJVFVcpAtfD3pg5v-gsxXYh5b8jIsOncTVQ_s88-c-k-c0x00ffffff-no-rj_q8bcjh.jpg",
    views: 1_605_999,
    createdAt: randomDate(new Date(2010, 1, 1), new Date()),
    categoryName: "Drag Race",
  },
  {
    _id: uuid(),
    title: "Bugatti Chiron v F1 Car: DRAG RACE",
    description:
      "Get ready for our greatest drag race EVER… Bugatti Chiron vs Red Bull F1 Car!! ",
    thumbnail:
      "https://res.cloudinary.com/junaidshaikh/image/upload/v1649750893/AutoTube/mqdefault_byt24q.jpg",
    channelName: "carwow",
    channelImage:
      "https://res.cloudinary.com/junaidshaikh/image/upload/v1649750925/AutoTube/AKedOLQuONFgFu1BtXgGqGhmOmc8c8JqTVDADFLTOKyt4g_s88-c-k-c0x00ffffff-no-rj_ojcaig.jpg",
    views: 18_265_192,
    createdAt: randomDate(new Date(2010, 1, 1), new Date()),
    categoryName: "Drag Race",
  },
  {
    _id: uuid(),
    title: "Lamborghini STO vs Ferrari Pista vs Porsche GT3: DRAG RACE",
    description:
      "Mat’s lining up in the Huracan STO, and he’s going up against a Ferrari 488 Pista & a Porsche 911 GT3! ",
    thumbnail:
      "https://res.cloudinary.com/junaidshaikh/image/upload/v1649750998/AutoTube/mqdefault_imikx8.jpg",
    channelName: "carwow",
    channelImage:
      "https://res.cloudinary.com/junaidshaikh/image/upload/v1649750925/AutoTube/AKedOLQuONFgFu1BtXgGqGhmOmc8c8JqTVDADFLTOKyt4g_s88-c-k-c0x00ffffff-no-rj_ojcaig.jpg",
    views: 1_306_031,
    createdAt: randomDate(new Date(2010, 1, 1), new Date()),
    categoryName: "Drag Race",
  },
  {
    _id: uuid(),
    title: "Auto Expo 2020 Film",
    description:
      "The Auto Expo is a biennial automotive show held in Greater Noida, NCR, India. It is Asia's largest and the world's second-largest motor show.",
    thumbnail:
      "https://res.cloudinary.com/junaidshaikh/image/upload/v1649751207/AutoTube/mqdefault_yp4hdp.jpg",
    channelName: "Namaste Car",
    channelImage:
      "https://res.cloudinary.com/junaidshaikh/image/upload/v1649748040/AutoTube/AKedOLR3QTywZZwdzu7mHgV9uZUkkzNTYcHsz6vepMQn_s88-c-k-c0x00ffffff-no-rj_ijynds.jpg",
    views: 1_987_747,
    createdAt: randomDate(new Date(2010, 1, 1), new Date()),
    categoryName: "Auto Expo",
  },
  {
    _id: uuid(),
    title: "Checking out Weird Tech in Auto Expo 2020",
    description: "",
    thumbnail:
      "https://res.cloudinary.com/junaidshaikh/image/upload/v1649751312/AutoTube/mqdefault_cecddt.jpg",
    channelName: "Tech Burner",
    channelImage:
      "https://res.cloudinary.com/junaidshaikh/image/upload/v1649751356/AutoTube/AKedOLSLzBlLalLFEXgvGHr6f9yBm9Y8PrJMXZC_hxTTlQ_s88-c-k-c0x00ffffff-no-rj_bsx3us.jpg",
    views: 1_197_120,
    createdAt: randomDate(new Date(2010, 1, 1), new Date()),
    categoryName: "Auto Expo",
  },
  {
    _id: uuid(),
    title: "Auto Expo 2020 Highlights - All the best cars & bikes",
    description:
      "This week's edition of Quick News is a little later than usual - but it is a big one. It is the wrap-up of all the best cars and bikes shown at Auto Expo 2020.",
    thumbnail:
      "https://res.cloudinary.com/junaidshaikh/image/upload/v1649751434/AutoTube/mqdefault_vrcb59.jpg",
    channelName: "Autocar India",
    channelImage:
      "https://res.cloudinary.com/junaidshaikh/image/upload/v1649747900/AutoTube/AKedOLRbI-xI_kQi685P7v3pfPbsAQ3qQ9JMakERpbzDgQ_s88-c-k-c0x00ffffff-no-rj_znqx6m.jpg",
    views: 229_744,
    createdAt: randomDate(new Date(2010, 1, 1), new Date()),
    categoryName: "Auto Expo",
  },
  {
    _id: uuid(),
    title: "Auto Expo 2020 - Tata Sierra",
    description:
      "The Sierra EV SUV concept was one of the biggest surprises of the #AutoExpo2020.   Based on the brand’s ALFA platform that also underpins the Altroz and the HBX concept, the new SUV from Tata could be a potential Creta rival in future.",
    thumbnail:
      "https://res.cloudinary.com/junaidshaikh/image/upload/v1649751537/AutoTube/mqdefault_hnfmvs.jpg",
    channelName: "Autocar India",
    channelImage:
      "https://res.cloudinary.com/junaidshaikh/image/upload/v1649747900/AutoTube/AKedOLRbI-xI_kQi685P7v3pfPbsAQ3qQ9JMakERpbzDgQ_s88-c-k-c0x00ffffff-no-rj_znqx6m.jpg",
    views: 883_581,
    createdAt: randomDate(new Date(2010, 1, 1), new Date()),
    categoryName: "Auto Expo",
  },
];
