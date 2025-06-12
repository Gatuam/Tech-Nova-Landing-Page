const navElements = [{
  id:1,
  name: "Service",
  href: "#"
},{
  id:2,
  name: "Portfolio",
  href: "#"
},{
  id:3,
  name: "Contact Us",
  href: "#"
},{
  id:4,
  name: "Login",
  href: "#"
},{
  id:5,
  name: "Get Start",
  href: "#"
},]

const reviews = [
  {
    id: 1,
    src: new URL("../assets/headshots/img-11.webp", import.meta.url),
    alt: "Rachel Foster",
  },
  {
    id: 2,
    src: new URL("../assets/headshots/img-7.webp", import.meta.url),
    alt: "Emily Thompson",
  },
  {
    id: 3,
    src: new URL("../assets/headshots/img-5.webp", import.meta.url),
    alt: "Daniel Harris",
  },
  {
    id: 4,
    src: new URL("../assets/headshots/img-9.webp", import.meta.url),
    alt: "Sarah Lee",
  },
    {
    id: 5,
    src: new URL("../assets/headshots/img-15.webp", import.meta.url),
    alt: "Lucas King",
  },
];

const logos = [
  {
    id: 1,
    src: new URL("../assets/logos/Netflix.webp", import.meta.url).href,
    alt: "Netflix Logo",
  },
  {
    id: 2,
    src: new URL("../assets/logos/ExxonMobile.webp", import.meta.url).href,
    alt: "Exxon Mobile Logo",
  },
  {
    id: 3,
    src: new URL("../assets/logos/Microsoft.webp", import.meta.url).href,
    alt: "Microsoft Logo",
  },
  {
    id: 4,
    src: new URL("../assets/logos/Vice.webp", import.meta.url).href,
    alt: "Vice Logo",
  },  {
    id: 5,
    src: new URL("../assets/logos/Walmart.webp", import.meta.url).href,
    alt: "Walmart Logo",
  },
  {
    id: 6,
    src: new URL("../assets/logos/Chase.webp", import.meta.url).href,
    alt: "Chase Logo",
  },
  {
    id: 7,
    src: new URL("../assets/logos/Visa.webp", import.meta.url).href,
    alt: "Visa Logo",
  },
  {
    id: 8,
    src: new URL("../assets/logos/Amazon.webp", import.meta.url).href,
    alt: "Amazon Logo",
  },
]

export  { navElements, reviews , logos };