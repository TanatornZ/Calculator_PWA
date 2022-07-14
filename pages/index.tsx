import type { NextPage } from "next";
import Calculator from "../components/Calculator";


const Home: NextPage = () => {
  return (
    <div className='min-w-screen min-h-screen flex flex-col justify-center items-center p-'>
        <Calculator />
        <p className='mt-2 text-lg font-bold'>Clone by TanatornZ</p>
    </div>
  );
};

export default Home;
