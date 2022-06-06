function Footer() {
  const footerYear = new Date().getFullYear()
  return (
    <footer className='bg-gray-800 text-white p-4 text-center'>
        <p>{footerYear} &copy; All rights reserved</p>
    </footer>
  )
}

export default Footer