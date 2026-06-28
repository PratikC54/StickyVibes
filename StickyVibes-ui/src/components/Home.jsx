import PageHeading from './PageHeading';
import ProductListings from './ProductListings';
function Home() {
    return (
        <div className="home-container">
            <PageHeading />
            <ProductListings />
        </div>
    );
}

export default Home;