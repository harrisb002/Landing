import {
  seawolf,
  ccl,
  chessCom,
  lichess,
  chessComPawn,
  dollarSign,
  trophy,
  puzzle,
  chart,
  ethereum,
  metamask,
  gpu,
  ssu,
  slack,
  discord,
  discordBlack,
  roadmap3,
  roadmap4,
  benefitIcon1,
  benefitImage1,
  benefitIcon2,
  benefitImage2,
  benefitIcon3,
  benefitImage3,
  benefitIcon4,
  benefitImage4,

} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [dollarSign, trophy, puzzle, chart];

export const notificationImages = [ssu, ccl, chessComPawn];

export const companyLogos = [seawolf, chessCom, ccl];

export const ssuChess = [
  "Total Transparency",
  "Gamble on Games",
  "Stake your Puzzles",
  "Chat with Friends"
];

export const roadmap = [
  {
      id: "0",
      title: "Gamification",
      text: "Blockchain technology is fun to break, lets try our best!",
      date: "June 2024",
      status: "ongoing",
      imageUrl: roadmap3,
  },
  {
      id: "1",
      title: "Bot competitions",
      text: "Let us help you host your own Bot competitions!",
      date: "September 2024",
      imageUrl: roadmap4,
  },
];

export const collabText =
  "With a built in communication network, it's the perfect solution for clubs to organize and create competitions.";

export const tokenText =
  "The ability to bet & win SQZ along with its necessity to play, gives incentive to win more than ever before.";

export const transparentText =
  "All transations/games are and forever will be visible via a blockchain explorer";

export const transparencyText =
  "If you enjoy chess, you'll love SSU Chess!";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Tokenized Incentive",
    text: tokenText,
  },
  {
    id: "2",
    title: "Total Transparency",
    text: transparentText,
  },
];

export const collabApps = [
  {
    id: "1",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "2",
    title: "CCL",
    icon: ccl,
    width: 38,
    height: 32,
  },
  {
    id: "3",
    title: "ETHEREUM",
    icon: ethereum,
    width: 38,
    height: 32,
  },
  {
    id: "4",
    title: "ENGINES",
    icon: gpu,
    width: 38,
    height: 32,
  },
  {
    id: "5",
    title: "SLACK",
    icon: slack,
    width: 38,
    height: 32,
  },
  {
    id: "6",
    title: "METAMASK",
    icon: metamask,
    width: 38,
    height: 32,
  },
  {
    title: "CHESSCOM",
    icon: chessCom,
    width: 38,
    height: 32,
  },
  {
    title: "LICHESS",
    icon: lichess,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "New Member",
    description: "All new members are awarded 100 SQZ",
    price: null,
    features: [
      "If one cared to, another unique wallet can be connected and thus earning them 100 SQZ",
      "All wallets are required to be paired to a unique email address",
    ],
  },
  {
    id: "1",
    title: "Winning games",
    description: "All games played require SQZ, a proportion of which will be awarded to the winner",
    features: [
      "Random bet arenas will have different entry positions staking the bet",
      "Scheduled tournaments can be created with designated winnings",
      "A choice of bots are provided of which can be beaten to be awarded SQZ",
    ],
  },
  {
    id: "2",
    title: "Puzzles",
    description: "Solving & staking puzzles earn SQZ",
    price: "9.99",
    features: [
      "Solving provided daily puzzles",
      "Providing a daily unique puzzle and staking it",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Connect your wallet",
    text: "Enable for a secure connection to your metamask wallet.",
    backgroundUrl: "/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage1,
  },
  {
    id: "1",
    title: "Improve everyday",
    text: "Get more familiar with a web3 application while improving in your chess abilities.",
    backgroundUrl: "/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Feeling edgy",
    text: "Take it off with the ability to gamble your SQZ away.",
    backgroundUrl: "/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage3,
  },
  {
    id: "3",
    title: "Hosting Chess Bots",
    text: "Create your own bot and host it here for tournaments or to allow others to play.",
    backgroundUrl: "/assets/benefits/card-6.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage4,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
];
