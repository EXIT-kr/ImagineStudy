export class Part{
  public h2: string;
  public topP: string;
  public sections: Section[];
  public id: string;
  constructor(h2: string, topP: string,sections: Section[],id: string){
    this.h2 = h2;
    this.topP = topP;
    this.sections = sections;
    this.id = id;
  }
}
export class Section{
  public h4: string;
  public code: string;
  public p: string;
  constructor(h4: string, code: string, p: string){
    this.h4 = h4;
    this.code = code;
    this.p = p;
  }


}
