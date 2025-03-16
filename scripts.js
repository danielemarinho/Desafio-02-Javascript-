/*
Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.


*/

const students = [ 
    {
        name: "JOAO",
        firstExam: 6,
        secondExam: 6
    },
    {
        name: "LETICIA",
        firstExam: 9.5,
        secondExam: 8.5
    },
    {
        name: "JULIA",
        firstExam: 4.5,
        secondExam: 5.5
    },
    {
        name: "DIEGO",
        firstExam: 8,
        secondExam: 9
    },    {
        name: "DANIELE",
        firstExam: 10,
        secondExam: 9.9
    },
]

function averageGrade(firstExam, secondExam) {
    return ((firstExam + secondExam) / 2).toFixed(2)
}


function printAverageGrade(students) {

    let average = averageGrade(students.firstExam, students.secondExam)

    let checkAverage = (average >= 7) ? "Parabéns, você foi APROVADO" : "Não foi desta vez, tente novamente."

    return `${checkAverage}\nA média de ${students.name} foi de: ${average}`


}

for (let student of students) {
   let message = printAverageGrade(student)
   alert(message)
}