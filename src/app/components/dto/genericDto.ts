export class ProductDto {
  productImage1: string;
  productImage2: string;
  productImage3: string;
  productImage4: string;
  description: string;
  productId: number;
  name: string;
  brand: string;
  price: number;
}
export class Cart {
  cId: number;
  pId: number;
  qty: number;
  pImage1: string;
  pName: string;
  pBrand: string;
  pPrice: number;
  totalPrice: number;
}

export class PlacedOrder
{
  pName: string;
  pId : number;
	pImage : string;
	pBrand : string;
	pPrice : number;
	pOrderDate : string;
	pQty : number;
	pType : string;
}
