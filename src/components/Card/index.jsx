import styles from './Card.module.css';
import Image from 'next/image';

export default function Card ({name, image, category, description, price}) {
    return(
        <div className={styles.card}>
            <div className={styles.card__img}>
                <Image src={image} alt={name}/>
            </div>
            <div className={styles.card__info}>
                <h3>{name}</h3>
                <p className={styles.card__category}>{category}</p>
                <p className={styles.card__desc}>{description}</p>
                <p className={styles.card__price}>R$ {price.toFixed(2)
                .replace('.',',')}</p>
            </div>

        </div>
    )
}