import Container from '@/components/Container/Container';
import React from 'react';
import Image from 'next/image'
import Marquee from "react-fast-marquee";
import dropbox from '../../../public/trustedBy/dropbox.png';
import slack from '../../../public/trustedBy/slack.png';
import google from '../../../public/trustedBy/google.png';
import shopify from '../../../public/trustedBy/shopify.png';

const TrustedBy = () => {
    const trusted = [dropbox, slack, google, shopify]
    return (
        <section className="py-12">
            <Container>
            <h3 className="h3 text-green-900 pt-14 pb-10">Trusted By</h3>
                <Marquee>
                    {
                        trusted && trusted.map(item => <Image
                            src={item}
                            width={300}
                            // height={500}
                            alt="Picture of the author"
                            className='px-10'
                          /> )
                    }
                </Marquee>
            </Container>
        </section>
    );
};

export default TrustedBy;