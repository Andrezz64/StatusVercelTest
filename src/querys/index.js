import { gql } from "@apollo/client";

const SERVICE_STATUS = gql`
    query data{
    alterdata_Services{
      serviceName
      state
      id
    }
  }
  `

  export default SERVICE_STATUS