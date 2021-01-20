const HelloWorld = props => {
  console.log(props.book);
  console.log(props.children);
  return (
    <p></p>
    // <>
    //   <h1>Hello World</h1>
    //   <p></p>
    // </>
  );
};

export default HelloWorld;
