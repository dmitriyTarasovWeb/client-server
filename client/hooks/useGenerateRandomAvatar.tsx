import useGenerateRandomString from "./useGenerateRandomString";

const randomNumber = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min;

const originalAvatars = [
  "avatar_1.svg",
  "avatar_2.svg",
  "avatar_3.svg",
  "avatar_4.svg",
  "avatar_5.svg",
  "avatar_6.svg",
  "avatar_7.svg",
  "avatar_8.svg",
  "avatar_9.svg",
  "avatar_10.svg",
  "avatar_11.svg",
];

// Массив доступных аватарок
let availableAvatars = [...originalAvatars];

const getRandomSVGAvatar = () => {
  if (availableAvatars.length === 0) {
    availableAvatars = [...originalAvatars];
  }

  const randomIndex = randomNumber(0, availableAvatars.length);
  const randomAvatar = availableAvatars[randomIndex];
  availableAvatars.splice(randomIndex, 1);

  return `/avatars/${randomAvatar}`;
};

const generateRandomAvatar = () => {
  const randomSVG = getRandomSVGAvatar();
  return randomSVG;
};

const useGenerateRandomAvatar = () => generateRandomAvatar;

export default useGenerateRandomAvatar;
