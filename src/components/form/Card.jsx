import styles from './css/card.module.css'

const Card = ({type = 'warning', tone = 'light', text}) => {

    const typeMap = {
        warning: {
          title: 'Aviso',
          classes: {
            light: styles['warning-light'],
            dark: styles['warning-dark'],
          },
        },
        success: {
          title: 'Sucesso',
          classes: {
            light: styles['success-light'],
            dark: styles['success-dark'],
          },
        },
        error: {
          title: 'Erro!',
          classes: {
            light: styles['error-light'],
            dark: styles['error-dark'],
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