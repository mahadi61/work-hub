"use client"

import Container from "@/components/Container/Container";
import { useEffect, useState } from "react";
import FeaturedJobCard from "./FeaturedJobCard";

const FeaturedJobs = () => {
    const [featuredJobs, setFeaturedJobs] = useState([]);

    // fetch featured jobs and set in a state
    useEffect(() => {
        fetch(`featuredJobs.json`)
            .then((res) => res.json())
            .then((data) => {
                setFeaturedJobs(data);
            })
    }, []);

    return (
        <section className="py-12">
            <Container>
                <div className="grid gap-8">
                    <h3 className="h3 text-green-900">Featured Jobs</h3>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {
                            featuredJobs.map((job) => <FeaturedJobCard
                            key={job.id}
                            job={job}
                            ></FeaturedJobCard>)
                        }
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default FeaturedJobs;