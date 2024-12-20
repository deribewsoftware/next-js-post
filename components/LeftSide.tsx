import { motion } from "framer-motion";
import { FaUser, FaList, FaUserFriends} from "react-icons/fa";
import Link from "next/link";
import SearchBar from "./Searchbar";
import AddPost from "./AddPost";

const LeftSide = () => {
  return (
    <motion.nav
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      
    >
<div className="z-50 h-screen flex flex-col w-full bg-gradient-to-b transition-all duration-300 ">
      <div >
        <SearchBar/>
      </div>

      <ul className="space-y-6  mt-10 flex-grow">
        <li>
          <Link href="/profile">
            <span className="flex items-center  hover:text-gray-300 transition duration-300">
              <FaUser className="mr-4 text-xl" />
              <span className="text-lg">My Profile</span>
            </span>
          </Link>
        </li>
        <li>
          <Link href="/posts">
            <span className="flex items-center  hover:text-gray-300 transition duration-300">
              <FaList className="mr-4 text-xl" />
              <span className="text-lg">My Posts</span>
            </span>
          </Link>
        </li>
        <li>
          <Link href="/find-friends">
            <span className="flex items-center  hover:text-gray-300 transition duration-300">
              <FaUserFriends className="mr-4 text-xl" />
              <span className="text-lg">Find Friends</span>
            </span>
          </Link>
        </li>
      </ul>

      <div className="pb-40">
        <AddPost/>
      </div>
      </div>
    </motion.nav>
  );
};

export default LeftSide;
