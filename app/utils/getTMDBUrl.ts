import Constants from "expo-constants";

async function getTMDBUrl(url: string) {
  const { TMDB_API_URL, TMDB_TOKEN } = Constants.manifest.extra;

  try {
    const resp = await fetch(`${TMDB_API_URL}${url}`, {
      headers: new Headers({
        Authorization: `Bearer ${TMDB_TOKEN}`,
      }),
    });
    const responseJson = await resp.json();

    return responseJson;
  } catch (e) {
    return e;
  }
}

export default getTMDBUrl;
