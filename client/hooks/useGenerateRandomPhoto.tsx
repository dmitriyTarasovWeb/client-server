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

const originalPhotos = [
  "photo_1.svg",
  "photo_2.svg",
  "photo_3.svg",
  "photo_4.svg",
  "photo_5.svg",
  "photo_6.svg",
  "photo_7.svg",
  "photo_8.svg",
];

// Массивы доступных аватаров и фотографий
let availableAvatars = [...originalAvatars];
let availablePhotos = [...originalPhotos];

const getRandomItem = (items: string[], type: string) => {
  if (items.length === 0) {
    items = type === 'avatar' ? [...originalAvatars] : [...originalPhotos];
  }

  const randomIndex = randomNumber(0, items.length);
  const randomItem = items[randomIndex];
  items.splice(randomIndex, 1);

  return `/${type}s/${randomItem}`;
};

const generateRandomItem = (type: 'avatar' | 'photo') => {
  const randomItem = getRandomItem(type === 'avatar' ? availableAvatars : availablePhotos, type);
  return randomItem;
};

const useGenerateRandomItem = () => generateRandomItem;

export default useGenerateRandomItem;
