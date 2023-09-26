import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const postDirectory = path.join(process.cwd(), 'posts');

export const getPostData = (postIdentifier) => {
    const postSlug = postIdentifier.replace(/\.md$/, ''); // removes the .md extension
    const filePath = path.join(postDirectory, `${postSlug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    const { data, content } = matter(fileContent);

    const postData = {
        slug: postSlug,
        ...data,
        content
    };
    console.log(postData);
    return postData;
}

export const getPostsFiles = () => {
    return fs.readdirSync(postDirectory);
}

export const getAllPosts = () => {
    const postFiles = getPostsFiles();

    const allPosts = postFiles.map((filename) => {
        return getPostData(filename);
    });

    const sortedPosts = allPosts.sort((postA, postB) => {
        return postA.date > postB.date ? -1 : 1;
    } );

    return sortedPosts;
}

export const getFeaturedPosts = () => {
    const allPosts = getAllPosts();

    return allPosts.filter((post) => post.isFeatured);
};