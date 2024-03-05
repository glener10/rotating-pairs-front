import { ICombinationsJson } from '@/interfaces/ICombinationsJson';
import axios from 'axios';

const CombinationsGateway = async (numberOfInputs: number): Promise<ICombinationsJson> => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_URL_BACK}/combination`,
      { NumberOfInputs: numberOfInputs },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SECRET}`,
        },
      }
    );
    return response.data as ICombinationsJson;
  } catch (error) {
    console.error('Error in Request to back-end:', error);
    throw error;
  }
};

export default CombinationsGateway;
