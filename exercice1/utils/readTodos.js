import { readFile } from 'fs/promises';

const readTodos = async () => {
    try{
        const data = await readFile('../exercice1/todos.json', 'utf-8')
        return JSON.parse(data)
    }catch(error){
        if(error.code == "ENOENT"){
            return []
        }
        throw new error
    }
}

export default readTodos