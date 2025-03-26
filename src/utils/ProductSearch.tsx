interface ProductSearchProps {
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const ProductSearch: React.FC<ProductSearchProps> = ({ searchQuery, setSearchQuery }) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    const handleClearSearch = () => {
        setSearchQuery(''); // Șterge căutarea
    };

    return (
        <div>
            <input
                type="text"
                value={searchQuery}
                onChange={handleInputChange}
                placeholder="Search products..."
                className="searchInput"
            />
            {searchQuery && (
                <button className="clearButton" onClick={handleClearSearch}>
                    X
                </button>
            )}
        </div>
    );
};

export default ProductSearch;