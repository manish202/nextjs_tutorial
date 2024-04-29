import Navbar from "@/components/Navbar";
import {useRouter} from "next/router";
const Error404 = () => {
    const router = useRouter();
    return(
        <>
          <Navbar />
          <h1>Oops! Error404 page not found.</h1>
          <button type="button" onClick={() => router.push("/")}>Go Home</button>
        </>
    )
}
export default Error404;