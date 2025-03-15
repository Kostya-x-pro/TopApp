import { JSX } from "react";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import axios from 'axios';

// HOC (компоненты)
import { withLayout } from "@/layout/withLayout";

// Интерфейсы
import { MenuItem } from "@/interfaces/menu.interface";
import { TopLevelCategory, TopPageModel } from "@/interfaces/page.interface";
import { ParsedUrlQuery } from "querystring";
import { ProductModel } from "@/interfaces/product.interface";
import { firstLevelMenu } from "@/helpers/helpres";
import { TopPageComponent } from "@/page-components/TopPageComponent/TopPageComponent";
import { API } from "@/helpers/api";

 function TopPage({ firstCategory, page, products }: TopPageProps): JSX.Element {
  return (
    <TopPageComponent 
      firstCategory={firstCategory}
      page={page}
      products={products}
    />
  );
}

export default withLayout(TopPage);

export const getStaticPaths: GetStaticPaths = async () => {
    let paths: string[] = [];
    for (const m of firstLevelMenu) {
      const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find,{
          firstCategory: m.id
      });
      paths = paths.concat(menu.flatMap(myMenu => myMenu.pages.map(p => `/${m.route}/${p.alias}`)));
    }
    
    return {
        paths,
        fallback: true
    };
};

export const getStaticProps: GetStaticProps<TopPageProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
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

  try {
      // Получение меню
    const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
      firstCategory: firstCategoryItem.id
    });
    if (menu.length === 0) {
      return {
          notFound: true,
      };
    }

      // Получение страницы 
    const { data: page } = await axios.get<TopPageModel>(API.topPage.byAlias + params.alias);
      // Получение продукта 
    const { data: products } = await axios.post<ProductModel[]>(API.product.find, {
          category: page.category,
          limit: 10
    });

    return {
      props: {
        menu,
        firstCategory: firstCategoryItem.id,
        page,
        products
      }
    };
    
  } catch {
      return {
        notFound: true,
    };
  }

};

interface TopPageProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: TopLevelCategory;
	page: TopPageModel;
	products: ProductModel[];
}