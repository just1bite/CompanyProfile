import React from 'react'
import Testimonial from '../Components/Testimonial'
import Hero from '../Components/Hero'
import Idcard from '../assets/idcard.avif'
import Spanduk from '../assets/spanduk.avif'
import Emoney from '../assets/Emoney.avif'
import Kaos from '../assets/Baju.avif'
import Culture from './Culture'
import { Link } from 'react-router-dom'


export default () => {
    const posts = [
        {
            title: "ID Card",
            desc: "Komponen penting dalam dunia bisnis, sehingga wajib untuk memiliki kartu nama. Pakai kartu nama dalam memperkenalkan diri pada rekan bisnis anda!",
            img: Idcard,
        },
        {
            title: "SPANDUK",
            desc: "Buat spanduk untuk backdrop event, sign dari nama toko, atau untuk kebutuhan lainnya. Pilih bahan yang kamu butuhkan dan order langsung!",
            img: Spanduk,
        },
        {
            title: "E-MONEY",
            desc: "Mau punya kartu e-money dengan gambar yang kamu suka? Gampang! Langsung saja buat di Rembo Printing!",
            img: Emoney,
        },
        {
            title: "KAOS",
            desc: "Ingin membuat kaos dengan custom print untuk event atau ingin mencetak gambar yang anda sukai di t-shirt? Rembo Printing menyediakan solusi untuk anda!",
            img: Kaos,
     
        },
        
    ]
    
  return (
    <>
      <Hero />
      <Culture />
      <section className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <h3 className="text-indigo-600 font-semibold mb-1">
                        Product
                    </h3>
            <div className="text-left">
                <h1 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                    Our Product
                </h1>
                <p className="mt-3 text-gray-500">
                The quality we provide to you is always number 1
                </p>
            </div>
            <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                {
                    posts.map((items, key) => (
                        <article className="hover:bg-indigo-600 max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm" key={key}>
                            <Link to={items.href}>
                                <img src={items.img} loading="lazy" alt={items.title}  className="w-screen-full h-50 rounded-t-md" />
                                <div className="pt-3 ml-4 mr-2 mb-3">
                                    <h3 className="text-xl text-gray-900">
                                        {items.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mt-1">{items.desc}</p>
                                </div>
                            </Link>
                            
                        </article>
                        
                    ))
                }
                 <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                            <a href="/Product" className="block py-2 px-4 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none mt-5">
                                All Product
                            </a>
                        </div>
            </div>
            
        </section>
        
        <Testimonial/>

      </>
  )
}