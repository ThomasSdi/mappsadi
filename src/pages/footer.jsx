import Image from "next/image"

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-4 px-6 flex justify-between items-center fixed bottom-0 w-full">
      <div>
        <p className="text-sm text-gray-600 font-semibold mb-2">Suivez-nous</p>
        <div className="flex items-center">
          <a
            href="https://github.com/ThomasSdi"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4 transition-transform transform hover:scale-110"
          >
            <Image src="/github.png" alt="GitHub" width={25} height={25} />
          </a>
          <a
            href="https://www.linkedin.com/in/thomas-sadi-4388a7252"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <Image src="/linkedin.png" alt="LinkedIn" width={25} height={25} />
          </a>
        </div>
      </div>
      <div className="text-sm text-center flex-grow">
        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} Thomas SADI Year Project
        </p>
      </div>
      <div className="text-sm text-right">
        <p className="text-gray-600">thomas.sadi@supdevinci-edu.fr</p>
        <p className="text-gray-600">01 23 45 67 89</p>
        <p className="text-gray-600">7B Avenue de L&apos;Étoile</p>
      </div>
    </footer>
  )
}

export default Footer
