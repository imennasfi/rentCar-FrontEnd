import React from 'react'
import styles from '../css/adminCss.module.css'
export default function AcessAdminFront() {
    return (
        <div className={styles.stylebody}>

            <div className={styles.buttons}>

                <button class="btn btn-warning" >Log out </button>
            </div>


            <div className={styles.barrebutton}>

                <a class="link" href="/VoitureReserv">Espace Reservation</a>

                <a class="link" href="/ListContact">Espace Contact</a>

                <a class="link" href="/Voiture">Espace voiture</a>

            </div>


        </div>
    )
}
