export default function nameToColor(name: string): string {
  // Initialise un "hash" à 0 (c'est un nombre qui représentera le nom de façon unique)
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
        // Multiplie le hash courant par 31 puis ajoute le code ASCII du caractère
    // (c'est une manière simple de produire un hash unique et stable)
    hash = name.charCodeAt(i) + hash*31;
  }

  // On convertit le hash en une valeur de teinte (hue) comprise entre 0 et 359
  const hue = hash % 360;
  // Retourne une couleur en format HSL
  return `hsl(${hue}, 50%, 80%)`;
}