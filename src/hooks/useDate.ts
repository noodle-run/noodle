export const formatDate = (date: Date) => {
  // Get day of week, day, month and year
  const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
  const day = date.getDate();
  const month = date.toLocaleDateString('en-US', { month: 'long' });
  const year = date.getFullYear();

  // Add ordinal suffix to day
  let suffix = 'th';
  if (day % 10 === 1 && day !== 11) {
    suffix = 'st';
  } else if (day % 10 === 2 && day !== 12) {
    suffix = 'nd';
  } else if (day % 10 === 3 && day !== 13) {
    suffix = 'rd';
  }

  // Format as "Saturday, the 5th of April 2025"
  return `${dayOfWeek}, the ${day.toString()}${suffix} of ${month} ${year.toString()}`;
};
