import React from 'react'
import ArtistList from '../containers/ArtistList'
import CdList from '../containers/CdList'

import styles from '../styles/main.less'

const SearchResult = () => (
    <div className={styles.split}>
        <div className={[styles.split, styles.left]}>
            <div className={styles.centered}>
                <ArtistList />
            </div>
        </div>
        <div className={[styles.split, styles.right]}>
            <div className={styles.centered}>
                <CdList />
            </div>
        </div>
    </div>
)


export default SearchResult