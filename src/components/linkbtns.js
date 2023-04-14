import React from "react";
import { Link } from 'react-router-dom';

export default function LinkBtn(){
    return (
        <div>

            <div className="major-buttons">
                <Link to="/A">
                    <button className="major-btn">A Scale</button>
                </Link>
                <Link to="/B">
                    <button className="major-btn">B Scale</button>
                </Link>
                <Link to="/C">
                    <button className="major-btn">C Scale</button>
                </Link>
                <Link to="/D">
                    <button className="major-btn">D Scale</button>
                </Link>
                <Link to="/E">
                    <button className="major-btn">E Scale</button>
                </Link>
                <Link to="/F">
                    <button className="major-btn">F Scale</button>
                </Link>
                <Link to="/G">
                    <button className="major-btn">G Scale</button>
                </Link>            
                
            </div>
            <div className="minor-chords">
                <Link to="/Cm">
                    <button className="minor-btn">Cm Scale</button>
                </Link>
                <Link to="/Dm">
                    <button className="minor-btn">Dm Scale</button>
                </Link>
                <Link to="/Em">
                    <button className="minor-btn">Em Scale</button>
                </Link>
                <Link to="/Fm">
                    <button className="minor-btn">Fm Scale</button>
                </Link>
                <Link to="/Gm">
                    <button className="minor-btn">Gm Scale</button>
                </Link>
            </div>
        </div>
    )
}