import { Link } from "react-router-dom"
import MainNavbar from "./MainNavbar"

function MainPage() {
    return (
        <div>
            <MainNavbar/>
            <div className="flex items-center justify-center h-screen">
                <div className="flex flex-col space-y-4">
                    <Link to='/login'
                        className="px-4 py-2 text-white bg-orange-500 rounded hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                    >
                        Admin
                    </Link>
                    <Link to='/staff-login'
                        className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                    >
                        Staffs
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MainPage
