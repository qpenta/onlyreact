import { useNavigate } from 'react-router-dom'
import styles from './NewProject.module.css'
import ProjectForm from '../Project/ProjectForm'

function NewProject() {

    const history = useNavigate()
    function createPost(project) {

        // initialize cost and services
        project.any = 0
        project.services = []

        fetch("https://localhost:5000/projects", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project),
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                //redirect
                history('/projects', { message: "Projeto criado com sucesso!" });
            })
            .catch((err) => console.error(err))

    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm
                handleSubmit={createPost}
                btnText="Criar projeto" />
        </div>
    )
}

export default NewProject