import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, setDeleteDoctor }) => {
    const { name, img, speciality } = doctor;

    return (
        <tr>
            <th>{index + 1}</th>
            <td><div className="avatar">
                <div className="w-16 rounded">
                    <img src={img} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{speciality}</td>
            <td>
                <label onClick={() => setDeleteDoctor(doctor)} htmlFor="delete-modal" className="btn btn-xs btn-error">Delete</label>
            </td>
        </tr>
    );
};

export default DoctorRow;