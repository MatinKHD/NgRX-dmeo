import {PostStateInterface} from "../posts/types/postState.interface";
import {UserStateInterface} from "../auth/types/userState.interface";

export interface AppStateInterface {
  posts: PostStateInterface,
  users: UserStateInterface
}
