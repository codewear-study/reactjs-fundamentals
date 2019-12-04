import React from "react";
import './Detail.css';

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const { location } = this.props;
        if (location.state === undefined) {
            return null;
        }
        console.log(location);
        const { state } = location;
        const { title, genres, poster, year, summary } = state;
        return (
            <div className='detail'>
                <img src={poster} alt={title} title={title} />
                <h1>
                    {title}
                </h1>
                <h5>
                    {year}
                </h5>
                {genres.map((genre, index) => (
                    <li key={index}>
                        {genre}
                    </li>
                ))}
                <p>
                    {summary}
                </p>
            </div>
        );
    }
}
export default Detail;