import React from 'react';

function ModalDialog({modalAction, showModal, setShowModal, deleteGame}){

  if (showModal){
    return(
      <div className='alert-overlay'>
        <div className='alert-dialog thick-yellow-border centered'>
            <h2 className='yellow-header'>Are you sure you want to {modalAction} this game?</h2>
            <div className='alert-dialog-buttons'>
                <button className='yellow-header thin-yellow-border' onClick={deleteGame}>Yes</button>
                <button className='yellow-header dark-blue-border thin-yellow-border' onClick={() => setShowModal(false)}>No</button>
            </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default ModalDialog;
