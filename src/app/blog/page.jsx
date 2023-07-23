"use client"
import SingleBlog from '@/blocks/Blogs/SingleBlog';
import Footer from '@/blocks/Footer/Footer';
import { Navbar } from '@/components/Navbar/Navbar';

import React from 'react';

const Blog = () => {

    return (
        <section>
            <Navbar />
            <SingleBlog/>
            <Footer />
        </section>
    );
};

export default Blog;