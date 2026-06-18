import {
    FaBaseball,
    FaTableTennisPaddleBall,
    FaPersonSwimming,
    FaBasketball,
} from 'react-icons/fa6';
import { MdOutlineSportsGymnastics } from 'react-icons/md';

export const categoryData = [
    {
        id: 1,
        icon: <FaBaseball className='text-lg text-green-500' />,
        title: 'Football',
        label: '34 venues',
    },
    {
        id: 2,
        icon: <FaTableTennisPaddleBall className='text-lg text-green-500' />,
        title: 'Badminton',
        label: '28 venues',
    },
    {
        id: 3,
        icon: <FaPersonSwimming className='text-2xl text-green-500' />,
        title: 'Swimming',
        label: '15 venues',
    },
    {
        id: 4,
        icon: <FaTableTennisPaddleBall className='text-lg text-green-500' />,
        title: 'Tennis',
        label: '22 venues',
    },
    {
        id: 5,
        icon: <FaBasketball className='text-lg text-green-500' />,
        title: 'Basketball',
        label: '12 venues',
    },
    {
        id: 6,
        icon: <MdOutlineSportsGymnastics className='text-2xl text-green-500' />,
        title: 'Gym',
        label: '9 venues',
    },
];
