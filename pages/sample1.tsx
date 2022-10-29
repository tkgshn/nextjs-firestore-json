import axios from "axios";
import { useEffect } from "react";

function fetchFact() {
    //Just a simple get request which gets back a fact in a JSON object
    return axios
        .get('https://uselessfacts.jsph.pl//random.json?language=en')
        .then((res) => {
            return res.data;
        });
}



export default function SSRExample({ name, facts }) {
    console.log('Hi from the client!');
    return (
        <div className="flex h-screen w-screen flex-col items-center justify-center bg-white text-3xl text-white">
            <p className="mb-10 rounded bg-neutral-800 p-10">
                Heres some fun facts from {name}
            </p>
            <ul className="flex max-w-2xl flex-col gap-5 rounded bg-neutral-800 p-10 shadow">
                {facts.map(({ id, text }) => (
                    <li key={id}>{text}</li>
                ))}
            </ul>
        </div>
    );
}

