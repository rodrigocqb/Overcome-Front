export type Counter = {
  show: boolean;
  doThisWhenOver: () => void;
  initialValue: number;
  tick: number;
};
