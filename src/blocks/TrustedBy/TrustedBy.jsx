import Container from '@/components/Container/Container';
import React from 'react';
import Image from 'next/image'
import Marquee from "react-fast-marquee";
import dropbox from '/public/trustedBy/dropbox.svg';
import slack from '/public/trustedBy/slack.svg';
import google from '/public/trustedBy/google.svg'
import airbnb from '/public/trustedBy/airbnb.svg';

const TrustedBy = () => {
    const trusted = [ dropbox, slack, google, airbnb]
    return (
        <section className="py-12">
            <Container>
            <h3 className="h3 text-green-900 pt-14 pb-10">Trusted By</h3>
                <Marquee>
                    {
                        trusted && trusted.map(item => <Image
                            src={item}
                            width={100}
                            height={100}
                            alt="Picture of the author"
                            className='px-10 w-48 h-auto'
                          /> )
                    }
                </Marquee>
            </Container>
        </section>
    );
};

export default TrustedBy;