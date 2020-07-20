export enum ActionTypes {
  INCREMENT,
  DECREMENT,
}

export interface IAction {
  type: ActionTypes;
}

export interface IState {
  counter: number;
}

export interface IDispatch {
  (action: IAction): void;
}

export interface IContextDefaultValue {
  state: IState;
  dispatch: IDispatch;
}
