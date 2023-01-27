import * as CouterTypes from "../components/common/Counter/types";

export type AppStates = {
  counter: CouterTypes.Counter;
  setCounter: React.Dispatch<React.SetStateAction<Partial<CouterTypes.Counter>>>;
  reloadApp: number;
  setReloadApp: React.Dispatch<React.SetStateAction<number>>;
};
