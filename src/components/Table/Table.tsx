import styles from './Table.module.css';
import { data, routes } from "../../core/mocks";

export const Table = () => {
    return (
        <table className={styles.table}>
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
    )
}
