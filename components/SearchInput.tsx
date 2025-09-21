'use client'

import React, {useState} from 'react';
import {usePathname, useSearchParams,useRouter} from "next/navigation";
import Image from "next/image";

const SearchInput = () => {
    const pathName = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    const query = searchParams.get('topic') || ''

    const [searchQuery, setSearchQuery] = useState('');
    return (
        <div className="relative border border-black rounded-lg items-center flex gap-2
        px-2 py-1 h-fit">
            <Image src="/icons/search.svg" alt="search" width={15} height={15}/>
            <input
            placeholder="Search Companions..."
            className="outline-none"
            value={searchQuery}
            onChange={(e)=>setSearchQuery(e.target.value)}
            />
        </div>
    );
};

export default SearchInput;