import React  from 'react';


const TestModal = props => (
    <div style={{display: props.show ? 'block' : 'none'}}>
        Hello from test modal
        <button onClick={props.closeModal}>close modal</button>
    </div>
)

export default TestModal;
