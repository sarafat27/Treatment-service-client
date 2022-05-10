import React from 'react';
import flouride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {

    const services = [
        {
            _id: 1,
            name: 'Flouride Treatment',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, dicta?',
            img: flouride
        },
        {
            _id: 2,
            name: 'Cavity filling',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, dicta?',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth whitening',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, dicta?',
            img: whitening
        }
    ]

    return (
        <div className='my-20'>
            <div className='text-center'>
                <h3 className='text-primary text-xl font-bold uppercase'>Our services</h3>
                <h2 className='text-3xl mb-6'>Services we provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;