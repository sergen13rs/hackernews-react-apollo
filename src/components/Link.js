import React from 'react'
import { AUTH_TOKEN } from '../constants'
import { timeDifferenceForDate } from '../utils'
import get from 'lodash/get';
import gql from 'graphql-tag'
import { useMutation } from 'react-apollo'

const VOTE_MUTATION = gql`
  mutation VoteMutation($linkId: ID!) {
    vote(linkId: $linkId) {
      id
      link {
       id
        votes {
          id
          user {
            id
          }
        }
      }
      user {
        id
      }
    }
  }
`

const Link = ({ link, index, updateStoreAfterVote }) => {
  const authToken = localStorage.getItem(AUTH_TOKEN)

  const [voteMutation, {loading, error}] = useMutation(VOTE_MUTATION, {
    variables: {
      linkId: link.id
    },
    update: (store, { data: { vote } }) => updateStoreAfterVote(store, vote, link.id),
    onError: (error) => console.log(error)
  });

  return (
    <div className="flex mt2 items-start">
      <div className="flex items-center">
        <span className="gray">{index + 1}.</span>
        {authToken && (
          <div className="ml1 gray f11" onClick={voteMutation}>
             ▲
          </div>
        )}
      </div>
      <div className="ml1">
        <div>
          {link.description} ({link.url})
        </div>
        <div className="f6 lh-copy gray">
          {!loading && `${link.votes.length} votes | by ${' '}`}
          {loading && 'loading...'}
          {link.postedBy
            ? link.postedBy.name
            : 'Unknown'}{' '}
          {timeDifferenceForDate(link.createdAt)}{' '}
          {error && `| ${get(error, 'graphQLErrors[0].message', 'Error!')}`}
        </div>
      </div>
    </div>
  )
}

export default Link