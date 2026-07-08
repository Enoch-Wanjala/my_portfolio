export async function copyToClipboard(value: string) {
  if (!navigator.clipboard) return false;
  await navigator.clipboard.writeText(value);
  return true;
}
