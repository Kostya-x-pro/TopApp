export interface ProductCharacteristic {
    name: string;
    value: string;
  }

export interface ReviewModel {
_id: string;
name: string;
title: string;
description: string;
rating: number;
createdAt: Date;
}

export interface ProductModel {
    _id: string;
    categories: string[];
    tags: string[];
    title: string;
    image: string;
    description: string;
    link: string;
    price: number;
    credit: number;
    oldPrice: number;
    characteristics: ProductCharacteristic[];
    advantages?: string;
    disadvantages?: string;
    initialRating: number;
    createdAt: string;
    updatedAt: string;
    __v: number;

    reviews: ReviewModel[];
    reviewCount: number;
    reviewAvg?: number;
}
  

  

  
  export interface Blog {
    text: string;
    _id: string;
    bigImage?: string;
  }