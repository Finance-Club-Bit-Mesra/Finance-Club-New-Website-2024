import { useEffect } from 'react';
import PropTypes from 'prop-types';
import stalkthestock from "../assets/events/stalkthestock.jpeg";
import behindthestump from "../assets/events/behindthestumps.jpeg";
import houseoflegacy from "../assets/events/houseoflegacy.jpeg";
import enigma from "../assets/events/enigma.jpeg";
import tycoon from "../assets/events/tycoon.jpeg";
import marketkshtera from "../assets/events/maket_kshetra.jpeg";
import arthanarth from "../assets/events/arthanarth.jpg";
import businessplan from "../assets/events/bplan.jpg";
import chess from "../assets/events/chess.jpg";
import estimania from "../assets/events/estimania.jpg";
import wallstreet from "../assets/events/wallstreet.jpg";
import bitnishan from "../assets/events/bitnishan.jpg";
import cfa from "../assets/workshop/cfa.jpg";
import virendra from "../assets/workshop/virendra.jpg";
import zerodha from "../assets/workshop/zerodha.jpg";

const events = [
  {
    id: 1,
    title: "Behind the Stumps",
    description: "Cricket-themed event with a prize worth 20K.",
    date: "21st Jan",
    image: behindthestump,
  },
  {
    id: 2,
    title: "BIT Nishan-24",
    description:
      "Innovation contest with the theme 'No bright idea should go unnoticed'.",
    date: "5th Nov 2022",
    image: bitnishan,
  },
  {
    id: 3,
    title: "Σnigma",
    description: "National level technical case study competition.",
    date: "20th Jan",
    image: enigma,
  },
  {
    id: 4,
    title: "Stalk the Stock",
    description: "Virtual stock simulation game",
    date: "19 Jan",
    image: stalkthestock,
  },
  {
    id: 5,
    title: "Arth Anarth",
    description: "Show off your financial wit in our meme competition! From stock market laughs to money management jokes, bring your best memes to the table.",
    date: "20th Jan",
    image: arthanarth,
  },
  {
    id: 6,
    title: "Tycoon in Tune",
    description: "A finance and strategy based quiz and board game.",
    date: "16th March",
    image: tycoon,
  },
  {
    id: 7,
    title: "B Plan Competition",
    description: "Teams present their Business Plans featuring groundbreaking products or services",
    date: "5th October",
    image: businessplan,
  },
  {
    id: 8,
    title: "House of Legacy",
    description: "Are you the guy who thinks that your analytical thinking can create a change in the business empire? Hedgeit brings you the perfect chance to invest in and enhance your knowledge in the world of business.",
    date: "5th October",
    image: houseoflegacy,
  },
  {
    id: 9,
    title: "Chess Tournament",
    description: "Join us to showcase your knack at the 1v1 blitz chess tournament.",
    date: "20th January",
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
    title: "Market Kshetra",
    description: "Market Kshetra is a virtual stock market simulation game where participants can trade in stocks, commodities, and currencies.",
    date: "20th January",
    image: marketkshtera,
  },
  {
    id: 13,
    title: "Estimania",
    description: "Estimania is a finance club event that tests your ability to estimate the value of a product or service.",
    date: "20th January",
    image: estimania,
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
    title: "Webinar on CFA Program",
    description:
      "Whether you're looking to master investment management or unlock global job prospects, this webinar will showcase the transformative power of the CFA designation.",
    date: "27th September",
    image: cfa,
  },
  {
    id: 3,
    title: "Exclusive Investment Lessons",
    description: "Learn the strategies, discipline, and insights required to navigate the complexities of the market from a professional who has seen it all.",
    date: "December & January",
    image: virendra,
  },
];

const Card = ({ item, type }) => (
  <div className="relative overflow-hidden rounded-lg shadow-lg group transition-transform duration-300 hover:scale-105 ">
    <img 
      src={item.image} 
      alt={item.title} 
      className="w-full h-64 sm:h-56 md:h-64 lg:h-72 object-cover transition-all duration-300 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mx-8">
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

