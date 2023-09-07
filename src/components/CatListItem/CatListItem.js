import styles from "./CatListItem.module.scss";
import * as catsAPI from '../../utilities/catDep-api';
import * as itemsAPI from '../../utilities/items-api';
import { useNavigate } from 'react-router-dom';


export default function CatListItem({ categories, category }) {
    const navigate = useNavigate();

    async function handleClick() {
        await itemsAPI.getByCategory(category);
        navigate(`/category/${category}`);
    }

    return (
        <div className={styles.catListItem} onClick={handleClick}>
            <img className={styles.image} src={category.image} />
            <div className={styles.name}>{category.name}</div>
        </div>
    )
}