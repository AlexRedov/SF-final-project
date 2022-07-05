import img_updating from './icon-updating.png';
import css from './updating.module.css';

export default function Updating() {
    return (
        <div className={css.updating}>
            <img src={img_updating} alt='загрузка'/>
        </div>
    );
}