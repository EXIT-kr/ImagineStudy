import {Section, Part} from "app/app.model";
export class AngularFireService{
//   section1 = {
//     h4: "closure1.js",
//     code:`
// function outter(){
//   var title = 'coding everybody';
//   return function(){
//       alert(title);
//   }
// }
// inner = outter();
// inner();`,
//     p:""
//   };
  // private sections1: Section[] = [
  //   this.section1,this.section2,this.section3,this.section4
  // ];
  private parts: Part[] = [

  ];
  getAngularFire(){
    return this.parts;
  }
}
