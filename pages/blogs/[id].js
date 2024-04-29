// import {useRouter} from "next/router";
import Navbar from "@/components/Navbar";
export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    const paths = data.slice(0,5).map(obj => {
        return{
            params:{
                id:obj.id.toString()
            }
        }
    });
    return{
        paths,
        fallback:false
    }
}
export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();

    return{
        props:{
            data
        }
    }
}
const SingleBlog = ({data}) => {
    // const {query} = useRouter();
    return(
        <>
            <Navbar />
            <h1>SingleBlog page</h1>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
        </>
    )
}
export default SingleBlog;