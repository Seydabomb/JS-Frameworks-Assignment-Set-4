// our-domain.com/news
import Link from "next/link";
import { Fragment } from "react";

const NewsPage = () => {
	return (
		<Fragment>
			<h1>The News Page</h1>
			{/* List of links */}
			<ul>
				<li>
					<Link href="/news/nextjs-is-a-great-framework">
						NextJS Is A Great Framework
					</Link>
				</li>
				<li>Something Else</li>
			</ul>
		</Fragment>
	);
};

export default NewsPage;
