import downloadIcon from "../assets/images/download.png";
import smileyIcon from "../assets/images/smiley.png";
import chatIcon from "../assets/images/chat.png";
import editIcon from "../assets/images/edit.png";
import usersIcon from "../assets/images/users.png";
import translateIcon from "../assets/images/Languages.png";
import entityIcon from "../assets/images/user.png";
import wordIcon from "../assets/images/word.png";
import icon from "../assets/images/icon.png";
import useCaseImage1 from "../assets/images/case1.png";
import useCaseImage2 from "../assets/images/case2.png";
import useCaseImage3 from "../assets/images/case3.png";
import useCaseYellowCircle from "../assets/images/useCaseYellowCircle.png";

import globalGivingLogo from "../assets/images/global.png";
import unityLogo from "../assets/images/unity.png";
import sweetHomeLogo from "../assets/images/sweethome.png";
import helpingHandLogo from "../assets/images/helpingHands.png";

export const logos = [
  sweetHomeLogo,
  globalGivingLogo,
  unityLogo,
  helpingHandLogo,
];

export const featuresData = [
  {
    id: 1,
    description: `Download  as PDF`,
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
    description: `Download as Word`,
    imageUrl: wordIcon,
  },
];

export const navItems = [
  {
    id: 1,
    menu: "Home",
    to: "/#home",
  },
  {
    id: 2,
    menu: "Why Chirrpy",
    to: "/#why",
  },
  {
    id: 3,
    menu: "How It Works",
    to: "/#how-it-works",
  },
  {
    id: 4,
    menu: "Use Cases",
    to: "/#usecase",
  },
  {
    id: 5,
    menu: "Features",
    to: "/#features",
  },
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

export const useCasesData = [
  {
    id: 1,
    heading: "Hands Free communication for People with Typing disabilities ",
    description: `Chirrpy eliminates the need for typing or handwriting, allowing individuals with physical disabilities that affect their hand movements to communicate and write more easily. 

      This can be particularly beneficial for those with conditions like arthritis, carpal tunnel syndrome, or spinal cord injuries.`,
    image: useCaseImage1,
    alt: "Young man working on the laptop",
    yellowCircleImg: useCaseYellowCircle,
  },
  {
    id: 2,
    heading: `Dictating Scripts and Podcasts`,
    description: `Chirrpy eliminates the need for typing or handwriting, allowing individuals with physical disabilities that affect their hand movements to communicate and write more easily. 

      This can be particularly beneficial for those with conditions like arthritis, carpal tunnel syndrome, or spinal cord injuries.`,
    image: useCaseImage2,
    alt: "Four young people  working together on the laptop ",
    yellowCircleImg: useCaseYellowCircle,
  },
  {
    id: 3,
    heading: `Record Meeting Notes Faster`,
    description: `Chirrpy  can significantly increase the speed at which note-takers can capture information. This is because speech is typically faster than typing, allowing note-takers to record more details and keep up with the flow of the speaker's remarks.

    It improves the accuracy of note-taking by reducing the risk of transcription errors. `,
    image: useCaseImage3,
    alt: "Young lady recording meeting notes with the computer",
    yellowCircleImg: useCaseYellowCircle,
  },
];
