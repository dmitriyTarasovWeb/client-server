import useGenerateRandomString from "./useGenerateRandomString";

const randomNumber = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min;

const generateGreenColor = () => {
  return `00${randomNumber(150, 256).toString(16)}00`; // зеленые оттенки
};

const generateRandomAvatar = (sprites: string) => {
  const randomString = useGenerateRandomString(16);
  const color = generateGreenColor();

  return `https://robohash.org/${randomString}?set=${sprites}&bgset=bg1&bgcolor=${color}`;
};

const useGenerateRandomAvatar = () => generateRandomAvatar;

export default useGenerateRandomAvatar;
