import { motion } from "framer-motion";
import Card from "./Card";
const Mentor = () => {
  return (
    <div className="w-full h-screen">
      <div className=" flex flex-col sm:p-6 p-20 items-center gap-10">
        <motion.h1
          className="text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-pixel sm:mt-20 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.76 }}
        >
          Meet Our Mentor
        </motion.h1>
        <Card
          index={1}
          title="Dr. Devesh Pratap Singh"
          about="(HOD)"
          texture="/deveshsir.jpg"
        />
        <div className=" w-full flex flex-col items-center justify-center  font-nerd sm:text-md text-[1rem] ">
          <h1>
            <span className="font-bold">Prof</span> (Dr.) D.P.Singh
          </h1>
          <h1>Head of Department,CSE</h1>
        </div>
      </div>
    </div>
  );
};

export default Mentor;
