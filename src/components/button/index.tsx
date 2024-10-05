'use client';


// import { ButtonProps } from "@/interfaces";
// import { useState, useCallback, memo } from "react";
import { useRouter } from 'next/navigation';


export default function HomeButton() {
    const router = useRouter()
    return (
         <div className="w-100px bg-gray-300 rounded-md flex flex-col items-center at-8 p-0 m-2 ">
            <button type="button" onClick={() => router.push('/home')}>home page</button>
         </div>
    );
 }