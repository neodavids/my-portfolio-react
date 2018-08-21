import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Spinner from '../components/Spinner';

import PropType from 'prop-types';


import RepoListItem from '../components/RepoListItem';

const GET_REPOS = gql`
  query getRepos {
    user(login: "YannickLeRoux") {
      repositories(first: 20, orderBy: {field: UPDATED_AT, direction: DESC}) {
        edges {
          node {
            name
            description
            url
          }
        }
      }
    }
  }
  `;

class ReposList extends Component {

  render() {
    return (
      <div className="intro">
        <h1 className="text-center">Open Source Projects</h1>
        <Query query={GET_REPOS} >
        { ({loading, error,data}) => {
          if (error) return <div>{error.message}</div>
          if (loading || !data ) return <Spinner />

          return (
            <React.Fragment>
            <h2>I currently have { data.user.repositories.edges.length } public repositories on GitHub</h2>
            <ul className="list-group">
              {console.log(data)}
              { data.user.repositories.edges.map((repo) => {
          return (
            <RepoListItem
              key= { repo.node.id }
              name={ repo.node.name }
              link={ repo.node.url }
              desc={ repo.node.description }

            />
          );
        }) }
        </ul>
        </React.Fragment>

          );

        }}
      </Query>
      </div>



    );

  }
};

export default ReposList;