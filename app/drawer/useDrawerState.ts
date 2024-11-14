import { DrawerExploreItemProps } from "./childs/DrawerExploreItem";
import { createState } from "../utils/createState";

type DrawerState = {
  activedMenu?: string | undefined;
  exploreMenus: DrawerExploreItemProps[];
};

const exploreMenus: DrawerExploreItemProps[] = [
  {
    id: "1",
    imgUrl: "https://cache.lahelu.com/permanent/hashtag-funny.jpg",
    text: "Lucu",
  },
  {
    id: "2",
    imgUrl: "https://cache.lahelu.com/permanent/hashtag-relate.jpg",
    text: "Relate",
  },
  {
    id: "3",
    imgUrl: "https://cache.lahelu.com/permanent/hashtag-gaming.jpg",
    text: "Gaming",
  },
  {
    id: "4",
    imgUrl: "https://cache.lahelu.com/permanent/hashtag-nostalgia.jpg",
    text: "Nostalgia",
  },
  {
    id: "5",
    imgUrl: "https://cache.lahelu.com/permanent/hashtag-sad.jpg",
    text: "Sad",
  },
  {
    id: "6",
    imgUrl: "https://cache.lahelu.com/permanent/hashtag-random.jpg",
    text: "Random",
  },
  {
    id: "7",
    imgUrl: "https://cache.lahelu.com/permanent/hashtag-wtf.jpg",
    text: "Wtf",
  },
  {
    id: "8",
    imgUrl: "https://cache.lahelu.com/permanent/hashtag-classic.jpg",
    text: "Rage",
  },
  {
    id: "9",
    imgUrl: "https://cache.lahelu.com/permanent/hashtag-anime.jpg",
    text: "Anime",
  },
  {
    id: "10",
    imgUrl: "https://cache.lahelu.com/permanent/hashtag-sarcasm.jpg",
    text: "Sarkas",
  },
  {
    id: "11",
    imgUrl: "https://cache.lahelu.com/permanent/hashtag-dark.jpg",
    text: "Dark",
  },
  {
    id: "12",
    imgUrl: "https://cache.lahelu.com/permanent/hashtag-absurd.jpg",
    text: "Absurd",
  },
  {
    id: "13",
    imgUrl: "https://cache.lahelu.com/permanent/hashtag-cringe.jpg",
    text: "Cringe",
  },
  {
    id: "14",
    imgUrl: "https://cache.lahelu.com/permanent/hashtag-sus.jpg",
    text: "Sus",
  },
  {
    id: "15",
    imgUrl: "https://cache.lahelu.com/permanent/hashtag-animal.jpg",
    text: "Binatang",
  },
];

const initialState: DrawerState = {
  activedMenu: undefined,
  exploreMenus: exploreMenus,
};

export const { _state: _useDrawerState, state: useDrawerState } =
  createState(initialState);
