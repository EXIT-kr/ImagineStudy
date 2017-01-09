
import {Section, Part} from "app/app.model";
export class JsService{

  code1=
    `
function outter(){
  var title = 'coding everybody';  
  return function(){        
      alert(title);
  }
}
inner = outter();
inner();
`;
  code2 =
    `
function factory_movie(title){
    return {
        get_title : function (){
            return title;
        },
        set_title : function(_title){
            title = _title
        }
    }
}
ghost = factory_movie('Ghost in the shell');
matrix = factory_movie('Matrix');
 
alert(ghost.get_title());
alert(matrix.get_title());
 
ghost.set_title('공각기동대');
 
alert(ghost.get_title());
alert(matrix.get_title());
`;
  paragraph1 =
    `위 예시처럼 title이라는 외부함수의 parameter은 
    외부함수로는 접근할 수 없으므로 private변수의 성질을 띈다.
    하지만 외부함수가 만료된 이후에도 내부함수는 title에 접근할 수 있으므로 get set함수를
    내부함수로 정의 한다.`;
  code3 =
    `
var arr = []
for(var i = 0; i < 5; i++){
    arr[i] = function(){
        return i;
    }
}
for(var index in arr) {
    console.log(arr[index]());
}
`;
  code4 = `
var arr = []
for(var i = 0; i < 5; i++){
    arr[i] = function(id) {
        return function(){
            return id;
        }
    }(i);
}
for(var index in arr) {
    console.log(arr[index]());
}
`;
  paragraph2 =
    `
숫자 5만 5번 출력된다.    
`
  paragraph3 =
    `
의도한 대로 0부터 4 까지 순서대로 출력된다    
`
  code5 =
    `
var person = {
    'name' : 'egoing',
    'introduce' : function(){
        return 'My name is '+this.name;
    }
}`;
  code6 =
    `
function Person(name){
    this.name = name;
    this.introduce = function(){
        return 'My name is '+this.name; 
    }   
}
var p1 = new Person('egoing');
 
var p2 = new Person('leezche');`;
  paragraph4 = `가장 단순한 객체 생성 방법으로 단순한 만큼 비효율적이다.`;
  paragraph5 = `여기서 function Person은 생성자이다. js에서는 class를 따로
정의 하지 않고 다음과 같이 생성자만으로 객체를 표현하며 이런식으로 객체를 생성하는 것이 
처음 예시보다 훨씬 효율 적이다.`;
  p6 = `this는 해당 method가 소속되어 있는 객체를 의미한다.`;
  code7=
    `
function func(){
    if(window === this){
        document.write("window === this");
    }
}
func();
`;
  code8=
    `
var o = {
    func : function(){
        if(o === this){
            document.write("o === this");
        }
    }
}
o.func();`;
  code9 =
    `
var funcThis = null; 
 
function Func(){
    funcThis = this;
}
var o1 = Func();
if(funcThis === window){
    document.write('window <br />');
}
 
var o2 = new Func();
if(funcThis === o2){
    document.write('o2 <br />');
}`;
  code10 =
    `
var o = {}
var p = {}
function func(){
    switch(this){
        case o:
            document.write('o<br />');
            break;
        case p:
            document.write('p<br />');
            break;
        case window:
            document.write('window<br />');
            break;          
    }
}
func();
func.apply(o);
func.apply(p);`;

  section1 = {
    h4: "closure1.js",
    code:`
function outter(){
  var title = 'coding everybody';  
  return function(){        
      alert(title);
  }
}
inner = outter();
inner();`,
    p:""
  };
  section2 = {
    h4:"closure2.js",
    code : `
function factory_movie(title){
    return {
        get_title : function (){
            return title;
        },
        set_title : function(_title){
            title = _title
        }
    }
}
ghost = factory_movie('Ghost in the shell');
matrix = factory_movie('Matrix');
 
alert(ghost.get_title());
alert(matrix.get_title());
 
ghost.set_title('공각기동대');
 
alert(ghost.get_title());
alert(matrix.get_title());`,
    p:`위 예시처럼 title이라는 외부함수의 parameter은 
    외부함수로는 접근할 수 없으므로 private변수의 성질을 띈다.
    하지만 외부함수가 만료된 이후에도 내부함수는 title에 접근할 수 있으므로 get set함수를
    내부함수로 정의 한다.`

  };
  section3 = {
    h4:"wrong.js",
    code:this.code3,
    p:this.paragraph2
  };
  section4 = {
    h4:"nice.js",
    code:this.code4,
    p:this.paragraph3
  };
  section5 = {
    h4:"nice.js",
    code:this.code5,
    p:this.paragraph4
  };
  section6 = {
    h4:"nice.js",
    code:this.code6,
    p:this.paragraph5
  };
  section7 = {
    h4:"nice.js",
    code:this.code7,
    p:""
  };
  section8 = {
    h4:"nice.js",
    code:this.code8,
    p:""
  };
  section9 = {
    h4:"nice.js",
    code:this.code9,
    p:""
  };

  private sections1: Section[] = [
    this.section1,this.section2,this.section3,this.section4
  ];
  private sections2: Section[] = [
    this.section5,this.section6
  ];
  private sections3: Section[] = [
    this.section7,this.section8,this.section9
  ]
  private parts: Part[] = [
    {h2:"Closure",topP:"closure는 외부함수가 만료되도 내부함수가 외부함수의 맥락을 계속 사용할 수 있는 특징을 의미한다.",sections:this.sections1,id:"section1"},
    {h2:"New And Constructor",topP:"",sections:this.sections2,id:"section2"},
    {h2:"This",topP:`this는 해당 method가 소속되어 있는 객체를 의미한다.`,sections:this.sections3,id:"section3"}
  ];
  getJs(){
    return this.parts;
  }

}
