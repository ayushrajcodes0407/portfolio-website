export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

/**
 * Returns the fully qualified asset path respecting the GitHub Pages basePath.
 * @param {string} path - The relative or absolute asset path from public/
 * @returns {string} - The resolved asset URL
 */
export function getAssetPath(path) {
  if (!path) return '';
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('data:') ||
    path.startsWith('blob:') ||
    path.startsWith('mailto:') ||
    path.startsWith('tel:')
  ) {
    return path;
  }
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${BASE_PATH}${cleanPath}`;
}
