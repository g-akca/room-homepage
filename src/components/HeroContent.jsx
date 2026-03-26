import ArrowIcon from "./ArrowIcon";

import { motion, AnimatePresence } from "framer-motion";

function HeroContent({ getCurrentDesign }) {
  const design = getCurrentDesign();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.section
        key={design.title}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 }
          }
        }}
        className="self-center px-8 tablet:px-16 desktop:px-25 flex flex-col gap-8 tablet:gap-6 desktop:grow"
      >
        <div className="flex flex-col gap-4">
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-black text-[40px] tablet:text-[48px] font-semibold leading-[100%] tablet:leading-[90%] tracking-[-2px]"
          >
            {design.title}
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="font-medium"
          >
            {design.subtext}
          </motion.p>
        </div>

        <motion.button
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          type="button"
          className="text-black flex justify-between items-center tablet:justify-start tablet:gap-6 desktop:gap-8 cursor-pointer hover:text-grey-500 transition-all"
        >
          <span className="text-[15px] font-medium tracking-[12.5px] uppercase">
            Shop now
          </span>
          <ArrowIcon />
        </motion.button>
      </motion.section>
    </AnimatePresence>
  )
}

export default HeroContent;