import styles from './css/Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'

const Home = () => {
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar seu projetos agora mesmo!</p>
            <LinkButton to='/newproject' text='Criar Projeto'/>
            <br />
            <img src={savings} alt="Costs" />
        </section>
    )
}

export default Home;