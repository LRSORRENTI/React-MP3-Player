import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faBrightnessHigh } from '@fortawesome/free-solid-svg-icons';

export default function DarkModeToggle({ darkMode, onToggle }) {
    const icon = darkMode ? faMoon : faBrightnessHigh;

    return (
        <button onClick={onToggle}>
            <FontAwesomeIcon icon={icon} />
        </button>
    );
}