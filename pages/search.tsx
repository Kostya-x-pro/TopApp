import { JSX } from "react";
import { withLayout } from "@/layout/withLayout";

const Search = ():JSX.Element => {
    return (
        <div>Search</div>
    );
};

export default withLayout(Search);

// export const getStaticProps: GetStaticProps<HomeProps> = async () => {
//     const firstCategory = 0;
//     const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + 'api/top-page/find', {
//       firstCategory
//     } );
  
//     return {
//       props: {
//         menu,
//         firstCategory
//       }
//     };
//   };
  
//   interface HomeProps extends Record<string, unknown> {
//     menu: MenuItem[],
//     firstCategory: number
//   }