const Header = () => {
  return (
    <div className="py-6 px-10 flex justify-between w-100">
        <div className="text-lagoon1 font-bold uppercase">Integritet</div>
        <div>
            <ul className="md:flex gap-3 text-lagoon1 hidden">
                <li className="hover:text-lagoon3 cursor-pointer ">Home</li>
                
                <li className="hover:text-lagoon3 cursor-pointer ">About Us</li> 
                <li className="hover:text-lagoon3 cursor-pointer ">Services</li>
                <li className="hover:text-lagoon3 cursor-pointer ">Contact Us</li> 
            </ul>
        </div>

        <div className="text-lagoon1">
            Call us: +254-708-193-940
        </div>
    </div>
  )
}

export default Header