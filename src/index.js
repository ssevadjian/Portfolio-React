import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';
ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


// import React from 'react';
// import ReactDOM from 'react-dom';
// import MainContainer from './components/MainContainer';
// import './index.css';
// const About = require('./components/aboutMe');
// import App from './App';

// let city = {
//   name: "San Francisco",
//   country: "United States"
// };

// const lakeObjectList = [
//   { id: '1', name: 'Echo', trailhead: 'Echo' },
//   { id: '2', name: 'Maud', trailhead: 'Wrights' },
//   { id: '3', name: 'Velma', trailhead: 'Bayview' }
// ]

// const lakeList = [
//   "Echo Lake",
//   "Maud Lake",
//   "Cascade Lake"
// ];

// function LakeApp({ lakes }) {
//   return (
//   <div>
//     {lakes.map(lake => (
//       <div>
//         <h2>{ lake.name }</h2>
//         <p>Accessed by: {lake.trailhead}</p>
//       </div>
//     ))}
//     </div>
//   );
// }

// function App(props) {
//   return ( 
//     <ul>
//       { props.lakes.map(lake => (
//         <li>{ lake }</li>
//       )) }
//     </ul>
//     )
// } 

// function About(props) {
//   console.log("these are my props: ", props);
//   console.log("these are my prop keys: ", Object.keys(props));
//   return (
//     <div>
//       <h1 id="heading" className="cool-text">Stephanie Sevadjian</h1>
//       <p>
//         Total Props: { Object.keys(props).length } 
//       </p>
//       <p>
//         Daily motivation: { props.message }
//       </p>
//         <p>
//           Hello from { city.name }, { city.country }!
//           Welcome to { props.library }!
//         </p>
//     </div>
// );
// }

// ReactDOM.render(
  // The below example using React.createElement: 
  // React.createElement("div", { style: { background: "pink" } }, React.createElement("h1", { style: { color: "white" } }, "Portfolio")),
  // is just one way to render html elements on the DOM.
  // But you can use JSX (acronym for JavaScript XML) instead.
  // JSX is a language extension that allows you
  // to write tags directly in the javascript.
  
// The below code utilizes JSX:
  // <body>
  //   <nav>
  //       <h1 id="heading" className="cool-text">Stephanie Sevadjian</h1>
  //         <div>
  //           Hello from { city.name }, { city.country }!
  //           <li>
  //             <h2>About Me</h2>
  //           </li>
  //           <li>
  //             <h2>Portfolio</h2>
  //           </li>
  //           <li>
  //             <h2>Contact</h2>
  //           </li>
  //         </div>
  //   </nav>
  // </body>,

  // But the best way to use JSX...
  // is to create components, such as below:
  // <About
  //   library="React"
  //   message="Keep learning, and make every step be in the right direction."
  // />,
  // <LakeApp lakes={ lakeObjectList }/>,
  // <App lakes={ lakeList }/>,
  // <MainContainer/>,
//   document.getElementById('root')
// );

// Babbel renders our JSX in the browser by
// compiling our code into a format that is
// compatible with the browser.
// It does this by translating it into
// a bunch of React.createElement calls
