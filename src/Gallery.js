import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Gallery = ({ data }) => {
    return (
        <div className="row">
            {data.map((image) => (
                <div key={image.id} className="col-md-3 mb-4">
                    <img
                        src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
                        height="200"
                        width="150"
                        alt={image.title}
                        className="img-fluid"
                    />
                </div>
            ))}
        </div>
    );
};

export default Gallery;
