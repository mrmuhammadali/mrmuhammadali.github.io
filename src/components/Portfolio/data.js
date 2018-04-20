// libs
import React from 'react'

export const CATEGORIES = ['All Projects', 'Android', 'Web']

export const PROJECTS = [
  {
    isHidden: false,
    category: 'Android',
    title: 'I Need a Partner',
    thumbnail: './images/thumbs/android-01.jpg',
    image: './images/full/android-01.jpg',
    url: '',
    description: ''
  },
  {
    category: 'Android',
    title: 'Marketier',
    thumbnail: './images/thumbs/android-02.jpg',
    image: './images/full/android-0.jpg',
    url: '',
    description: '',
    isHidden: false
  },
  {
    category: 'Web',
    title: 'Magic Circle',
    thumbnail: './images/thumbs/image-01.jpg',
    image: './images/full/image-01.jpg',
    url: '',
    description: '',
    isHidden: false
  },
  {
    category: 'Web',
    title: 'Camden Construction',
    thumbnail: './images/thumbs/image-02.jpg',
    image: './images/full/image-02.jpg',
    url: '',
    description: '',
    isHidden: false
  },
  {
    category: 'Web',
    title: 'RS Solution LLC',
    thumbnail: './images/thumbs/image-03.jpg',
    image: './images/full/image-03.jpg',
    url: '',
    description: '',
    isHidden: false
  },
  {
    category: 'Web',
    title: 'Nibble In',
    thumbnail: './images/thumbs/image-04.jpg',
    image: './images/full/image-04.jpg',
    url: '',
    description: '',
    isHidden: false
  },
  {
    category: 'Web',
    title: 'Silver Consultancy',
    thumbnail: './images/thumbs/image-05.jpg',
    image: './images/full/image-05.jpg',
    url: '',
    description: '',
    isHidden: false
  },
  {
    category: 'Web',
    title: 'Amazon Product Research',
    thumbnail: './images/thumbs/image-06.jpg',
    image: './images/full/image-06.jpg',
    url: '',
    description: '',
    isHidden: false
  }
]

export const DESCRIPTIONS = [
  <div>
    <ul>
      <li>
        This Application proposes to help its users find nearby people sharing
        similar interests.
      </li>
      <li>
        Features: Chat(Text, Voice and File sharing), Post(File Sharing),
        Groups, Friends, People Nearby, Partnerships based on Interests,
        Reviews, Interests Endorsement, Meeting Scheduler and Reminders.
      </li>
    </ul>
    I developed Android Application using Java:<br />
    <ol type="a">
      <li>Twitter Digits is used for Phone no. verfication.</li>
      <li>Firebase is used for messaging and notifications.</li>
      <li>Retrofit2 is used for HTTP requests and responses.</li>
      <li>
        GSON Converter Factory is used to parse HTTP Response Body directly onto
        Models.
      </li>
    </ol>
  </div>,
  <div>
    Problem: Employees had to send the pictures and shop name, location, etc
    through whatsapp. Those pictures and data were then compiled in a document
    file which was really hectic given that you had to compile data for hundreds
    of shops. <br />
    Solution:
    <ul>
      <li>
        This app lets company employees to upload multiple images and other shop
        related data on server.
      </li>
      <li>
        Admin Panel automates the generation of document file and lets admin to
        download that file. Ofcourse User and Data Management is there as well.
      </li>
    </ul>
    Libraries Used: Bootstrap, jQuery, PHP Office, Retrofit, Twitter Digits
  </div>,
  <div>
    Created business website for online presence. Users can contact through
    Contact Form. <br />
    Libraries Used: EasingJS, Flex Slider, jCarousel, jQuery, Supersized
  </div>,
  <div>
    Created business website for online presence. Customers can call on the
    provided phone number. <br />
    Libraries Used: AnimateJS, Bootstrap, Font Awesome, jQuery
  </div>,
  <div>
    Created business website for online presence. Customers can call on the
    provided phone number. <br />
    Libraries Used: AnimateJS, Bootstrap, Font Awesome, jQuery
  </div>,
  <div />,
  <div>
    Created a consultancy website for Singapore based insurance consultancy
    company. Users can fill up their forms for any insurance policies and their
    data will be sent through email to the company. Contact form is provided for
    any further queries.
  </div>,
  <div>
    Consumed Amazon Web Service to fetch products and their related data. This
    website can be used by Sellers to calculate the average sale rank and
    average retail price to further calculate the profit when buying that
    product form whole sale dealer. <br />
    Languages and Libraries: HTML, PHP, Bootstrap, Font Awesome, jQuery
  </div>
]
