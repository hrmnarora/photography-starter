import React from 'react';
import {ImFacebook,ImTwitter,ImPinterest,ImInstagram,ImYoutube} from 'react-icons/im'
const Socials = () => {
  return <div className="hidden xl:flex ml-24">
    <ul className='flex flex-row gap-x-6 text-xl'>
      <li><a href="/" target='_blank'><ImFacebook/></a></li>
      <li><a href="/" target='_blank'><ImTwitter/></a></li>
      <li><a href="/" target='_blank'><ImPinterest/></a></li>
      <li><a href="/" target='_blank'><ImInstagram/></a></li>
      <li><a href="/" target='_blank'><ImYoutube/></a></li>
    </ul>
  </div>
};

export default Socials;
