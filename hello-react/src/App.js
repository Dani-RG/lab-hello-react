import './App.css';
import ironhackLogoXs from './images/ironhack-logo-xs.png';
import menuTopXs from './images/menu-top-xs.png';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';

function App() {
  return (
    <div className="App">

      <style>
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;900&display=swap');
      </style>

      <header className='App-header'>
        <nav className='header-nav'>
          <img src={ironhackLogoXs} alt="ironhack logo" />
          <img src={menuTopXs} className='header-menu-logo' alt="menu img" />
        </nav>
        <h1 className='header-h1'>Say hello to ReactJS</h1>
        <p className='header-p'>
          You will learn how to use the most popular frontend library, and become a super Ninja developer.
        </p>
        <button className='header-btn'>
          Awesome!
        </button>
      </header>

      <section className='App-section1'>
        <div>
          <img src={icon1} alt="icon1" />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div>
          <img src={icon2} alt="icon2" />
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div>
          <img src={icon3} alt="icon3" />
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the components</p>
        </div>
        <div>
          <img src={icon4} alt="icon4" />
          <h3>JSX</h3>
          <p>Statically-typed, designed to run in modern browsers</p>
        </div>
      </section>

    </div>
  );
}

export default App;
