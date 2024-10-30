export const color = [
  "white",
  "Black",
  "Red",
  "marun",
  "Being",
  "Pink",
  "Green",
  "Yellow",
];

export const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "White", label: "White" },
      { value: "Beige", label: "Beige" },
      { value: "Blue", label: "Blue" },
      { value: "Brown", label: "Brown" },
      { value: "Green", label: "Green" },
      { value: "Purple", label: "Purple" },
      { value: "Yellow", label: "Yellow" },
      { value: "Pink", label: "Pink" },
      { value: "Black", label: "Black" },
    ],
  },

  {
    id: "size",
    name: "Size",
    options: [
      { value: "S", label: "S" },
      { value: "M", label: "M" },
      { value: "L", label: "L" },
    ],
  },
];

export const singleFilter = [
  {
    id: "price",
    name: "Price",
    options: [
      { value: "0-30", label: "$0 To $30" },
      { value: "30-50", label: "$30 To $50" },
      { value: "50-70", label: "$50 To ₹$70" },
      { value: "70-90", label: "$70 To $90" },
      { value: "90-500", label: "$90 To $500" },
    ],
  },
  {
    id: "disccout",
    name: "Disccount Range",
    options: [
      {
        value: "10",
        label: "10% And Above",
      },
      { value: "20", label: "20% And Above" },
      { value: "30", label: "30% And Above" },
      { value: "40", label: "40% And Above" },
      { value: "50", label: "50% And Above" },
      { value: "60", label: "60% And Above" },
      { value: "70", label: "70% And Above" },
      { value: "80", label: "80% And Above" },
      { value: "90", label: "90% And Above" },
    ],
  },
  // {
  //   id: "stock",
  //   name: "Availability",
  //   options: [
  //     { value: "in_stock", label: "In Stock" },
  //     { value: "out_of_stock", label: "Out Of Stock" },
  //   ],
  // },
];

export const sortOptions = [
  { name: "Price: Low to High", query: "price_low", current: false },
  { name: "Price: High to Low", query: "price_high", current: false },
];
