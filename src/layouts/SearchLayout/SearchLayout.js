import Header from "~/layouts/components/Header";
import Footer from "~/layouts/components/Footer";


function SearchLayout ({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="filter">
                    Bộ lọc
                </div>
                <div className="search-result">
                    {children}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default SearchLayout;