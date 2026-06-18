import { FaMagnifyingGlass, FaRegCalendar, FaCheck } from 'react-icons/fa6';
import { TbActivityHeartbeat } from 'react-icons/tb';

export const workData = [
    {
        id: 1,
        title: 'Browse Venues',
        label: 'Explore sports facilities by type, location, and availability with smart filters.',
        icon: <FaMagnifyingGlass className='text-lg text-white' />,
    },
    {
        id: 2,
        title: 'Pick a Slot',
        label: 'Choose your preferred date and time slot from real-time availability.',
        icon: <FaRegCalendar className='text-lg text-white' />,
    },
    {
        id: 3,
        title: 'Confirm Booking',
        label: 'Complete your booking securely — receive instant confirmation.',
        icon: <FaCheck className='text-lg text-white' />,
    },
    {
        id: 4,
        title: 'Play & Enjoy',
        label: 'Show up and play. Manage, reschedule or cancel from your dashboard.',
        icon: <TbActivityHeartbeat className='text-2xl text-white' />,
    },
];
