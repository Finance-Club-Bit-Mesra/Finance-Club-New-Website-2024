import { useEffect } from 'react';
import PropTypes from 'prop-types';
import stalkthestock from "../assets/events/StalkTheStock.jpg";
import behindthestump from "../assets/events/behindthestumps.jpg";
import sellMeThis from "../assets/events/sellMeThis.jpg";
import enigma from "../assets/events/enigma.jpg";
import sirfexcel from "../assets/events/sirfexcel.jpg";
import arthanarth from "../assets/events/arthanarth.jpg";
import surplusanddefect from "../assets/events/surplusanddefect.jpg";
import chess from "../assets/events/chess.jpg";
import estimania from "../assets/events/estimania.jpg";
import wallstreet from "../assets/events/wallstreet.jpg";
import campusCaptilist from "../assets/events/campusCapitalist.jpg";
import cardinaldeception from "../assets/events/cardinaldeception.jpg";
import djnight from "../assets/events/djnight.jpg";
import musicalnight from "../assets/events/musicalnight.jpg";
import escapetheratrace from "../assets/events/escapetheratrace.jpg";
import escapethematrix from "../assets/events/escapethematrix.jpg";
import cfa from "../assets/workshop/cfa.jpg";
import virendra from "../assets/workshop/virendra.jpg";
import zerodha from "../assets/workshop/zerodha.jpg";
import manya from "../assets/workshop/manya.jpg";
import shahnawaz from "../assets/workshop/shahnawaz.jpeg";
import khushi from "../assets/workshop/khushi.jpeg";
import kar from "../assets/workshop/kar.jpeg";
import abhishek from "../assets/workshop/abhishek.jpeg";

const events = [
  {
    id: 1,
    title: "Behind the Stumps",
    description: "Cricket-themed event with a prize worth 20K.",
    date: "19th Jan",
    image: behindthestump,
  },
  {
    id: 2,
    title: "Sell Me This",
    description:
      "this is a challenge where you must convincingly pitch any product.",
    date: "19th jan",
    image: sellMeThis,
  },
  {
    id: 3,
    title: "Σnigma",
    description: "National level technical case study competition.",
    date: "18th Jan",
    image: enigma,
  },
  {
    id: 4,
    title: "Stalk the Stock",
    description: "Virtual stock simulation game",
    date: "15 to 17 Jan",
    image: stalkthestock,
  },
  {
    id: 5,
    title: "Arth Anarth",
    description: "Show off your financial wit in our meme competition! From stock market laughs to money management jokes, bring your best memes to the table.",
    date: "18th Jan",
    image: arthanarth,
  },
  {
    id: 6,
    title: "Sirf Excel",
    description: "Sirf Excel is a high-stakes, two-round showdown where strategy, intellect, and financial finesse collide to conquer the matrix.",
    date: "17-19th Jan",
    image: sirfexcel,
  },
  {
    id: 7,
    title: "Cardinal Deception",
    description:"This is an intense mind game where strategy, disguise, and wit collide in a twisted UNO-style showdown!" ,
    date: "18th Jan",
    image: cardinaldeception,
  },
  {
    id: 8,
    title: "Campus Capitalist",
    description: "Campus Capitalist at Bitotsav'25,a thrilling business simulation of strategy, risk, and financial conquest!",
    date: "22nd March",
    image: campusCaptilist,
  },
  {
    id: 9,
    title: "Chess Tournament",
    description: "Join us to showcase your knack at the 1v1 blitz chess tournament.",
    date: "18th and 19th January",
    image: chess,
  },
  {
    id: 11,
    title: "Wall Street Auction",
    description: "Finance Club brings you the Wall Street Auction, where you and your team can channel your inner stockbroker, bid on hot stocks, and race to build the ultimate portfolio.",
    date: "6th October",
    image: wallstreet,
  },
  {
    id: 12,
    title: "Surplus and defect",
    description: "Escape the Financial Matrix is a thrilling strategy-based game of wealth, wits, and survival where every move can lead to fortune—or financial downfall.",
    date: "19th January",
    image: surplusanddefect,
  },
  {
    id: 13,
    title: "Estimania",
    description: "Estimania is a finance club event that tests your ability to estimate the value of a product or service.",
    date: "18th January",
    image: estimania,
  },
   {
    id: 14,
    title: "Escape The Rat Race",
    description: "Conquer the debt maze at FinStreet 2025 - a high-stakes strategic battle of wit, finance, and freedom!",
    date: "19th Jan",
    image: escapetheratrace,
  },
   {
    id: 15,
    title: "Musical Night",
    description: "Dhwani Night at IC Arena - a magical evening of rhythm, energy, and unforgettable performances in collaboration with the Finance Club!",
    date: "19th Jan",
    image: musicalnight,
  },
   {
    id: 16,
    title: "Dj Night",
    description: "Dance Club at IC Arena - a magical evening with unforgettable performances in collaboration with the Finance Club!",
    date: "19th Jan",
    image: djnight,
  },
];

