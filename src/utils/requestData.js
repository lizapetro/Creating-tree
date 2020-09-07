export const requestData = async (url) => {
  try {
    const requestRes = await fetch(url);
    const data = await requestRes.json();
    return data;
  } catch (e){
    return (e);
  }
};