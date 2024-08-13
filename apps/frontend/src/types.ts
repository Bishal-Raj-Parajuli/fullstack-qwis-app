
export interface ICategory{
    id: number;
    category: string
    blitzTime: number
    description: string
    questions: IQuestion[]
  } 

export interface IOption{
    id: number
    answer: string
}
  
export interface IQuestion{
    title: string 
    option: IOption[]
    correctAnswer: number
}

export interface IUser{
    id: number
    name: string
    points: number
    profileImg: string
    country: string
  }