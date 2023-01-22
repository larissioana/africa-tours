//images
import image from './images/arusha.jpg';
import image1 from './images/kenya-lg.jpg';
import image2 from './images/zuid-afrika.jpg';
import image3 from './images/masai-mara-national-reserve.jpg';
import image4 from './images/lake-manyara.jpg';
import image5 from'./images/national-park.jpg';
import image6 from './images/ballons.jpg';
import image7 from './images/mombasa.jpg';
import image8 from './images/mombasa-camp.jpg';
import image9 from './images/sahara-tour.jpg';
import image10 from './images/camel-ride.jpg';
import image11 from './images/atlas-mountains.jpg';
import image12 from './images/oarzazate.jpg';
import image14 from './images/sahara-camping.jpg';
import image15 from './images/marrakech.jpg';
import image16 from './images/bazaar.jpg';
import image17 from './images/market.jpg';
import image18 from './images/penguin.jpg';
import image19 from './images/samburu-women.jpg';
import image20 from './images/cape-town.jpg';
import image27 from './images/destinations.jpg';
import image28 from './images/attractions.jpg';
import image29 from './images/activities.jpg';
//Icons
import {IoLocationSharp} from 'react-icons/io5';
import {GiElephant} from 'react-icons/gi';
import {GrMapLocation} from 'react-icons/gr';
import {RiStarSFill} from 'react-icons/ri';
import {BsFacebook,BsInstagram,BsTwitter} from 'react-icons/bs';

export const socialLinks=[
  {
    id:1,
    href:'https://www.facebook.com',
    icon:<BsFacebook/>
  },
  {
    id:2,
    href:'https://www.instagram.com',
    icon:<BsInstagram/>
  },
  {
    id:3,
    href:'https://www.twitter.com',
    icon:<BsTwitter/>
  },
];


export const links=[


{
    id:1,
    href:'#home',
    text:'Home',
},
   { id:2,
     href:'#about',
     text:'About Us'
},
  
  {
    id:3,
    href:'#tours',
    text:'Tours'
  },
  {
    id:4,
    href:'#reviews',
    text:'Reviews'
  },
  {
    id:5,
    href:'#contact',
    text:'Contact'
  },

];


export const tours=[
  {
    id:1,
    image:image,
    title:'5-days premium luxury safari',
    price:'900€',
    location:'Tanzania',
    description:'Arusha, Tarangire NP, Ngorongoro Crater',
    stars:true,
    reviews:[<RiStarSFill/>,<RiStarSFill/>,<RiStarSFill/>,<RiStarSFill/>],
    wishlist:true,
  },
  {
    id:2,
    image:image4,
    title:'2-days journey of the wildbeest',
    price:'400€',
    location:'Tanzania: Lodge and Tented Camp',
    description:'Arusha, Lake Manyara NP, Serengeti NP',
    reviews:[<RiStarSFill/>,<RiStarSFill/>,<RiStarSFill/>,<RiStarSFill/>,<RiStarSFill/>],
    wishlist:false,

  },
  {
    id:3,
    image:image5,
    title:'7-days in Kenya',
    price:'1000€',
    location:'Kenya',
    description:'Tsavo National Park in Kenya',
    reviews:[<RiStarSFill/>,<RiStarSFill/>,<RiStarSFill/>,<RiStarSFill/>],
    wishlist:true,
  

  },
  {
    id:4,
    image:image2,
    title:'1-day in South-Afrika',
    price:'70€',
    location:'Zuid-Afrika',
    description:'Ostrich at De Hoop Nature Reserve',
    reviews:[<RiStarSFill/>,<RiStarSFill/>,<RiStarSFill/>,<RiStarSFill/>,<RiStarSFill/>],
    wishlist:true,

  },
  {
    id:5,
    image:image3,
    title:'7-days trip to Kenya Camping Safari',
    price:'1200€',
    location:'Masai Mara, Lake Nakuru, Amboseli',
    description:'Maasai Mara National Reserve, Lake Nakuru, National Park',
    reviews:[<RiStarSFill/>,<RiStarSFill/>,<RiStarSFill/>,<RiStarSFill/>,<RiStarSFill/>],
    wishlist:false,


  },
  {
    id:6,
    image:image1,
    title:' Watch the magical Sunset in Tarangire',
    price:'40€',
    location:'Tarangire',
    description:'Tarangire National Park, Arusha, Tanzania',
    reviews:[<RiStarSFill/>,<RiStarSFill/>,<RiStarSFill/>,<RiStarSFill/>],
    wishlist:false,

  },
  {
    id:7,
    image:image6,
    title:'Masai Mara Balloon Safari',
    price:'100€',
    location:'Kenya',
    description:'Maasai Mara National Reserve, Kenya, Afrika',
    reviews:[<RiStarSFill/>,<RiStarSFill/>,<RiStarSFill/>,<RiStarSFill/>],
    wishlist:false,

  },
  {
    id:8,
    image:image7,
    title:'3-days National Park Safari from Mombasa',
    price:'300€',
    location:'Mombasa',
    description:'Tsavo East and West National Park Safari',
    reviews:[<RiStarSFill/>,<RiStarSFill/>,<RiStarSFill/>,<RiStarSFill/>,<RiStarSFill/>],
    wishlist:true,

  },
  {
    id:9,
    image:image8,
    title:'Mombasa Lodge',
    price:'100€',
    location:'Mombasa',
    description:'Satao Camp and Lodge from Mombasa',
    reviews:[<RiStarSFill/>,<RiStarSFill/>,<RiStarSFill/>,<RiStarSFill/>,<RiStarSFill/>],
    wishlist:true,

  },
];


