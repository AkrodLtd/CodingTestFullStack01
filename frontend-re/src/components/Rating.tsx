import React from 'react';

const Rating: React.FC<{ rating: number }> = ({ rating }) => <div className='card-rating__component'>{rating}</div>;

export default Rating;
