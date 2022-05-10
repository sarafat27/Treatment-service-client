import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section
            style={{ background: `url(${appointment})` }}
            className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-120px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 p-10'>
                <h2 className='text-xl text-primary font-bold my-4'>Appointment</h2>
                <h3 className='text-3xl text-white mb-4'>Make an appointment today</h3>
                <p className='text-white mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore recusandae voluptate quod illo, quasi, praesentium libero, deserunt itaque quibusdam sed optio sit! Ipsam tenetur repellat maiores, facilis sed nihil quod distinctio animi? Nihil numquam voluptatem obcaecati sunt tempora iste, voluptates sed perferendis quaerat rem libero odit dolorem, nisi, quas suscipit.
                </p>
                <PrimaryButton>Make appointment</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;