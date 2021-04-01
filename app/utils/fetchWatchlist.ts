import Constants from "expo-constants";

async function fetchWatchlist(url: string, options = {}) {
  const { WATCHLIST_API_URL } = Constants.manifest.extra;

  try {
    const res = await fetch(`${WATCHLIST_API_URL}${url}`, {
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    });

    return await res.json();
  } catch (e) {
    return e;
  }
}

export default fetchWatchlist;
