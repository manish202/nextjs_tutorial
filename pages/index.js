import Navbar from "@/components/Navbar";
import styles from "@/styles/Home.module.css";
export const getServerSideProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return{
      props:{
          data
      }
  }
}
const Index = ({data}) => {
  console.log(data);
  return(
    <>
      <Navbar />
      <h1 className={styles.title}>Index page</h1>
    </>
  )
}
export default Index;