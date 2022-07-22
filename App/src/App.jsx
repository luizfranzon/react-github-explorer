import { useState } from "react"
import { SearchBox } from "./Components/SearchBox"
import { InfoCard } from "./Components/InfoCard"
import logo from "./assets/icon.png"

import styles from './App.module.css'

export function App() {

    const [userData, setUserData] = useState(
        {
        "login": "luizfranzon",
        "location": "São Paulo, Brazil",
        "avatar_url": "https://avatars.githubusercontent.com/u/88747741?v=4",
        "bio": "Após muito tempo pulando de uma linguagem de programação pra outra, decidi focar nos estudos e espero algum dia poder trabalhar na área. :)",
        "public_repos": 40,
        "followers": 11,
        "following": 13
        })

    return (
        <div className={styles.main}>
            <div className={styles.logoBox}>
                <img src={logo} alt="" />
                <h1>Github Explorer</h1>
            </div>
            <div className={styles.appBox}>
                <SearchBox setUserData={setUserData}/>
                <InfoCard userData={userData}/>
            </div>
        </div>
    )
}


