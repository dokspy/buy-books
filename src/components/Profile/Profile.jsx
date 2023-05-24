import style from './profile.module.css' 

export const Profile = () => {
    return (
        <div className={style.Profileprofile}>
            <h1>Профіль</h1>
            <img src="img/user-icon.png" alt="Фото профілю" />
            <div class={style.info}>
                <p><strong>Ім'я:</strong> Данііл</p>
                <p><strong>Email:</strong> daniilperederenko@gmail.com</p>
                <p><strong>Місто:</strong> Черкаси</p>
                <a href="#">Редагувати профіль</a>
            </div>
            <div class={style.homeLink}>
                <a href="index.html">На головну</a>
                <a href="index.html">Збережене</a>
            </div>
        </div>
    )
}


