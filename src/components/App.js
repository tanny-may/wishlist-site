import React, { useState } from 'react';
import Content from './Content';
import Navigation from './Navigation';

const stickers = [
  {
    name: "huggs Dudu",
    src: "https://e1.pxfuel.com/desktop-wallpaper/151/458/desktop-wallpaper-bubu-dudu-star-bubu-dudu.jpg",
    parameter: "Colorful background",
  },
  {
    name: "birthday cake",
    src: "https://e1.pxfuel.com/desktop-wallpaper/669/487/desktop-wallpaper-panda-bear-bubu-dudu-sticker-by-dev-dudu-bubu.jpg",
    parameter: "Transparent background",
  },
  {
    name: "walk",
    src: "https://e1.pxfuel.com/desktop-wallpaper/430/980/desktop-wallpaper-bubuanddudu-bubu-dudu.jpg",
    parameter: "Colorful background",
  },
  {
    name: "candies gift",
    src: "https://e1.pxfuel.com/desktop-wallpaper/445/33/desktop-wallpaper-panda-bear-bubu-dudu-sticker-by-dev-dudu-bubu.jpg",
    parameter: "Transparent background",
  },
  {
    name: "starry sky",
    src: "https://e1.pxfuel.com/desktop-wallpaper/266/502/desktop-wallpaper-panda-bear-bubu-dudu-dudu-bubu.jpg",
    parameter: "Colorful background",
  },
  {
    name: "hike",
    src: "https://e1.pxfuel.com/desktop-wallpaper/198/57/desktop-wallpaper-panda-bear-bubu-dudu-bubu-dudu.jpg",
    parameter: "Colorful background",
  },
  {
    name: "cute yoga",
    src: "https://e1.pxfuel.com/desktop-wallpaper/214/933/desktop-wallpaper-bubu-dudu-bubu.jpg",
    parameter: "Transparent background",
  },
  {
    name: "huggs Bubu",
    src: "https://e1.pxfuel.com/desktop-wallpaper/805/74/desktop-wallpaper-panda-bear-hug-bubu-dudu-bubu-dudu.jpg",
    parameter: "Transparent background",
  },
];
const stickerFilters = ['All stickers', 'Transparent background', 'Colorful background'];
const defaultStickerFilter = 'All stickers';

const toys = [
  {
    name: "",
    src: "",
    parameter: "",
  },
  {
    name: "",
    src: "",
    parameter: "",
  },
  {
    name: "",
    src: "",
    parameter: "",
  },
  {
    name: "",
    src: "",
    parameter: "",
  },
  {
    name: "",
    src: "",
    parameter: "",
  },
  {
    name: "",
    src: "",
    parameter: "",
  },
  {
    name: "",
    src: "",
    parameter: "",
  },
];
const toysFilters = ['All toys', 'Soft toys', 'Plastic toys'];
const defaultToysFilter = 'All toys';

const pillows = [
  {
    name: "Bubu on pony",
    src: "https://ae04.alicdn.com/kf/S64ddbe993f994f84977a0b81b011a113P.jpg_640x640.jpg",
    parameter: "White pillows",
  },
  {
    name: "night",
    src: "https://ae04.alicdn.com/kf/S64b8b6336eec45909bc63472ef661751I.jpg_640x640.jpg",
    parameter: "Colorful pillows",
  },
  {
    name: "Dudu on pony",
    src: "https://ae04.alicdn.com/kf/S4c381fbcef9445ffaec49ebf699909079.jpg_640x640.jpg",
    parameter: "White pillows",
  },
  {
    name: "take a photo",
    src: "https://ae04.alicdn.com/kf/S98dbe1ec8f964065b18195f89ebe90a7Y.jpg_640x640.jpg",
    parameter: "Colorful pillows",
  },
  {
    name: "Bubu on pillows",
    src: "https://ae04.alicdn.com/kf/Sb6cbacc21b9f4bbda29e94b3cac01588U.jpg_640x640.jpg",
    parameter: "White pillows",
  },
  {
    name: "sleep",
    src: "https://ae04.alicdn.com/kf/S8072b1a989d2413a8d6e9b9e53eda88dB.jpg_640x640.jpg",
    parameter: "Colorful pillows",
  },
  {
    name: "with scarves",
    src: "https://ae04.alicdn.com/kf/Sdb5e5ec3010540c2b15af79f7f4e65c8F.jpg_640x640.jpg",
    parameter: "White pillows",
  },
  {
    name: "smartphones",
    src: "https://ae04.alicdn.com/kf/S53248b14abeb4e5fae005a7ffb0f86a4y.jpg_640x640.jpg",
    parameter: "Colorful pillows",
  },
];
const pillowsFilters = ['All pillows', 'White pillows', 'Colorful pillows'];
const defaultPillowsFilter = 'All pillows';

const tshirts = [
  {
    name: "",
    src: "",
    parameter: "",
  },
  {
    name: "",
    src: "",
    parameter: "",
  },
  {
    name: "",
    src: "",
    parameter: "",
  },
  {
    name: "",
    src: "",
    parameter: "",
  },
  {
    name: "",
    src: "",
    parameter: "",
  },
  {
    name: "",
    src: "",
    parameter: "",
  },
  {
    name: "",
    src: "",
    parameter: "",
  },
];
const tshirtsFilters = ['All T-shirts', 'Male T-shirts', 'Female T-shirts'];
const defaultTshirtsFilter = 'All T-shirts';

const posters = [
  {
    name: "",
    src: "",
    parameter: "",
  },
  {
    name: "",
    src: "",
    parameter: "",
  },
  {
    name: "",
    src: "",
    parameter: "",
  },
  {
    name: "",
    src: "",
    parameter: "",
  },
  {
    name: "",
    src: "",
    parameter: "",
  },
  {
    name: "",
    src: "",
    parameter: "",
  },
  {
    name: "",
    src: "",
    parameter: "",
  },
];
const postersFilters = ['All posters', 'Big posters', 'Small posters'];
const defaultPostersFilter = 'All posters';


const pages = ['stickers', 'toys', 'pillows', 't-shirts', 'posters'];

function App() {
  // создать стейт для выбранной страницы навигации
  // передавать его в Navigation вместе с хэндлером для установки
  
  const [page, setPage] = useState(pages[0]);
  function handleSetPage(event) {
     setPage(event.target.textContent.trim().toLowerCase())
  }
 
  let data, filterValues, defaultFilter;
  switch(page) {
    case 'toys':
      data = toys;
      filterValues = toysFilters;
      defaultFilter = defaultToysFilter;
      break;
    
    case 'pillows':
      data = pillows;
      filterValues = pillowsFilters;
      defaultFilter = defaultPillowsFilter;
      break;

    case 't-shirts':
      data = tshirts;
      filterValues = tshirtsFilters;
      defaultFilter = defaultTshirtsFilter;
      break;

    case 'posters':
      data = posters;
      filterValues = postersFilters;
      defaultFilter = defaultPostersFilter;
      break;

    default:
      data = stickers; 
      filterValues = stickerFilters;
      defaultFilter = defaultStickerFilter;
    
  }

	return (
    <div>
      <h1>Bubu and Dudu souveniers Website!</h1>
      <Navigation pages={pages} handlerSetPage={handleSetPage} currentPage={page}/>
      <Content data={data} filterValues={filterValues} defaultFilter={defaultFilter}/>
      <h1>Thank you for your attention</h1>
    </div>
  )
}

export default App;
