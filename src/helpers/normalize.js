export const normalize = (array) =>
  array.reduce(
    (acc, current) => {
      acc.rows.push({
        id: current.id,
        name: current.name,
        air_date: current.air_date,
        episode: current.episode,
        url: current.url
    });
      return acc;
    },
    { rows: [] }
  );