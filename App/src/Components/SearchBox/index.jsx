import { Binoculars } from "phosphor-react"
import { useState } from "react"
import axios from "axios"

import styles from "./styles.module.css"

export function SearchBox({ setUserData }) {

    const [userName, setUserName] = useState("luizfranzon")

    function handleGetUserName() {
        setUserName(event.target.value)
    }

    function handleFetchUserData() {
        const URL = "https://api.github.com/users/"

        axios.get(`${URL}${userName}`)
        .then(response => {
            const data = response.data
            setUserData(data)
        })
    }

    return (
        <div className={styles.searchBox}>
            <input placeholder="Github username" spellCheck="false" value={userName} onChange={handleGetUserName} className={styles.searchBoxInput} type="text" />
            <button onClick={handleFetchUserData} className={styles.SearchButton}>
                <Binoculars size={32} color="white" />
            </button>
        </div>
    )
}