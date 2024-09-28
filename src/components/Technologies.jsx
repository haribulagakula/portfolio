import { RiFlutterFill, RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiCss3,
  SiDart,
  SiFlask,
  SiGraphql,
  SiHtml5,
  SiKubernetes,
  SiMicrosoftazure,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiPython,
  SiSqlite,
} from "react-icons/si";
import { FaDocker, FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiSpringboot } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiSwift } from "react-icons/si";
import { motion } from "framer-motion";
import { FaAws } from "react-icons/fa6";

const iconVariant = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Skills
      </motion.h1>
      <div>
        <p className="mb-2 text-2xl text-neutral-400 text-center items-center h-full pb-7">
          Languages
        </p>
        <div className="mb-8 flex items-center text-center lg:justify-center pb-12">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <motion.div
              variants={iconVariant(2.0)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <FaJava className="text-5xl text-blue-300" />
            </motion.div>
            <motion.div
              variants={iconVariant(2.5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <SiSwift className="text-5xl text-from-orange-400 text-to-yellow-300" />
            </motion.div>
            <motion.div
              variants={iconVariant(3.0)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <SiTypescript className="text-5xl text-blue-600" />
            </motion.div>
            <motion.div
              variants={iconVariant(3.5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <SiJavascript className="text-5xl text-yellow-300" />
            </motion.div>
            <motion.div
              variants={iconVariant(3.5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <SiHtml5 className="text-5xl text-orange-600" />
            </motion.div>
            <motion.div
              variants={iconVariant(3.5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <SiCss3 className="text-5xl text-blue-500" />
            </motion.div>
            <motion.div
              variants={iconVariant(3.5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <SiPython className="text-5xl text-yellow-300" />
            </motion.div>
            <motion.div
              variants={iconVariant(3.5)}
              initial="initial"
              animate="animate"
              className="rounded-2xl border-4 border-neutral-800 p-4"
            >
              <SiDart className="text-5xl text-blue-300" />
            </motion.div>
          </motion.div>
        </div>
        <div>
          <p className="mb-2 text-2xl text-neutral-400 text-center items-center h-full pb-7">
            Technologies
          </p>
          <div className="mb-8 flex items-center text-center lg:justify-center pb-12">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <motion.div
                variants={iconVariant(2.0)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
              >
                <RiReactjsLine className="text-5xl text-blue-300" />
              </motion.div>
              <motion.div
                variants={iconVariant(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
              >
                <TbBrandNextjs className="text-5xl text-orange-400" />
              </motion.div>
              <motion.div
                variants={iconVariant(3.0)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
              >
                <SiSpringboot className="text-5xl text-blue-600" />
              </motion.div>
              <motion.div
                variants={iconVariant(3.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
              >
                <FaNodeJs className="text-5xl text-yellow-300" />
              </motion.div>
              <motion.div
                variants={iconVariant(3.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
              >
                <RiFlutterFill className="text-5xl text-blue-500" />
              </motion.div>
              <motion.div
                variants={iconVariant(3.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
              >
                <SiMongoose className="text-5xl text-red-700" />
              </motion.div>
              <motion.div
                variants={iconVariant(3.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
              >
                <SiFlask className="text-5xl text-white" />
              </motion.div>
              <motion.div
                variants={iconVariant(3.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
              >
                <FaDocker className="text-5xl text-blue-300" />
              </motion.div>
              <motion.div
                variants={iconVariant(3.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
              >
                <SiKubernetes className="text-5xl text-blue-600" />
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div>
          <p className="mb-2 text-2xl text-neutral-400 text-center items-center h-full pb-7">
            Databases
          </p>
          <div className="mb-8 flex items-center text-center lg:justify-center pb-12">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <motion.div
                variants={iconVariant(3.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
              >
                <SiMysql className="text-5xl text-blue-300" />
              </motion.div>
              <motion.div
                variants={iconVariant(3.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
              >
                <SiSqlite className="text-5xl text-blue-500" />
              </motion.div>
              <motion.div
                variants={iconVariant(3.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
              >
                <SiMongodb className="text-5xl text-green-400" />
              </motion.div>
              <motion.div
                variants={iconVariant(3.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
              >
                <BiLogoPostgresql className="text-5xl text-blue-400" />
              </motion.div>
              <motion.div
                variants={iconVariant(3.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
              >
                <SiGraphql className="text-5xl text-pink-600" />
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div>
        <p className="mb-2 text-2xl text-neutral-400 text-center items-center h-full pb-7">
              Cloud
            </p>
          <div className="mb-8 flex items-center text-center lg:justify-center pb-12">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <motion.div
                variants={iconVariant(3.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
              >
                <FaAws className="text-5xl text-blue-700" />
              </motion.div>
              <motion.div
                variants={iconVariant(3.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
              >
                <SiMicrosoftazure className="text-5xl text-blue-600" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
