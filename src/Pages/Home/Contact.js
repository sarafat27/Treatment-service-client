import React from 'react';
import appointment from '../../assets/images/appointment.png'

const Contact = () => {
    return (
        <section className='py-16 mb-20'
            style={{ background: `url(${appointment})` }}>
            <h2 className="text-xl text-secondary text-center font-bold mb-2">Contact us</h2>
            <h3 className="text-3xl text-white text-center font-thin mb-5">Stay connected with us</h3>
            <input type="email" placeholder="Email Address" className="input input-bordered input-sm w-full max-w-xs mb-5 block mx-auto" />
            <input type="text" placeholder="Subject" className="input input-bordered input-md w-full max-w-xs mb-5 block mx-auto" />
            <textarea className="textarea textarea-bordered mb-5 block mx-auto w-80 h-40" placeholder="Your message"></textarea>
            <button className="btn btn-primary uppercase font-bold bg-gradient-to-r from-secondary to-primary block mx-auto">Submit</button>
        </section>
    );
};

export default Contact;