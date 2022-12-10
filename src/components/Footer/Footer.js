import React from 'react';
import { toast } from 'react-hot-toast';

const Footer = () => {
    const subscribe = e => {
        e.preventDefault();
        toast.success('Subscribed')
        e.target.reset();
    }
    return (
        <footer className="footer items-center p-4 bg-neutral text-neutral-content mt-16">
            <div className="items-center grid-flow-col">
                <p className='text-lg'><span className='font-bold'>Saqib Ahmad</span> © 2022 - All right reserved</p>
            </div>
            <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <div className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Enter your email address</span>
                    </label>
                    <form onSubmit={subscribe} className="relative">
                        <input type="email" name='subscrber' placeholder="username@site.com" className="input input-bordered w-full pr-16" required />
                        <button className="btn btn-info absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </form>
                </div>

            </div>
        </footer>
    );
};

export default Footer;