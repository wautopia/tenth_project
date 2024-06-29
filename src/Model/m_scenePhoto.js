import scenePhoto from '../Media/m_scenePhoto.jpg';

function ScenePhoto() {
    return (
        <div className="ScenePhoto d-flex justify-content-center overflow-hidden">
            <img src={scenePhoto} alt="" width="102%"></img>
        </div>
    )
}
export default ScenePhoto;