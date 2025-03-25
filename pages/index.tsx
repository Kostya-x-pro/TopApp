import { JSX, useState } from "react";
import { GetStaticProps } from "next";
import axios from 'axios';

// HOC (компоненты)
import { withLayout } from "@/layout/withLayout";

// Компоненты
import { Htag, Paragraph, Tag, Rating, Input, TextArea, Search } from "@/components";
import { MenuItem } from "@/interfaces/menu.interface";
import { API } from "@/helpers/api";

 function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag="h1">Заголовок</Htag>
      <Paragraph size="s">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quam quaerat necessitatibus, dignissimos veritatis</Paragraph>
      <Paragraph size="m">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quam quaerat necessitatibus, dignissimos veritatis</Paragraph>
      <Paragraph size="l">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quam quaerat necessitatibus, dignissimos veritatis</Paragraph>
      <Tag size="s" color="red">Мал</Tag>
      <Tag size="m" color="green">Сред</Tag>
      <Tag color="primary">Pirmary</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
      <Input placeholder="Test" />
      <TextArea placeholder="Test" />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory
  } );

  return {
    props: {
      menu,
      firstCategory
    }
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[],
  firstCategory: number
}