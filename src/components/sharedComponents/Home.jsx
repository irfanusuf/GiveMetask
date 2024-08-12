import React from "react";
import "../../styles/Home.scss";
import { ReactTyped as Typed } from "react-typed";

const Home = (props) => {

  const subheading = props.subheading;

 const  punch1 = props.punch1
 const  punch2 = props.punch2
 const  punch3 = props.punch3



  return (
    <div className="home">
      <div className="hero">
        <div className="hero-left">
          <h1>{props.heading}</h1>

          <h2>
        
            <Typed
              strings={[subheading]}
              typeSpeed={30}
              backSpeed={30}
              backDelay={1000}
              loop={false}
              showCursor ={false}
            />
          </h2>

          <h3>
            {" "}
            <Typed
              strings={[punch1 , punch2 , punch3]}
              typeSpeed={30}
              backSpeed={20}
              backDelay={1000}
              loop={true}
              showCursor ={false}
        
            />{" "}
          </h3>

       
          <p>{props.para}</p>
        </div>

        <div className="hero-right"></div>
      </div>
    </div>
  );
};

export default Home;

// const Home = (props) => {
//   // front end logic
//   // hooks // useState
//   const [color, setColor] = useState("yellow");
//   const [count, setCount] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [arr, setArr] = useState(["Apple" , "Orange" , "Kiwi"]);
//   const [object, setObject] = useState({
//     name: "irfan",
//     address: "hawal",
//   });

//   function handleClick() {
//     setColor("red");
//     setLoading(!loading);
//   }
//   function increment() {
//     setCount((x) => x + 1);
//   }
//   console.log(loading);

//   return (
//     <div className="home">
//       <h1>this is under development </h1>
//       <h2> project is under {props.x} </h2>
//       <p> {props.x} </p>
//       <p> my favorite color is {color}</p>
//       <h1>{count} </h1>
//       <h1> {object.name} </h1>
//       <h1> {object.address} </h1>
//       <h2> {arr.map((element) => (<p> {element} </p>) )} </h2>
//       <button onClick={handleClick}> click me </button>
//       <button onClick={increment}> increment </button>
//     </div>
//   );
// };

// export default Home;
