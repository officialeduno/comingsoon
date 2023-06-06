import React from "react";
import LinkItem from "../../components/LinkItem";
import InstagramIcon from '/public/icons/icon-instagram.svg';

const socials = [
    {
        name: 'Instagram',
        icon: <InstagramIcon />,
        href: 'https://www.instagram.com/the.eduno/'
    },
];

const SocialContainer = () => {
    return (
        <>
            {socials?.map(({icon, ...props}, index) => (
                <LinkItem {...props}>
                    {icon}
                </LinkItem>
            ))}
        </>
    );
};

export default SocialContainer;
