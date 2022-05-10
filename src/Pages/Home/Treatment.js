import React from 'react';
import treatment from '../../assets/images/treatment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const Treatment = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img src={treatment} className="max-w-sm shadow-2xl mx-auto" alt='' />
                <div className='lg:w-1/2 mx-auto'>
                    <h1 className="text-5xl font-bold">Exceptional dental care,on your terms</h1>
                    <p className="py-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi ipsum nostrum hic architecto quidem voluptates quia totam sequi perferendis eos iusto tempore ratione illum provident, dolore adipisci numquam, eum fugit iste. Iste voluptate eveniet nihil cum distinctio exercitationem praesentium neque.</p>
                    <PrimaryButton>Get treatment</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Treatment;