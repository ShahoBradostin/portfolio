import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <aside>
              <div>
                <h1><Link className='logo' to="/">Portfolio</Link></h1>
                <ul>
                  <Link className='link' to="/ddd"><li>Home</li></Link>
                  <Link className='link' to="/tv-shows"><li>TV Shows</li></Link>
                  <Link className='link' to="/movies"><li>Movies</li></Link>
                  <Link className='link' to="/latest"><li>Latest</li></Link>
                  <Link className='link' to="/my-list"><li>My List</li></Link>
                </ul>
              </div>
            </aside>
        </header>
    );
}
