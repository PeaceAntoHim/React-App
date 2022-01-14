import { Link, Outlet } from 'react-router-dom';

export default function About() {
    return  (
        <>
            <h1>Halaman About</h1>
            <p>Halo link ini adalah link menuju about team single page with react</p>
            <ul>
                <li><Link to="/about/team">Team</Link></li>
            </ul>
            <Outlet  />
        </>
    );
         
}
