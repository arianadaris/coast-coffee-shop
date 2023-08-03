import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

const MenuCard = ({ name, descr, price, img, id }) => {
    const navigate = useNavigate();

    return(
        <div className="w-full h-full ">
            <div className="bg-white/80 rounded-xl w-full h-fit flex flex-col justify-center items-center space-y-2 md:space-y-4 p-8 mx-auto cursor-pointer group relative border-white border-[1px] hover:border-brown/60">
                <img className="h-[2rem] w-[2rem] md:h-[10rem] md:w-[10rem] md:group-hover:h-[8rem] group-hover:w-[8rem] mt-0 group-hover:mt-6" src={require(`../assets/images/${img}`)} alt={name} />
                <h1 className="text-base md:text-2xl text-center absolute left-1/2 transform -translate-x-1/2 bottom-8 group-hover:bottom-[80%]">{name}</h1>
                {/* <p className="w-3/4 text-center text-sm opacity-0 group-hover:opacity-100 mt-2 absolute bottom-5">{descr}</p> */}
                <div className="opacity-0 group-hover:opacity-100 flex space-x-1 items-center justify-center" onClick={() => navigate(`/product/${name}/${id}`)}>
                    <p>View More</p>
                    <Icon icon="solar:arrow-right-outline" />
                </div>
            </div>
        </div>
    );
};

export default MenuCard;
