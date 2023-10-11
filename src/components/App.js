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
    console.log(event)
     setPage(event.target.textContent.trim().toLowerCase())
  }
  console.log('APP', page);
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
      data = toys;
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
