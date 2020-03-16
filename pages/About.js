import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';

const About = props => {
    const { general } = useSelector(state => state);

    const [loading, setLoading] = useState(true);
    const [res, setRes] = useState();

    useEffect(() => {
        const fetch = async() => {
            try{
                const response = await axios({
                    url: `${general.baseURL}/`,
                    method: 'GET'
                })
                setRes(response.data);
                setLoading(false);
            }
            catch(err){
                throw err;
            }
        }

        fetch();

        return () => {
        };
    }, [loading])

    return (
        <div>
            <h2>po</h2>
        </div>
    )
}

export default About
