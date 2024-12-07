import { motion } from "framer-motion";
import FollowCard from "./FollowCard";
import SearchBar from "./Searchbar";
import { useGetUsersDataQuery } from "@/lib/redux/features/api/usersApi";
import FollowSkeletonCard from "./FollowCardSkeleton";

// Define the User type
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const RightSide = () => {
  const { data: myFollowers, isLoading, isSuccess } = useGetUsersDataQuery('');

  const followUsers: User[] = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: { lat: "-37.3159", lng: "81.1496" },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: { name: "Romaguera-Crona", catchPhrase: "Multi-layered client-server neural-net", bs: "harness real-time e-markets" },
    },
    // More users here...
  ];

  return (
    <motion.nav
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div 
      className={`z-50 h-full flex flex-col  pb-20 gap-10 w-full pr-2 bg-gradient-to-b transition-all duration-300`}>
      <SearchBar />

      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">My followers</h1>
        <div className="space-y-4">
          {isSuccess && myFollowers?.length ? (
            myFollowers.map((user: User) => (
              <FollowCard
                key={user.id}
                image={""} // Replace with user.image if image URL is available
                name={user.name}
                location={`${user.address.city}, ${user.address.street}`}
              />
            ))
          ) : (
            isLoading && Array.from({ length: 6 }).map((_, index) => <FollowSkeletonCard key={index} />)
          )}
        </div>
      </div>

      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">Who to follow</h1>
        <div className="space-y-4">
          {followUsers.map((user: User) => (
            <FollowCard
              toFollow
              key={user?.id}
              image={""} // Replace with user.image if image URL is available
              location={`${user.address.city}, ${user.address.street}`} name={user?.name}            />
          ))}
        </div>
      </div>
      </div>
    </motion.nav>
  );
};

export default RightSide;
