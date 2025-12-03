//O import só funciona se o type no packgage.json for "module" (não sei se impacta outra coisa)
import express from "express"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json()) //para o backend aceitar o json

const database = {
    users: [
        {
            name: "João Vitor",
            idade: 25
        },
                {
            name: "Salles",
            idade: 64
        },
                {
            name: "Bruna",
            idade: 28
        },
    ]
}

app.get("/users", (req, res) =>{
    // res.send("Hello World")
    // res.json({
    //     "name": "Luis",
    //     "idade": 22
    // })

    res.json(database.users)
    console.log("Hello")
})

app.post("/", (req, res) =>{
    // res.send("rota post")

    const user = {
        name: req.body.name,
        idade: req.body.idade
    }

    database.users.push(user)
    console.log(req.body)
    console.log("Rota post")
})

app.put("/", (req, res) =>{
    res.send("rota put")
})

app.delete("/", (req, res) =>{
    res.send("rota delete")
})

app.listen(4000, ()=>{
    console.log("Listen Server")
})


//npm init -y
//npm install express
//Em package.json inserir em "scripts": "start": "node index.js"
//npm run start

//Intalar Thunder Client

//npm install cors
//npm install sqlite3

//email: jvc.goncalves@discente.ufma.br
