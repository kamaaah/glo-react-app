import React from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld/HelloWorld';
import Title from './components/Title/Title';
import ButtonCustom from './components/ButtonCustom/ButtonCustom';

// composant fonctionnel
const App = () => {
  const couleur = 'red';

  const handleOnClick = event => {
    event.preventDefault(); // la méthode preventDefault() évite tout comportement inattendu lié au button
    alert('Tu as push le button');
    console.log(event.target);
  };

  const afficheCouleur = () => {
    console.log(`La couleur de app est '${couleur}`);
  };
  return (
    <>
      <HelloWorld book="Robert Martins">Bonjour tout le monde</HelloWorld>
      <Title title="Star Wars" />
      <ButtonCustom
        handleOnClick={handleOnClick}
        couleurParent={afficheCouleur}
      />
    </>
  );
};

/* Ancienne version de programmation : composant classe qui appelle le React-Component */

//  ne pas oublier de faire l'import => import React from 'react';
// class App extends React.Component {
//  render(){
// return(
/*{ <div classname="app">
      <header classname="app-header">
        <img src={logo} classname="app-logo" alt="logo" />
        <p>
          edit <code> src / app.js </code> and save to reload.{' '}
        </p>{' '}
        <a classname="app-link"href="https://reactjs.org"
          target="_blank" rel="noopener noreferrer">
          learn react{' '}
        </a>{' '}
        <>
          <div> on est le {new date().tolocaledatestring()} </div>{' '}
          <div> il est actuellement {new date().tolocaletimestring()} </div>{' '}
        </>{' '}
      </header>{' '}
    </div> }*/
// );
// }
// }

export default App;

// template d'origine
/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code> src / App.js </code> and save to reload.{' '}
        </p>{' '}
        <a className="App-link"href="https://reactjs.org"
          target="_blank" rel="noopener noreferrer">
          Learn React{' '}
        </a>{' '}
        <>
          <div> On est le {new Date().toLocaleDateString()} </div>{' '}
          <div> Il est actuellement {new Date().toLocaleTimeString()} </div>{' '}
        </>{' '}
      </header>{' '}
    </div> */
