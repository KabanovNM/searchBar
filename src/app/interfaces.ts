export interface User {
  id: number;
  login: string;
  name: string;
  avatar_url: string;
  email: string;
  company: string;
  created_at: string;
}

export interface Project {
  id: number;
  name: string;
  owner: {
    login: string;
  };
  pushed_at: string;
}
