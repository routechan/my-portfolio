import './App.css'
import Header from "./components/Header"
import {motion} from 'motion/react'
import { Variants } from "framer-motion";

function App() {
 const gridImages:string[] = ["public/images/grid/grid-1.jpg","public/images/grid/grid-2.jpg","public/images/grid/grid-3.jpg","public/images/grid/grid-4.jpg","public/images/grid/grid-5.jpg","public/images/grid/grid-6.jpg","public/images/grid/grid-7.jpg","public/images/grid/grid-8.jpg"]

const variants:Variants = {
  offscreen:{ 
    y:70,
  opacity:0
},
  onscreen:{
    y:0,
    opacity:1,
    transition:{
      duration:0.7,
    }
    
  }
}

  return (
    <div>


<section className="relative bg-[url('/images/ai2445CITY008-image_TP_V.jpg')] bg-cover min-h-screen font-HindMadurai">
  {/* 色を重ねるためのafter擬似要素 */}
  <div className="absolute inset-0 bg-gradient-to-r from-sky-50 to-indigo-50 opacity-70"></div>
<Header/>
<motion.div
initial={{scale:0}}
animate={{scale:1}}
transition={{type:"spring",duration:0.7,delay:0.4}}
className='relative z-20 min-h-screen flex flex-col justify-center items-center'>

<h1 className='text-7xl font-bold text-center '>Routechan Portfolio</h1>
<div className='text-center mt-6 '>
  <motion.img
  initial={{scale:0.9}}
  whileHover={{scale:1}}
  src='../public/images/mori-801135634_0212_D_TP_V4.jpg' alt='プロフィール画像' className='w-64 h-64 rounded-full object-cover'/>
</div>
<p className='text-xl text-center font-bold mt-2'>Engineer</p>
<div className='flex gap-4 mt-4 text-2xl'>
  <motion.a
  whileHover={{ scale: 1.1 }}
  href='#' className='px-6 py-3 bg-gray-800 text-white rounded-full flex items-center gap-2 hover:bg-gray-700'>Github</motion.a>
  <motion.a      
  whileHover={{ scale: 1.1 }}
  href="#contact"
  className="px-6 py-3 bg-sky-500 text-white rounded-full flex items-center gap-2 hover:bg-sky-400"
              >
             
                Contact
              </motion.a>
</div>

</motion.div>
     </section>

     {/* プロフィール */}
     <section id='Profile' className='bg-gradient-to-r from-sky-50 to-indigo-50 '>
      <div className='max-w-4xl mx-auto py-32'>
     <motion.h2
     variants={variants}
     initial="offscreen"
     whileInView="onscreen"
     viewport={{once:true}}
     className='text-center text-6xl'>Profile</motion.h2>

     <motion.div
      variants={variants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{once:true}}
     className='flex gap-6 mt-8 justify-between'>
      <div className='flex-1 '>
        <img src='../public/images/mori-801135634_0212_D_TP_V4.jpg' alt='プロフィール画像' className='rounded-lg shadow-md'/>
      </div>
      <p className='text-xl flex-1 '>石川県出身のエンジニア。高専で機械工学、技科大で材料工学を学んだのち、メーカーで温度センサーの材料開発・生産に従事。その後ITの技術にひかれ、31才でIT業界へ転職。運用・テクニカルサポートからキャリアをスタートし、AWSクラウドサーバー構築、Webページ作成、Python/djangoのツール改修など、インフラからフロントサイドまで幅広く業務を経験してきました。</p>
     </motion.div>
     

  {/* グリッド写真 */}
<div className='mt-16'>
     <motion.h3
      variants={variants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{once:true}}
     className='text-3xl text-center'>My Favorite Photos</motion.h3>

     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {gridImages.map((src, index) => (
          <motion.div
          initial={{opacity:0,y:50}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.7,delay:0.5 + index * 0.2}}
          viewport={{once:true}}
          key={index} className="relative overflow-hidden rounded-lg shadow-md">
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="object-cover w-full h-48 hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        ))}
      </div>

     </div>
     </div>

     <motion.div drag whileDrag={{scale:1.2}} className='w-16 h-16 bg-orange-500 rounded-md'></motion.div>
     </section>

    </div>
  )
}

export default App
