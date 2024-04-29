import Navbar from "@/components/Navbar";
// import Image from "next/image";
import Head from "next/head";
const About = () => {
    return(
        <>
            <Head>
                <title>about page</title>
            </Head>
            <style jsx>
                {`
                    p{
                        color:orange;
                    }
                    .img1{
                        width:150px;
                    }
                `}
            </style>
            <Navbar />
            <h1>About page</h1>
            <p>Lorem, ipsum dolor.</p>
            <img className="img1" src="/baby.jpg" alt="hello"/>
            {/* <Image src="/baby.jpg" width="150" height="100" alt="hello manish" priority /> */}
            <img className="img1" src="https://cdn.pixabay.com/photo/2024/03/14/08/52/pug-8632718_1280.jpg" alt="hello"/>
        </>
    )
}
export default About;