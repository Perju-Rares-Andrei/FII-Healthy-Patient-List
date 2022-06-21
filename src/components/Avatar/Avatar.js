import React from 'react';
import './Avatar.css';
import DefaultImage from './44.jpg';
const Avatar = ({ className, src, alt, onClick }) => {
    const handleOnError = (e) => {
        e.target.src = "./44.jpg";
    }
    return (
        <div>
            {src ? (
                <img onClick={onClick}
                    className="profile-picture"
                    src={src}
                    alt={alt}
                    onError={handleOnError} />) :
                (<img onClick={onClick}
                    className="profile-picture"
                    src={DefaultImage}
                    alt={alt} />)}

        </div>
    );
}

export default Avatar;