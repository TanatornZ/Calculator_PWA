import type { NextPage } from "next";
import Calculator from "../components/Calculator";


const Home: NextPage = () => {
  return (
    <div className='min-w-screen min-h-screen flex flex-col justify-center items-center'>
        <Calculator />
        <p>Create by Tanatorn</p>
    </div>
  );
};

export default Home;
