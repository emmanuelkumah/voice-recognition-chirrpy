import downloadIcon from "../assets/images/download.png";
import smileyIcon from "../assets/images/smiley.png";
import chatIcon from "../assets/images/chat.png";
import editIcon from "../assets/images/edit.png";
import usersIcon from "../assets/images/users.png";
import translateIcon from "../assets/images/Languages.png";
import entityIcon from "../assets/images/user.png";
import wordIcon from "../assets/images/word.png";
import icon from "../assets/images/icon.png";

export const featuresData = [
  {
    id: 1,
    description: `Download Transcript As PDF`,
    imageUrl: downloadIcon,
  },
  {
    id: 2,
    description: `Sentiment Analysis`,
    imageUrl: smileyIcon,
  },
  {
    id: 3,
    description: `Topic Detection`,
    imageUrl: chatIcon,
  },
  {
    id: 4,
    description: `Summarization`,
    imageUrl: editIcon,
  },
  {
    id: 5,
    description: `Detect Speakers`,
    imageUrl: usersIcon,
  },
  {
    id: 6,
    description: `Translate Text`,
    imageUrl: translateIcon,
  },
  {
    id: 7,
    description: `Entity Detection`,
    imageUrl: entityIcon,
  },
  {
    id: 8,
    description: `Download Word`,
    imageUrl: wordIcon,
  },
];

export const navItems = [
  "Home",
  "Why Chirrpy",
  "How It Works",
  "Use Cases",
  "Features",
];

export const reasonsData = [
  {
    id: 1,
    text: `Of the world’s population has some form of physical disability which
  prevents them from using the computer keyboard`,
    data: "15%",
    number: "1",
    supText: "",
  },
  {
    id: 2,
    text: `Repetitive Stress Injury (RSI)is a common workplace complaint caused by repetitive keyboard and mouse tasks`,
    data: "RSI",
    number: "2",
    supText: "Avoid",
  },
  {
    id: 3,
    text: `It is clear that voice input can offer a faster alternative to typing for many individuals`,
    data: "3X",
    number: "3",
    supText: "Faster",
  },
];

export const howItWorksData = [
  {
    id: 1,
    bgColor: "#6A381F",
    text: "Click on the mic icon to start recording or upload an audio file from you device",
    icon,
    radius: "10px 0px 0px 10px",
  },
  {
    id: 2,
    bgColor: "#774E24",
    text: "Transcribe your voice to text using our AI powered voice recognition software ",
    icon,
    radius: "0px",
  },
  {
    id: 3,
    bgColor: "#A5907E",
    text: "Perform preferred actions on the output and finally download the text ",
    icon,
    radius: "0px 10px 10px 0px",
  },
];
