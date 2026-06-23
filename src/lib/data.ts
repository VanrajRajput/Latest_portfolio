import portfolioData from "../../data.json";
import type { PortfolioData } from "@/types/portfolio";

export const data: PortfolioData = portfolioData as PortfolioData;

export function getSkillCategories(): string[] {
  return Object.keys(data.skills);
}

export function getAllSkills(): string[] {
  return Object.values(data.skills).flat();
}
