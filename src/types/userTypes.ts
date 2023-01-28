export type UserStates = {
  userData: UserData | null;
  getTokenWithGoogleOAuth: () => Promise<void>;
};

export type UserData = {
  id: number;
  name: string;
  token: string;
};

export type OAuthData = {
  name: string;
  email: string;
  photoUrl: string;
};
