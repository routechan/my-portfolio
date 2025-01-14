import './App.css'
import Header from "./components/Header"
import {motion} from 'motion/react'
import { Variants } from "framer-motion";
import { Github, Mail,ExternalLink} from 'lucide-react';
import { useState } from 'react';
function App() {

  // モーダルウィンドウの開閉
const [isOpen,setIsOpen] = useState(false)
const openModal = ():void =>{
  setIsOpen(true);
}
const closeModal = ():void =>{
  setIsOpen(false)
}

  // my favorite photos
 const gridImages:string[] = ["public/images/grid/grid-1.jpg","public/images/grid/grid-2.jpg","public/images/grid/grid-3.jpg","public/images/grid/grid-4.jpg","public/images/grid/grid-5.jpg","public/images/grid/grid-6.jpg","public/images/grid/grid-7.jpg","public/images/grid/grid-8.jpg"]

//  skills
 interface Skill{
  skillName:string,
  terms:string[]
}
const skills:Skill[] = [{skillName:"Frontend",terms:["HTML","CSS","React"]},{skillName:"Backend",terms:["PHP","Laravel","Firebase"]},{skillName:"DevOps",terms:["Docker", "Kubernetes", "AWS"]}]

// works
interface Work{
  workName:string,
  description:string,
  image:string,
  link:string
}
const works:Work[] = [
  {workName:"AIバーテンダー",description:"あなたの手元にある材料、アルコールの強さ、味、今の気分を入力するとAIがオリジナルのカクテルを考え、レシピなどを教えてくれます",image:"aiバーテンダー.gif",link:"https://ai-bartender-67d9c.web.app/"},
  {workName:"みんなの日記カレンダー",description:"日記に今日あなたが頑張ったことを記録しよう",image:"calender-app.png",link:"https://diary-app-27b21.web.app/"}
]


// framer motion用のvariants
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


<section id="Home" className="relative bg-[url('/images/ai2445CITY008-image_TP_V.jpg')] bg-cover no-repeat center center bg-fixed min-h-screen font-HindMadurai">
  {/* 色を重ねるためのafter擬似要素 */}
  <div className="absolute inset-0 bg-gradient-to-r from-sky-50 to-indigo-50 opacity-70"></div>
<Header/>
<motion.div
initial={{scale:0}}
animate={{scale:1}}
transition={{type:"spring",duration:0.7,delay:0.4}}
className='relative  min-h-screen flex flex-col justify-center items-center'>

<h1 className='text-5xl md:text-6xl font-bold text-center '>Routechan Portfolio</h1>
<div className='text-center mt-6 '>
  <motion.img
  initial={{scale:0.9}}
  whileHover={{scale:1}}
  src='../public/images/mori-801135634_0212_D_TP_V4.jpg' alt='プロフィール画像' className='w-64 h-64 rounded-full object-cover'/>
</div>
<p className='text-xl text-center font-bold mt-2'>Engineer</p>
<div className='flex flex-col md:flex-row gap-4 mt-4 text-2xl'>
  <motion.a
  whileHover={{ scale: 1.1 }}
  href='https://github.com/routechan' className='px-6 py-3 bg-gray-800 text-white rounded-full flex items-center gap-2 hover:bg-gray-700'><Github/>Github</motion.a>
  <motion.a      
  whileHover={{ scale: 1.1 }}
  href="#Contact"
  className="px-6 py-3 bg-sky-500 text-white rounded-full flex items-center gap-2 hover:bg-sky-400"
              >
             
                <Mail/>Contact
              </motion.a>
</div>

</motion.div>
     </section>

     {/* プロフィール */}
     <section id='Profile' className='bg-sky-50'>
      <div className='max-w-4xl mx-auto py-32 px-8 md:px-4 '>
     <motion.h2
     variants={variants}
     initial="offscreen"
     whileInView="onscreen"
     viewport={{once:true}}
     className='text-center text-3xl font-bold md:text-6xl'>Profile</motion.h2>

     <motion.div
      variants={variants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{once:true}}
     className=' md:flex gap-6 mt-8 justify-between'>
      <div className='flex-1 '>
        <img src='../public/images/mori-801135634_0212_D_TP_V4.jpg' alt='プロフィール画像' className='rounded-lg shadow-md'/>
      </div>
      <p className='text-xl flex-1 '>東京で働く新卒Webエンジニア。好きな言語はReact。休日はバイクに乗って知らない街を散策するのが好き。</p>
     </motion.div>
     

  {/* グリッド写真 */}
<div className='mt-16'>
     <motion.h3
      variants={variants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{once:true}}
     className='text-2xl md:text-3xl text-center'>My Favorite Photos</motion.h3>

     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {gridImages.map((src, index) => (
          <motion.div
          initial={{opacity:0,y:50}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.7,delay:0.5 + index * 0.2}}
          viewport={{once:true}}
          key={index} className="relative overflow-hidden shadow-md">
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

   
     </section>


{/* Skill */}
     <section id="Skill" className='bg-slate-50'>
     

     <div className='relative  max-w-5xl mx-auto py-32 px-8 md:px-4'>
     <motion.h2
     variants={variants}
     initial="offscreen"
     whileInView="onscreen"
     viewport={{once:true}}
     className='text-center text-3xl font-bold md:text-6xl'>Skill</motion.h2>
   
   


     {/* skillカード */}
<div className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

{skills.map((skill,index)=>(
  <motion.div
  initial={{opacity:0,y:50}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.7,delay:0.5 + index * 0.2}}
          viewport={{once:true}}
  key={index} 
  className='min-h-48 bg-white shadow-lg p-4'>
<h3 className='text-center text-2xl font-bold'>{skill.skillName}</h3>
<div className='mt-4 flex gap-2'>
  {skill.terms.map((term,idx)=>(
    <span key={idx} className='bg-gray-100 p-2 rounded-3xl'>{term}</span>
  ))}
</div>
</motion.div>
))}

</div>

</div>

     </section>

     {/* Work */}
     <section id="Work" className='bg-sky-50'>
     <div className='relative  max-w-5xl mx-auto py-32 px-8 md:px-4'>
     <motion.h2
     variants={variants}
     initial="offscreen"
     whileInView="onscreen"
     viewport={{once:true}}
     className='text-center text-3xl font-bold md:text-6xl'>Work</motion.h2>


      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {works.map((work,index)=>(
          <motion.a
          href={work.link} target="_blank"
          initial={{opacity:0,y:50}}
          whileHover={{ scale: 1.05 }}
          whileInView={{opacity:1,y:0}}
          transition={{
            opacity: { duration: 0.7, delay: 0.5 + index * 0.2 }, // whileInView用
            y: { duration: 0.7, delay: 0.5 + index * 0.2 },       // whileInView用
            scale: { duration: 0.3 },                             // whileHover用
          }}
          viewport={{once:true}}
          key={index} 
          className='border-gray-50 rounded-md bg-white overflow-hidden cursor-pointer shadow-lg'>
  <div className='h-48 overflow-hidden'>
    <img src={`../public/images/${work.image}`}/>
  </div>

 <div className='p-4'>
  <h3 className='font-bold'>{work.workName}</h3>
  <p className='mt-4'>{work.description}</p>
  <div className='flex justify-end mt-4'>
                      <ExternalLink size={20} />
  </div>
 </div>
</motion.a>
        ))}

</div>
</div>

     </section>


{/* Contact */}
<section id="Contact" className='bg-slate-100'>

      <div className='max-w-4xl mx-auto py-32 px-8 md:px-4'>
     <motion.h2
     variants={variants}
     initial="offscreen"
     whileInView="onscreen"
     viewport={{once:true}}
     className='text-center text-3xl font-bold md:text-6xl'>Contact</motion.h2>

<motion.div
variants={variants}
initial="offscreen"
whileInView="onscreen"
viewport={{once:true}}
whileHover={{ scale: 1.05 }}
className='text-center mt-16'>
  <button onClick={openModal} className=' bg-sky-500 rounded-lg text-white text-xl md:text-2xl p-4 '>
  お問い合わせはこちらをクリック
  </button>
</motion.div>

<div
onClick={closeModal}
 className={`${
  isOpen ? "bg-black bg-opacity-70 z-60 w-full h-full fixed inset-0 flex flex-col justify-center items-center" : "hidden"
}`}>
<div
onClick={(e) => e.stopPropagation()}
className=' bg-slate-50 border-gray-50 border rounded-lg shadow-lg p-8 relative z-70'>
  <h3 className='text-center text-2xl'>お問い合わせ</h3>
  <form className='mt-4'>
    <ul className='flex flex-col gap-2'>
      <li>
    <label htmlFor='name' className='block'>名前</label>
    <input id='name' type='text' className='border-2 rounded-sm w-full'></input>
    </li>
    <li>
    <label htmlFor='mail' className='block'>メールアドレス</label>
    <input id='mail' type='mail' className='border-2 rounded-sm w-full'></input>
    </li>
    <li>
    <label htmlFor='content' className='block'>お問い合わせ内容</label>
    <textarea id="content" className=' border-2 rounded-sm w-full'></textarea>
    </li>
<li className='text-center'>
    <button className='bg-sky-500 text-white text-l p-2 rounded-md' type='submit' >送信</button>
    </li>
    </ul>
  </form>

</div>
</div>

     </div>
</section>



    </div>
  )
}

export default App
