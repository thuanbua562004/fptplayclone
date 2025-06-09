export interface Iproducts {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
}

export const products: Iproducts[] = [
  {
    id: 1,
    name: 'Sản phẩm A',
    description: 'Mô tả sản phẩm A',
    image: 'https://images2.thanhnien.vn/528068263637045248/2025/4/14/2-17446124260861223683517.jpg', 
    price: 100000
  },
  {
    id: 2,
    name: 'Sản phẩm B',
    description: 'Mô tả sản phẩm B',
    image: 'https://images2.thanhnien.vn/528068263637045248/2025/4/14/2-17446124260861223683517.jpg',
    price: 150000
  },
  {
    id: 3,
    name: 'Sản phẩm C',
    description: 'Mô tả sản phẩm C',
    image: 'https://images2.thanhnien.vn/528068263637045248/2025/4/14/2-17446124260861223683517.jpg',
    price: 200000
  },
    {
    id: 4,
    name: 'Sản phẩm C',
    description: 'Mô tả sản phẩm C',
    image: 'https://images2.thanhnien.vn/528068263637045248/2025/4/14/2-17446124260861223683517.jpg',
    price: 200000
  },
    {
    id: 5,
    name: 'Sản phẩm C',
    description: 'Mô tả sản phẩm C',
    image: 'https://images2.thanhnien.vn/528068263637045248/2025/4/14/2-17446124260861223683517.jpg',
    price: 200000
  }
];

// Return synchronously
export function getProduct(): Iproducts[] {
  return products;
}

// Or, if you want to simulate an asynchronous API:
export function getProductAsync(): Promise<Iproducts[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 300);
  });
}


