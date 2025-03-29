import { create } from "zustand";

interface GitHubIssue {
  id: number;
  title: string;
  number: number;
  state: string;
  html_url: string;
  body: string;
  created_at: string;
  user: {
    login: string;
    avatar_url: string;
  };
}

interface IssueStore {
  issues: GitHubIssue[];
  isLoading: boolean;
  fetchIssues: () => Promise<void>;
}

export const useGitHubIssuesStore = create<IssueStore>((set) => ({
  issues: [],
  isLoading: false,

  fetchIssues: async () => {
    set({ isLoading: true });

    try {
      const res = await fetch(
        "https://api.github.com/repos/richardbmezzomo/resume/issues"
      );
      const data = await res.json();
      set({ issues: data });
    } catch (error) {
      console.error("Erro ao buscar issues:", error);
    } finally {
      set({ isLoading: false });
    }
  },
}));
