import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';

const Testimonials = () => {

    const reviews = [
        {
            _id: 1,
            name: 'John Hardy',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nemo itaque ullam deserunt, illum eius consequuntur quasi minima voluptatem error debitis quae ut quos. Vel commodi ipsa facere nostrum dignissimos!',
            img: people1,
            location: 'New york'
        },
        {
            _id: 2,
            name: 'Kety Rose',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nemo itaque ullam deserunt, illum eius consequuntur quasi minima voluptatem error debitis quae ut quos. Vel commodi ipsa facere nostrum dignissimos!',
            img: people2,
            location: 'Washington'
        },
        {
            _id: 3,
            name: 'Hilary Klinton',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nemo itaque ullam deserunt, illum eius consequuntur quasi minima voluptatem error debitis quae ut quos. Vel commodi ipsa facere nostrum dignissimos!',
            img: people3,
            location: 'Chicago'
        }
    ]

    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary font-bold">Testimonials</h4>
                    <h2 className="text-3xl">What our patients says</h2>
                </div>
                <div>
                    <img src={quote} className="w-24 lg:w-48" alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;