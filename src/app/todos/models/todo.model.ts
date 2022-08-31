export class Todo {
  public id!: number;
  public text!: string;
  public completed!: boolean;

  constructor( text: string) {
    this.id = Math.floor(Math.random() * new Date().getTime());
    this.text = text;
    this.completed = false;
  }
  
}