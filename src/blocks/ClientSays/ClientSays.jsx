import Container from '@/components/Container/Container'
import React from 'react'
import Carousel from './Carousel'
import Image from 'next/image'
import imag1 from '../../../public/carousel/Ornament 80.png'
import imag2 from '../../../public/carousel/Ornament 81.png'

function ClientSays() {
    return (
        <section className='py-12'>
            <Container >
                <div className='bg-blue-100 rounded-lg relative'>
                    <h1 className='h4 text-blue-600 pt-14 pb-20 text-center'>What Our Clients Say About Us</h1>
                    <Image
                    className='absolute right-[10%] top-[12%] pb-5'
                        src={imag2}
                        width={200}
                        height={200}
                        alt="Picture of the author"
                    />
                    <div className=' pb-16'>
                        <Carousel></Carousel>
                    </div>
                    <Image
                    className='absolute bottom-0 pb-5'
                        src={imag1}
                        width={100}
                        height={100}
                        alt="Picture of the author"
                    />
                </div>
            </Container>
        </section>
    )
}

export default ClientSays