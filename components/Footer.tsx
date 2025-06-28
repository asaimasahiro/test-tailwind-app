const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 mt-12">
      <div className="container mx-auto px-4 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} Asai Masahiro. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          {/* Add social media links here */}
          <a href="#" className="hover:text-gray-800">Twitter</a>
          <a href="#" className="hover:text-gray-800">Instagram</a>
          <a href="#" className="hover:text-gray-800">Facebook</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
