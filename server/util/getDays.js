

module.exports.getDaysOfWeek = () => {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date().getDay();
  const forecastDays = [];

  for (let i = today; i < today + 5; i++) {
    forecastDays.push(daysOfWeek[i % 7]);
  }

  return forecastDays;
};