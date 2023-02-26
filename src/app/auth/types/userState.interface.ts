import {UserInterface} from "./user.interface";

export interface UserStateInterface {
  isLoading: boolean,
  users: UserInterface[],
  error: string | null
}
