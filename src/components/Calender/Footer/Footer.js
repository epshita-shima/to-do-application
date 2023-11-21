import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
        <div className=''>
            <footer class="footer footer-center p-8 bg-green-200 text-base-content text-bold mt-24">
                <div>
                    <p className='text-xl font-semibold'>Copyright &copy; {year} - shima</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;