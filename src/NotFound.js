import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div class="container">
            <h1 class="text-center">404</h1>
            <p class="text-center">Mau cari apa bro?? Gak ada yg mau di cari disini</p>
            <a class="btn btn-primary"><Link to="/">Kembali ke halaman Home</Link></a>
        </div>
    )
}