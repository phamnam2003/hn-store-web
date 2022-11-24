import Footer from '~/layouts/components/Footer';

function FooterOnly ({ children }) {
    return (
        <div>
            <div className="container">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default FooterOnly;