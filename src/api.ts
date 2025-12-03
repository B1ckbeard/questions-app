// const currentPage = 1;
// const limit = 10;
const BASE_URL = import.meta.env.VITE_QUESTIONS_BASE_API_URL as string;
// const url = `${BASE_URL}/questions/public-questions?page=${currentPage}&limit=${limit}`;

export const fetchQuestions = async (page: number, limit: number) => {
  try {
    const response = await fetch(
      `${BASE_URL}/questions/public-questions?page=${page}&limit=${limit}`
    );
    const data = await response.json();
    console.log("data: ", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSpecializations = async (page: number, limit: number) => {
  try {
    const response = await fetch(
      `${BASE_URL}/specializations?page=${page}&limit=${limit}`
    );
    const data = await response.json();
    console.log("data: ", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSkills = async (page: number, limit: number) => {
  try {
    const response = await fetch(
      `${BASE_URL}/skills?page=${page}&limit=${limit}`
    );
    const data = await response.json();
    console.log("data: ", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
