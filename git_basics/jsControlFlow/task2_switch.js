const averageGrade =85;
let level; 

switch (true) {
    case averageGrade < 60:
        level = "Незадовільно";
        break;


    case averageGrade >=60 && averageGrade >= 70:
        level = "Задовільно";
        break;
    case averageGrade >=71 && averageGrade >=80:
        level = "Добре";
        break;
    case averageGrade >= 81 && averageGrade <=100:
        level = "Відмінно";
        break;

    default: 
    level = "Некоректне значення";
    }   
    console.log(level);     
