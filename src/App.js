import React from "react";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import { fetchData } from "./api";
// import StatePicker from "./components/StatePicker/StatePicker";
import styles from "./App.module.css";
import logo from "./images/logo.png";
import Footer from "./components/Footer";
class App extends React.Component {
    state = {
        data: {},
        country: "",
        city: "",
    };
    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData });
    }

    handleCountryChange = async country => {
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country: country });
        // console.log(fetchedData);
    };

    // handleStateChange = async city => {
    //     const fetchedData = await fetchStateData(city);
    //     this.setState({ data: fetchedData, city: city });
    //     // console.og(fetchedData);
    // };

    render() {
        const { data, country } = this.state;
        // this.handleStateChange();
        return (
            <>
                <div className className={styles.container}>
                    <img className={styles.image} src={logo} alt="Covid 19" />
                    <Cards data={data} />
                    <CountryPicker
                        handleCountryChange={this.handleCountryChange}
                        country={country}
                    />
                    {/* {country ? (
                        <StatePicker
                            handleStateChange={this.handleStateChange}
                            country={country}
                        />
                    ) : null} */}
                    <Chart data={data} country={country} />
                </div>
                <Footer />
            </>
        );
    }
}
export default App;
