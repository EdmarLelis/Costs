import styles from './css/card.module.css'

const Card = ({type = 'warning', tone = 'light', text}) => {

    const typeMap = {
        warning: {
          title: 'Aviso',
          classes: {
            light: styles['warning-light'], // Corrigido para 'light'
            dark: styles['warning-dark'],   // Corrigido para 'dark'
          },
        },
        success: {
          title: 'Sucesso',
          classes: {
            light: styles['success-light'], // Corrigido para 'light'
            dark: styles['success-dark'],   // Corrigido para 'dark'
          },
        },
        error: {
          title: 'Erro!',
          classes: {
            light: styles['error-light'],   // Corrigido para 'light'
            dark: styles['error-dark'],     // Corrigido para 'dark'
          },
        },
    };

    const cardType = typeMap[type] || typeMap.warning;
    const cardClass = cardType.classes[tone] || cardType.classes.light;


    return (
    <div className={`${styles.card} ${cardClass}`}>
        <h3>{cardType.title}</h3>
        <div className={styles.content}>
          <p>{text}</p>
        </div>
    </div>
    )
};

export default Card;