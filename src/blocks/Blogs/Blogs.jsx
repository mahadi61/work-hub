"use client"
import Container from '@/components/Container/Container';
import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('/blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    console.log(blogs)
    return (
        <section className='py-12'>
            <Container>
                <h3 className="h3 text-green-900 pt-14 pb-10">Blogs</h3>
                <div className='flex flex-col lg:flex-row gap-5 h-full'>
                    <div className='lg:w-1/2 h-full '>
                        {
                            blogs.length > 0 && <BlogCard blogData={blogs[0]}></BlogCard>
                        }
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:w-3/4">
                        {
                            blogs && blogs.slice(1).map(item => <BlogCard size={true} className="w-1/2" key={item.id} blogData={item}></BlogCard>)
                        }
                    </div>
                </div>
            </Container>

        </section>
    );
};

export default Blogs;