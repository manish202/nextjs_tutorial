import Link from "next/link";
const Navbar = () => {
    return(
        <ul>
            <li><Link href="/">home</Link></li>
            <li><Link href="/about">about</Link></li>
            <li><Link href="/contact">contact</Link></li>
            <li><Link href="/blogs">blogs</Link></li>
        </ul>
    )
}
export default Navbar;