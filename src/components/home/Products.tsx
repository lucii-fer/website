
// components/ProductSection.js
const Products = () => {
  const products = [
    {
      image:
        "https://play-lh.googleusercontent.com/U_AYdKqpmheUmhKWHYvhYaN6V6XFswiOMUjd_7Kp7-huMJzJv-6TW6keo0kOB2FBJao=w240-h480-rw",
      name: "BulksApp (Whatsapp Bulk Messanger)",
      description: `"BulksApp (Whatsapp Bulk Messanger)" is a user-friendly Android app for sending personalized bulk messages to multiple contacts on a popular social media.`,
      link: "https://play.google.com/store/apps/details?id=com.qs.bulksapp2",
      proLink:"https://play.google.com/store/apps/details?id=com.qs.bulksapp2.paid"
    },
    {
      image:
      "https://play-lh.googleusercontent.com/nX6WwIBU7WKOlDKcpzhtZ3xI2GUUeZeJwQz8H0wJsYMN9m5O-7H6Mey2IVq0b50uyCrm=s48-rw",
      name: "Bulk SMS Sender",
      description: `
      Bulk SMS Sender is an intuitive Android app that serves as your default SMS handler and enables powerful bulk messaging, perfect for businesses and event organizers.`,
      link: "https://play.google.com/store/apps/details?id=com.qs.messages&hl=en_IN",
      proLink:"https://play.google.com/store/apps/details?id=com.qs.messages.pro",
    },
  ];
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-8 py-6">
        Our Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product 1 */}
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="object-cover px-6 pt-6"
              width={"150"}
              height={"150"}
            />
            <div className="p-6">
              <div className="flex-grow mb-6">
                <h3 className="text-xl font-semibold text-blue-700">
                  {product.name}
                </h3>
                <p className="text-gray-700 mt-2">{product.description}</p>
              </div>
              <div className="flex gap-4">
                <a
                  href={product.link}
                  className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 inline-block"
                >
                  Get Free App
                </a>
                <a
                  href={product.proLink}
                  className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 inline-block"
                >
                  Get Premium App
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
