import React from 'react'
import ReactPlayer from 'react-player'
import StyledVideoWrapper from './styles/StyledVideoWrapper'
import StyleVideo from './styles/StyledVideo'

const Video = ({ active, autoplay, endCallback, progressCallback}) => {
    return (
        <StyleVideo>
            <StyledVideoWrapper>
                <ReactPlayer
                    width='100%'
                    height='100%'
                    style={{ position: 'absolute', top: '0'}}
                    playing={autoplay}
                    controls={true}
                    url={active.video}
                    onEnded={endCallback}
                    onProgress={progressCallback}
                />
            </StyledVideoWrapper>
        </StyleVideo>
    )
}

export default Video
