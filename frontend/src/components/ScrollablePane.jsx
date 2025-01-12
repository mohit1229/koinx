import { useState } from 'react';

const ScrollablePane = () => {
    const [activePage, setActivePage] = useState('Overview');

    const pages = [
        'Overview',
        'Fundamentals',
        'News Insights',
        'Sentiments',
        'Team',
        'Technicals',
        'Tokenomics'
    ];

    return (
        <div className="overflow-x-auto py-4 scrollbar-none">
            <div className="flex gap-8 whitespace-nowrap text-base font-medium">
                {pages.map((page) => (
                    <div
                        key={page}
                        onClick={() => setActivePage(page)}
                        className="relative cursor-pointer group"
                    >
                        <div className={`${
                            activePage === page 
                            ? 'text-blue-600' 
                            : 'text-gray-600 hover:text-gray-900'
                        } transition-colors duration-200 font-semibold`}>
                            {page}
                        </div>
                        <div className={`absolute -bottom-2 left-0 w-full h-0.5 transition-colors duration-200 ${
                            activePage === page 
                            ? 'bg-blue-600' 
                            : 'bg-transparent group-hover:bg-gray-200'
                        }`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ScrollablePane;