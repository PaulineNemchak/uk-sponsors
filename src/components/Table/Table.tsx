import styles from './Table.module.css';

const routes: string[] = [
    'Skilled worker',
    'Creative Worker',
    'Global Business Mobility',
    'Tier 2 Ministers of Religion'
];

type Employer = {
    id: number;
    name: string;
    city: string;
    county: string;
    rating: string;
    route: string;
}

type Data = {
    content: Employer[];
    pageNum: number;
    pageSize: number;
    totalElementsCount: number;
    totalPagesCount: number;
    lastPage: boolean;
}

const data: Data = {
    "content" : [ {
        "id" : 68845,
        "name" : "001 Times Ltd",
        "city" : "London",
        "county" : "Hampshire",
        "rating" : "Temporary Worker (A rating)",
        "route" : "Creative Worker"
    }, {
        "id" : 34445,
        "name" : "001 Times Ltd",
        "city" : "London",
        "county" : "",
        "rating" : "Worker (A rating)",
        "route" : "Skilled Worker"
    }, {
        "id" : 40502,
        "name" : "003 Ltd",
        "city" : "Hounslow",
        "county" : "",
        "rating" : "Worker (A rating)",
        "route" : "Skilled Worker"
    } ],
    "pageNum" : 2,
    "pageSize" : 3,
    "totalElementsCount" : 69137,
    "totalPagesCount" : 23046,
    "lastPage" : false
}

export const Table = () => {
    return <table className={styles.table}>
        <thead>
            <tr>
                <th>Organisation Name</th>
                <th>Town/City</th>
                <th>County</th>
                <th>Route</th>
            </tr>
            <tr>
                <th>
                    <input className={styles.input} type='text' placeholder='Search by Organisation Name'/>
                </th>
                <th>
                    <input className={styles.input} type='text' placeholder='Search by Town/City'/>
                </th>
                <th>
                    <input className={styles.input} type='text' placeholder='Search by County'/>
                </th>
                <th>
                    <label htmlFor="routes">Choose a route: </label>
                    <select id="routes">
                        <option value="all">All</option>
                        {
                            routes.map(route => {
                                const key = route.split(' ').join('-');
                                return <option key={key} value={key}>{route}</option>;
                            })
                        }
                    </select>
                </th>
            </tr>
        </thead>
        <tbody>
            {
                data.content.map(employer => {
                    return (
                       <tr key={employer.id}>
                           <td>{employer.name}</td>
                           <td>{employer.city}</td>
                           <td>{employer.county}</td>
                           <td>{employer.route}</td>
                       </tr>
                    )
                })
            }
        </tbody>
    </table>
}
