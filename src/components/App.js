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
    name: "Dudu on horse",
    src: "https://ae04.alicdn.com/kf/S35435378092e48a3973993d64e47a44b5.jpg_640x640.jpg",
    parameter: "Plastic toy",
  },
  {
    name: "Bubu hiker",
    src: "https://ae04.alicdn.com/kf/S9a9810c84d7445eaa3f1b1150be0dc38g.jpg",
    parameter: "Soft toy",
  },
  {
    name: "Dudu with cup",
    src: "https://ae04.alicdn.com/kf/Sff0cf379f2de45318e15221aa82209486.jpg_640x640.jpg",
    parameter: "Plastic toy",
  },
  {
    name: "Bubu in yellow shirt",
    src: "https://ae04.alicdn.com/kf/Sf5083b4816414b20bbf37ade9b473c58m.jpg_640x640.jpg",
    parameter: "Soft toy",
  },
  {
    name: "Dudu hiker",
    src: "https://ae04.alicdn.com/kf/Sae23b7713421422cbadb4b9ea09501103.jpg_640x640.jpg",
    parameter: "Soft toy",
  },
  {
    name: "Bubu on horse",
    src: "https://ae04.alicdn.com/kf/Sef12b657e3bc450e856011e163b5a8a7w.jpg_640x640.jpg",
    parameter: "Plastic toy",
  },
  {
    name: "Dudu in yellow shirt",
    src: "https://ae04.alicdn.com/kf/Sfdfe40e504c64db8bdd77ce06addb175i.jpg_640x640.jpg",
    parameter: "Soft toy",
  },
  {
    name: "Bubu with cup",
    src: "https://ae04.alicdn.com/kf/S4eec4f23c20c4ea4a1f1c48bb6f56e38m.jpg_640x640.jpg",
    parameter: "Plastic toy",
  },
];
const toysFilters = ['All toys', 'Soft toy', 'Plastic toy'];
const defaultToysFilter = 'All toys';

const pillows = [
  {
    name: "Bubu on pony",
    src: "https://ae04.alicdn.com/kf/S64ddbe993f994f84977a0b81b011a113P.jpg_640x640.jpg",
    parameter: "White pillow",
  },
  {
    name: "night",
    src: "https://ae04.alicdn.com/kf/S64b8b6336eec45909bc63472ef661751I.jpg_640x640.jpg",
    parameter: "Colorful pillow",
  },
  {
    name: "Dudu on pony",
    src: "https://ae04.alicdn.com/kf/S4c381fbcef9445ffaec49ebf699909079.jpg_640x640.jpg",
    parameter: "White pillow",
  },
  {
    name: "take a photo",
    src: "https://ae04.alicdn.com/kf/S98dbe1ec8f964065b18195f89ebe90a7Y.jpg_640x640.jpg",
    parameter: "Colorful pillow",
  },
  {
    name: "Bubu on pillows",
    src: "https://ae04.alicdn.com/kf/Sb6cbacc21b9f4bbda29e94b3cac01588U.jpg_640x640.jpg",
    parameter: "White pillow",
  },
  {
    name: "sleep",
    src: "https://ae04.alicdn.com/kf/S8072b1a989d2413a8d6e9b9e53eda88dB.jpg_640x640.jpg",
    parameter: "Colorful pillow",
  },
  {
    name: "with scarves",
    src: "https://ae04.alicdn.com/kf/Sdb5e5ec3010540c2b15af79f7f4e65c8F.jpg_640x640.jpg",
    parameter: "White pillow",
  },
  {
    name: "smartphones",
    src: "https://ae04.alicdn.com/kf/S53248b14abeb4e5fae005a7ffb0f86a4y.jpg_640x640.jpg",
    parameter: "Colorful pillow",
  },
];
const pillowsFilters = ['All pillows', 'White pillow', 'Colorful pillow'];
const defaultPillowsFilter = 'All pillows';

const tshirts = [
  {
    name: "loving couple",
    src: "https://ae04.alicdn.com/kf/S445bff56f14b47348fbfe2e1435ff73dd.jpg_640x640.jpg",
    parameter: "Female T-shirt",
  },
  {
    name: "sweet dreams",
    src: "https://ae04.alicdn.com/kf/S771e093c6257472289ae232b83267aa4n.jpg_640x640.jpg",
    parameter: "Male T-shirt",
  },
  {
    name: "play with box",
    src: "https://ae04.alicdn.com/kf/Scb88f8674906466e97c730d3c9917ebd8.jpg_640x640.jpg",
    parameter: "Female T-shirt",
  },
  {
    name: "cool Bubu",
    src: "https://ae04.alicdn.com/kf/Sca873d1508c048e7a329d0d890f79a864.jpg_640x640.jpg",
    parameter: "Male T-shirt",
  },
  {
    name: "watch movie",
    src: "https://ae04.alicdn.com/kf/Se2c7e4bb81ab44ddbd4d8b849d3f0b66x.jpg",
    parameter: "Female T-shirt",
  },
  {
    name: "nighty car",
    src: "https://ae04.alicdn.com/kf/S228d00498e35434d86b5715eb1b2e971c.jpg_640x640.jpg",
    parameter: "Male T-shirt",
  },
  {
    name: "jumping Bubu",
    src: "https://ae04.alicdn.com/kf/Sa4c2b408096e4e24b0078276c6e63b66U.jpg_640x640.jpg",
    parameter: "Female T-shirt",
  },
  {
    name: "walk with ballon",
    src: "https://ae04.alicdn.com/kf/Sddde2972f4c74a10b8342ecdd36781359.jpg_640x640.jpg",
    parameter: "Male T-shirt",
  },
];
const tshirtsFilters = ['All T-shirts', 'Male T-shirt', 'Female T-shirt'];
const defaultTshirtsFilter = 'All T-shirts';

const posters = [
  {
    name: "vacation time",
    src: "https://ae04.alicdn.com/kf/S2a2df00c50cb43e3b764bdc7ba2e34c7J.jpg_640x640.jpg",
    parameter: "Without frame",
  },
  {
    name: "in aquapark",
    src: "https://ae04.alicdn.com/kf/S14debabb11a144e2b06b72465eca8dcf4.jpg_640x640.jpg",
    parameter: "With frame",
  },
  {
    name: "snowy winter",
    src: "https://ae04.alicdn.com/kf/Sfc0846a206ab4bbca1d1845820e424c3R.jpg_640x640.jpg",
    parameter: "Without frame",
  },
  {
    name: "beach play",
    src: "https://ae04.alicdn.com/kf/Sbf3b664613814e279cb1cd9fb342512fn.jpg",
    parameter: "With frame",
  },
  {
    name: "picnic",
    src: "https://ae04.alicdn.com/kf/Sd65d7de1290842dc9b0df494dccc9f72G.jpg_640x640.jpg",
    parameter: "Without frame",
  },
  {
    name: "good nigth",
    src: "https://ae04.alicdn.com/kf/Se00839683d8c49cf87e82e5ecbb07a74V.jpg_640x640.jpg",
    parameter: "With frame",
  },
  {
    name: "try a piece",
    src: "https://ae04.alicdn.com/kf/S73e5cec4aef64167946b4b17df3b4059A.jpg_640x640.jpg",
    parameter: "Without frame",
  },
  {
    name: "like Titanic",
    src: "https://ae04.alicdn.com/kf/Sc42ccd8f7bd640768c815ba15735b38fy.jpg_640x640.jpg",
    parameter: "With frame",
  },
];
const postersFilters = ['All posters', 'With frame', 'Without frame'];
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
