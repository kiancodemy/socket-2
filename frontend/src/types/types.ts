export type signupType = {
  username?: string;
  password?: string;
  gender: string;
  email?: string;
  confirm?: string;
};
export type loginType = {
  email?: string;
  password?: string;
};

export type UserType = {
  _id: string;
  username: string;
  email: string;
  gender: string;
  picture: string;
  createdAt: string; // ISO 8601 timestamp
  updatedAt: string; // ISO 8601 timestamp
  __v: number;
};

export type MessageType = {
  message: string;

  reciever: string;

  sender: string;

  _id: string;
};
