import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../api";
const CountryPicker = ({ handleStateChange }) => {
    const [fetchedState, setFetchedState] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedState(await fetchState());
        };
        fetchAPI();
    }, [setFetchedState]);

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect
                defaultValue=""
                onChange={e => handleStateChange(e.target.value)}
            >
                <option value="">Global</option>
                {fetchedStates.map((state, i) => (
                    <option key={i} value={state}>
                        {state}
                    </option>
                ))}
            </NativeSelect>
        </FormControl>
    );
};

export default CountryPicker;
