import React from 'react';
import styles from './Card.module.scss';

const Card = (props) => {
    return (
        <div className={styles.card_wrapper}>{props.children}</div>
    )
}

export default Card;