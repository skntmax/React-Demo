import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import React, { useEffect } from "react";
import { getProducts } from "./actions";
import List from "./List";
import { useParams, useSearchParams } from "react-router-dom";
import { useState } from "react";
 
function ReactQuery() {
     
  let params = useParams()
   
  const [searchParams, setQueryParams] = useSearchParams({ limit: 5, skip: 0 });

  let skip = parseInt(searchParams.get("skip")) || 0;
  let limit = parseInt(searchParams.get("limit")) || 5;

  const getProducts = async () => {
    let {
      data: { products },
    } = await axios.get(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    );
    return products;
  };

  const { data, isLoading, isError, isInitialLoading } = useQuery(
    {
      queryKey: ["products", limit, skip],
      queryFn: getProducts,
      staleTime:10000,
    },
    
   


  );

  if (isError) {
    return <React.Fragment> {isError} </React.Fragment>;
  }

  if (isLoading) {
    return <React.Fragment> Loading... </React.Fragment>;
  }

  if (isInitialLoading) {
    return <React.Fragment> {isInitialLoading} </React.Fragment>;
  }


        // useEffect(() => {

            
        // }, [props.match.params])


  if (data)
    return (
      <React.Fragment>
       
        <List data={data} />

        <button
          type="button"
          className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          onClick={() => {
            setQueryParams((prev) => {
              prev.set("skip",   Math.max( skip - 5 , 0)  );
              return prev;
            });
          }}
        >
    
          Previous
        </button>

        <button
          type="button"
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        
          onClick={(e) => {
            setQueryParams((prev) => {
              prev.set("skip",  Math.max( skip + 5 , 0) );
              return prev;
            });
          }}
        >
         
          Next
        </button>
         
      </React.Fragment>
    );
}

export default ReactQuery;
