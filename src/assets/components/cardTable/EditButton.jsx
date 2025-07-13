import { useState } from "react"

const EditButton = ({}) => {
    const [edit, setEdit] = useState(false);
    const [english, setEnglish] = useState('');
    const [transcription, setTranscription] = useState('');
    const [russian, setRussian] = useState('');

const handleCancel = () => {
    setEdit(false);
    setEnglish(english);
    setTranscription(transcription)
    setRussian(russian)
}

const handleSave = () => {
    english;
    transcription;
    russian;
    setEdit(false)
}
    return (
        <div>
            <button onClick={EditButton} >Edit</button>
        </div>
    )
}

export default EditButton