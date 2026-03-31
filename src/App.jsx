import itemBlue from './img/item-blue.jpg';
import itemBlack from './img/item-black.jpg';
import './App.css';
import ShopItemFunc from './shopItem';
import {item} from './shopItem';

function App() {
  return (
    <div className="container">
    <div className="background-element">
    </div>
    <div className="highlight-window">
      <div className='highlight-overlay'></div>
    </div>
    <div className="window">
      <ShopItemFunc item={item} />
    </div>
  </div>
  );
}

export default App;
