import { JSX, useState } from "react";

// Компоненты
import { Button, Htag, Paragraph, Tag, Rating } from "@/components";


export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);


  return (
    <>
     <Htag tag="h1">Заголовок</Htag>
     <Button appearance="primary">Increment</Button>
     <br/>
     <Button arrow="right" appearance="primary">Кнопка</Button>
     <Button arrow="down" appearance="ghost">Кнопка</Button>
     <Paragraph size="s">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quam quaerat necessitatibus, dignissimos veritatis</Paragraph>
     <Paragraph size="m">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quam quaerat necessitatibus, dignissimos veritatis</Paragraph>
     <Paragraph size="l">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quam quaerat necessitatibus, dignissimos veritatis</Paragraph>
     <Tag size="s" color="red">Мал</Tag>
     <Tag size="m" color="green">Сред</Tag>
     <Tag color="primary">Pirmary</Tag>
     <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}
