export const productsQuery = `
  query GetProducts($first: Int!, $after: String) {
    shop {
      products(first: $first, after: $after) {
        pageInfo {
          hasNextPage
        }
        edges {
          cursor
          node {
            createdAt
            description
            descriptionHtml
            handle
            id
            onlineStoreUrl
            options {
              id
              name
              values
            }
            productType
            publishedAt
            tags
            title
            updatedAt
            variants(first: 250) {
              edges {
                node {
                  availableForSale
                  compareAtPrice
                  id
                  image {
                    altText
                    id
                    src
                  }
                  price
                  sku
                  title
                  weight
                  weightUnit
                }
              }
            }
            vendor
          }
        }
      }
    }
  }
`
