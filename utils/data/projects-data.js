import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Decentralized Finance (DeFi) Platform',
        description: "Developed a Solana-based DeFi platform, integrating front-end DApp with blockchain back-end using React and Solana smart contracts. Increased user adoption by 40% within the first quarter.",
        tools: ['React', 'Rust', 'Redux', 'Smart Contract', 'Express', 'MongoDB', 'Nginx'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'NFT Marketplace DApp',
        description: 'Built and deployed a NFT marketplace using React, Solidity, and IPFS for decentralized file storage. Facilitated real-time NFT transactions and led to a 200% increase in active users.',
        tools: ['Next.js', 'Tailwind CSS', "TypeScript", "MySQL", "AWS S3", "Solidity"],
        role: 'Full Stack & Blockchain Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Cross-border Payment DApp',
        description: 'Created a cross-border payment DApp that connects Ethereum with traditional payment systems, reducing transaction costs by 60%. Integrated Web3.js to interact with smart contracts directly from the user interface.',
        tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Web3.js'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },