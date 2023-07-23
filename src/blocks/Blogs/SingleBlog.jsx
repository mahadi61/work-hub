
import Container from '@/components/Container/Container';
import React from 'react';
import Image from 'next/image'
import moment from 'moment';
import Button from '@/components/Button/Button';

const SingleBlog = () => {

    const blog = {
        id: 1,
        blogImage: "https://i.ibb.co/XpkCYhY/time.jpg",
        date: "2023-07-18T10:30:00",
        blogTitle: "Tips for Freelancers: Time Management",
        blogDescription: "In this blog post, we will explore effective time management techniques for freelancers. Learn how to prioritize tasks, set boundaries, and optimize productivity to make the most of your freelancing career. In this blog post, we will explore effective time management techniques for freelancers. Learn how to prioritize tasks, set boundaries, and optimize productivity to make the most of your freelancing career. earn how to prioritize tasks, set boundaries, and optimize productivity to make the most of your freelancing career. In this blog post, we will explore effective time management techniques for freelancers. earn how to prioritize tasks, set boundaries."
    }

    return (
        <section className='bg-green-100 bg-opacity-70'>
            <Container>

                <div className='py-7 lg:py-12'>
                    <figure className='lg:h-96 relative overflow-hidden '>
                        <Image
                            className="w-full object-fill "
                            src={blog.blogImage}
                            width={500}
                            height={200}
                            alt="Picture of the blog"
                        />
                    </figure>
                    <div className="bg-green-200 px-10 lg:px-32 lg:py-10 py-5  space-y-5 z-20  divide-y divide-green-500">
                        <div>
                            <h1 className='h3 mt-3'>{blog.blogTitle}</h1>
                            <div className='flex gap-3 py-3'>
                                <span className="h6   font-semibold">By: Jhon Doe</span> | <span><p className="h6   font-semibold">{moment(blog.date).format(" MMM DD, hh:mm A")}</p></span>
                            </div>
                            <p className="pb-10 pt-3">
                                {blog.blogDescription}
                            </p>
                        </div>



  
                        <div className="pb-10">
                            <h3 className='h3 mt-10'>Leave a Reply</h3>
                            <p className='p py-3'>Your email address will not be published. Required fields are marked</p>

                            <form action="" className='space-y-5 py-3'>
                                <textarea name='reply' className="w-full bg-green-100 px-3 py-3 rounded focus:border-green-800 border placeholder:text-slate-500" placeholder="Bio"></textarea>
                                <div className='flex flex-col lg:flex-row gap-5 w-full'>
                                    <input name='name' type="text" placeholder="Name" className="w-full bg-green-100 px-3 py-3 rounded focus:border-green-800 border placeholder:text-slate-500" />
                                    <input name='email' type="email" placeholder="email" className="w-full bg-green-100 px-3 py-3 rounded focus:border-green-800 border placeholder:text-slate-500" />
                                    <input name='phone' type="tel" placeholder="Phone" className="w-full bg-green-100 px-3 py-3 rounded focus:border-green-800 border placeholder:text-slate-500" />
                                </div>
                                <Button type="submit" fullwidth>Post Comment</Button>
                            </form>
                        </div>
                    </div>



                </div>
            </Container>
        </section>
    );
};

export default SingleBlog;