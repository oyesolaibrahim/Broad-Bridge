const Footer = () => {
    return (
    <footer className="bg-blue-900 flex justify-between md:py-10 md:px-20 text-white sm:py-5 sm:px-4 sm:space-x-7">
        <div className="flex items-center">
            <i class="fa fa-copyright fa-2x sm:text-sm" aria-hidden="true"></i>
            <h3 className="ml-2">broadbridge</h3>
        </div>
        <div className="flex items-center space-x-5 sm:space-x-2">
            <i class="fa fa-facebook-official fa-3x sm:text-sm" aria-hidden="true"></i>
            <i class="fa fa-whatsapp fa-3x sm:text-sm" aria-hidden="true"></i>
            <i class="fa fa-instagram fa-3x sm:text-sm" aria-hidden="true"></i>
        </div>
    </footer>
    )
}

export default Footer;