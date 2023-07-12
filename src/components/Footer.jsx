import React from 'react'
import {
	FaGithub, FaLinkedin,
} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi'
const socialLinks = [
	{
		id: 1,
		icon: <FaGithub />,
		url: 'https://github.com/vbhv10',
        bgColour: '#02040a'
	},
	{
		id: 2,
		icon: <FaLinkedin />,
		url: 'https://www.linkedin.com/in/vbhv/',
        bgColour: '#0b65c2'
	},
	{
		id: 3,
		icon: <HiOutlineMail />,
		url: 'mailto: i.vaibhavmahajan@gmail.com',
        bgColour: '#C3073F'
	}
];

const Footer = () => {
  return (
    <>
    <div name="contact" className="my-20 text-[#1e3751]">
			<div className="max-w-[1000px] mx-auto p-5 flex flex-col justify-center w-full h-full sm:pt-10 border-t-2 border-primary-light dark:border-secondary-dark">
				{/* Footer social links */}
				<div className="font-bold text-[#1e3751] flex flex-col justify-center items-center mb-5 sm:mb-[55px]">
					<p className="text-3xl sm:text-4xl text-[#1e3751] mb-5">
						Contact me
					</p>
					<ul className="flex gap-4 sm:gap-8">
						{socialLinks.map((link) => (
							<a
								href={link.url}
								target="__blank"
								key={link.id}
								className={`text-white contact cursor-pointer rounded-lg shadow-sm p-4 duration-300`}
								style={{backgroundColor: link.bgColour}}
							>
								<i className="text-xl sm:text-2xl md:text-3xl">
									{link.icon}
								</i>
							</a>
						))}
					</ul>
				</div>

			</div>
		</div>
        {/* Copyright */}
        <div className="w-[100%] text-[#1e3751] bg-[#f0f0f0] p-5 ">
        <div className=' items-center text-center'>
                <div>&copy; {new Date().getFullYear()} Copyright</div>
        </div>
    </div>
    </>
  )
}

export default Footer