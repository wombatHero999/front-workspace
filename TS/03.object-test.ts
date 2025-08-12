type Academy = {
    readonly name : 'kh', 
    class : string[], 
    location? : string ,
    employee? :Employee[]
};
type Employee = {
    name : string,
    position:string,
    dept_code?:string
};

type MBTIType1 = {
    mbti : string , 
    feature : string[],
    vocation? : string
};
const type1:MBTIType1  = {mbti : 'ISTP', feature : ['망상가', '공감능력 부족'], vocation : '데이터분석가'};
const type2:MBTIType1  = {mbti : 'INTJ', feature : ['완벽주의자', '무신경']};

type MBTIType2 = {
    mbti : string ,
    bestGunghab : string[],
    worstGunghab? : string
};
const type3:MBTIType2  = {mbti : 'ISTP' , bestGunghab : ['ESFJ', 'ESTJ'] };
const type4:MBTIType2  = {mbti : 'ESFJ' , bestGunghab : ['ISFP', 'ISTP'] , worstGunghab : 'ENFJ' };

type MBTIType3 = MBTIType1 & MBTIType2;
const type5:MBTIType3 = {mbti : 'ISTP' , bestGunghab : ['ESFJ', 'ESTJ'], feature : ['망상가', '공감능력 부족']  }; 
// type6는 컴파일 에러 발생
//const type6:MBTIType3 = {mbti : 'ISTP' , bestGunghab : ['ESFJ', 'ESTJ'] , worstGunghab : 'ENFJ'}; 

interface Person {
    name : string,
    married?:boolean
}
interface Teacher extends Person {
    major : string,
    classRoom : string,
    carrer : number
}
interface Singer extends Person{
    songs : string[],
    group : string
}
const ses:Teacher  = {name : 'shimEunseong', married : false, major: 'it', classRoom : 'C' , carrer:10 };
const karina:Singer = {name : '카리나', married : false, songs: ['슈퍼노바','블랙맘바'] , group : '에스파'  };
const winter:Singer = {name : '윈터', songs: ['슈퍼노바','블랙맘바'] , group : '에스파'  };

