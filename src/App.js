import React from 'react';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import { fetchData } from './api';
import styles from './App.module.css'

class App extends React.Component {
    state = {
        data: {},
    }
    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData })
    }
    render() {
        const { data } = this.state;
        return (
            <div className className={styles.container}>
                <Cards data={data} />
                <Chart />
                <CountryPicker />
            </div>
        );
    }
}

export default App;