import Content from './components/Content';
import Navigation from './components/Navigation';

const _images = 
    [{
        img: "https://e1.pxfuel.com/desktop-wallpaper/151/458/desktop-wallpaper-bubu-dudu-star-bubu-dudu.jpg",
        shape: "Colorful background"
      }, {
        img: "https://e1.pxfuel.com/desktop-wallpaper/669/487/desktop-wallpaper-panda-bear-bubu-dudu-sticker-by-dev-dudu-bubu.jpg",
        shape: "Transparent background"
      }, {
        img: "https://e1.pxfuel.com/desktop-wallpaper/430/980/desktop-wallpaper-bubuanddudu-bubu-dudu.jpg",
        shape: "Colorful background"
      }, {
        img: "https://e1.pxfuel.com/desktop-wallpaper/445/33/desktop-wallpaper-panda-bear-bubu-dudu-sticker-by-dev-dudu-bubu.jpg",
        shape: "Transparent background"
      }, {
        img: "https://e1.pxfuel.com/desktop-wallpaper/373/471/desktop-wallpaper-jerry-motu-official-di-instagram-bubu-dudu.jpg",
        shape: "Colorful background"
      }, {
        img: "https://e1.pxfuel.com/desktop-wallpaper/496/204/desktop-wallpaper-90-dudu-bubu-ideas-in-2022-bubu-dudu.jpg",
        shape: "Colorful background"
      }, {
        img: "https://e1.pxfuel.com/desktop-wallpaper/214/933/desktop-wallpaper-bubu-dudu-bubu.jpg",
        shape: "Transparent background"
      }, {
        img: "https://e1.pxfuel.com/desktop-wallpaper/805/74/desktop-wallpaper-panda-bear-hug-bubu-dudu-bubu-dudu.jpg",
        shape: "Transparent background"
      }
    ]
const images = _images.map((el, i) => {
    el['number'] = i;
    return el;
})

function App() {
	return (
    <div>
      <h1>Bubu and Dudu souveniers Website!</h1>
      <Navigation/>
      <Content images={images}/>
      <h1>Thank you for your attention</h1>
    </div>
  )
}

export default App;
