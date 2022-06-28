// IMAGES FOR PACKAGES
import p1 from "./assets/images/p-1.jpg";
import p2 from "./assets/images/p-2.jpg";
import p3 from "./assets/images/p-3.jpg";
import p4 from "./assets/images/p-4.jpg";
import p5 from "./assets/images/p-5.jpg";
import p6 from "./assets/images/p-6.jpg";

// ICONS FOR SERVICES
import {
  FaHotel,
  FaUtensils,
  FaBullhorn,
  FaGlobe,
  FaPlane,
  FaHiking
} from "react-icons/fa/index";


// IMAGES FOR GALLERY
import g1 from "./assets/images/g-1.jpg";
import g2 from "./assets/images/g-2.jpg";
import g3 from "./assets/images/g-3.jpg";
import g4 from "./assets/images/g-4.jpg";
import g5 from "./assets/images/g-5.jpg";
import g6 from "./assets/images/g-6.jpg";
import g7 from "./assets/images/g-7.jpg";
import g8 from "./assets/images/g-8.jpg";
import g9 from "./assets/images/g-9.jpg";


export const packages = [
  {
    id: 1,
    place: "mumbai",
    img: p1
  },
  {
    id: 2,
    place: "hawaii",
    img: p2
  },
  {
    id: 3,
    place: "sydney",
    img: p3
  },
  {
    id: 4,
    place: "paris",
    img: p4
  },
  {
    id: 5,
    place: "tokyo",
    img: p5
  },
  {
    id: 6,
    place: "cairo",
    img: p6
  }
];

export const services = [
  {
    id: 1,
    icon: <FaHotel/>,
    heading: "affordable hotels",
  },
  {
    id: 2,
    icon: <FaUtensils/>,
    heading: "foods and drinks",
  },
  {
    id: 3,
    icon: <FaBullhorn/>,
    heading: "safety guide",
  },
  {
    id: 4,
    icon: <FaGlobe/>,
    heading: "around the world",
  },
  {
    id: 5,
    icon: <FaPlane/>,
    heading: "fastest travels",
  },
  {
    id: 6,
    icon: <FaHiking/>,
    heading: "adventures",
  },
];

export const gallery = [
  {
    id: 1,
    img: g1
  },
  {
    id: 2,
    img: g2
  },
  {
    id: 3,
    img: g3
  },
  {
    id: 4,
    img: g4
  },
  {
    id: 5,
    img: g5
  },
  {
    id: 6,
    img: g6
  },
  {
    id: 7,
    img: g7
  },
  {
    id: 8,
    img: g8
  },
  {
    id: 9,
    img: g9
  },
]