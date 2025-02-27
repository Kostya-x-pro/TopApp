import { JSX } from "react";

// Компоненты
import { Htag } from "@/components/Htag/Htag";
import { Button  } from "@/components/Button/Button";
import { Paragraph } from "@/components";

export default function Home(): JSX.Element {
  return (
    <>
     <Htag tag="h1">Текст</Htag>
     <Button arrow="right" appearance="primary">Кнопка</Button>
     <Button arrow="down" appearance="ghost">Кнопка</Button>
     <Paragraph size="s">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quam quaerat necessitatibus, dignissimos veritatis</Paragraph>
     <Paragraph size="m">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quam quaerat necessitatibus, dignissimos veritatis</Paragraph>
     <Paragraph size="l">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quam quaerat necessitatibus, dignissimos veritatis</Paragraph>
    </>
  );
}
