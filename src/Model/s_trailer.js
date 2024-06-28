import trailer01 from '../Media/s_trailer01.jpg';
import trailer02 from '../Media/s_trailer02.jpg';
import playicon from '../Media/s_play_icon.png';
import { useState } from 'react';
import Modal from 'react-modal';

function SideTrailer() {
    
    return (
        <div className="SideTrailer">          
            <Trailer   
                img={trailer01}
                video="https://www.youtube.com/embed/NSIzsFOfd8M?si=YesR8Yz9_peTpcL6" 
            />
            <Trailer
                img={trailer02}
                video="https://www.youtube.com/embed/OaO8xKEL-Jc?si=fknEbk4zQkiYKNhl"
            />
        </div>
    )
}

function Trailer(props) {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="Trailer mb-4 position-relative"  width="316px" height="178px">
            <button onClick={() => setShowModal(true) } style={{ all: 'unset' }}>
                <div className="position-absolute z-1 d-flex top-0 start-0 end-0 bottom-0 justify-content-center align-items-center">
                    <img src={playicon} className=" opacity-75" width="80px" height="80px" alt=""></img>
                </div>
                <img src={props.img} alt="" width="316px" height="178px" className="position-relative"></img>
            </button>    
            
            <Modal
                isOpen={showModal}
                onRequestClose={() => setShowModal(false)}
                style={{
                    overlay:{
                        zIndex: '999',
                    },
                    content: {
                        top: '0px',
                        left: '0px',
                        right: '0px',
                        bottom: '0px',
                        border: 'none',
                        overflow: 'none',
                        borderRadius: 'none',
                        background: 'none',
                        padding: '0px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    },
                }}
            >
                <button
                    onClick={() => setShowModal(false)}
                    style={{ all: 'unset', color: 'gray', width: '1280px', textAlign: 'right' }}
                >×</button>
                <iframe
                    width="1280px"
                    height="720px"
                    src={props.video}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                ></iframe>
            </Modal>
        </div>
    )
}

export default SideTrailer;