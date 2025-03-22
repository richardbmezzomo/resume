import { createContext } from "react";
import type { GitHubUser } from "@/types/github.ts";

export const GitHubContext = createContext<GitHubUser | null>(null);
