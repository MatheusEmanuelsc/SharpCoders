const loginUser=(email,password) => {

    setTimeout(() => {
        console.log('logado')
        return{email}
    },1500)
}
// E uma função que sera executado apos um periodo de tempo
// o segundo e o tempo para iniciar a execução da função

const user = loginUser('JaoBao@gmail.com','123456')

console.log(user)