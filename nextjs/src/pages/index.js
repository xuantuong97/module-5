import axios from 'axios';

const apiUrl = 'https://api.coronavirus.data.gov.uk/v1/data';

const Home = ({ data }) => {
    return (
        <div>
            <h1>COVID-19 Data in the United Kingdom</h1>
            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                <tr>
                    <th style={{ border: '1px solid black', padding: '8px' }}>Date</th>
                    <th style={{ border: '1px solid black', padding: '8px' }}>Area Name</th>
                    <th style={{ border: '1px solid black', padding: '8px' }}>Area Code</th>
                    <th style={{ border: '1px solid black', padding: '8px' }}>Confirmed Rate</th>
                    <th style={{ border: '1px solid black', padding: '8px' }}>Latest By</th>
                    <th style={{ border: '1px solid black', padding: '8px' }}>Confirmed</th>
                    <th style={{ border: '1px solid black', padding: '8px' }}>New Deaths</th>
                    <th style={{ border: '1px solid black', padding: '8px' }}>Total Deaths</th>
                    <th style={{ border: '1px solid black', padding: '8px' }}>Death Rate</th>
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{item.date}</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{item.areaName}</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{item.areaCode}</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{item.confirmedRate ? item.confirmedRate.toLocaleString() : 'N/A'}</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{item.latestBy ? item.latestBy.toLocaleString() : 'N/A'}</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{item.confirmed ? item.confirmed.toLocaleString() : 'N/A'}</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{item.deathNew ? item.deathNew.toLocaleString() : 'N/A'}</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{item.death ? item.death.toLocaleString() : 'N/A'}</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{item.deathRate ? item.deathRate.toLocaleString() : 'N/A'}</td>
                    </tr>
                ))}

                </tbody>
            </table>
        </div>
    );
};

export const getStaticProps = async () => {
    try {
        const response = await axios.get(apiUrl);
        const data = response.data.data;
        return { props: { data } };
    } catch (error) {
        console.error('Error fetching data:', error);
        return { props: { data: [] } };
    }
};

export default Home;
