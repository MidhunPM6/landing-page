import NavBar from '../ui/NavBar'
import Button from '../ui/Button'
import heroImg from '../../assets/hero-img.svg'
import amazon from '../../assets/company-logos/amazon.svg'
import dribbble from '../../assets/company-logos/dribbble.svg'
import hubspot from '../../assets/company-logos/hubspot.svg'
import notion from '../../assets/company-logos/notion.svg'
import netflix from '../../assets/company-logos/netflix.svg'
import zoom from '../../assets/company-logos/zoom.svg'

const HeroSection = () => {
  const companyLogos = [
    { id: 0, src: amazon, alt: 'amazon' },
    { id: 1, src: dribbble, alt: 'dribbble' },
    { id: 2, src: hubspot, alt: 'hubspot' },
    { id: 3, src: notion, alt: 'notion' },
    { id: 4, src: netflix, alt: 'netflix' },
    { id: 5, src: zoom, alt: 'zoom' }
  ]
  return (
    <section className=' flex flex-col   '>
      <div className='flex flex-col lg:flex-row pt-14 lg:justify-between lg:items-center'>
        <div className='flex flex-col lg:max-w-xl max-w-full gap-9'>
          <h1 className='text-5xl lg:text-6xl font-medium leading-[60px] lg:leading-[70px]'>
            Navigating the digital landscape for success
          </h1>
          <p className='text-lg lg:text-xl'>
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <div>
            <Button variant='dark'>Book a consultation</Button>
          </div>
        </div>

        <div className='flex lg:mt-0 mt-20  justify-center items-center '>
          <img
            src={heroImg}
            alt='Digital marketing'
            className='  w-full max-w-xl'
          />
        </div>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6  gap-10  w-full  mt-24  '>
        {companyLogos?.map(logos => {
          return (
            <img
              key={logos.id}
              src={logos.src}
              alt={logos.alt}
              className='filter grayscale'
            />
          )
        })}
      </div>
    </section>
  )
}

export default HeroSection
