import React, { useState } from 'react'
import { motion } from 'motion/react'
import { Menu, X } from 'lucide-react';

const Header = () => {
  // ナビゲーションメニュー
    const navLists:string[] = ["Home","Profile","Work","Contact"] //ナビゲーションリストの配列

    // はんばーがーめにゅー
    const [isMenuOpen,setIsMenuOpen] = useState(false)
const toggleMenu = ():void =>{
  setIsMenuOpen(!isMenuOpen);
}
  return (
    <motion.header
    
    initial={{y:-100}}
    animate={{y:0}}
    transition={{type:"spring",duration:0.7,delay:0.7,damping: 9}}
    className='bg-white md:bg-transparent fixed top-0 w-full z-50 shadow-sm md:shadow-none'>
        <div className='flex justify-between items-center container px-8 mx-auto h-16'>
            <div className='text-2xl'>Logo</div>


            <nav className='hidden md:block'>
            <ul className="flex gap-8 text-2xl">
            {navLists.map((navlist) => (
              <motion.li
              whileTap={{scale:1.1}}
               key={navlist} className="relative group">
                <a href={`#${navlist}`} className="hover:text-blue-500">
                  {navlist}
                </a>
                {/* アンダーライン */}
            <motion.div
  className="absolute bottom-0 left-0 h-[2px] bg-gray-500 w-0 group-hover:w-full"
  initial={{ width: 0 }}
  whileHover={{ width: "100%" }}
  transition={{ duration: 0.3 }}
/>
              </motion.li>
            ))}
          </ul>
            </nav>

            {/* SP用ハンバーガーメニュー */}
<div className="md:hidden">
            <button
            onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
        </div>

        {isMenuOpen && (
  <motion.div
    initial={{ height: 0, opacity: 0 }}
    animate={{ height: "auto", opacity: 1 }}
    exit={{ height: 0, opacity: 0 }}
    transition={{ duration: 0.2 }}
    className="bg-white py-4 px-8 text-gray-600 shadow-sm md:hidden  overflow-hidden container mx-auto"
  >
    <nav>
      <ul className="flex flex-col gap-4 text-xl">
        {navLists.map((navList, index) => (
          <li key={index}> {/* navList自体をキーに使用 */}
            <a href={`#${navList}`} className="hover:text-blue-500">
              {navList}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </motion.div>
)}
    </motion.header>
  )
}

export default Header