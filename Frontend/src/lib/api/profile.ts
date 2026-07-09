import { api } from "./client";

export interface Profile {
  name: string;
  title: string;
}

export function getProfile() {
  return api<Profile>("/profile");
}