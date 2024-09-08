const BASE_URL = "https://api.github.com";

const getUser = async (username) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${username}`);
    const data = await response.json();
    return {
      status: response.status,
      statusText: response.statusText,
      ok: response.ok,
      data
    };
  } catch (error) {
    console.log(error);
  }
}

export { getUser }
