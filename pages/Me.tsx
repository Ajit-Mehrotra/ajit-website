
import LinkComponent from "../components/LinkComponent";

import Image from 'next/image'
import HobbiesSection from "../components/me/Hobbies";
import Navbar from "../components/Navbar";
import mistake from '../public/mistake.jpg'
import CardAccordian from "../components/me/CardAccordian";
import { AccordianObj } from "../components/me/CardAccordian";



const games: AccordianObj[] = [
    {
        title: 'Rocket League',
        subtitle: '2000+',
        description: `Champion 3`,
        imageUrl: "/rocket-league.jpeg",
    },
    {
        title: 'Apex Legends',
        subtitle: '500+',
        description: `Diamond`,
        imageUrl: "/apex.jpg",
    },
    {
        title: 'CSGO',
        subtitle: '500+',
        description: `Gold Nova`,
        imageUrl: "/csgo.jpg",
    },
    {
        title: 'Fortnite',
        subtitle: '1000+',
        description: `John Wick`,
        imageUrl: "/fortnite.jpg",
    },
    {
        title: 'Valorant',
        subtitle: '200+',
        description: `Silver`,
        imageUrl: "/valorant.jpg",
    },
];
const shows: AccordianObj[] = [
    {
        title: 'Avatar The Last Airbender',
        subtitle: 'The most goated childhood show',
        description: `Sokka is my favorite character`,
        imageUrl: "/atla.jpg",
    },
    {
        title: 'Naruto',
        subtitle: 'First major anime',
        description: `Love the moral grey in this show`,
        imageUrl: "/naruto.jpg",
    },
    {
        title: 'One Piece',
        subtitle: 'Show about freedom and adventure!',
        description: `It's way too long. Glad I kept up tho`,
        imageUrl: "/joyboy.jpg",
    },
    {
        title: 'Star Wars',
        subtitle: 'Prequels + Animated Shows',
        description: `Ashoka, Maul, Obi-Wan are favorite characters`,
        imageUrl: "/ashoka.jpg",
    },
    {
        title: 'Marvel/DC',
        subtitle: 'We grew up watching them :)',
        description: `DC has really good animated shows. Marvel nailed the movies and shows`,
        imageUrl: "/loki.jpg",
    },
    {
        title: 'Pokemon',
        subtitle: 'First anime but without knowing it',
        description: `Psyduck is favorite pokemon. Nostalgic thinking about it`,
        imageUrl: "/pokemon.jpg",
    },
    {
        title: 'Rush Hour',
        subtitle: 'Jackie Chan & Chris Tucker goated duo',
        description: `Super funny movies. I wish there were more hahaha`,
        imageUrl: "/rush-hour.jpg",
    },
];
const music: AccordianObj[] = [
    {
        title: 'Ansiedades',
        subtitle: 'Mora & Metro Boomin',
        description: `From Spiderman`,
        imageUrl: "/spiderman.jpg",
    },
    {
        title: 'You Say Run',
        subtitle: 'Yuki Hayashi',
        description: `My Hero Academia`,
        imageUrl: "/you-say-run.jpg",
    },
    {
        title: 'Am I Dreaming',
        subtitle: 'Metro Boomin, A$AP Rocky & Roisee',
        description: `From Spiderman`,
        imageUrl: "/spiderman.jpg",
    },
    {
        title: 'Alone',
        subtitle: 'Burna Boy',
        description: `Love this song`,
        imageUrl: "/burna-boy.jpg",
    },
    {
        title: 'Post Malone <3',
        subtitle: 'I love all his songs',
        description: `he's also a cool dude`,
        imageUrl: "/post-malone.jpg",
    },
    {
        title: 'Koko de Iki wo Shite',
        subtitle: 'eill',
        description: `From Tokyo Revengers`,
        imageUrl: "/tokyo-revengers.jpg",
    },
];
const builds: AccordianObj[] = [
    {
        title: 'S-Hook',
        subtitle: 'First Blacksmithing Project',
        description: `Took a class. I want to do more but don't have the stuff`,
        imageUrl: "/thumbs.jpeg",
    },
    {
        title: 'Luxury Bathroom',
        subtitle: 'First Major House Rennovation',
        description: `Was on own house. Took YEARS. Worth it for sure tho`,
        imageUrl: "/thumbs.jpeg",
    },
    {
        title: 'Shed x2',
        subtitle: 'From foundation up',
        description: `Again, in my own yard`,
        imageUrl: "/thumbs.jpeg",
    },
    {
        title: 'Deck + Gazebo',
        subtitle: 'Foundation Up',
        description: `Also in own yard`,
        imageUrl: "/thumbs.jpeg",
    },
];
const food: AccordianObj[] = [
    {
        title: 'Vada Pav',
        subtitle: 'Made by yours truly',
        description: `One of my favs`,
        imageUrl: "/thumbs.jpeg",
    },
    {
        title: 'Chaat',
        subtitle: 'Made by Myself',
        description: `Fam & friends fav`,
        imageUrl: "/thumbs.jpeg",
    },
    {
        title: 'Gobi Manchurian',
        subtitle: 'Mom got the best',
        description: `Can't make this one ngl`,
        imageUrl: "/thumbs.jpeg",
    },
    {
        title: 'Pizza',
        subtitle: 'A college classic',
        description: `Mom also makes it the best`,
        imageUrl: "/thumbs.jpeg",
    },
    {
        title: 'Im too lazy',
        subtitle: 'to complete',
        description: `this section`,
        imageUrl: "/thumbs.jpeg",
    },
];

function Me() {
    return (
        <div>
            <Navbar />


            <CardAccordian items={games} idName='gaming' hoverBgColor='bg-stone-900' hoverTextColor='text-red-500' sectionTitle="GAMING" />
            <CardAccordian items={shows} idName='shows' hoverBgColor='bg-yellow-500' hoverTextColor='text-violet-700' sectionTitle="SHOWS/MOVIES" />
            <CardAccordian items={music} idName='music' hoverBgColor='bg-green-500' hoverTextColor='text-white' sectionTitle="MUSIC" />
            <CardAccordian items={builds} idName='builds' hoverBgColor='bg-blue-900' hoverTextColor='text-sky-300' sectionTitle="BUILDS (in works)" />
            <CardAccordian items={food} idName='food' hoverBgColor='bg-rose-500' hoverTextColor='text-yellow-200' sectionTitle="FOOD (in works)" />

        </div>
    );
}
export default Me;

