import { Link } from 'react-router-dom';
function Navigation() {
    return (
        <>
            <div className="flex justify-between font-bold text-2xl bg-blue-900 text-white m-0 h-15 p-3 space-x-6">
                <div >
                    <input className='bg-white text-black rounded-md p-1' type="image" src="/src/assets/logo.png" alt="Logo"></input>
                </div>
                <div className='hidden sm:flex gap-6'>
                    <Link className='' to="/">Home</Link>
                    <Link className='' to="/About">About</Link>
                    <Link className='' to="/Contact">Contact </Link>
                    <Link className='' to="/Profile">Profile</Link>
                </div>
                <div className='justify-between'>
                    <input className='bg-white text-black rounded-md p-1' type="text" placeholder="Search..."></input>
                </div>

            </div>


        </>
    )
}

export default Navigation
