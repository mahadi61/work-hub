import React from 'react';
import Image from 'next/image';
import moment from "moment";
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';


const BlogCard = ({ blogData, size }) => {
    console.log(blogData)
    const { id, blogImage, date, blogTitle, blogDescription } = blogData
    return (
        <div>
            <div className={` w-full border rounded-tl-3xl border-neutral-100 shadow-sm hover:shadow h-full`}>

                <div className='relative'>
                    <Image
                        className={`rounded-tl-3xl object-cover object-center ${size ? 'h-40' : 'h-full'} w-full`}
                        src={blogImage}
                        width={500}
                        height={400}
                        alt="blog image"
                    />
                </div>

                <div className='bg-green-700 p-4 space-y-2'>
                    <p className="h6  text-white font-medium">{moment(date).format(" MMM DD, hh:mm A")}</p>
                    <h3 className="h5 text-white">{blogTitle}</h3>

                    {size || <p className='p text-white py-4'>{blogDescription}</p>}

                    {
                        size && <Link href={`/blog/${id}`}>
                            <button className='text-white hover:text-opacity-80 flex items-center gap-2 border rounded border-white px-4 py-2 hover:border-opacity-80 mt-2'>Read Full <FaArrowRight></FaArrowRight></button>
                        </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default BlogCard;