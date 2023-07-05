import Image from 'next/image'


const CarouselCard = ({ item }) => {
    return (
        <div className='w-3/5 mx-auto bg-white rounded-xl'>


            <div className='flex items-center'>
                <Image
                    src={item?.PhotoURL}
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />
                <div className='p-5'>
                    <p className='h5'>{item?.title}</p>
                    <p className='p'>{item?.description}</p>
                </div>
            </div>
        </div>
    );
};

export default CarouselCard;