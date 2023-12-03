import React, { useState, useEffect } from 'react';

const App = () => {
    const [start, setStart] = useState(1);
    const [end, setEnd] = useState(100);
    const [refreshing, setRefreshing] = useState(false);
    const [list, setList] = useState([]);

    const generateList = () => {
        const newList = [];
        for (let i = start; i <= end; i++) {
            let text = '';
            if (i % 3 === 0) text += 'Robot';
            if (i % 5 === 0) text += 'ICT';
            newList.push(text || i);
        }
        return newList;
    };

    const refreshList = () => {
        setRefreshing(true);
    };

    useEffect(() => {
        if (refreshing) {
            setTimeout(() => {
                setList(generateList());
                setRefreshing(false);
            }, 100);
        }
    }, [refreshing]);

    return (
        <div>
            <div className="app-header">
            <h1>RobotICT Excercise App</h1>
            <div className="input-container">
                <p>Select a range of numbers to generate a list:</p>
                <label>
                    Start
                </label>
                <input type="number" value={start} onChange={(e) => setStart(parseInt(e.target.value, 10))} />
                <label>
                    End:
                </label>
                <input type="number" value={end} onChange={(e) => setEnd(parseInt(e.target.value, 10))} />
            </div>
            <button onClick={refreshList} disabled={refreshing}>
                {list.length === 0 ? 'Generate List' : 'Re-generate List'}
            </button>
            </div>
            <ul className="list-container">
                {list.map((item, index) => (
                    <li key={index} className="list-item">{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