export const toursMorroco=[
  {
    id:10,
    image:image9,
    title:'2-Days Tour To Sahara Desert',
    price:'200€',
    location:"Zagora Desert",
    description:'Trip to Zagora Desert through Atlas Mountains',
    reviews:[<RiStarSFill/>,<RiStarSFill/>,<RiStarSFill/>,<RiStarSFill/>],
    wishlist:true,

  },
  {
    id:11,
    image:image10,
    title:'Camel Riding in The Sahara Desert',
    price:'50€',
    location:"Merzuga Desert",
    description:'Trip to Merzuga Town',
    reviews:[<RiStarSFill/>,<RiStarSFill/>,<RiStarSFill/>,<RiStarSFill/>,<RiStarSFill/>],
    wishlist:true,

  },

 {
  id:12,
  image:image11,
  title:'One-Day Trip To The Mountains',
  price:'50€',
  location:"Atlas Mountains",
  description:'Visit the beautiful High Atlas',
  reviews:[<RiStarSFill/>,<RiStarSFill/>,<RiStarSFill/>,<RiStarSFill/>],
  wishlist:false,

},
{
  id:13,
  image:image12,
  title:'One day tour to Ouarzazate',
  price:'40€',
  location:"Ouarzazate, Morocco",
  description:'Visit the small popular moroccan town Ouarzazate',
  reviews:[<RiStarSFill/>,<RiStarSFill/>,<RiStarSFill/>,<RiStarSFill/>],
  wishlist:true,

},
{
  id:14,
  image:image14,
  title:'One-night camp To Sahara Desert',
  price:'100€',
  location:"Sahara Desert",
  description:' Zagora Desert by Night',
  reviews:[<RiStarSFill/>,<RiStarSFill/>,<RiStarSFill/>,<RiStarSFill/>,<RiStarSFill/>],
  wishlist:false,

},
{
  id:15,
  image:image15,
  title:'Spicy Market',
  price:'10€',
  location:"Marrakech, Morocco",
  description:'Visit the Spicy Markey from Marrakech',
  reviews:[<RiStarSFill/>,<RiStarSFill/>,<RiStarSFill/>,<RiStarSFill/>,<RiStarSFill/>],
  wishlist:false,

},

];


export const adventure=[
  {
    id:1,
    image:image16,
    title:'Markets',
    info:'In many parth of the continent, food is traditionally viewed as being primarly for sustenance. People around the world are just discovering the wonders of African food. In Africa there is a strong connection between food and culture,which is highly appealing to visitors. Our food is also linked to ouur history. Come and explore our food.'
  },
  {
    id:2,
    image:image19,
    title:'Culture',
    info:'Samburu Women are responsible for gathering vegetables and roots, collecting water and caring for their children. Dancing is a significant part of Samburu Women. Come and join Samburu tribe and discover their culture.'
  },
  {
    id:3,
    image:image20,
    title:'Nature',
    info:`Africa is truly a nature lover's destination as it offers some of the most diverse landscapes. Forests, mountains, deserts, grasslands and savannahs are just some of the wonders one can hope to encounter.`
  },
  {
    id:4,
    image:image18,
    title:'Cape Town',
    info:`Cape Town is the second most populous city in South Africa. The capital of Western Cape Province, it is also the legislative capital of the nation. Cape Town is on South Africa's southwestern coast close to the Cape of Good Hope, and is the southernmost city on the African continent.`
  },
  {
    id:5,
    image:image17,
    title:'Shopping',
    info:'The African continent is known for its cultural diversity and mouthwatering cuisine. African food is usually spiced to perfection with various spices, herbs, and seasonings native to a particular region.'
  },

];

export const AboutSectionOne=[
  {
  id:1,
  image:image27,
  title:'Destinations',
  icon:<IoLocationSharp/>,
  href:'#destinations'
  },
  {
    id:2,
    image:image28,
    title:'Attractions',
    icon:<GrMapLocation/>,
    href:'#morocco'
    },
    {
      id:3,
      image:image29,
      title:'Activities',
      icon:<GiElephant/>,
      href:'#activities'
      },

]