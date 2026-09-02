export function LocalBusinessSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",

    name: "JV Móveis Sob Medida",

    description:
      "Móveis sob medida em Videira e região. Projetos personalizados, produção própria e montagem profissional.",

    url: "https://jvmoveis.netlify.app",

    telephone: [
      "+55-48-99107-7606",
      "+55-49-98912-2538",
    ],

    areaServed: {
      "@type": "City",
      name: "Videira",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Videira",
        addressRegion: "SC",
        addressCountry: "BR",
      },
    },

    sameAs: [
      "https://www.instagram.com/sobmedidajvmoveis/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}