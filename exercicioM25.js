const Alunos = [
    {nome: "Gabriel", nota: 7},
    {nome: "Carol", nota: 7},
    {nome: "Isaac", nota: 6},
    {nome: "Alfredo", nota: 5},
    {nome: "Luiz", nota: 5},
    {nome: "Paula", nota: 4},
];

function alunosComNotaMaiorASeis(arrayAlunos) {
    const alunosAprovados = arrayAlunos.filter(aluno => aluno.nota >= 6);
    return alunosAprovados;
}

console.log(alunosComNotaMaiorASeis(Alunos));