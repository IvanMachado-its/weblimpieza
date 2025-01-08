module.exports = {
    title: 'Professional Cleaning Services',
    header: {
        mainHeading: 'Welcome to Our Cleaning Services',
        subHeading: 'Your satisfaction, our priority!',
    },
    about: {
        heading: 'About Us',
        description: 'We provide top-notch cleaning services for residential and commercial properties.',
    },
    services: {
        heading: 'Our Services',
        list: [
            {
                name: 'Residential Cleaning',
                description: 'Comprehensive cleaning for homes.',
                imageUrl: '/images/service1.jpg',
            },
            {
                name: 'Office Cleaning',
                description: 'Professional cleaning for businesses.',
                imageUrl: '/images/service2.jpg',
            },
            {
                name: 'Deep Cleaning',
                description: 'Intensive cleaning for deep sanitization.',
                imageUrl: '/images/service3.jpg',
            },
        ],
    },
    contact: {
        heading: 'Contact Us',
        email: process.env.MAIL_USER, // El email de destino que tienes en el .env
    },
};
