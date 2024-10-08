import { Image } from "./Image";
import img from "./5.avif";
const NavigationData = {
  categories: [
    {
      id: "women",
      name: "Women",
      featured: [
        {
          name: "New Arrivals",
          href: "/",
          imageSrc: img,
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Tees",
          href: "/",
          imageSrc: img,
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", id: "top", href: `{women/clothing/tops}` },
            { name: "Dresses", id: "women_dress", href: "#" },
            { name: "Women Jeans", id: "women_jeans" },
            { name: "Skirts", id: "skirts" },
            { name: "Sweaters", id: "sweater" },
            { name: "T-Shirts", id: "t-shirt" },
            { name: "Jackets", id: "jacket" },
            { name: "Gouns", id: "gouns" },
            { name: "Coats", id: "coats" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", id: "watch" },
            { name: "Gloves", id: "gloves" },
            { name: "Bags", id: "bag" },
            { name: "Sunglasses", id: "sunglasse" },
            { name: "Hats", id: "hat" },
            { name: "Belts", id: "belt" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Full Nelson", id: "#" },
            { name: "My Way", id: "#" },
            { name: "Re-Arranged", id: "#" },
            { name: "Counterfeit", id: "#" },
            { name: "Significant Other", id: "#" },
          ],
        },
      ],
    },
    {
      id: "men",
      name: "Men",
      featured: [
        {
          name: "New Arrivals",
          id: "#",
          imageSrc: img,
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Artwork Tees",
          id: "#",
          imageSrc: img,
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Pants", id: "pants" },
            { name: "Shirt", id: "shirt" },
            { name: "Men Jeans", id: "men_jeans" },
            { name: "Sweaters", id: "Sweaters" },
            { name: "T-Shirts", id: "t-shirt" },
            { name: "Jackets", id: "Jackets" },
            { name: "Activewear", id: "Activewear" },
            { name: "Coats", id: "jackets" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", id: "watches" },
            { name: "Wallets", id: "wallets" },
            { name: "Sunglasses", id: "sunglasses" },
            { name: "Hats", id: "hats" },
            { name: "Belts", id: "belts" },
            { name: "Shoes", id: "shoes" },
            { name: "Gloves", id: "sloves" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Re-Arranged", id: "#" },
            { name: "Counterfeit", id: "#" },
            { name: "Full Nelson", id: "#" },
            { name: "My Way", id: "#" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "About Us", id: "/" },
    { name: "Contact Us", id: "/" },
  ],
};
export default NavigationData;
