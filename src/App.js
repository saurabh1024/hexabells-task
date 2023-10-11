import Category from './components/Category';
import Product from './components/Product';
import img1 from './assets/skincare1.png'
import img2 from './assets/skincare2.png'
import img3 from './assets/skincare3.png'
import img4 from './assets/skincare4.png'
import logo from './assets/logo.png'
import './App.css';
import { useState } from 'react';
import Cart from './components/Cart';

const products = [
  {
    id:1,
    img: img1,
    altImg:img2,
    description : "Weightless Eyeshadow StickWeightless Eyeshadow Stick",
    price : 629
  },
  {
    id:2,
    img: img2,
    altImg:img1,
    description : "Weightless Eyeshadow StickWeightless Eyeshadow Stick",
    price : 1549
  },
  {
    id:3,
    img: img3,
    altImg:img2,
    description : "Weightless Eyeshadow StickWeightless Eyeshadow Stick",
    price : 899
  },
  {
    id:4,
    img: img4,
    altImg:img2,
    description : "Weightless Eyeshadow StickWeightless Eyeshadow Stick",
    price : 618
  },  
]

function App() {
  const [selectedItems, setSelectedItems] = useState([])
  const handleAddToBag = (clickedItem) => {
    setSelectedItems([...selectedItems,clickedItem])
    localStorage.setItem('count',selectedItems.length+1)
  }
  const handleLogOut = () => {
    localStorage.clear()
    setSelectedItems([])
  }
  return (
    <div className='main-container'>
      <header>
        <div className='logo-container'>
          <img src={logo} alt='logo' />
        </div>
        <div className='searchBar'>
          <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M15.4749 14.3612L12.5652 11.475C13.6946 10.0667 14.2416 8.27922 14.0936 6.48004C13.9456 4.68086 13.1139 3.00675 11.7695 1.80196C10.4251 0.59717 8.6702 -0.0467359 6.86562 0.00264384C5.06103 0.0520236 3.34396 0.790936 2.06745 2.06745C0.790936 3.34396 0.0520236 5.06103 0.00264384 6.86562C-0.0467359 8.6702 0.59717 10.4251 1.80196 11.7695C3.00675 13.1139 4.68086 13.9456 6.48004 14.0936C8.27922 14.2416 10.0667 13.6946 11.475 12.5652L14.3612 15.4514C14.4341 15.5249 14.5209 15.5833 14.6165 15.6231C14.712 15.6629 14.8145 15.6834 14.9181 15.6834C15.0216 15.6834 15.1241 15.6629 15.2197 15.6231C15.3153 15.5833 15.402 15.5249 15.4749 15.4514C15.6163 15.3052 15.6953 15.1097 15.6953 14.9063C15.6953 14.7029 15.6163 14.5075 15.4749 14.3612ZM7.07508 12.5652C5.98925 12.5652 4.92779 12.2432 4.02495 11.6399C3.12211 11.0367 2.41843 10.1792 2.0029 9.17605C1.58737 8.17287 1.47864 7.06899 1.69048 6.00402C1.90232 4.93905 2.4252 3.9608 3.193 3.193C3.9608 2.4252 4.93905 1.90232 6.00402 1.69048C7.06899 1.47864 8.17287 1.58737 9.17605 2.0029C10.1792 2.41843 11.0367 3.12211 11.6399 4.02495C12.2432 4.92779 12.5652 5.98925 12.5652 7.07508C12.5652 8.53115 11.9868 9.92757 10.9572 10.9572C9.92757 11.9868 8.53115 12.5652 7.07508 12.5652Z" fill="black"/>
        </svg></span>
          <input type='text' placeholder='Search prishé beauty products' />
        </div>
        <div className='loginAndCart'>
          <div className='login'>
            <button onClick={handleLogOut}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="20" viewBox="0 0 14 20" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.95024 1.69997C5.17364 1.69997 3.73342 3.14019 3.73342 4.9168C3.73342 6.6934 5.17364 8.13362 6.95024 8.13362C8.72685 8.13362 10.1671 6.6934 10.1671 4.9168C10.1671 3.14019 8.72685 1.69997 6.95024 1.69997ZM2.03345 4.9168C2.03345 2.20132 4.23477 0 6.95024 0C9.66572 0 11.867 2.20132 11.867 4.9168C11.867 7.63227 9.66572 9.83359 6.95024 9.83359C4.23477 9.83359 2.03345 7.63227 2.03345 4.9168Z" fill="black"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.9168 13.9002C4.06364 13.9002 3.24543 14.2391 2.64216 14.8424C2.03889 15.4456 1.69997 16.2638 1.69997 17.117V19.1504C1.69997 19.6198 1.31942 20.0004 0.849986 20.0004C0.380551 20.0004 0 19.6198 0 19.1504V17.117C0 15.813 0.518018 14.5624 1.4401 13.6403C2.36217 12.7182 3.61278 12.2002 4.9168 12.2002H8.98361C10.2876 12.2002 11.5382 12.7182 12.4603 13.6403C13.3824 14.5624 13.9004 15.813 13.9004 17.117V19.1504C13.9004 19.6198 13.5199 20.0004 13.0504 20.0004C12.581 20.0004 12.2004 19.6198 12.2004 19.1504V17.117C12.2004 16.2638 11.8615 15.4456 11.2582 14.8424C10.655 14.2391 9.83676 13.9002 8.98361 13.9002H4.9168Z" fill="black"/>
            </svg>
            </button>
          </div>
          <div className='cart-container'>
              <Cart />
          </div>
        </div>
      </header>
      <div className='App'>
      
      <div className="category-container">
        <Category />
      </div>
      <div className="products-container">
        {products.map(product => {
          return <Product key={product.id} handleAddToBag={handleAddToBag} product={product} />
        })}
      </div>
      </div>
      
    </div>
  );
}

export default App;
