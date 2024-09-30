import { useRouter } from "next/router";

// our-domain.com/news/something-important

const DetailPage = () => {
	const router = useRouter();

	// outputs the page name from the url
	const newsId = router.query.newsId;

	return <h1>The Detail Page</h1>;
};

export default DetailPage;
