import ProductItem from "../Productitem";

function Welcome(props) {
  return <div>Hello World of React. My first React</div>;
}

function Greeting(props) {
  return <div>Greeting</div>;
}

const PI = 3.14;

function Mycomponent(props) {
  return (
    <div>
      This is MY component
      <ProductItem />
    </div>
  );
}
export default Mycomponent;
export { Welcome, Greeting, PI };
