import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import { MdLocationOn, MdEmail } from "react-icons/md";

export default function Footer({ contactDetails }: any) {
    // console.log(contactDetails)
    const FooterContacts = {
        title: 'Reservations Office',
        content: [
            { title: "Location", label: contactDetails.location, logo: MdLocationOn },
            { title: "Phone", label: contactDetails.phone, logo: FaPhoneAlt },
            { title: "Email", label: contactDetails.email, logo: MdEmail },
        ]
    }
    const OfficeHours = {
        title: 'Office Hours',
        content: [
            { title: 'Monday - Friday', label: '8:00am - 5:00pm' },
            { title: 'Saturday', label: '8:00am - 1:00pm' },
        ]
    }
    const SocialsLink = {
        title: 'Our Socials',
        links: [
            contactDetails.facebook ? { label: 'Facebook', href: contactDetails.facebook, logo: FaFacebook } : null,
            contactDetails.instagram ? { label: 'Instagram', href: contactDetails.instagram, logo: FaInstagram } : null,
            contactDetails.whatsapp ? { label: 'WhatsApp', href: `https://wa.me/${contactDetails.whatsapp}?text=Reserve a car`, logo: FaWhatsapp } : null,
        ],
    }
    return (
        <footer className="flexCenter bg-black-90 pt-5 bg-primary-50 text-white">
            <div className="padding-container full-container flex w-full flex-col gap-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-10">
                    <div className='flex flex-wrap gap-10 sm:justify-between'>
                        <FooterColumn title={FooterContacts.title}>
                            {FooterContacts.content.map((contact) => (
                                <span key={contact.title} className="flex items-center">
                                    <contact.logo className="mr-2"></contact.logo>
                                    <p>{contact.label}</p>
                                </span>

                            ))}
                        </FooterColumn>
                    </div>
                    <div className='flex flex-wrap gap-10 sm:justify-between'>
                        <FooterColumn title={OfficeHours.title}>
                            {OfficeHours.content.map((contact) => (
                                <React.Fragment key={contact.title}>
                                    {/* <contact.logo className="mr-2"></contact.logo> */}
                                    <span><p>{contact.title}</p>
                                        <p>{contact.label}</p></span>
                                </React.Fragment>

                            ))}
                        </FooterColumn>
                    </div>
                    <div className='flex flex-wrap gap-10 sm:justify-between '>
                        <FooterColumn title={"Get Social"}>
                            <ul className="regular-14 flex gap-4">
                                {SocialsLink.links.map((link, index) => (
                                    <React.Fragment key={index}>
                                        {link && <div key={link.label}>
                                            <a href={link.href} target="_blank" className="text-4xl hover:text-red-400 ">
                                                <link.logo />
                                            </a>
                                        </div>}
                                    </React.Fragment>
                                ))}
                            </ul>
                            <div className="border-2 rounded-3xl p-3 text-center">
                                <i>Tag us in your photos!</i>
                            </div>
                        </FooterColumn>
                    </div>
                </div>
                <div className="border bg-gray-20" />
                <p className="regular-14 w-full text-center text-gray-30">2024 Shan Vehicle Rental | All rights reserved</p>
            </div>
        </footer>
    )
}

type FooterColumnProps = {
    title: string;
    children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
    return (
        <div className="border-2 flex flex-col gap-5 min-w-[20rem] h-[15rem] p-5" key={title}>
            <h4 className="text-3xl whitespace-nowrap">{title}</h4>
            {children}
        </div>
    )
}
