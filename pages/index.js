import Head from "next/head";
import FeaturedPost from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/post-util";

const HomePage = (props) => {
    return (
        <>
            <Head>
                <title>Vedran's Blog</title>
                <meta name="description" content="A blog about programming" />
                <meta name="keywords" content="programming, web development" />
                <meta name="author" content="Vedran Rudan" />
                <meta
                    name='description'
                    content='A blog about programming and web development.'
                />
            </Head>
            <Hero />
            <FeaturedPost posts={props.posts} />
        </>
    )

}

export function getStaticProps() {
    const featuredPosts = getFeaturedPosts();

    return {
        props: {
            posts: featuredPosts
        }
    };
};

export default HomePage;