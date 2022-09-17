import PropTypes from 'prop-types'

function RepoItem({repo}) {
  const { name, forks, watchers_count, open_issues } = repo
  return (
    <div className='bg-gray-800 p-3 text-white'>
        <h3 className='text-xl font-bold'>{'</> '+name}</h3>
        <div className='flex flex-row gap-2 mt-2'>
          <p className='px-2 bg-gray-600 rounded-full text-sm text-green-300'>Forks: <b>{forks}</b></p>
          <p className='px-2 bg-gray-600 rounded-full text-sm text-yellow-300'>Views: <b>{watchers_count}</b></p>
          <p className='px-2 bg-gray-600 rounded-full text-sm text-red-400'>Issues: <b>{open_issues}</b></p>
        </div>
        
    </div>
  )
}

RepoItem.propTypes = {
    repo: PropTypes.object.isRequired
}

export default RepoItem