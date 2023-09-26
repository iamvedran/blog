import classes from './all-posts.module.css';
import PostGrid from './post-grid';

const AllPosts = (props) => {
  return (
    <section className={classes.posts}>
        <h1>All posts</h1>
        <PostGrid posts={props.posts}/>
    </section>
  )
}

export default AllPosts;