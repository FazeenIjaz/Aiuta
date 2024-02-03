import lady1 from "./assets/outfit1.png";
import lady2 from "./assets/outfit2.png";
import lady3 from "./assets/outfit3.png";
import outfit1Top from "./assets/outfit1_top.png";
import outfit2Top from "./assets/outfit2_top.png";
import outfit3Top from "./assets/outfit3_top.png";
import outfit1Bottom from "./assets/outfit1_bottom.png";
import outfit2Bottom from "./assets/outfit2_bottom.png";
import outfit3Bottom from "./assets/outfit3_bottom.png";
import outfit1Shoes from "./assets/outfit1_shoes.png";
import outfit2Shoes from "./assets/outfit2_shoes.png";
import outfit3Shoes from "./assets/outfit3_shoes.png";
import tickImg from "./assets/tick-icon.png";
import warnImg from "./assets/warn-icon.png";
import icon1 from "./assets/item1.png";
import icon2 from "./assets/item2.png";
import icon3 from "./assets/item3.png";
import image1 from "./assets/outfit1-preview-full.png";
import image2 from "./assets/outfit2-preview-full.png";
import image3 from "./assets/outfit3-preview-full.png";
import image4 from "./assets/outfit4-preview-full.png";
export const links = [
  {
    id: 1,
    title: "About",
    link: "/",
  },
  {
    id: 2,
    title: "Products",
    link: "/products",
  },
  {
    id: 3,
    title: "Team",
    link: "/team",
  },
  {
    id: 4,
    title: "Contacts",
    link: "/#contact",
  },
];

export const outfitMain = [
  {
    id: 1,
    lady: lady1,
    images: {
      top: outfit1Top,
      bottom: outfit1Bottom,
      shoes: outfit1Shoes,
    },
    details: {
      fit: {
        icon: tickImg,
        status: "fits you",
      },
      new: {
        icon: tickImg,
        status: "4 new outfits",
      },
      quality: {
        icon: warnImg,
        status: "out of budget",
      },
    },
    score: 8,
    status: "Great",
  },
  {
    id: 2,
    lady: lady2,
    images: {
      top: outfit2Top,
      bottom: outfit2Bottom,
      shoes: outfit2Shoes,
    },
    details: {
      fit: {
        icon: tickImg,
        status: "fits you",
      },
      new: {
        icon: tickImg,
        status: "4 new outfits",
      },
      quality: {
        icon: tickImg,
        status: "good quality",
      },
    },
    score: 0,
    status: "Good",
  },
  {
    id: 3,
    lady: lady3,
    images: {
      top: outfit3Top,
      bottom: outfit3Bottom,
      shoes: outfit3Shoes,
    },
    details: {
      fit: {
        icon: tickImg,
        status: "fits you",
      },
      new: {
        icon: tickImg,
        status: "5 new outfits",
      },
      quality: {
        icon: warnImg,
        status: "try another shoes",
      },
    },
    score: 5,
    status: "Great",
  },
];

export const cardsData = [
  {
    id: 1,
    title: "Wardrobe booster",
    desc: "Unlock your wardrobe potential with Aiuta. Put everything in order to get the most out of every item and increase your wardrobe efficiency",
    icon: icon1,
  },
  {
    id: 2,
    title: "Style expert",
    desc: "Aiuta gives you actionable advice on how to express your individuality through clothes. In a fun and easy way like never before",
    icon: icon2,
  },
  {
    id: 3,
    title: "Shopping assistant",
    desc: "From now on, anything you buy matches the rest of your wardrobe and fits you perfectly. Better outcome with less money spent",
    icon: icon3,
  },
];

export const images = [
  {
    id: 1,
    img: image1,
  },
  {
    id: 2,
    img: image2,
  },
  {
    id: 3,
    img: image3,
  },
  {
    id: 4,
    img: image4,
  },
];
