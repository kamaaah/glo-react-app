const ButtonCustom = props => {
  props.couleurParent();
  console.log(props.couleurParent);

  // const {handleOnClick} = props   redéfinition de la fonction  & props dans App == handleOnClick
  // const gestionClick = props.handleOnClick;

  // const afficheCouleurParent = props.afficheCouleur; les 2 lignes vont ensemble
  // afficheCouleurParent();

  return <button onClick={props.handleOnClick}>Déclencher une alerte !</button>;
  // return <button onClick={(e) => console.log()}> Déclencher une alerte !</button>
};
export default ButtonCustom;
