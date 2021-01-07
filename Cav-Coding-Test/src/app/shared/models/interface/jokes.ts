export interface IJokes {
  id: number;
  joke: string;

}

export interface IJokesResponse {
  type: string;
  value: IJokes;


}
