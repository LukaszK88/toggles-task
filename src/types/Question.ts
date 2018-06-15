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
  correct:boolean;
  title:string;
  active:boolean;
}
