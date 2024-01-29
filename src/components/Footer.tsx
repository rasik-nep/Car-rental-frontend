import { SOCIALS, FOOTER_CONTACTS } from "../constants";

export default function Footer() {
    return (
        <footer className="flexCenter bg-black-90 pt-5 bg-white text-black">
            <div className="padding-container full-container flex w-full flex-col gap-14">
                <div className="flex flex-col md:flex-row justify-around gap-10">
                    <div className="m-30">
                        <img src="./logo.png" alt="logo" className="h-[9rem] w-[9rem]" />
                    </div>
                    <div className='flex flex-wrap gap-10 sm:justify-between '>
                        <FooterColumn title={SOCIALS.title}>
                            <ul className="regular-14 flex gap-4">
                                {SOCIALS.links.map((link) => (
                                    <a href="https://www.facebook.com/shanvehiclerental" key={link}>
                                        <img src={link} alt="logo" />
                                    </a>
                                ))}
                            </ul>
                        </FooterColumn>
                    </div>
                    <div className='flex flex-wrap gap-10 sm:justify-between'>
                        <FooterColumn title={FOOTER_CONTACTS.title}>
                            {FOOTER_CONTACTS.content.map((contact) => (
                                <div>
                                    <b>{contact.title}: </b>
                                    <span>{contact.label}</span>
                                </div>
                            ))}
                        </FooterColumn>

                    </div>
                </div>
                <div className="border bg-gray-20" />
                <p className="regular-14 w-full text-center text-gray-30">2023 Shan Vehicle Rental | All rights reserved</p>
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
        <div className="flex flex-col gap-5" key={title}>
            <h4 className="bold-18 whitespace-nowrap">{title}</h4>
            {children}
        </div>
    )
}
