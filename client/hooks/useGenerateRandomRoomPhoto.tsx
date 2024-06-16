// hooks/useGenerateRandomRoomPhoto.ts
import { useCallback } from 'react';

const useGenerateRandomRoomPhoto = () => {
  const generateRandomRoomPhoto = useCallback(() => {
    // Логика генерации случайных фотографий для комнат
    // Например, можно использовать API или просто случайные URL
    return `https://source.unsplash.com/random/room?sig=${Math.floor(Math.random() * 1000)}`;
  }, []);

  return generateRandomRoomPhoto;
};

export default useGenerateRandomRoomPhoto;
