export interface IStorageLogin {
  readonly createdAt: string;
  readonly id: string;
  updateAt: string;
  password: string;
  email: string;
  url: string;
}

export interface ISaveNewLogin {
  password: string;
  email: string;
  url: string;
  id: string;
}

export interface IUpdateLogin extends ISaveNewLogin {

}
