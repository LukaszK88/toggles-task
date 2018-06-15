export interface Question {
  title:string;
  options:Option[];
}

export interface Option {
  id:string;
  answers:Answer[];
}

export interface Answer {
  id:number;
  correct:number;
  title:string;
  active:number;
}