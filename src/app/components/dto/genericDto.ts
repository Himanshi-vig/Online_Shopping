
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

export class PlacedOrder {
  pName: string;
  pId: number;
  pImage: string;
  pBrand: string;
  pPrice: number;
  pOrderDate: string;
  pQty: number;
  pType: string;
}
