//import { db } from '../firebase/client'
import { gql, GraphQLClient } from "graphql-request";

export const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_SHOPIFY_URL, {
  headers: {
    method: "POST",
    "Content-Type": "application/json",
    "X-Shopify-Access-Token": process.env.NEXT_PUBLIC_TOKEN,
  },
});

export const getProductsQuery = gql`
{
	shop {
		name
    description
	}
  products(first:20 query:"inventory_total:>0 AND status:active"){
    edges{
      node {
        id
        title
        handle
        description
        totalInventory
        collections(first:10){
          edges{
            node{
              title
              handle
            }
          }
        }
        variants(first:10){
          edges{
            node{
              price
              title
              id
              availableForSale
            }
          }
        }
        images(first:2) {
          edges{
            node{
              id
              transformedSrc
            }
          }
        }
      }
    }
  } 
}
`;
export const getSingleProductQuery = (handle) => gql`
{
  productByHandle(handle:"${handle}"){
    title
    id
    description
    hasOnlyDefaultVariant
    hasOutOfStockVariants
    status
    images(first:10){
      edges{
        node{
          id
          altText
          transformedSrc
        }
      }
    }
    variants(first:100){
      edges{
        node{
          availableForSale
          id
          title
          price
          inventoryQuantity
          
        }
      }
    }
  }    
 }
`;