import { useParams, Link } from "react-router-dom";

const ProductDetailPage = () => {
	const params = useParams();

	return (
		<>
			<h1>Product Detail!</h1>
			<p>{params.productId}</p>
			<p>
				{/* 'relative' prop is important because it goes back to the Products, otherwise it would go back to the home page since it is the parent. */}
				<Link to=".." relative="path">
					Back
				</Link>
			</p>
		</>
	);
};

export default ProductDetailPage;
