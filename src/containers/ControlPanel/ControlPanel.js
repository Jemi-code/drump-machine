import React from 'react';
import "./controlpanel.scss";
import { Form, Stack } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { updateVolume, updatePower } from '../../redux/drumSlice';

const ControlPanel = (props) => {
    const vol = useSelector((state) => state.drum.volume);
    const pow = useSelector((state) => state.drum.power);
    const dispatch = useDispatch();

    const display = document.getElementById("display");
    

    const volumeControl = (e) => {    
        if(pow === true){       
            dispatch(updateVolume(e.target.value));
            display.value = `Volume: ${vol}`;      
        } else {
            display.value = " ";
        }
    }

    return (
        <div className='control-panel m-4'>
        <Stack gap={2} className='inputStack d-flex align-items-center justify-content-center'>
            <Form.Group className='mb-2'>
                <Form.Label className='power fs-6'>Power
                    <Form.Check 
                    type="switch"
                    id="power"
                    checked = {pow}
                    onChange={(e) => dispatch(updatePower(e.target.checked))}
                    />
                    <span className="slider"></span>
                </Form.Label>
            </Form.Group>

            <Form.Group className='text-center mb-2'>
                <Form.Control className='display text-center fw-bold' id = "display" as="textarea"
                 rows={1} disabled />
            </Form.Group>

            <Form.Group>
                <Form.Range onChange={volumeControl} id = "volume" className='' />
            </Form.Group>

            <Form.Group>
                <Form.Label className='bank fs-6'>Bank
                    <Form.Check 
                        type="switch"
                        id="bank"
                        disabled
                        defaultChecked/>
                </Form.Label>
            </Form.Group>
        </Stack>
        </div>
    );
};

export default ControlPanel;