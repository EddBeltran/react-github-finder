import React from 'react';
import PropTypes from 'prop-types'
import RepoItem from './RepoItem';

function RepoList({ repos }) {
  return (
    <div>
        <h2 className='text-white font-bold text-3xl mb-4'>Latest Repositories</h2>
        <div className='flex flex-col gap-1'>
            {repos.map((repo, index) => <RepoItem key={`repId-${index}`} repo={repo}/>)}
        </div>
    </div>
  )
}

RepoList.propTypes = {
    repos: PropTypes.array.isRequired
}

export default RepoList