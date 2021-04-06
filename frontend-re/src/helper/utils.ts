export function getHours(mins: number): string {
  const hrs = Math.floor(mins / 60);
  const min = mins % 60;

  return `${hrs}h ${min}m`;
}
