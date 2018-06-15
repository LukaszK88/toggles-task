export interface Question {
  title:string;
  options:Option[];
}

export interface Option {
  id:number;
  answers:Answer[];
}

export interface Answer {
  id:number;
  correct:boolean;
  title:string;
  active:boolean;
}
