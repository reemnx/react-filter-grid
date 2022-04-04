import HTTP from "./HttpService";
export const get = async (endpoint: string) => {
  try {
    const res = await HTTP.get(endpoint);
    return res
  } catch (error) {
    throw error;
  }
};
