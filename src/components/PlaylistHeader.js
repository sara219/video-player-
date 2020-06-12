import React from 'react'
import StyledPlaylistHeader from './styles/StyledPlaylistHeader'
import StyledJourney from './styles/StyledJourney'

const PlaylistHeader = ({ active, total }) => {
    return (
        <StyledJourney>
            <p>{active.title}</p>
            <StyledJourney>
                {active.nun} / {total}
            </StyledJourney>
        </StyledJourney>
    )
}

export default PlaylistHeader
