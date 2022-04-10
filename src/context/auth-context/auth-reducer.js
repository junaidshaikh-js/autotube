import { abreviations } from "./auth-utils";

export const authReducer = (
  state,
  { type, payload: { token, userName } = {} }
) => {
  switch (type) {
    case abreviations.login:
      return {
        ...state,
        token: token,
        userName: userName,
      };
    case abreviations.logout:
      return {
        ...state,
        token: null,
        userName: null,
      };

    default:
      throw new Error(`Unhandled action type ${type}`);
  }
};
