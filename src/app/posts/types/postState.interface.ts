import {PostInterface} from "./post-interface";

export interface PostStateInterface {
  isLoading: boolean;
  posts: PostInterface[];
  error: string | null;
}
