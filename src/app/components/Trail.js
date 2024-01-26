"use client"
import React, { useEffect } from 'react';
export default function Trail () {
    useEffect(() => {
        const handleMouseMove = event => {
            const trail = document.createElement('div');
            trail.className = 'absolute h-[5px] w-[5px] rounded-full bg-primary pointer-events-none transition-all animate-fade-out z-10';
            document.body.appendChild(trail);

            trail.style.left = `${event.pageX}px`;
            trail.style.top = `${event.pageY}px`;

            setTimeout(() => {
                trail.remove();
            }, 500); // Adjust the time to control how long the trail stays
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
    return null;
};

