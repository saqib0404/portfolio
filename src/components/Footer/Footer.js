import React from 'react';

const Footer = () => {
    return (
        <footer className="footer items-center p-4 bg-neutral text-neutral-content mt-16">
            <div className="items-center grid-flow-col">
                <p className='text-lg'><span className='font-bold'>Saqib Ahmad</span> © 2022 - All right reserved</p>
            </div>
            <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <div class="form-control w-80">
                    <label class="label">
                        <span class="label-text">Enter your email address</span>
                    </label>
                    <div class="relative">
                        <input type="text" placeholder="username@site.com" class="input input-bordered w-full pr-16" />
                        <button class="btn btn-info absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;