
// ------> 1.CARD RANDOM DATA  <-----
// import Card from './Components/Card'

// export const App = () => {
//   const data = [
//   {
//     "photo": "https://randomuser.me/api/portraits/men/1.jpg",
//     "name": "Aarav Patel",
//     "username": "aarav_dev",
//     "bio": "Frontend developer who loves React and Tailwind.",
//     "points": 1250,
//     "friends": 230,
//     "joinedAt": "March 2023"
//   },
//   {
//     "photo": "https://randomuser.me/api/portraits/women/2.jpg",
//     "name": "Priya Sharma",
//     "username": "priya_codes",
//     "bio": "UI/UX designer and coffee lover.",
//     "points": 980,
//     "friends": 150,
//     "joinedAt": "July 2022"
//   },
//   {
//     "photo": "https://randomuser.me/api/portraits/men/3.jpg",
//     "name": "Rohan Mehta",
//     "username": "rohan_js",
//     "bio": "JavaScript enthusiast building MERN apps.",
//     "points": 1430,
//     "friends": 310,
//     "joinedAt": "January 2024"
//   },
//   {
//     "photo": "https://randomuser.me/api/portraits/women/4.jpg",
//     "name": "Ananya Desai",
//     "username": "ananya.design",
//     "bio": "Creative designer exploring digital art.",
//     "points": 870,
//     "friends": 95,
//     "joinedAt": "October 2023"
//   },
//   {
//     "photo": "https://randomuser.me/api/portraits/men/5.jpg",
//     "name": "Kunal Shah",
//     "username": "kunal_backend",
//     "bio": "Node.js developer and database geek.",
//     "points": 1650,
//     "friends": 410,
//     "joinedAt": "May 2021"
//   },
//   {
//     "photo": "https://randomuser.me/api/portraits/women/6.jpg",
//     "name": "Neha Verma",
//     "username": "neha_tech",
//     "bio": "Tech blogger and coding mentor.",
//     "points": 1120,
//     "friends": 260,
//     "joinedAt": "December 2022"
//   },
//   {
//     "photo": "https://randomuser.me/api/portraits/men/7.jpg",
//     "name": "Dev Joshi",
//     "username": "dev_j",
//     "bio": "Learning full-stack development every day.",
//     "points": 640,
//     "friends": 120,
//     "joinedAt": "February 2024"
//   },
//   {
//     "photo": "https://randomuser.me/api/portraits/women/8.jpg",
//     "name": "Riya Kapoor",
//     "username": "riya_creates",
//     "bio": "Content creator and social media enthusiast.",
//     "points": 1340,
//     "friends": 390,
//     "joinedAt": "August 2021"
//   },
//   {
//     "photo": "https://randomuser.me/api/portraits/men/9.jpg",
//     "name": "Aditya Singh",
//     "username": "adi_code",
//     "bio": "Open-source contributor and tech explorer.",
//     "points": 1780,
//     "friends": 520,
//     "joinedAt": "April 2020"
//   },
//   {
//     "photo": "https://randomuser.me/api/portraits/women/10.jpg",
//     "name": "Sneha Iyer",
//     "username": "sneha_dev",
//     "bio": "Full-stack developer building cool web apps.",
//     "points": 1520,
//     "friends": 340,
//     "joinedAt": "November 2022"
//   }
// ];
//   return (
//     <>
//     <section className='flex flex-wrap justify-center'>

//     {data.map(function (user){
//       return <Card data={user}/>;
//     })}
//     </section>
//     </>
//   )
// }


// -----> 2.CARD ICECREAM PRODUCT <-----
// export default App

// import Product from "./Components/product";

// function App() {
//   return <Product />;
// }

// export default App;


// <----- 3.CARD SHOPS PRODUCT ----->
// import ProductCard from "./Components/productshos";

// function App() {
//   return (
//     <ProductCard />
//   );
// }

// export default App;


// <----- 4.CARD AI.  ----->
// import AiCard from "./Components/AiCard";

// function App() {
//   return <AiCard />;
// }

// export default App;

// <----- 5.CARD MULTIPLE JOBCARDS ----->

import React from 'react';
import JobCard from './Components/JobCard';

const jobsData = [
  {
    company: "Amazon",
    postedAt: "5 days ago",
    title: "Senior UI/UX Designer",
    tags: ["Part-time", "Senior level"],
    salary: "$120/hr",
    location: "San Francisco, CA",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg",
    isSaved: false
  },
  {
    company: "Google",
    postedAt: "30 days ago",
    title: "Graphic Designer",
    tags: ["Full-time", "Flexible schedule"],
    salary: "$150 - 220k",
    location: "Mountain View, CA",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
    isSaved: true
  },
  {
    company: "Dribbble",
    postedAt: "18 days ago",
    title: "Senior Motion Designer",
    tags: ["Contract", "Remote"],
    salary: "$85/hr",
    location: "San Francisco, CA",
    logo: "https://cdn.worldvectorlogo.com/logos/dribbble-icon-1.svg",
    isSaved: false
  },
  {
    company: "Meta",
    postedAt: "3 months ago",
    title: "UX Designer",
    tags: ["Full-time", "In office"],
    salary: "$200 - 250k",
    location: "New York, NY",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
    isSaved: true
  },
  {
    company: "Airbnb",
    postedAt: "1 day ago",
    title: "Junior UX/UI Designer",
    tags: ["Contract", "Remote"],
    salary: "$100/hr",
    location: "San Francisco, CA",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Belo.svg",
    isSaved: false
  },
  {
    company: "Apple",
    postedAt: "6 days ago",
    title: "Graphic Designer",
    tags: ["Full-time", "Flexible schedule"],
    salary: "$85 - 120k",
    location: "Cupertino, CA",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    isSaved: true
  }
];

function App() {
  return (
    <div className="min-h-screen w-full bg-[#E5B299] flex items-center justify-center p-6 md:p-12 lg:p-24 relative overflow-hidden font-sans">
      <div className="absolute top-[-10%] left-[-10%] w-150 h-150 bg-[#F1C3AA] rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-[-10%] right-[-10%] w-125 h-125 bg-[#D499FF] rounded-full blur-3xl opacity-30" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl relative z-10">
        {jobsData.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
    </div>
  );
}

export default App;