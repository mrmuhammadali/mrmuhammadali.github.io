// libs
import React from 'react'

const AMAZON_USA = 'https://www.amazon.com/'
const AMAZON_UK = 'https://www.amazon.co.uk/'
const AMAZON_CANADA = 'https://www.amazon.ca/'
const AMAZON_AUSTRALIA = 'https://www.amazon.com.au/'
const AMAZON_GERMANY = 'https://www.amazon.de/'
const TWEET_IT = 'Eliment-Tweet-It/dp/B079BSJSH8/'
const ONEPAD = 'Eliment-OnePad-Unofficial-OneNote-Client/dp/B079G5TGNH/'
const EVERPAD = 'Eliment-EverPad-Unofficial-EverNote-Client/dp/B079KKD6Q1'

export const CATEGORIES = [
  'All Projects',
  'Android',
  'Bots',
  'React Native',
  'Web',
]

export const PROJECTS = [
  {
    category: 'Android',
    title: 'I Need a Partner',
    thumbnail: './images/thumbs/android-01.jpg',
    image: './images/full/android-01.jpg',
    url: '',
    isHidden: false,
    description: (
      <div>
        <ul>
          <li>
            This Application proposes to help its users find nearby people
            sharing similar interests.
          </li>
          <li>
            Features: Chat(Text, Voice and File sharing), Post(File Sharing),
            Groups, Friends, People Nearby, Partnerships based on Interests,
            Reviews, Interests Endorsement, Meeting Scheduler and Reminders.
          </li>
        </ul>
        I developed Android Application using Java:
        <br />
        <ol type="a">
          <li>Twitter Digits is used for Phone no. verfication.</li>
          <li>Firebase is used for messaging and notifications.</li>
          <li>Retrofit2 is used for HTTP requests and responses.</li>
          <li>
            GSON Converter Factory is used to parse HTTP Response Body directly
            onto Models.
          </li>
        </ol>
      </div>
    ),
  },
  {
    category: 'React Native',
    title: 'Circular Carousal',
    thumbnail: './images/thumbs/react-native-01.gif',
    image: './images/full/react-native-01.gif',
    url: '',
    isHidden: false,
    description: (
      <div>
        An Open-source library to create a Circular Carousal in React Native.
        <ul>
          <li>
            <a
              href="https://www.github.com/mrmuhammadali/react-native-circular-carousal"
              target="__blank"
            >
              {' Github '}
            </a>
          </li>
          <li>
            <a
              href="https://www.npmjs.com/package/react-native-circular-carousal"
              target="__blank"
            >
              {' NPM '}
            </a>
          </li>
        </ul>
      </div>
    ),
  },
  {
    category: 'Android',
    title: 'Marketier',
    thumbnail: './images/thumbs/android-02.jpg',
    image: './images/full/android-02.jpg',
    url: '',
    isHidden: false,
    description: (
      <div>
        Problem: Employees had to send the pictures and shop name, location, etc
        through whatsapp. Those pictures and data were then compiled in a
        document file which was really hectic given that you had to compile data
        for hundreds of shops. <br />
        Solution:
        <ul>
          <li>
            This app lets company employees to upload multiple images and other
            shop related data on server.
          </li>
          <li>
            Admin Panel automates the generation of document file and lets admin
            to download that file. Ofcourse User and Data Management is there as
            well.
          </li>
        </ul>
        Libraries Used: Bootstrap, jQuery, PHP Office, Retrofit, Twitter Digits
      </div>
    ),
  },
  {
    category: 'Bots',
    title: 'Assembla/Gitlab',
    thumbnail: './images/thumbs/bot-01.jpg',
    image: './images/full/bot-01.jpg',
    url: '',
    isHidden: false,
    description: (
      <div>
        Problem: People in a workplace often have to tell eachother whether they
        commit a chunk of code, open an issue/ticket or create a merge request.
        <br />
        We had this problem in our team which was literally painful. We were
        using
        <a href="https://www.assembla.com/home" target="__blank">
          {' Assembla '}
        </a>
        for Version Control at first but switched to
        <a href="https://www.gitlab.com/" target="__blank">
          {' Gitlab '}
        </a>
        after sometime.
        <br />
        <br />
        Solution: What I did was, created a bot for Skype and Telegram which
        notifies everyone when anyone do any git operation.
        <br />
        PS: Why Telegram? Because I prefer it on any other platform 😛
        <br />
        <br />
        Assembla:
        <a href="https://join.skype.com/bot/5452dd9e-b3f2-440f-ad4c-3352296a254f">
          {' Skype '}
        </a>
        <a href="https://t.me/AssemblaBot">{' Telegram '}</a>
        <br />
        Gitlab:
        <a href="https://join.skype.com/bot/8864cf5d-3c38-457f-976f-cfb07dd93c7f">
          {' Skype '}
        </a>
        <a href="https://t.me/MrGitLabBot">{' Telegram '}</a>
      </div>
    ),
  },
  {
    category: 'Bots',
    title: 'Tweet It',
    thumbnail: './images/thumbs/bot-02.png',
    image: './images/full/bot-02.png',
    url: '',
    isHidden: false,
    description: (
      <div>
        Amazon's Alexa Skill built to tweet on your Twitter timeline handsfree.
        <br />
        <br />
        {'Skill URLs: '}
        <a href={`${AMAZON_AUSTRALIA}${TWEET_IT}`} target="__blank">
          Australia
        </a>
        {', '}
        <a href={`${AMAZON_CANADA}${TWEET_IT}`} target="__blank">
          Canada
        </a>
        {', '}
        <a href={`${AMAZON_GERMANY}${TWEET_IT}`} target="__blank">
          Germany
        </a>
        {', '}
        <a href={`${AMAZON_UK}${TWEET_IT}`} target="__blank">
          UK
        </a>
        {', '}
        <a href={`${AMAZON_USA}${TWEET_IT}`} target="__blank">
          US
        </a>
      </div>
    ),
  },
  {
    category: 'Web',
    title: 'Magic Circle',
    thumbnail: './images/thumbs/image-01.jpg',
    image: './images/full/image-01.jpg',
    url: '',
    isHidden: false,
    description: (
      <div>
        Created business website for online presence. Users can contact through
        Contact Form. <br />
        Libraries Used: EasingJS, Flex Slider, jCarousel, jQuery, Supersized
      </div>
    ),
  },
  {
    category: 'Web',
    title: 'Silver Consultancy',
    thumbnail: './images/thumbs/image-05.jpg',
    image: './images/full/image-05.jpg',
    url: '',
    isHidden: false,
    description: (
      <div>
        Created a consultancy website for Singapore based insurance consultancy
        company. Users can fill up their forms for any insurance policies and
        their data will be sent through email to the company. Contact form is
        provided for any further queries.
      </div>
    ),
  },
  {
    category: 'Web',
    title: 'Amazon Product Research',
    thumbnail: './images/thumbs/image-06.jpg',
    image: './images/full/image-06.jpg',
    url: '',
    isHidden: false,
    description: (
      <div>
        Consumed Amazon Web Service to fetch products and their related data.
        This website can be used by Sellers to calculate the average sale rank
        and average retail price to further calculate the profit when buying
        that product form whole sale dealer. <br />
        Languages and Libraries: HTML, PHP, Bootstrap, Font Awesome, jQuery
      </div>
    ),
  },
]
