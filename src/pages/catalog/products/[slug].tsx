import { useRouter } from 'next/router';

export default function Product() {
    const router = useRouter();
    // ROUTE -> /catalog/products/SLUG-DO-PRODUTO

    return (
        <h1>
            { router.query.slug }
        </h1>
    );
}