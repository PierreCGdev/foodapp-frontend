import keyword_extractor from "keyword-extractor";
import React from "react";
import { Text } from "react-native";

export default function formatInstructions(text: string): React.ReactElement[] {
  const rawKeywords = keyword_extractor.extract(text, {
    language: "english",
    remove_digits: true,
    return_changed_case: true,
    remove_duplicates: true,
  });

  //  compter les occurrence en créant un tableau de clé/valeur
  const frequencyMap = new Map<string, number>();
  for (const word of rawKeywords) {
    frequencyMap.set(word, (frequencyMap.get(word) || 0) + 1);
  }
  // garder les 10 mots les plus fréquents
  const topKeywords = [...frequencyMap.entries()]
    .sort((a, b) => b[1] - a[1]) // tri par fréquence décroissante
    .slice(0, 18)
    // ne garde que la key
    .map(([word]) => word);

  const regex = new RegExp(`\\b(${topKeywords.join("|")})\\b`, "gi");
  const parts = text.split(regex);

  return parts.map((part, i) => {
    const isKeyword = topKeywords.includes(part.toLowerCase());
    return (
      <Text key={i} style={{ fontWeight: isKeyword ? "bold" : "normal" }}>
        {part}
      </Text>
    );
  });
}
