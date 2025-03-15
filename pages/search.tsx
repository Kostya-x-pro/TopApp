import axios from "axios";
import { JSX } from "react";
import { GetStaticProps } from "next";

import { withLayout } from "@/layout/withLayout";
import { API } from "@/helpers/api";
import { MenuItem } from "@/interfaces/menu.interface";

const Search = ():JSX.Element => {
    return (
        <div>Search</div>
    );
};

export default withLayout(Search);

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