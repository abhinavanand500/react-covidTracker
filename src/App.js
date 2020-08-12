import React from 'react';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import { fetchData } from './api';
import styles from './App.module.css'
import logo from './images/logo.png'
import Footer from './components/Footer';
class App extends React.Component {
    state = {
        data: {},
        country: '',
    }
    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData })
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country: country })
        console.log(fetchedData);
    }

    render() {
        const { data, country } = this.state;
        return (
            <>
                <div className className={styles.container}>
                    <img className={styles.image} src={logo} alt='Covid 19' />
                    <Cards data={data} />
                    <CountryPicker handleCountryChange={this.handleCountryChange} />
                    <Chart data={data} country={country} />
                </div>
                <Footer />
            </>
        );
    }
}

export default App;