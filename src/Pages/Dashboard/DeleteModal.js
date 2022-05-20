import React from 'react';
import { toast } from 'react-toastify';

const DeleteModal = ({ deleteDoctor, refetch, setDeleteDoctor }) => {
    const { name, email } = deleteDoctor;

    const handleDelete = () => {
        fetch(`http://localhost:5000/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`doctor ${name} is deleted successfully`)
                    setDeleteDoctor(null)
                    refetch()
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-700">Are you sure you want to delete {name}?</h3>
                    <div className="modal-action">
                        <button onClick={handleDelete} className='btn btn-xs btn-error'>Delete</button>
                        <label htmlFor="delete-modal" className="btn btn-xs btn-success">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;