const workshop = [
  {
    id: 1,
    title: "Workshop on Personal finance and investment",
    description: "The Finance Club of BIT Mesra is back with an interactive webinar in collaboration with Zerodha.",
    date: "29th June",
    image: zerodha,
  },
  {
    id: 2,
    title: "Webinar on Career Opportunities in Financial Services and Investment Management",
    description:
      "Explore diverse career paths in the financial services and investment management sectors with experts Sayan Banerjee and Saim Fakih. Gain insights into the industry and shape your future in finance. Organized in collaboration with the CFA Institute.",
    date: "27th September",
    image: cfa,
  },
  {
    id: 3,
    title: "Exclusive Investment Lessons with Mr. Virendra Verma",
    description: "Learn the strategies, discipline, and insights required to navigate the complexities of the market from Mr. Virendra Verma who has seen it all.",
    date: "19th January",
    image: virendra,
  },
  {
    id: 4,
    title: "Webinar on Data Analytics and Its Impact on Financial Processes",
    description:"Join Ms. Manya Gaurav for an insightful webinar exploring the transformative role of data analytics in financial processes and reporting. Discover how analytics drives informed decisions and enhances financial strategies.",
    date: "20th August",
    image: manya,
  },
  {
    id: 5,
    title: "Exploring Blockchain and DeFi with Shahnawaz Khan",
    description: "Join us for an engaging session with Shahnawaz Khan, a developer and advocate in blockchain technology, NFTs, DeFi, real-world asset tokenization, and AntelopeDAO. Gain insights into the transformative potential of decentralized finance and emerging tech trends.",
    date: "21st January",
    image: shahnawaz,
  },
  {
    id: 6,
    title: "Entrepreneurship and Innovation with Abhishek Sagar",
    description: "Join us for an interactive session with Abhishek Sagar, Founder and CEO of ZuraVerse, as he shares his entrepreneurial journey and insights on innovation, creativity, and building a successful venture.",
    date: "19th January",
    image: abhishek,
  },
  {
    id: 7,
    title: "Entrepreneurship and Business Strategy with Khushi Panjwani",
    description: "Join us for an exclusive event with Khushi Panjwani, a celebrated Entrepreneur (40 Under 40), Trader, TEDx Speaker, Shark Tank India S3 participant, World Record Holder, and Author. Gain invaluable insights into her journey and expertise",
    date: "19th January",
    image: khushi,
  },
  {
    id: 8,
    title: "Exclusive Session with Abhishek Kar: Business Strategies Unveiled",
    description: "Join the Finance Club at BIT Mesra for an insightful session with Abhishek Kar, a renowned YouTuber (5M+ followers), business strategist, investor, and stock trader.",
    date: "20th January",
    image: kar,
  },
];

const Card = ({ item, type }) => (
  <div className="relative overflow-hidden rounded-lg shadow-lg group transition-transform duration-300 hover:scale-105 h-fit">
    <img 
      src={item.image} 
      alt={item.title} 
      className="w-full md:h-80 transition-all duration-300 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{item.title}</h3>
        <p className="text-xs sm:text-sm mb-1 sm:mb-2 ">{item.description}</p>
        <p className="text-xs sm:text-sm font-bold">{item.date}</p>
      </div>
    </div>
  </div>
);

Card.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
  type: PropTypes.oneOf(['event', 'workshop']).isRequired,
};

const Section = ({ title, items, type }) => (
  <section className="py-24">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-center mb-8 sm:mb-12 section-title">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-8">
        {items.map(item => (
          <Card key={item.id} item={item} type={type} />
        ))}
      </div>
    </div>
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  type: PropTypes.oneOf(['event', 'workshop']).isRequired,
};

const Event = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <main>
      <Section title="Events" items={events} type="event" />
      <Section title="Workshops and Webinars" items={workshop} type="workshop" />
    </main>
  );
};

export default Event;

