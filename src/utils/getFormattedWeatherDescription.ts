export const getFormattedWeatherDescription = (
  condition: string | undefined,
) => {
  if (!condition) return;

  const weatherToEmoji: Record<string, string> = {
    "clear sky": "☀️",
    "few clouds": "🌤️",
    "scattered clouds": "⛅",
    "broken clouds": "☁️",
    "overcast clouds": "☁️",
    rain: "🌧️",
    "light rain": "🌧️",
    "moderate rain": "🌧️",
    "heavy intensity rain": "🌧️",
    "very heavy rain": "🌧️",
    "extreme rain": "🌧️",
    "freezing rain": "🌨️",
    "light intensity shower rain": "🌦️",
    "shower rain": "🌧️",
    "heavy intensity shower rain": "🌧️",
    "ragged shower rain": "🌧️",
    "light snow": "❄️",
    snow: "❄️",
    "heavy snow": "❄️",
    sleet: "🌨️",
    "shower sleet": "🌨️",
    "light rain and snow": "🌨️",
    "rain and snow": "🌨️",
    "light shower snow": "🌨️",
    "shower snow": "🌨️",
    "heavy shower snow": "🌨️",
    mist: "🌫️",
    smoke: "🌫️",
    haze: "🌫️",
    "sand/ dust whirls": "🌪️",
    fog: "🌫️",
    sand: "🌫️",
    dust: "🌫️",
    "volcanic ash": "🌫️",
    squalls: "🌬️",
    tornado: "🌪️",
    clear: "☀️",
    clouds: "☁️",
  };

  return `${weatherToEmoji[condition.toLowerCase()] ?? ""} ${condition}`;
};
