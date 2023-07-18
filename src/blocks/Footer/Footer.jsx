import Container from "@/components/Container/Container";
import Link from "next/link";

const Footer = () => {
  return <div className="bg-green-600 py-12 text-slate-800">
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <div>
            {/* Add logo */}
            <h4 className="text-white font-semibold text-xl">Freelancing</h4>
          </div>
          <p>OurStudio is a digital agency
            UI / UX Design and Website
            Development located in Ohio,
            United States of America</p>

          <p className="mt-8">Copyright Satyam Studio</p>
        </div>

        <div>
          <h4 className="text-white font-semibold text-xl">Service</h4>
          <p className='mt-2'>
            <Link href={'/'}>Illustration</Link>
          </p>

          <p className='mt-2'>
            <Link href={'/'}>Mobile Design</Link>
          </p>
          <p className='mt-2'>
            <Link href={'/'}>Motion Graphic</Link>
          </p>
          <p className='mt-2'>
            <Link href={'/'}>Web Design</Link>
          </p>
          <p className='mt-2'>
            <Link href={'/'}>Development</Link>
          </p>
          <p className='mt-2'>
            <Link href={'/'}>SEO</Link>
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold text-xl">Company</h4>
          <p className='mt-2'>
          <Link href={'/'}>Service</Link>
          </p>
          <p className='mt-2'>
          <Link href={'/'}>Features</Link>
          </p>
          <p className='mt-2'>
          <Link href={'/'}>Our Team</Link>
          </p>
          <p className='mt-2'>
          <Link href={'/'}>Portfolio</Link>
          </p>
          <p className='mt-2'>
          <Link href={'/'}>Blog</Link>
          </p>
          <p className='mt-2'>
          <Link href={'/'}>Contact Us</Link>
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold text-xl">Join a Newsletter</h4>
          <form className="relative">
            <p>Your email</p>
            <input className="py-3 px-2 rounded-l-md" placeholder="Your Email" type="text" />
            <button className="bg-green-800 text-white px-3 py-3 rounded-r-md font-semibold absolute bottom-0 lg:-right-4 right-5">Subscribe</button>
          </form>

          <div className="mt-5">
            <span className="p-4 bg-white mx-3 rounded-full">Mh</span>
            <span className="p-4 bg-white mx-3 rounded-full">Al</span>
            <span className="p-4 bg-white mx-3 rounded-full">Nr</span>
            <span className="p-4 bg-white mx-3 rounded-full">Fs</span>
          </div>
        </div>




      </div>
      <div className="mt-5 pt-5 border-t-2 flex flex-col-reverse lg:flex-row justify-between">
        <div>
          <p className="text-center mt-5 lg:mt-0">Copyright Satyam Studio</p>
        </div>
        <div className="flex justify-between space-x-3">
          <p>8819 Ohio St. South Gate,
            CA 90280</p>
          <p>Ourstudio@hello.com</p>
          <p>+8801796668991</p>
        </div>
      </div>
    </Container>
  </div>;
};

export default Footer;
