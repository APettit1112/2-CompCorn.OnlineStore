// Commented out previous code in Apps.jsx 
/* import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
*/ 

// New code for Apps.jsx

//In your main App.jsx component, delete (I commented out) the starter code provided by Vite inside the App function. 
// Import the ProductCard and render at least 3 ProductCard components with different product data, 
// passing appropriate props to demonstrate component reusability.

// Imported Product Card
import ProductCard from './assets/components/ProductCard';

// Import Header.jsx
import Header from './assets/components/Header';

// Import Hero.jsx 
import Hero from './assets/components/Hero';

// IMport Footer.jsx
import Footer from './assets/components/Footer';

function App() {
  const products = [
    {
      name: 'Product 1',
      price: 11.99,
      // Given image placehold.co/600x400 for placeholder image
      // image: 'https://placehold.co/600x400',
      //modify the endpoint of https://placehold.co/1200x400/667eea/ffffff?
      image: 'https://placehold.co/1200x400/0f766e/ffffff?text=Product+1',
      description: 'This is the description for Product 1.',
    },
    {
      name: 'Product 2',
      price: 19.99,
      // Given image placehold.co/600x400 for placeholder image
      // image: 'https://placehold.co/600x400',
      //modify the endpoint of https://placehold.co/1200x400/667eea/ffffff?
      image: 'https://placehold.co/1200x400/0f766e/ffffff?text=Product+2',
      description: 'This is the description for Product 2.',
    },
    {
      name: 'Product 3',
      price: 29.99,
      // Given image placehold.co/600x400 for placeholder image
      // image: 'https://placehold.co/600x400',
      //modify the endpoint of https://placehold.co/1200x400/667eea/ffffff?
      image: 'https://placehold.co/1200x400/0f766e/ffffff?text=Product+3',
      description: 'This is the description for Product 3.',
    },
  ];

  return (
    <div className="app">
      <Header />
      <Hero
        title="ComponentCorner"
        subtitle="Discover your next tech upgrade."
        ctaText="Shop Deals"
        image="https://placehold.co/1200x400/0f766e/ffffff?text=Smart+Tech+Deals"
      />

      <div className="product-list">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            price={product.price}
            image={product.image}
            description={product.description}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App; 