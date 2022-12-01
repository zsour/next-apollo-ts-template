import React, { useState, useEffect, ReactNode } from 'react';
import { HttpLink } from '@apollo/client';

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider
  } from "@apollo/client";

interface Props{
  children?: ReactNode
}

function ApolloWrapper({children}: Props) {
    const httpLink = new HttpLink({
        uri: "http://localhost:4000/graphql"
    });

    const client = new ApolloClient({
        link: httpLink,
        cache: new InMemoryCache()
    });

    return (<ApolloProvider client={client}>
        {children}
    </ApolloProvider>);
}


export default ApolloWrapper;