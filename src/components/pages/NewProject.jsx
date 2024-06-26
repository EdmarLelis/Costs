import styles from "./css/NewProject.module.css"
import ProjectForm from "../layout/project/ProjectForm";

const NewProject = () => {
    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços.</p>
            <ProjectForm btnText='Criar projeto'/>
        </div>
    )
}

export default NewProject;