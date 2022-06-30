import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
        <div>
            <footer class="footer footer-center p-10 bg-base-200 text-base-content mt-24">
                <div>
                    <p className='text-xl font-semibold'>Copyright &copy; {year} - shima</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;