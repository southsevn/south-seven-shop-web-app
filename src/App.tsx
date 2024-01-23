import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>Abnova</h1>
      <div className='products-list'>
        <div className="product">
          <img src="https://nevestam.by/files/novosti-2022/prozrachnoe-platie-001.png" alt="" />
          <h2>Платье "Винтаж"</h2>
          <button>Купить</button>
        </div>
        <div className="product">
          <img src="https://shop-cdn1-2.vigbo.tech/shops/17822//products/22114993/images/preview-767a927194dc6646b8d4acd68942f02e.jpeg" alt="" />
          <h2>Платье "Шантаж"</h2>
          <button>Купить</button>
        </div>
        <div className="product">
          <img src="https://june.by/image/cache/catalog/Vechernia/1-2480x3508.jpg" alt="" />
          <h2>Платье "Кураж"</h2>
          <button>Купить</button>
        </div>

      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Кнопка {count}
        </button>
      </div>
    </>
  )
}

export default App
