import { Link } from "react-router-dom"
import Hero1 from "../assets/Hero1.avif"

export default () => {
  
    const data = [
        {
            avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            name: "Martin escobar",
            title: "Product designer",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae."
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/79.jpg",
            name: "Angela stian",
            title: "Product designer",
            desc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/86.jpg",
            name: "Karim ahmed",
            title: "DevOp engineer",
            desc: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain."
        },
    ]
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
                                            src={item.avatar}
                                            className="w-screen-full h-screen-full rounded-full"
                                            alt="avatar"
                                        />
                                    </div>
                                    <div className="mt-2 px-1 text-justify md:items-center">
                                        <h4 className="text-indigo-400 font-semibold sm:text-lg text-center"> {item.name}</h4>
                                        <p className="text-gray-300 font-semibold sm:text-lg text-center" alt="namaJabatan"> {item.title}</p>
                                        <p className="text-gray-400 text-center" text="description">{item.desc}</p>
                                       
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                    <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start py-8">
                        <Link to="/About" className="block py-2 px-4 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none">
                            Learn more about us!
                        </Link>
                    </div>
                </div>
                <div className="flex-none mt-14 md:mt-0 md:max-w-xl ml-8 md:items-center">
                    <img src={Hero1} className="w-screen-full mx-auto sm:w-10/12 lg:w-full md:rounded-tl-[108px] md:rounded-br-[108px]" alt="Company" />
                </div>
            </section>
        </div>
           
        </>
    )
}