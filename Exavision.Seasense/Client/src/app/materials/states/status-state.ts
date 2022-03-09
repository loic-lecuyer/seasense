export enum Status {
  Ok = "Ok",
  Warning = "Warning",
  Error="Error"
}

export interface StatusState {
  status: Status;
  message: string;

}
