const randomNumber = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min;

const originalPhotos = [
  "photo_1.png",
  "photo_2.png",
  "photo_3.png",
  "photo_4.png",
  "photo_5.png",
  "photo_6.png",
  "photo_7.png",
  "photo_8.png",
];

// Массив доступных фотографий
let availablePhotos = [...originalPhotos];

const getRandomPhoto = () => {
  if (availablePhotos.length === 0) {
    availablePhotos = [...originalPhotos];
  }

  const randomIndex = randomNumber(0, availablePhotos.length);
  const randomPhoto = availablePhotos[randomIndex];
  availablePhotos.splice(randomIndex, 1);

  return `/photos/${randomPhoto}`;
};

const generateRandomPhoto = () => {
  const randomPhoto = getRandomPhoto();
  return randomPhoto;
};

const useGenerateRandomPhoto = () => generateRandomPhoto;

export default useGenerateRandomPhoto;
