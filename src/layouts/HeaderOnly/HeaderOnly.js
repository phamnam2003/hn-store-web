import Header from "~/layouts/DefaultLayout/Header";


function HeaderOnly ({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                {children}
            </div>
        </div>
    )
}

export default HeaderOnly;