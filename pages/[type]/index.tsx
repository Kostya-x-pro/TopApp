import { JSX } from "react";
import axios from "axios";
import { MenuItem } from "@/interfaces/menu.interface";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { withLayout } from "@/layout/withLayout";
import { firstLevelMenu } from "@/helpers/helpres";
import { ParsedUrlQuery } from "querystring";
import { API } from "@/helpers/api";

const Type = ({firstCategory}: TypeProps):JSX.Element => {
    return (
        <>Type: {firstCategory}</>
    );
};

export default withLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => { 
    return {
        paths: firstLevelMenu.map(m => '/' + m.route),
        fallback: false
    };
};

export const getStaticProps: GetStaticProps<TypeProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
    if(!params) {
        return {
            notFound: true,
        };
    }
    const firstCategoryItem = firstLevelMenu.find(m => m.route === params.type);
    if(!firstCategoryItem) {
        return {
            notFound: true,
        };
    }

    const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
      firstCategory: firstCategoryItem.id
    });
  
    return {
      props: {
        menu,
        firstCategory: firstCategoryItem.id
      }
    };
  };
  
  interface TypeProps extends Record<string, unknown> {
    menu: MenuItem[],
    firstCategory: number
  }