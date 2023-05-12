import { Button} from 'react-bootstrap';
import "./buttonpad.scss";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAudio } from '../../redux/drumSlice';

//import $ from 'jquery';


const ButtonPad = (props) => {
    const vol = useSelector((state) => state.drum.volume);
    const dispatch = useDispatch();

    const pow = useSelector((state) => state.drum.power);

    useEffect(() => {
        if(pow === true){
            document.addEventListener("keydown", handleKeyPress);
            return () => {
                document.removeEventListener("keydown", handleKeyPress);
            }
        } else {
            document.getElementById("display").value = " ";
        }  
    });

    const handleKeyPress = (e) => {
        if(e.keyCode === props.audio.keyCode){
            console.log(props.power);
                playAudio();
        }
    }

 
    const playAudio = () => {
        if(pow === true) {
            const audioElem = document.getElementById(props.audio.key);
            audioElem.volume = vol * 0.01;
            audioElem.play();
            dispatch(setAudio(props.audio));
        }
    }
    return (
        <Button className='drum-pad my-3' onClick={playAudio}>
            {props.audio.key}
            <audio className='audio' id={props.audio.key} src = {props.audio.source} />
        </Button>
    );
};

export default ButtonPad;