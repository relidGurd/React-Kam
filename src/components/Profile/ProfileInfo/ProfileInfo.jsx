import Styles from './ProfileInfo.module.css'
const ProfileInfo = () => {
    return (
        <div className={Styles.content}>
            <div>
                <img width='100%' src="https://i.ytimg.com/vi/T33WFmJCHT0/maxresdefault.jpg" alt=""/>
            </div>
            <div className={Styles.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo