import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';





interface UserData {
  email: string;
  name: string;
}



export const createUser = async (userData: UserData): Promise<any> => {
  try {
    const response = await axios.post(API_URL, userData, { timeout: 4000 });
    return response.data;
  } catch (error) {
    console.error('Error creating user:');
  }
};


export const getUserByEmail = async (email: string): Promise<any> => {
    try {
      const response = await axios.get(`${API_URL}/email/${email}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching user by email:', error);
      throw error;
    }
  };


export const addRoomToUserByEmail = async (email: string, roomId: string): Promise<any> => {
    try {
      const response = await axios.post(`${API_URL}/email/${email}/rooms`, { roomId });
      return response.data;
    } catch (error) {
      console.error('Error adding room to user:', error);
      throw error;
    }
  };