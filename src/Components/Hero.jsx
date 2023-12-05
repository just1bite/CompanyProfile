import Hero1 from "../assets/Hero1.avif"
import { useEffect, useState } from "react";
import { getData } from "../lib/data";

export default () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        getData().then((res) => {
        setData(res.results);
    }
    );
    }, []);
  
    return (
        <>
         <div className="bg-gray-900 pt-5 px-4 mx-auto max-w-screen-full sm:px-8 sm:flex sm:space-x-6 items-center">
            <section className="mt-24 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
                <div className="space-y-4 flex-1 sm:text-center lg:text-left">
                    <h1 className="text-white font-bold text-4xl xl:text-5xl mb-5">
                       We Give You
                         <span className="text-indigo-400"> the Best Quality</span>
                    </h1>
                    <p className="text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0 text-justify">
                    <span className=" text-indigo-400 text-sm font-medium md:text-base mr-2">Vision & Mission</span>
                    To be leading digital printing company in its chosen market segment To be leading digital printing company in its chosen market segment and Optimizing our potential to enhance the value for us
                    </p>
                    <p className="text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0 text-justify">
                    <span className=" text-indigo-400 text-sm font-medium md:text-base mr-2">SleeplessNight at Glance</span>
                    We always implement strict quality control process since the selection of raw materials to ensure only the highest quality products are produced.
                    </p>

                    <div className="mt-12">
                    <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                        {
                            data.map((item, idx) => (
                                <li key={idx}>
                                    <div className="w-24 h-24 mx-auto px-1">
                                        <img
                                            src={item.picture.large}
                                            className="w-full h-full rounded-full"
                                            alt=""
                                        />
                                    </div>
                                    <div className="mt-2 px-1 text-justify">
                                        <h4 className="text-indigo-400 font-semibold sm:text-lg"> {item.name.title}.{item.name.first} {item.name.last}</h4>
                                        <p className="text-gray-600">{item.location.timezone.description}</p>
                                       
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                    <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
                        <a href="/About" className="block py-2 px-4 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none">
                            Learn more about us!
                        </a>
                    </div>
                </div>
                <div className="flex-none mt-14 md:mt-0 md:max-w-xl ml-8">
                    <img src={Hero1} className="w-full mx-auto sm:w-10/12 lg:w-full md:rounded-tl-[108px] md:rounded-br-[108px]" />
                </div>
            </section>
        </div>
           
        </>
    )
}