import {useEffect, useState} from "react";
import {removeJokeInStorage} from "../util/jokesUtil";
import List from "../components/List"
import Navbar from "../components/Navbar";
import CardAlert from "../components/CardAlert";
import {Joke} from "../types";

const SavedJokes = () => {
    const [jokes, setJokes] = useState<Joke[]>([]);
    const groupedData: {[key: string]: Joke[]} = {};
    const handleRemove = (jokeToRemove: Joke) => {
        removeJokeInStorage(jokeToRemove);
        setJokes(prev => prev.filter(joke => joke.value !== jokeToRemove.value));
    }

    jokes.forEach(joke => {
        const category = joke.category ?? "all";
        if (!groupedData[category]) {
            groupedData[category] = [];
        }
        (groupedData[category] as Joke[]).push(joke);
    });

    for (const category in groupedData) {
        groupedData[category].sort((a, b) => {
            if (!a.date || !b.date) return 0;
            return new Date(a.date).getTime() - new Date(b.date).getTime();
        });
    }

    useEffect(() => {
        const data = localStorage.getItem('savedJokes') ?? "";
        try {
            const savedJokes = JSON.parse(data) || [];
            setJokes(savedJokes);
        } catch (error) {
            console.error('error parsing saved jokes:', error);
            setJokes([]);
        }
    }, []);



    if (jokes.length === 0) {
        return (
            <>
                <Navbar />
                <main className="mx-auto px-2 sm:px-6 lg:px-8 max-w-7xl">
                    <CardAlert text="No saved jokes? Chuck Norris once made a joke so funny, it saved itself. Looks like you're not quite there yet." />
                </main>
            </>
        )
    }

    return (
        <>
            <Navbar />
            <main className="mx-auto px-2 sm:px-6 lg:px-8 max-w-7xl">
                {Object.keys(groupedData).map((category) => (
                    <div className="mt-4" key={category}>
                        <h2 className="text-lg font-semibold">{category === "all" ? "unspecified" : category}</h2>
                        <List data={groupedData[category]} buttonText="REMOVE" buttonCallback={handleRemove} />
                    </div>
                ))}
            </main>
        </>
    )
}

export default SavedJokes;