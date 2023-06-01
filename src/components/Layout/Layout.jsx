const { Navigation } = require("components/Navigation/Navigation")
const { Suspense } = require("react")
const { Outlet } = require("react-router-dom")


const Layout = () => {
    return (
        <>
            <header>
                <Navigation/>
            </header>
            <main>
                <Suspense fallback={<h2>Lodaing...</h2>}>
                    <Outlet/>
                </Suspense>
            </main>
        </>
    )
}

export default Layout