import React from 'react'
import { motion } from 'motion/react'

const Header = () => {
    const navLists:string[] = ["Home","Profile","Work","Contact"] //ナビゲーションリストの配列

  return (
    <motion.header
    
    initial={{y:-100}}
    animate={{y:0}}
    transition={{type:"spring",duration:0.7,delay:0.7,damping: 9}}
    className='bg-transparent fixed top-0 w-full z-50'>
        <div className='flex justify-between items-center container mx-auto h-16'>
            <div className='text-2xl'>Logo</div>

            <nav>
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
        </div>
    </motion.header>
  )
}

export default Header