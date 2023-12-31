export function getAllowedTitle(title: string) {
  return title.length > 25 ? `${title.slice(0, 25)}...` : title;
}
