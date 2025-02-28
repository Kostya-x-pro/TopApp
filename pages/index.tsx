import { JSX } from "react";

// Компоненты
import { Button, Htag, Paragraph, Tag } from "@/components";


export default function Home(): JSX.Element {
  return (
    <>
     <Htag tag="h1">Текст</Htag>
     <Button arrow="right" appearance="primary">Кнопка</Button>
     <Button arrow="down" appearance="ghost">Кнопка</Button>
     <Paragraph size="s">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quam quaerat necessitatibus, dignissimos veritatis</Paragraph>
     <Paragraph size="m">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quam quaerat necessitatibus, dignissimos veritatis</Paragraph>
     <Paragraph size="l">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quam quaerat necessitatibus, dignissimos veritatis</Paragraph>
     <Tag size="s" color="red">Мал</Tag>
     <Tag size="m" color="green">Сред</Tag>
     <Tag color="primary">Pirmary</Tag>
    </>
  );
}
