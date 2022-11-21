import { BASE_API_URL } from "../utils/constants";

export const getWeather = async (params, onSuccess, onError) => {
  try {
    await fetch(
      `${BASE_API_URL}/weather?q=${params.city}&appid=${params.apiKey}`
    )
      .then((response) => response.json())
      .then((response) => {
        onSuccess(response);
      });
  } catch (err) {
    if (onError) {
      onError(err);
    }
  }
};
