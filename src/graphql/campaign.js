import gql from "graphql-tag";

export const TARGET_LIMITS = gql`{
    campaignFilterLimits {
        followers
        priceStart
        priceEnd
        locations {
            id
            name
        }
        interests {
            id
            name
        }
        gender {
            id
            name
        }
    }
}`;

export const TARGET_DEFAULTS = gql`{
    campaignDefaultFilter {
      followers
      priceEnd
      priceStart
      rating
      ageStart
      ageEnd
      gender
      location
      interests
    }
}`

export const BUDGET_LIMITS = gql`{
    campaignFilterLimits {
        influencers
        posts
    }
}`;

export const BUDGET_DEFAULTS = gql`{
    campaignDefaultFilter {
        influencers
        posts
    }
}`;

export const ESTIMATE = gql`query getEstimates ($followers: Int!, $priceStart: Int!, $priceEnd: Int!, $rating: Int!, $ageStart: Int!, $ageEnd: Int!, $gender: Int!, $location: [Int]!, $interests: [Int]!, $influencers: Int!, $posts: Int!)  {
    campaignEstimate (filter: {
      followers: $followers
      priceStart: $priceStart
      priceEnd: $priceEnd
      rating: $rating
      ageStart: $ageStart
      ageEnd: $ageEnd
      gender: $gender
      location: $location
      interests: $interests
      influencers: $influencers
      posts: $posts
    }) {
      location
      potential
      influencers
      reach
      engagement
      buget
    }
  }
`

