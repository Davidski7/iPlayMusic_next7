// components/categoriesitems.jsx
import Header from './header';
import '../style/categories.scss';

export default function CategoriesItems({ categories }) {
    return (
        <div className="categories-container">
            <Header />
            <h2 className="page-title">Categories</h2>
            {categories.map((category) => (
                <div key={category.id} className="category-block">
                    <div
                        className="category-header"
                        style={{
                            backgroundImage: `url(${category.icons[0]?.url})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    >
                        <span className="category-name">{category.name}</span>
                        <span className="dots">•••</span>
                    </div>
                </div>
            ))}
        </div>
    );
}
