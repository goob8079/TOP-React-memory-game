import { useEffect, useState } from "react";

export function Card({ img, name, isClicked, onClick}) {
    return (
        <div className="card" key={name} onClick={onClick}>
            <img src={img} alt={name} />
            <br />
            <span><strong>{name}</strong></span>
        </div>
    )
}