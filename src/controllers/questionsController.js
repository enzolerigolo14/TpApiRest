export const  getAllUsers = (req,res) => {
    res.status(200).send([
        {
            id:"1",
            question:"Allez body count",
            answer:"15",
        },
    ])
}

export const createQuestion = (req,res) => {
    const { question, answer } = req.body
    
    if(!question || !answer){
        return res(400).send({error: 'Question and answer requiered'})
    }

    res.status(201).send({message: 'bien joué ma reine'})
}


export const deleteQuestion = (req,res) => {
    const { id } = req.params
    res.status(200).send({message: `Question ${id} deleted`})
}
