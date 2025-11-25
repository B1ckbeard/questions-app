const currentPage = 1;
const limit = 10;
const BASE_URL = import.meta.env.VITE_QUESTIONS_BASE_API_URL as string;
const url = `${BASE_URL}/questions/public-questions?page=${currentPage}&limit=${limit}`;

export const fetchQuestions = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("data: ", data);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};
