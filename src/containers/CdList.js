import React from 'react'
import Cd from '../components/Cd'
import {connect} from "react-redux";

const CdList = ({ cds = []}) => (
    <ul>
        {cds.map(cd =>
            <Cd
                key={cd.cdId}
                title={cd.title}
            />
        )}
    </ul>
)

const mapStateToProps = state => ({
    cds: state.cds
})

const mapDispatchToProps = dispatch => ({
    //showArtistsCds: id => dispatch(showArtistsCds(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CdList)