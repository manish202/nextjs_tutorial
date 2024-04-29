import Navbar from "@/components/Navbar";
import Link from "next/link";
export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    return{
        props:{
            data
        }
    }
}
const Blogs = ({data}) => {
    return(
        <>
            <Navbar />
            <h1>Blogs page</h1>
            <ol>
                {data.slice(0,5).map(obj => <li key={obj.id}><Link href={`/blogs/${obj.id}`}>{obj.title}</Link></li>)}
            </ol>
        </>
    )
}
export default Blogs;