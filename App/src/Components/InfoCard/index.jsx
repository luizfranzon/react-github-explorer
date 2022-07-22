import styles from "./styles.module.css"
import {MapPin} from "phosphor-react"

export function InfoCard({ userData }) {

    return (
        <div className={styles.infoBox}>
            <div className={styles.userInfo}>
                <div className={styles.userPhotoAndNameBox}>
                    <img className={styles.userProfileImage} src={userData.avatar_url} alt="" />
                    <div>
                        <p className={styles.userName}>{userData.login}</p>
                        <div className={styles.locationBox}>
                            <MapPin size={32}/>
                            <span className={styles.userLocation}>{userData.location}</span>
                        </div>
                    </div>
                </div>
                <div className={styles.bioBox}>
                    <p className={styles.bioText}>{userData.bio}</p>
                </div>
            </div>


            <div className={styles.userStats}>
                <div>
                    <span>Followers</span>
                    <span className={styles.statNumber}>{userData.followers}</span>
                </div>
                <div>
                    <span>Following</span>
                    <span className={styles.statNumber}>{userData.following}</span>
                </div>
                <div>
                    <span>Repositories</span>
                    <span className={styles.statNumber}>{userData.public_repos}</span>
                </div>
            </div>
        </div>
    )
}