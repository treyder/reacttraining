import React from 'react'
import Cd from '../components/Cd'
import {connect} from "react-redux";

import styles from '../styles/main.less'

const CdList = ({ cds = []}) => (
    <div className={[styles.split, styles.right]}>
        <div className={styles.centered}>
            <ul>
                {cds.map(cd =>
                    <Cd
                        key={cd.collectionId}
                        title={cd.collectionCensoredName}
                    />
                )}
            </ul>
        </div>
    </div>
)

const mapStateToProps = state => ({
    cds: state.cds
})

const mapDispatchToProps = dispatch => ({
    //showArtistsCds: id => dispatch(showArtistsCds(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CdList)