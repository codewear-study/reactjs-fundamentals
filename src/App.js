import React from 'react';
import PropType from 'prop-types';

function Coffee({ fav }) {
    return <h1>I love {fav} coffee</h1>;
}

Coffee.propTypes = {
    fav: PropType.string.isRequired
}

const coffeeILove = [
    {
        id: 0,
        name: "MAX"
    },
    {
        id: 1,
        name: "Pandorothy"
    },
]

function App() {
    return (
        <div>
            {coffeeILove.map(coffee => <Coffee key={coffee.id} fav={coffee.name} />)}
        </div>
    );
}

export default App;
