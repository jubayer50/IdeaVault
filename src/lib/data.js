// fetch for all ideas data
export const getIdeas = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/ideas`);
  const data = await res.json();

  return data;
};

// fetch for single idea data
export const getIdeaById = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/ideas/${id}`);
  const data = await res.json();

  return data;
};

// fetch for trending-ideas
export const getTrendingIdeas = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/trending-ideas`,
  );
  const data = await res.json();

  return data;
};
