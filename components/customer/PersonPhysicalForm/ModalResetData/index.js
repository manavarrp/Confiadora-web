import React from 'react'
import Modal from '../../../common/Modal'

const ResetDataForm = ({ open, onClose, onSubmit }) => {
  return (
    <Modal open={Boolean(open)} setOpen={onClose}>
      <div>
        <div className='mb-10'>
          <p>¿ Quieres continuar ? Se perderan los cambios realizados.</p>
        </div>
        <div className='flex justify-around'>
          <button
            type='submit'
            onClick={onClose}
            className=' border bg-darkBlue w-3/4 h-12 rounded-lg text-white text-xl shadow-sm text-center'
          >
            Cancelar
          </button>
          <button
            type='submit'
            onClick={onSubmit}
            className=' border bg-darkBlue w-3/4 h-12 rounded-lg text-white text-xl shadow-sm text-center'
          >
            Seguir
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default ResetDataForm
