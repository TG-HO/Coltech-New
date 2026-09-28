import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PRODUCTS, getProductBySlug } from "@/data/products";
import ProductDetailClient from "@/components/ui/ProductDetailClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | COLTECH",
      description: "The requested enterprise product could not be found.",
    };
  }

  return {
    title: `${product.name} | COLTECH Enterprise Platform`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} | ${product.tagline}`,
      description: product.shortDescription,
      url: `https://coltech.co/products/${product.slug}`,
      images: [
        {
          url: product.primaryImage,
          alt: product.name,
        },
      ],
    },
    alternates: {
      canonical: `https://coltech.co/products/${product.slug}`,
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": product.name,
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web, iOS, Android",
            "description": product.shortDescription,
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
            },
            "provider": {
              "@type": "Organization",
              "name": "Circle of Life (COL) Technologies (COLTECH)",
              "url": "https://coltech.co",
            },
          }),
        }}
      />
      <ProductDetailClient product={product} />
    </>
  );
}
